export interface WeatherData {
  current: {
    temp_c: number
    feelslike_c: number
    condition: {
      text: string
      icon: string
    }
    wind_kph: number
    humidity: number
    vis_km: number
    pressure_mb: number
    is_day: number
    location: {
      name: string
      country: string
      localtime: string
    }
  }
  forecast: {
    forecastday: Array<{
      date: string
      day: {
        maxtemp_c: number
        mintemp_c: number
        avgtemp_c: number
        maxwind_kph: number
        avghumidity: number
        daily_chance_of_rain: number
        condition: {
          text: string
          icon: string
        }
        uv: number
      }
    }>
  }
}
