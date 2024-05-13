import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  IconButton,
  Chip,
} from "@material-tailwind/react";
import { StarIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const BookCard = ({ book, isBooksPage = true }) => {
  const { _id, name, author, category, photo, rating, borrower } = book;
  const shortName = name.length > 22 ? name.slice(0, 20) : name;

  return (
    <Card className="w-full max-w-[26rem] shadow-lg">
      <CardHeader
        floated={false}
        color="blue-gray"
        className="h-72 flex justify-center p-5 bg-light-blue-50"
      >
        <img src={photo} className="object-cover rounded-r-2xl" />
        <Chip
          size="sm"
          value={category}
          className="bg-light-blue-100 rounded-full text-light-blue-700 !absolute top-4 right-4"
        />
      </CardHeader>

      <CardBody className="flex-grow">
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
              variant="paragraph"
              color="blue-gray"
              className="mb-2 font-medium text-sm"
            >
              Return date: 
              <p className="text-sm font-normal">{borrower.return_date}</p>
            </Typography>
            <Typography
              variant="paragraph"
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
          <Button size="sm" color="red" variant="gradient" fullWidth={true}>
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
};