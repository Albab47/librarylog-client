import { useQuery } from "@tanstack/react-query";
import Loader from "../components/Loader/Loader";
import { Typography } from "@material-tailwind/react";
import BookCard from "../components/BookCard/BookCard";
import axios from "axios";
import useAuth from "../hooks/useAuth";

const BorrowedBooksPage = () => {
  const { currentUser } = useAuth();
  console.log(currentUser);

  // Fetch user specific borrowed books
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["borrowed-books"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/borrowed-books/${currentUser?.email}`
      );
      return data;
    },
  });
  console.log(data);

  if (isLoading) {
    <Loader loading={isLoading} />;
  }

  return (
    <section className="my-16 max-w-screen-xl mx-auto px-4">
      <Typography variant="h4" className="text-center">
        Your Borrowed Books
      </Typography>

      <div className="my-10 grid gap-5 justify-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data?.map((book) => (
          <BookCard key={book._id} book={book} isBooksPage={false} refetch={refetch} />
        ))}
      </div>
    </section>
  );
};

export default BorrowedBooksPage;
