import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useBooksData = (category = "") => {
  const { data, isLoading } = useQuery({
    queryKey: ["books"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/books${
          category && `?category=${category}`
        }`
      );
      return data;
    },
  });

  return { data, isLoading };
};

export default useBooksData;
