import { type NextRequest, NextResponse } from "next/server";

const WEATHER_API_KEY = process.env.WEATHER_API_KEY || "demo_key";
const WEATHER_API_URL = "http://api.weatherapi.com/v1";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("q");

  if (!query) {
    return NextResponse.json(
      { error: "City or country name is required" },
      { status: 400 }
    );
  }

  try {
    // For demo purposes, we'll return mock data
    // In production, you would use a real API key and make actual API calls
    if (WEATHER_API_KEY === "demo_key") {
      // Mock data for demonstration
      const mockData = {
        current: {
          temp_c: Math.floor(Math.random() * 30) + 5,
          feelslike_c: Math.floor(Math.random() * 30) + 5,
          condition: {
            text: ["Sunny", "Partly cloudy", "Cloudy", "Light rain"][
              Math.floor(Math.random() * 4)
            ],
            icon: "",
          },
          wind_kph: Math.floor(Math.random() * 20) + 5,
          humidity: Math.floor(Math.random() * 40) + 40,
          vis_km: Math.floor(Math.random() * 10) + 5,
          pressure_mb: Math.floor(Math.random() * 100) + 1000,
          is_day: Math.random() > 0.5 ? 1 : 0,
          location: {
            name: query.charAt(0).toUpperCase() + query.slice(1),
            country: "Demo Country",
            localtime: new Date().toISOString(),
          },
        },
        forecast: {
          forecastday: [
            {
              date: new Date().toISOString().split("T")[0],
              day: {
                maxtemp_c: Math.floor(Math.random() * 30) + 10,
                mintemp_c: Math.floor(Math.random() * 15) + 5,
                avgtemp_c: Math.floor(Math.random() * 25) + 8,
                maxwind_kph: Math.floor(Math.random() * 25) + 10,
                avghumidity: Math.floor(Math.random() * 30) + 50,
                daily_chance_of_rain: Math.floor(Math.random() * 100),
                condition: {
                  text: ["Sunny", "Partly cloudy", "Cloudy", "Light rain"][
                    Math.floor(Math.random() * 4)
                  ],
                  icon: "",
                },
                uv: Math.floor(Math.random() * 10) + 1,
              },
            },
            {
              date: new Date(Date.now() + 24 * 60 * 60 * 1000)
                .toISOString()
                .split("T")[0],
              day: {
                maxtemp_c: Math.floor(Math.random() * 30) + 10,
                mintemp_c: Math.floor(Math.random() * 15) + 5,
                avgtemp_c: Math.floor(Math.random() * 25) + 8,
                maxwind_kph: Math.floor(Math.random() * 25) + 10,
                avghumidity: Math.floor(Math.random() * 30) + 50,
                daily_chance_of_rain: Math.floor(Math.random() * 100),
                condition: {
                  text: ["Sunny", "Partly cloudy", "Cloudy", "Light rain"][
                    Math.floor(Math.random() * 4)
                  ],
                  icon: "",
                },
                uv: Math.floor(Math.random() * 10) + 1,
              },
            },
          ],
        },
      };

      return NextResponse.json(mockData);
    }

    // Real API call (when you have a valid API key)
    const response = await fetch(
      `${WEATHER_API_URL}/forecast.json?key=${WEATHER_API_KEY}&q=${encodeURIComponent(
        query
      )}&days=2&aqi=no&alerts=no`
    );

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: errorData.error?.message || "Failed to fetch weather data" },
        { status: response.status }
      );
    }

    const data = await response.json();

    // Transform the API response to match our interface
    const transformedData = {
      current: {
        temp_c: data.current.temp_c,
        feelslike_c: data.current.feelslike_c,
        condition: data.current.condition,
        wind_kph: data.current.wind_kph,
        humidity: data.current.humidity,
        vis_km: data.current.vis_km,
        pressure_mb: data.current.pressure_mb,
        is_day: data.current.is_day,
        location: {
          name: data.location.name,
          country: data.location.country,
          localtime: data.location.localtime,
        },
      },
      forecast: data.forecast,
    };

    return NextResponse.json(transformedData);
  } catch (error) {
    console.error("Weather API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
