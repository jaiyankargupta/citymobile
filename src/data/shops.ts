export interface Shop {
    id: string;
    name: string;
    location: string;
    address: string;
    city: string;
    phone: string;
    callNow: string;
    whatsapp: string;
    hours: string;
    rating: number;
    reviews: number;
    yearsInBusiness: number;
    coordinates: {
        lat: number;
        lng: number;
    };
    features: string[];
    services: string[];
    image: string;
    justdialUrl: string;
}

export const shops: Shop[] = [
    {
        id: 'rangmahal',
        name: 'City Mobile Selection - Near Rangmahal',
        location: 'Near Rangmahal',
        address: 'Near Rangmahal, Sonar Patti Road, Par Nawada',
        city: 'Nawada - 805110',
        phone: '+91 7004100548',
        callNow: '8340334992',
        whatsapp: '8340334992',
        hours: '9:00 AM - 9:30 PM',
        rating: 4.7,
        reviews: 245,
        yearsInBusiness: 5,
        coordinates: {
            lat: 24.8864,
            lng: 85.5412,
        },
        features: [
            'Mobile Phone Sales',
            'Mobile Repair Services',
            'Accessories Shop',
            'Screen Replacement',
            'Battery Replacement',
            'Software Services',
            'Mobile Unlocking',
            'Data Recovery'
        ],
        services: [
            'iPhone Repair',
            'Samsung Repair',
            'Android Phone Repair',
            'Mobile Accessories',
            'Screen Protectors',
            'Mobile Cases',
            'Chargers & Cables',
            'Mobile Insurance'
        ],
        image: '/rangmahal.png',
        justdialUrl: 'https://www.justdial.com/Nawada/City-Mobile-Selection-Near-Rangmahal/9999P6124-6124-180324123456'
    },
    {
        id: 'girls-school',
        name: 'City Mobile Selection - Near Girls School',
        location: 'Near Girls School',
        address: 'THANA ROAD, Near Girl School, Opposite Yamuna Path',
        city: 'Nawada Road-805110',
        phone: '+91 7004100547',
        callNow: '645086632',
        whatsapp: '744699324',
        hours: '9:00 AM - 9:30 PM',
        rating: 4.6,
        reviews: 189,
        yearsInBusiness: 10,
        coordinates: {
            lat: 24.8864,
            lng: 85.5412,
        },
        features: [
            'Mobile Phone Sales',
            'Mobile Repair Services',
            'Accessories Shop',
            'Screen Replacement',
            'Battery Replacement',
            'Software Services',
            'Mobile Unlocking',
            'Data Recovery',
            'Mobile Insurance'
        ],
        services: [
            'iPhone Repair',
            'Samsung Repair',
            'Android Phone Repair',
            'Mobile Accessories',
            'Screen Protectors',
            'Mobile Cases',
            'Chargers & Cables',
            'Mobile Insurance',
            'Mobile Unlocking'
        ],
        image: '/girlschool.png',
        justdialUrl: 'https://www.justdial.com/Nawada/City-Mobile-Selection-Near-Girls-School/9999P6124-6124-180324123457'
    },
    {
        id: 'vijay-cinema',
        name: 'City Mobile Selection - Near Vijay Cinema',
        location: 'Near Vijay Cinema',
        address: 'Ground Floor, Vijay-Cinema, Sonar-Patti Road, Par',
        city: 'Nawada-805110',
        phone: '+91 9155582054',
        callNow: '4958473662',
        whatsapp: '573652584',
        hours: '9:00 AM - 9:30 PM',
        rating: 4.8,
        reviews: 156,
        yearsInBusiness: 15,
        coordinates: {
            lat: 24.8864,
            lng: 85.5412,
        },
        features: [
            'Mobile Phone Sales',
            'Mobile Repair Services',
            'Accessories Shop',
            'Screen Replacement',
            'Battery Replacement',
            'Software Services',
            'Mobile Unlocking',
            'Data Recovery',
            'Mobile Insurance',
            'Mobile Financing'
        ],
        services: [
            'iPhone Repair',
            'Samsung Repair',
            'Android Phone Repair',
            'Mobile Accessories',
            'Screen Protectors',
            'Mobile Cases',
            'Chargers & Cables',
            'Mobile Insurance',
            'Mobile Unlocking',
            'Mobile Financing'
        ],
        image: '/vijaycinema.png',
        justdialUrl: 'https://www.justdial.com/Nawada/City-Mobile-Selection-Near-Vijay-Cinema/9999P6124-6124-180324123458'
    }
];
