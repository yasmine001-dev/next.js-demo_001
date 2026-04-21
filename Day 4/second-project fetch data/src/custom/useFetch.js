import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setdata] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        const res = await response.json();
        setdata(res);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setLoading(false);
        setError(error.message);
      }
    };

    fetchData();
  }, [url]);
  return { data, loading, error };
}
