# City Mobile Selection Website - All Endpoints

## Main Routes

### 1. Homepage
- **URL**: `/`
- **Component**: `HomePage`
- **Description**: Main landing page with hero section, trust badges, customer reviews, and CTA buttons

### 2. Shops Listing Page
- **URL**: `/shops`
- **Component**: `ShopsPage`
- **Description**: Displays all three shop locations with search, filter, and sorting functionality

### 3. About Us Page
- **URL**: `/about`
- **Component**: `AboutPage`
- **Description**: Company information, story, values, and shop locations preview

### 4. Products Page (Legacy)
- **URL**: `/shop`
- **Component**: `ShopPage`
- **Description**: Products listing with category filtering (legacy page)

### 5. Dynamic Shop Detail Page
- **URL**: `/shop/:shopId`
- **Component**: `ShopDetailPage`
- **Description**: Dynamic shop detail page based on shop ID parameter

## Individual Shop Pages

### 6. Rangmahal Shop Page
- **URL**: `/shop-rangmahal`
- **Component**: `ShopRangmahalPage`
- **Description**: Dedicated page for Rangmahal location shop

### 7. Girls School Shop Page
- **URL**: `/shop-girls-school`
- **Component**: `ShopGirlsSchoolPage`
- **Description**: Dedicated page for Girls School location shop

### 8. Vijay Cinema Shop Page
- **URL**: `/shop-vijay-cinema`
- **Component**: `ShopVijayCinemaPage`
- **Description**: Dedicated page for Vijay Cinema location shop

## External Links & APIs

### 9. Website Links
- **Main Website**: https://citymobileselection.vercel.app
- **Description**: External website for complete shop information

### 10. JustDial Links
- **Rangmahal**: `https://jsdl.in/DT-993ES14NUG2`
- **Girls School**: `https://jsdl.in/DT-99EETTTVFFD`
- **Vijay Cinema**: `https://jsdl.in/DT-993R7C7CF9L`
- **Description**: JustDial listings for each shop location

### 11. Google Maps Links
- **Rangmahal**: `https://maps.google.com/?q=City+Mobile+Selection+Near+Rangmahal+Nawada+Bihar`
- **Girls School**: `https://maps.app.goo.gl/hun9JeSgeX36dEQ19`
- **Vijay Cinema**: `https://maps.app.goo.gl/bht2GJKEXwocP9kB7`
- **Description**: Direct links to Google Maps for directions

### 12. Contact Information
- **Rangmahal**: `+91 7004100548`
- **Girls School**: `+91 7004100547`
- **Vijay Cinema**: `+91 9155582054`
- **Description**: Phone numbers for each shop location

### 13. WhatsApp Links
- **Rangmahal**: `https://wa.me/917004100548`
- **Girls School**: `https://wa.me/917004100547`
- **Vijay Cinema**: `https://wa.me/919155582054`
- **Description**: Direct WhatsApp chat links for each shop

## Navigation Structure

```
Home (/) 
├── Shops (/shops)
│   ├── Rangmahal (/shop-rangmahal)
│   ├── Girls School (/shop-girls-school)
│   └── Vijay Cinema (/shop-vijay-cinema)
├── About (/about)
└── Products (/shop) [Legacy]
```

## Component Hierarchy

```
App.tsx
├── Navigation.tsx
├── Routes
│   ├── HomePage.tsx
│   ├── ShopsPage.tsx
│   ├── AboutPage.tsx
│   ├── ShopPage.tsx [Legacy]
│   ├── ShopDetailPage.tsx
│   ├── ShopRangmahalPage.tsx
│   ├── ShopGirlsSchoolPage.tsx
│   └── ShopVijayCinemaPage.tsx
├── Footer.tsx
└── ScrollToTop.tsx
```

## Features by Page

### Homepage (/)
- Hero section with branding
- Trust badges and statistics
- Customer testimonials
- Call-to-action buttons
- Quick shop access

### Shops Page (/shops)
- Search functionality
- Filter by location
- Sort by rating, years in business
- Shop cards with key information
- Enhanced statistics section

### Individual Shop Pages
- Hero section with location-specific branding
- Important links (Website, JustDial, Google Maps)
- Shop information (Address, Contact, Hours, Rating)
- Quick action buttons (Call, WhatsApp)
- Services overview
- Back to shops navigation

### About Page (/about)
- Company story and mission
- Core values
- Shop locations preview
- Statistics and achievements
- Call-to-action section

## Responsive Design
All pages are fully responsive with:
- Mobile-first approach
- Responsive typography and spacing
- Touch-friendly buttons and interactions
- Adaptive layouts for different screen sizes
- Optimized navigation for mobile devices

## Performance Features
- Scroll to top functionality
- Smooth transitions and animations
- Lazy loading for images
- Optimized CSS with Tailwind
- Minimal JavaScript bundle

## Accessibility Features
- Semantic HTML structure
- ARIA labels and descriptions
- Keyboard navigation support
- High contrast color schemes
- Screen reader friendly content

## Website Information
- **Main URL**: https://citymobileselection.vercel.app
- **Sitemap**: https://citymobileselection.vercel.app/sitemap.xml
- **Robots.txt**: https://citymobileselection.vercel.app/robots.txt
- **Business**: City Mobile Selection
- **Location**: Nawada, Bihar, India
- **Services**: Smartphones, Mobile Repair, Accessories
