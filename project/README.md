# CondosHUB - Philippine Real Estate Listings Platform

A modern, responsive real estate listings platform built with React, featuring property browsing, interactive maps, and a sleek user interface. Perfect for real estate agencies, property developers, or anyone looking to showcase properties online.

## 🌟 Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive Property Listings**: Grid and list view with detailed property cards
- **Featured Property Carousel**: Highlight premium properties with auto-rotating carousel
- **Interactive Maps**: Google Maps integration showing property locations
- **Dark/Light Theme**: Toggle between themes for better user experience
- **Property Details Pages**: Dedicated pages for each property with comprehensive information
- **Modern UI/UX**: Clean, professional design using Tailwind CSS
- **SEO Optimized**: Built with best practices for search engine optimization
- **Analytics Ready**: Google Analytics 4 integration included

## 🚀 Live Demo

Visit the live demo: [https://condoshub.netlify.app](https://condoshub.netlify.app)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 16.0 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/devlance074/condoshub.git
   cd condoshub
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application.

## ⚙️ Configuration

### Google Maps Integration

To enable the interactive maps feature:

1. Get a Google Maps API key from the [Google Cloud Console](https://console.cloud.google.com/)
2. Enable the Maps JavaScript API
3. Replace `YOUR_GOOGLE_MAPS_API_KEY` in `src/components/Map.jsx` with your actual API key:

```javascript
const loader = new Loader({
  apiKey: 'YOUR_ACTUAL_API_KEY_HERE',
  version: 'weekly'
});
```

### Google Analytics

To enable analytics tracking:

1. Get a Google Analytics 4 Measurement ID
2. Replace `G-XXXXXXXXXX` in `src/App.jsx` with your actual Measurement ID:

```javascript
ReactGA.initialize('G-YOUR-MEASUREMENT-ID');
```

## 📁 Project Structure

```
condoshub/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── FeaturedCarousel.jsx    # Hero carousel component
│   │   ├── Footer.jsx              # Site footer
│   │   ├── Map.jsx                 # Google Maps integration
│   │   ├── Navbar.jsx              # Navigation bar
│   │   ├── PropertyCard.jsx        # Individual property card
│   │   ├── PropertyList.jsx        # Property grid/list container
│   │   └── ThemeToggle.jsx         # Dark/light theme switcher
│   ├── data/
│   │   └── properties.js           # Sample property data
│   ├── pages/
│   │   └── PropertyDetails.jsx     # Individual property page
│   ├── types/
│   │   └── property.js             # TypeScript-style JSDoc definitions
│   ├── App.jsx                     # Main application component
│   ├── index.css                   # Global styles and Tailwind imports
│   └── main.jsx                    # Application entry point
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── jsconfig.json
└── vite.config.js
```

## 🎨 Customization

### Adding New Properties

Edit `src/data/properties.js` to add or modify property listings:

```javascript
{
  id: 9,
  type: 'Condominium',
  title: 'Your Property Title',
  price: '$200,000',
  beds: 2,
  baths: 2,
  size: '85 sqm',
  location: 'Your Location',
  image: 'https://your-image-url.com/image.jpg',
  coordinates: { lat: 14.5995, lng: 120.9842 }
}
```

### Styling and Theming

The project uses Tailwind CSS for styling. Key customization points:

- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Typography**: Update font families and sizes in the Tailwind configuration
- **Components**: Individual component styles can be found in their respective files
- **Dark Mode**: Toggle classes are already implemented throughout the components

### Branding

Update the following files to customize branding:

- **Logo/Brand Name**: Change "CondosHUB" in `src/components/Navbar.jsx`
- **Site Title**: Update the title in `index.html`
- **Footer**: Modify attribution in `src/components/Footer.jsx`

## 🚀 Deployment

### Netlify (Recommended)

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to Netlify via:
   - Drag and drop to [Netlify Drop](https://app.netlify.com/drop)
   - Connect your Git repository for automatic deployments
   - Use Netlify CLI: `netlify deploy --prod --dir=dist`

### Other Platforms

The built application in the `dist` folder can be deployed to:
- **Vercel**: `vercel --prod`
- **GitHub Pages**: Upload the `dist` folder contents
- **Firebase Hosting**: `firebase deploy`
- **AWS S3**: Upload to S3 bucket with static website hosting

## 🧪 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🛡️ Environment Variables

Create a `.env` file in the root directory for sensitive configuration:

```env
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
VITE_GA_MEASUREMENT_ID=your_google_analytics_id
```

Then update your components to use these variables:

```javascript
const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](#license-details) section below for details.

### License Details

```
MIT License

Copyright (c) 2025 CondosHUB

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 🙏 Acknowledgments

- **Images**: Property images sourced from [Unsplash](https://unsplash.com)
- **Icons**: [Heroicons](https://heroicons.com) for beautiful SVG icons
- **Maps**: [Google Maps Platform](https://developers.google.com/maps) for location services
- **UI Framework**: [Tailwind CSS](https://tailwindcss.com) for utility-first styling
- **Build Tool**: [Vite](https://vitejs.dev) for fast development and building

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/devlance074/condoshub/issues) page
2. Create a new issue with detailed information
3. Join our community discussions

## 🔄 Changelog

### Version 1.0.0 (Current)
- Initial release
- Property listings with grid/list view
- Interactive Google Maps integration
- Featured property carousel
- Dark/light theme support
- Responsive design
- Property detail pages
- Google Analytics integration

---

*Happy coding! 🚀*

*Made with ❤ by DevLance for the developer community*


*This template is perfect for real estate agencies, property developers, or anyone looking to create a professional property listing website. Feel free to customize it according to your needs!*