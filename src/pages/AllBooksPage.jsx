import { Typography } from "@material-tailwind/react";
import Loader from "../components/Loader/Loader";
import useBooksData from "../hooks/useBooksData";
import BookCard from "../components/BookCard/BookCard";

const AllBooksPage = () => {
    const {data: books, isLoading} = useBooksData();
    console.log(books);
    
    if (isLoading) {
        <Loader loading={isLoading} />;
      }
    
      return (
        <section className="my-16 max-w-screen-xl mx-auto px-4">
          <Typography variant="h2" className="text-center">
            All Books
          </Typography>
    
          <div className="my-10 grid gap-5 justify-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {books?.map((book) => (
              <BookCard key={book._id} book={book} allBooksPage={true} />
            ))}
          </div>
        </section>
      );
};

export default AllBooksPage;