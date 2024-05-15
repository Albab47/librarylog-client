import { Button, IconButton, Typography } from "@material-tailwind/react";
import Loader from "../components/Loader/Loader";
import BookCard from "../components/BookCard/BookCard";
import { Squares2X2Icon, ListBulletIcon } from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import BooksTableView from "../components/BooksTableView/BooksTableView";

const AllBooksPage = () => {
  const [filterAvailableBooks, setFilterAvailableBooks] = useState(false);
  const [cardView, setCardView] = useState(true);
  const [tableView, setTableView] = useState(false);

  const { data: books, isLoading } = useQuery({
    queryKey: ["books", filterAvailableBooks],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/books${
          filterAvailableBooks ? "?filter=quantity" : ""
        }`
      );
      return data;
    },
  });

  if (isLoading) {
    return <Loader loading={isLoading} />;
  }


  const handleShowAvailableBooks = () => {
    setFilterAvailableBooks(!filterAvailableBooks);
  };

  const handleTableView = () => {
    setTableView(true);
    setCardView(false);
  };

  const handleCardView = () => {
    setTableView(false);
    setCardView(true);
  };

  return (
    <section className="my-16 max-w-screen-xl mx-auto px-4">
      <Typography variant="h2" className="text-center">
        All Books
      </Typography>
      <div className="flex justify-center lg:justify-end mt-4">
        <div className="flex gap-2">
          <Button
            onClick={handleShowAvailableBooks}
            size="sm"
            color="light-blue"
          >
            {filterAvailableBooks ? "Show all books" : "Show available books"}
          </Button>
          <div className="space-x-1">
            <IconButton
              onClick={handleCardView}
              title="grid-view"
              size="sm"
              variant="outlined"
              color="amber"
              className="!rounded-r-none hover:bg-light-blue-50"
            >
              <Squares2X2Icon className="size-6" />
            </IconButton>
            <IconButton
              onClick={handleTableView}
              title="list-view"
              size="sm"
              variant="outlined"
              color="light-blue"
              className="!rounded-l-none !rounded-r-sm hover:bg-light-blue-50"
            >
              <ListBulletIcon className="size-6" />
            </IconButton>
          </div>
        </div>
      </div>

      {cardView ? (
        <div className="my-10 grid gap-5 justify-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {books?.map((book) => (
          <BookCard key={book._id} book={book} allBooksPage={true} />
        ))}
      </div>
      ) : (
        <BooksTableView books={books} />
      )}
    </section>
  );
};

export default AllBooksPage;
