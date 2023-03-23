import axios from "axios";
const API_KEY = "AIzaSyDzLxooRzXh1axdLrfQLUFHHQ98gQz3zS0";

export async function geocode(address) {
  const response = await axios.get(
    "https://maps.googleapis.com/maps/api/geocode/json",
    {
      params: {
        address: address,
        key: API_KEY,
      },
    }
  );
  if (response.data.status === "OK") {
    const result = response.data.results[0];
    return {
      lat: result.geometry.location.lat,
      lng: result.geometry.location.lng,
    };
  } else {
    throw new Error(`Geocoding failed: ${response.data.status}`);
  }
}
