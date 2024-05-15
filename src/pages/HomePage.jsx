import { useQuery } from "@tanstack/react-query";
import HeroSlider from "../components/HeroSliders/HeroSlider";
import axios from "axios";
import Categories from "../components/Categories/Categories";
import Loader from "../components/Loader/Loader";
import BecomeMember from "../components/BecomeMember/BecomeMember";
import ReadersPick from "../components/ReadersPick/ReadersPick";

const HomePage = () => {
  // Get categories data
  const {data, isLoading} = useQuery({
    queryKey: ['categories'],
    queryFn: async() => {
      const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/categories`);
      return data;
    }
  })

  // Get categories data
  const {data: topBooks} = useQuery({
    queryKey: ['top-rated'],
    queryFn: async() => {
      const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/top-rated`);
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
      <ReadersPick topBooks={topBooks} />
    </div>
  );
};

export default HomePage;
