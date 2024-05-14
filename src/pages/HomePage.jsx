import { useQuery } from "@tanstack/react-query";
import HeroSlider from "../components/HeroSliders/HeroSlider";
import axios from "axios";
import Categories from "../components/Categories/Categories";
import Loader from "../components/Loader/Loader";
import BecomeMember from "../components/BecomeMember/BecomeMember";

const HomePage = () => {
  // Get categories data
  const {data, isLoading} = useQuery({
    queryKey: ['categories'],
    queryFn: async() => {
      const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/categories`);
      return data;
    }
  })

  if(isLoading) {
    return <Loader />
  }
  
  return (
    <div>
      <HeroSlider />
      <BecomeMember />
      <Categories categories={data} />
    </div>
  );
};

export default HomePage;
