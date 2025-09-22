// Healthcare data with conditions, locations, doctors, and contact information from India
const healthcareData = [
    {
        symptoms: ["fever", "cough", "shortness of breath", "fatigue", "body aches"],
        condition: "Respiratory Infection",
        locations: [
            {
                name: "Mumbai",
                doctors: [
                    {
                        name: "Dr. Rajesh Sharma",
                        specialty: "Pulmonology",
                        phone: "022-2345-6789",
                        address: "123 Healthcare Tower, Andheri East, Mumbai 400069"
                    },
                    {
                        name: "Dr. Priya Patel",
                        specialty: "Internal Medicine",
                        phone: "022-8765-4321",
                        address: "456 Wellness Center, Bandra West, Mumbai 400050"
                    }
                ]
            },
            {
                name: "Delhi",
                doctors: [
                    {
                        name: "Dr. Vikram Singh",
                        specialty: "Pulmonology",
                        phone: "011-4567-8901",
                        address: "789 Medical Complex, Connaught Place, New Delhi 110001"
                    }
                ]
            },
            {
                name: "Chandigarh",
                doctors: [
                    {
                        name: "Dr. Manish Verma",
                        specialty: "Pulmonology",
                        phone: "0172-6543-2109",
                        address: "234 Respiratory Care, Sector 17, Chandigarh 160017"
                    }
                ]
            },
            {
                name: "Jaipur",
                doctors: [
                    {
                        name: "Dr. Sunita Sharma",
                        specialty: "Pulmonology",
                        phone: "0141-8765-4321",
                        address: "567 Lung Care Center, C-Scheme, Jaipur 302001"
                    }
                ]
            },
            {
                name: "Bhopal",
                doctors: [
                    {
                        name: "Dr. Rahul Gupta",
                        specialty: "Respiratory Medicine",
                        phone: "0755-9876-5432",
                        address: "890 Chest Clinic, MP Nagar, Bhopal 462011"
                    }
                ]
            }
        ]
    },
    {
        symptoms: ["headache", "nausea", "sensitivity to light", "dizziness"],
        condition: "Migraine",
        locations: [
            {
                name: "Bangalore",
                doctors: [
                    {
                        name: "Dr. Ananya Krishnan",
                        specialty: "Neurology",
                        phone: "080-2345-6789",
                        address: "321 Neuro Care Center, Indiranagar, Bangalore 560038"
                    }
                ]
            },
            {
                name: "Chennai",
                doctors: [
                    {
                        name: "Dr. Suresh Kumar",
                        specialty: "Neurology",
                        phone: "044-8765-4321",
                        address: "654 Brain Health Institute, T. Nagar, Chennai 600017"
                    }
                ]
            },
            {
                name: "Kochi",
                doctors: [
                    {
                        name: "Dr. Arun Menon",
                        specialty: "Neurology",
                        phone: "0484-2345-6789",
                        address: "123 Headache Clinic, MG Road, Kochi 682011"
                    }
                ]
            },
            {
                name: "Guwahati",
                doctors: [
                    {
                        name: "Dr. Priya Das",
                        specialty: "Neurology",
                        phone: "0361-8765-4321",
                        address: "456 Neuro Specialists, GS Road, Guwahati 781005"
                    }
                ]
            },
            {
                name: "Indore",
                doctors: [
                    {
                        name: "Dr. Vivek Joshi",
                        specialty: "Neurology",
                        phone: "0731-2345-6789",
                        address: "789 Brain Care Center, Vijay Nagar, Indore 452010"
                    }
                ]
            }
        ]
    },
    {
        symptoms: ["joint pain", "stiffness", "swelling", "decreased range of motion"],
        condition: "Arthritis",
        locations: [
            {
                name: "Hyderabad",
                doctors: [
                    {
                        name: "Dr. Ravi Reddy",
                        specialty: "Rheumatology",
                        phone: "040-2468-1357",
                        address: "246 Joint Care Center, Banjara Hills, Hyderabad 500034"
                    }
                ]
            },
            {
                name: "Kolkata",
                doctors: [
                    {
                        name: "Dr. Anjali Banerjee",
                        specialty: "Orthopedics",
                        phone: "033-1357-2468",
                        address: "135 Bone & Joint Clinic, Park Street, Kolkata 700016"
                    }
                ]
            },
            {
                name: "Nagpur",
                doctors: [
                    {
                        name: "Dr. Sanjay Deshmukh",
                        specialty: "Rheumatology",
                        phone: "0712-3456-7890",
                        address: "567 Arthritis Care, Dharampeth, Nagpur 440010"
                    }
                ]
            },
            {
                name: "Surat",
                doctors: [
                    {
                        name: "Dr. Meera Shah",
                        specialty: "Orthopedics",
                        phone: "0261-7890-1234",
                        address: "890 Joint Relief Center, Adajan, Surat 395009"
                    }
                ]
            }
        ]
    },
    {
        symptoms: ["chest pain", "shortness of breath", "dizziness", "rapid heartbeat"],
        condition: "Cardiovascular Issue",
        locations: [
            {
                name: "Houston",
                doctors: [
                    {
                        name: "Dr. Arjun Mehta",
                        specialty: "Cardiology",
                        phone: "0141-9753-8642",
                        address: "975 Heart Care Center, C-Scheme, Jaipur 302001"
                    }
                ]
            },
            {
                name: "Pune",
                doctors: [
                    {
                        name: "Dr. Neha Desai",
                        specialty: "Cardiology",
                        phone: "020-8642-9753",
                        address: "864 Cardiovascular Institute, Koregaon Park, Pune 411001"
                    }
                ]
            }
        ]
    },
    {
        symptoms: ["abdominal pain", "bloating", "gas", "diarrhea", "constipation"],
        condition: "Digestive Disorder",
        locations: [
            {
                name: "Ahmedabad",
                doctors: [
                    {
                        name: "Dr. Deepak Joshi",
                        specialty: "Gastroenterology",
                        phone: "079-3698-5241",
                        address: "369 Digestive Health Center, Navrangpura, Ahmedabad 380009"
                    }
                ]
            },
            {
                name: "Lucknow",
                doctors: [
                    {
                        name: "Dr. Meera Agarwal",
                        specialty: "Gastroenterology",
                        phone: "0522-7412-3698",
                        address: "741 GI Specialists, Hazratganj, Lucknow 226001"
                    }
                ]
            }
        ]
    }
];