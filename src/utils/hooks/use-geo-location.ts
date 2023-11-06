import { useState, useEffect } from "react";

type Location = {
  latitude: number;
  longitude: number;
} | null;

const useGeoLocation = () => {
  const [location, setLocation] = useState<Location>(null);
  const [error, setError] = useState<string | null>("");

  const refresh = () => {
    setLocation(null);
    setError(null);
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by this browser.");
      return;
    }

    function handleSuccess(position: {
      coords: { latitude: number; longitude: number };
    }) {
      const { latitude, longitude } = position.coords;
      setLocation({ latitude, longitude });
    }

    function handleError(error: { message: string }) {
      setError(error.message);
    }

    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  }, []);

  return { location, error, refresh };
};

export default useGeoLocation;
