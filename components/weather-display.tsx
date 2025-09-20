"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { WeatherData } from "@/types/weather"
import {
  Droplets,
  Wind,
  Eye,
  Gauge,
  Sun,
  Cloud,
  CloudRain,
  CloudSnow,
  Zap,
  MapPin,
  Calendar,
  Clock,
} from "lucide-react"

interface WeatherDisplayProps {
  weatherData: WeatherData
}

export function WeatherDisplay({ weatherData }: WeatherDisplayProps) {
  const getWeatherIcon = (condition: string, size = 24) => {
    const iconProps = { size, className: "text-primary" }

    if (condition.includes("rain") || condition.includes("drizzle")) {
      return <CloudRain {...iconProps} />
    }
    if (condition.includes("snow")) {
      return <CloudSnow {...iconProps} />
    }
    if (condition.includes("thunder") || condition.includes("storm")) {
      return <Zap {...iconProps} />
    }
    if (condition.includes("cloud")) {
      return <Cloud {...iconProps} />
    }
    return <Sun {...iconProps} />
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <div className="space-y-6">
      {/* Location Header */}
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center gap-2">
          <MapPin className="h-5 w-5 text-muted-foreground" />
          <h2 className="text-2xl font-bold">
            {weatherData.current.location.name}, {weatherData.current.location.country}
          </h2>
        </div>
        <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {formatDate(weatherData.current.location.localtime)}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {formatTime(weatherData.current.location.localtime)}
          </div>
        </div>
      </div>

      {/* Current Weather */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {getWeatherIcon(weatherData.current.condition.text.toLowerCase())}
            Current Weather
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Main Weather Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-bold">{Math.round(weatherData.current.temp_c)}°C</div>
                <div className="space-y-1">
                  <div className="text-lg font-medium">{weatherData.current.condition.text}</div>
                  <div className="text-sm text-muted-foreground">
                    Feels like {Math.round(weatherData.current.feelslike_c)}°C
                  </div>
                </div>
              </div>
              <Badge variant="secondary" className="w-fit">
                {weatherData.current.is_day ? "Day" : "Night"}
              </Badge>
            </div>

            {/* Weather Details */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Droplets className="h-4 w-4 text-muted-foreground" />
                <div className="text-sm">
                  <div className="font-medium">{weatherData.current.humidity}%</div>
                  <div className="text-muted-foreground">Humidity</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Wind className="h-4 w-4 text-muted-foreground" />
                <div className="text-sm">
                  <div className="font-medium">{weatherData.current.wind_kph} km/h</div>
                  <div className="text-muted-foreground">Wind</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4 text-muted-foreground" />
                <div className="text-sm">
                  <div className="font-medium">{weatherData.current.vis_km} km</div>
                  <div className="text-muted-foreground">Visibility</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Gauge className="h-4 w-4 text-muted-foreground" />
                <div className="text-sm">
                  <div className="font-medium">{weatherData.current.pressure_mb} mb</div>
                  <div className="text-muted-foreground">Pressure</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tomorrow's Forecast */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Tomorrow's Forecast
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Tomorrow's Main Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="text-3xl font-bold">
                  {Math.round(weatherData.forecast.forecastday[1].day.maxtemp_c)}°C
                </div>
                <div className="space-y-1">
                  <div className="text-lg font-medium">{weatherData.forecast.forecastday[1].day.condition.text}</div>
                  <div className="text-sm text-muted-foreground">
                    Low: {Math.round(weatherData.forecast.forecastday[1].day.mintemp_c)}°C
                  </div>
                </div>
              </div>
              {getWeatherIcon(weatherData.forecast.forecastday[1].day.condition.text.toLowerCase(), 32)}
            </div>

            {/* Tomorrow's Details */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <CloudRain className="h-4 w-4 text-muted-foreground" />
                <div className="text-sm">
                  <div className="font-medium">{weatherData.forecast.forecastday[1].day.daily_chance_of_rain}%</div>
                  <div className="text-muted-foreground">Rain Chance</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Wind className="h-4 w-4 text-muted-foreground" />
                <div className="text-sm">
                  <div className="font-medium">{weatherData.forecast.forecastday[1].day.maxwind_kph} km/h</div>
                  <div className="text-muted-foreground">Max Wind</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Droplets className="h-4 w-4 text-muted-foreground" />
                <div className="text-sm">
                  <div className="font-medium">{weatherData.forecast.forecastday[1].day.avghumidity}%</div>
                  <div className="text-muted-foreground">Avg Humidity</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Sun className="h-4 w-4 text-muted-foreground" />
                <div className="text-sm">
                  <div className="font-medium">{weatherData.forecast.forecastday[1].day.uv}</div>
                  <div className="text-muted-foreground">UV Index</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
