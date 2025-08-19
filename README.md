# LinkTree Website

A modern, responsive React website with three main pages featuring shop links, Google Maps integration, and location information.

## Features

### 🏠 Home Page
- Modern hero section with call-to-action buttons
- Feature cards linking to shop and location pages
- Statistics section showcasing business metrics
- Responsive design with smooth animations

### 🛍️ Shop Page
- Product catalog with categories (Electronics, Clothing, Home & Garden, Books)
- Product cards with ratings, prices, and external shop links
- Featured shops section with direct links to major retailers
- Filter functionality by product category
- Links to Amazon, Best Buy, Nike, Target, Barnes & Noble, and Newegg

### 📍 Location Page
- Interactive Google Maps integration
- Store information with address, phone, and email
- Store hours for all days of the week
- Transportation information (subway, bus, car)
- Direct links to Google Maps and directions
- Why visit us section highlighting store benefits

## Technologies Used

- **React 18** with TypeScript
- **React Router** for navigation
- **Tailwind CSS** for styling
- **Heroicons** for icons
- **Google Maps API** for location services

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd linktree-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/
│   └── Navigation.tsx          # Main navigation component
├── pages/
│   ├── HomePage.tsx           # Landing page
│   ├── ShopPage.tsx           # Product catalog page
│   └── LocationPage.tsx       # Store location page
├── App.tsx                    # Main app component with routing
├── index.tsx                  # App entry point
└── index.css                  # Global styles with Tailwind
```

## Customization

### Adding New Products
Edit the `products` array in `src/pages/ShopPage.tsx` to add new products with:
- Product name, category, price, rating
- Product image URL
- Shop URL and shop name

### Updating Store Information
Modify the `storeInfo` object in `src/pages/LocationPage.tsx` to update:
- Store address and contact information
- Store hours
- Map coordinates

### Styling
The project uses Tailwind CSS for styling. You can customize:
- Colors in `tailwind.config.js`
- Global styles in `src/index.css`
- Component-specific styles using Tailwind classes

## Deployment

### Build for Production
```bash
npm run build
```

This creates a `build` folder with optimized production files.

### Deploy to Netlify/Vercel
1. Push your code to GitHub
2. Connect your repository to Netlify or Vercel
3. Set build command to `npm run build`
4. Set publish directory to `build`

## Google Maps Integration

The location page includes Google Maps integration. To use your own API key:

1. Get a Google Maps API key from the [Google Cloud Console](https://console.cloud.google.com/)
2. Replace the API key in the iframe src URL in `LocationPage.tsx`
3. Enable the Maps Embed API in your Google Cloud project

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For support or questions, please open an issue in the repository.
