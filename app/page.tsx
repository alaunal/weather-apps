"use client";

import { useState } from "react";
import { WeatherSearch } from "@/components/weather-search";
import { WeatherDisplay } from "@/components/weather-display";
import { ThemeSwitcher } from "@/components/theme-switcher";
import type { WeatherData } from "@/types/weather";
import { Cloud, Sun, CloudRain } from "lucide-react";

export default function Home() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <Sun className="h-8 w-8 text-primary" />
                <Cloud className="h-6 w-6 text-muted-foreground -ml-3" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-balance">Weather App</h1>
                <p className="text-sm text-muted-foreground">
                  Real-time weather information worldwide
                </p>
              </div>
            </div>
            {/* Theme Switcher */}
            <ThemeSwitcher />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Search Section */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-balance">
              Get Weather Information
            </h2>
            <p className="text-muted-foreground text-pretty max-w-2xl mx-auto">
              Search for any city or country to get current weather conditions
              and tomorrow's forecast
            </p>
          </div>

          <WeatherSearch
            onWeatherData={setWeatherData}
            loading={loading}
            setLoading={setLoading}
          />

          {/* Weather Display */}
          {weatherData && <WeatherDisplay weatherData={weatherData} />}

          {/* Features Grid */}
          {!weatherData && (
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <Sun className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Current Weather</h3>
                <p className="text-sm text-muted-foreground">
                  Get real-time weather conditions including temperature,
                  humidity, and wind speed
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <CloudRain className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Tomorrow's Forecast</h3>
                <p className="text-sm text-muted-foreground">
                  Plan ahead with detailed weather predictions for the next day
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <Cloud className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Global Coverage</h3>
                <p className="text-sm text-muted-foreground">
                  Search weather information for cities and countries worldwide
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
