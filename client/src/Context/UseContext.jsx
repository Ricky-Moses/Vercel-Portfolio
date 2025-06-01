import { createContext, useEffect, useState } from "react";
import axios from "axios";


export const FetchedDataContext = createContext(null);

const FetchedDataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFunction = async () => {
      try {
        const response = await axios.get("/dataArr.json", {
          baseURL: window.location.origin,
        });
        setData(response.data);
      } catch (err) {
        console.error("Error occurred when fetching data:", err.message);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchFunction();
  }, []);
//   useEffect(() => {
//     console.log("Data updated:", data);
//   }, [data]);

  return (
    <FetchedDataContext.Provider value={{ data, error, loading }}>
      {children}
    </FetchedDataContext.Provider>
  );
};

export default FetchedDataProvider;
