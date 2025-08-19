export interface Shop {
  id: string;
  name: string;
  location: string;
  address: string;
  phone: string;
  whatsapp: string;
  businessHours: string;
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
  mapUrl: string;
}

export const shops: Shop[] = [
  {
    id: 'rangmahal',
    name: 'City Mobile Selection',
    location: 'Near Rangmahal',
    address: 'Near Rangmahal, Sonar Patti Road, Par Nawada, Nawada - 805110',
    phone: '+91 7004100548',
    whatsapp: '+91 7004100548',
    businessHours: '9:00 AM - 9:30 PM',
    rating: 4.7,
    reviews: 245,
    yearsInBusiness: 5,
    coordinates: {
      lat: 24.8869,
      lng: 85.5431
    },
    features: ['Latest Smartphones', 'Mobile Repair', 'Accessories', 'Easy Financing'],
    services: ['iPhone', 'Samsung', 'OnePlus', 'Xiaomi', 'Screen Replacement', 'Battery Service'],
    image: '/rangmahal.png',
    justdialUrl: 'https://jsdl.in/DT-993ES14NUG2',
    mapUrl: 'https://maps.google.com/?q=City+Mobile+Selection+Near+Rangmahal+Nawada+Bihar'
  },
  {
    id: 'girls-school',
    name: 'City Mobile Selection',
    location: 'Near Girls School',
    address: 'Thana Road, Near Girl School, Opposite Yamuna Path, Nawada Road-805110',
    phone: '+91 7004100547',
    whatsapp: '+91 7004100547',
    businessHours: '9:00 AM - 9:30 PM',
    rating: 4.6,
    reviews: 189,
    yearsInBusiness: 10,
    coordinates: {
      lat: 24.8869,
      lng: 85.5431
    },
    features: ['Latest Smartphones', 'Mobile Repair', 'Accessories', 'Easy Financing'],
    services: ['iPhone', 'Samsung', 'OnePlus', 'Xiaomi', 'Screen Replacement', 'Battery Service'],
    image: '/girlschool.png',
    justdialUrl: 'https://jsdl.in/DT-99EETTTVFFD',
    mapUrl: 'https://maps.app.goo.gl/hun9JeSgeX36dEQ19'
  },
  {
    id: 'vijay-cinema',
    name: 'City Mobile Selection',
    location: 'Near Vijay Cinema',
    address: 'Ground Floor, Vijay-Cinema, Sonar-Patti Road, Par-805110',
    phone: '+91 9155582054',
    whatsapp: '+91 9155582054',
    businessHours: '9:00 AM - 9:30 PM',
    rating: 4.8,
    reviews: 156,
    yearsInBusiness: 15,
    coordinates: {
      lat: 24.8869,
      lng: 85.5431
    },
    features: ['Latest Smartphones', 'Mobile Repair', 'Accessories', 'Easy Financing'],
    services: ['iPhone', 'Samsung', 'OnePlus', 'Xiaomi', 'Screen Replacement', 'Battery Service'],
    image: '/vijaycinema.png',
    justdialUrl: 'https://jsdl.in/DT-993R7C7CF9L',
    mapUrl: 'https://maps.app.goo.gl/bht2GJKEXwocP9kB7'
  }
];
