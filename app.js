document.addEventListener('DOMContentLoaded', function() {
    const symptomsInput = document.getElementById('symptoms');
    const locationInput = document.getElementById('location-input');
    const analyzeBtn = document.getElementById('analyze-btn');
    const recommendationContent = document.getElementById('recommendation-content');
    const diseaseNameElement = document.getElementById('disease-name');
    const locationElement = document.getElementById('location');
    const doctorNameElement = document.getElementById('doctor-name');
    const phoneNumberElement = document.getElementById('phone-number');
    const addressElement = document.getElementById('address');
    const availableDiseasesElement = document.getElementById('available-diseases');
    
    // Populate the available diseases list
    populateAvailableDiseases();

    analyzeBtn.addEventListener('click', function() {
        const diseaseName = symptomsInput.value.trim();
        const userLocation = locationInput.value.trim();
        
        if (!diseaseName) {
            alert('Please enter a disease name');
            return;
        }

        // Find matching condition based on disease name
        const matchedCondition = findMatchingCondition(diseaseName);
        
        if (matchedCondition) {
            // Display the results based on entered location if available
            displayResults(matchedCondition, userLocation);
        } else {
            alert('Disease not found. Please try one of these: Respiratory Infection, Migraine, Arthritis, Cardiovascular Issue, Digestive Disorder');
        }
    });

    function findMatchingCondition(diseaseName) {
        // Find condition by exact or partial name match
        const lowerCaseDiseaseName = diseaseName.toLowerCase();
        
        // Try to find an exact match first
        const exactMatch = healthcareData.find(condition => 
            condition.condition.toLowerCase() === lowerCaseDiseaseName
        );
        
        if (exactMatch) {
            return exactMatch;
        }
        
        // If no exact match, try partial match
        const partialMatch = healthcareData.find(condition => 
            condition.condition.toLowerCase().includes(lowerCaseDiseaseName) ||
            lowerCaseDiseaseName.includes(condition.condition.toLowerCase())
        );
        
        return partialMatch || null;
    }

    // Function to populate the available diseases list
    function populateAvailableDiseases() {
        // Clear existing list
        availableDiseasesElement.innerHTML = '';
        
        // Get unique disease names from the data
        const diseases = healthcareData.map(item => item.condition);
        
        // Create list items for each disease
        diseases.forEach(disease => {
            const listItem = document.createElement('li');
            listItem.textContent = disease;
            listItem.classList.add('disease-item');
            
            // Add click event to fill the input field
            listItem.addEventListener('click', function() {
                symptomsInput.value = disease;
            });
            
            availableDiseasesElement.appendChild(listItem);
        });
    }
    
    function displayResults(condition, userLocation) {
        // Set the disease name
        diseaseNameElement.textContent = condition.condition;
        
        let location;
        let doctor;
        
        if (userLocation) {
            // Find the entered location in the condition's locations (case insensitive)
            location = condition.locations.find(loc => 
                loc.name.toLowerCase() === userLocation.toLowerCase()
            );
            
            // If the entered location doesn't have doctors for this condition, use a random location
            if (!location) {
                const randomLocationIndex = Math.floor(Math.random() * condition.locations.length);
                location = condition.locations[randomLocationIndex];
                alert(`No doctors found for "${userLocation}" for this condition. Showing doctors from ${location.name} instead.`);
            }
        } else {
            // If no location entered, use a random location
            const randomLocationIndex = Math.floor(Math.random() * condition.locations.length);
            location = condition.locations[randomLocationIndex];
        }
        
        // Get a random doctor from the location
        const randomDoctorIndex = Math.floor(Math.random() * location.doctors.length);
        doctor = location.doctors[randomDoctorIndex];
        
        // Update the UI with the results
        locationElement.textContent = location.name;
        doctorNameElement.textContent = doctor.name + ' (' + doctor.specialty + ')';
        phoneNumberElement.textContent = doctor.phone;
        addressElement.textContent = doctor.address;
        
        // Show the recommendation content
        recommendationContent.classList.remove('hidden');
    }
});