import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Chip,
  IconButton,
} from "@material-tailwind/react";
import { StarIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";


const BookCard = ({
  book,
  isBooksPage = true,
  allBooksPage = false,
  refetch,
}) => {
  const { _id, name, author, category, photo, rating, borrower } = book;
  const shortName = name.length > 22 ? name.slice(0, 20) : name;

  const handleReturn = async () => {
    // Increment quantity on borrow
    try {
      const { data } = await axios.patch(
        `${import.meta.env.VITE_API_URL}/books/${_id}`,
        { quantity: 1 }
      );
      console.log(data);
    } catch (err) {
      console.log(err);
    }

    // Remove book from borrowed book db
    try {
      console.log(_id);
      const { data } = await axios.delete(
        `${import.meta.env.VITE_API_URL}/borrowed-books/${_id}`
      );
      console.log(data);
      if (data.deletedCount === 1) {
        toast.success("Successfully Book Returned");
        refetch();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card className="w-full max-w-[26rem] shadow-lg">
      <CardHeader
        floated={false}
        shadow={false}
        color="blue-gray"
        className="h-72 flex justify-center p-5 bg-light-blue-50"
      >
        <img src={photo} className="object-cover rounded-r-2xl" />
        {allBooksPage && (
          <Link to={`/update-book/${_id}`}>
            <IconButton
              size="sm"
              color="light-blue"
              variant="gradient"
              className="!absolute z-20 top-1 right-1 rounded-full"
            >
              <PencilSquareIcon className="size-7 p-1" />
            </IconButton>
          </Link>
        )}
      </CardHeader>

      <CardBody className="flex-grow">
        <Chip
          size="sm"
          variant="ghost"
          color="light-blue"
          value={"# " + category}
          className="rounded-full mb-3 inline-block"
        />
        <div className="mb-3 flex items-start justify-between">
          <div>
            <Typography
              variant="h5"
              color="blue-gray"
              className="font-bold mb-2 text-md text-light-blue-600 md:text:xl"
            >
              {shortName}
            </Typography>
            <Typography
              variant="small"
              color="blue-gray"
              className="text-blue-gray-400 text-sm font-normal"
            >
              {author}
            </Typography>
          </div>
          <Typography
            color="blue-gray"
            className="flex items-center gap-1.5 text-sm font-normal"
          >
            <StarIcon className="size-4 text-amber-600" />
            {rating + ".0"}
          </Typography>
        </div>

        {!isBooksPage && (
          <div className="flex justify-between border-t-2 border-dashed pt-5 mt-5">
            <Typography
              variant="h6"
              color="blue-gray"
              className="mb-2 font-medium text-sm"
            >
              Return date:
              <p className="text-sm font-normal">{borrower.return_date}</p>
            </Typography>
            <Typography
              variant="h6"
              color="blue-gray"
              className="mb-2 font-medium text-sm"
            >
              Borrowed date:
              <p className="text-sm font-normal">{borrower.borrowed_date}</p>
            </Typography>
          </div>
        )}
      </CardBody>

      <CardFooter className="pt-3">
        {isBooksPage ? (
          <Link to={`/books/${_id}`}>
            <Button size="sm" color="light-blue" fullWidth={true}>
              See Details
            </Button>
          </Link>
        ) : (
          <Button
            onClick={handleReturn}
            size="sm"
            color="red"
            variant="gradient"
            fullWidth={true}
          >
            Return book
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default BookCard;

BookCard.propTypes = {
  book: PropTypes.object,
  isBooksPage: PropTypes.bool,
  allBooksPage: PropTypes.bool,
  refetch: PropTypes.func,
};
