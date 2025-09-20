# Weather App

A modern, responsive weather application built with Next.js, TypeScript, and Tailwind CSS. Get real-time weather information for any city or country worldwide with support for current conditions and next-day forecasts.

## Features

- 🌍 **Global Weather Search** - Search weather information for cities and countries worldwide
- 🌡️ **Current Weather** - Real-time weather conditions including temperature, humidity, wind speed, and more
- 📅 **Tomorrow's Forecast** - Detailed weather predictions for the next day
- 🎨 **Theme Switcher** - Support for dark, light, and system themes
- 📱 **Responsive Design** - Optimized for both mobile and desktop devices
- ⚡ **Fast Performance** - Built with Next.js for optimal loading speeds
- 🔍 **Smart Search** - Intelligent city and country search functionality

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **Weather API** - Real-time weather data

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Weather API key (from WeatherAPI.com or similar service)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd weather-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory and add your weather API key:
```env
WEATHER_API_KEY=your_api_key_here
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## API Configuration

This app is designed to work with weather APIs like WeatherAPI.com. To get your API key:

1. Visit [WeatherAPI.com](https://www.weatherapi.com/)
2. Sign up for a free account
3. Get your API key from the dashboard
4. Add it to your `.env.local` file as `WEATHER_API_KEY`

## Usage

1. **Search for Weather**: Enter any city name or country in the search bar
2. **View Current Conditions**: See real-time weather data including temperature, humidity, wind speed, and weather description
3. **Check Tomorrow's Forecast**: View detailed predictions for the next day
4. **Switch Themes**: Use the theme switcher in the header to toggle between dark, light, and system themes
5. **Responsive Experience**: Use the app seamlessly on any device

## Project Structure

```
weather-app/
├── app/
│   ├── api/weather/route.ts    # Weather API endpoint
│   ├── globals.css             # Global styles and theme variables
│   ├── layout.tsx              # Root layout with theme provider
│   └── page.tsx                # Main page component
├── components/
│   ├── theme-provider.tsx      # Theme context provider
│   ├── theme-switcher.tsx      # Theme toggle component
│   ├── weather-display.tsx     # Weather data display
│   └── weather-search.tsx      # Search functionality
├── types/
│   └── weather.ts              # TypeScript type definitions
└── README.md
```

## Features in Detail

### Theme System
- **Dark Mode**: Professional dark theme with excellent contrast
- **Light Mode**: Clean light theme for daytime use
- **System Theme**: Automatically matches your device's theme preference
- **Persistent**: Theme preference is saved to localStorage

### Weather Display
- **Current Conditions**: Temperature, feels-like temperature, humidity, wind speed, visibility
- **Weather Icons**: Visual representation of current weather conditions
- **Tomorrow's Forecast**: High/low temperatures and weather description
- **Location Info**: City name and country display

### Responsive Design
- **Mobile-First**: Optimized for mobile devices
- **Tablet Support**: Adapted layouts for medium screens
- **Desktop Experience**: Full-featured desktop interface
- **Touch-Friendly**: Large touch targets for mobile interaction

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Weather data provided by WeatherAPI.com
- Icons by Lucide React
- Built with Next.js and Tailwind CSS
