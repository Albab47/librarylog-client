import { useParams } from "react-router-dom";
import useBooksData from "../hooks/useBooksData";
import Loader from "../components/Loader/Loader";
import { Typography } from "@material-tailwind/react";
import BookCard from "../components/BookCard/BookCard";

const BooksPage = () => {
  const { category } = useParams();
  const { data: books, isLoading } = useBooksData(category);
  console.log(books);

  if (isLoading) {
    <Loader loading={isLoading} />;
  }

  return (
    <section className="my-16 max-w-screen-xl mx-auto px-4">
      <Typography variant="h4" className="text-center">
        {category} Books
      </Typography>

      <div className="my-10 grid gap-5 justify-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {books?.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </section>
  );
};

export default BooksPage;
