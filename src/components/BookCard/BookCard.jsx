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
// import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  const { _id, name, author, category, photo, rating } = book;
  const shortName = name.length > 20 ? name.slice(0, 20) : name;

  return (
    <Card className="w-full max-w-[26rem] shadow-lg">
      <CardHeader
        floated={false}
        color="blue-gray"
        className="h-72 flex justify-center p-5 bg-light-blue-50"
      >
        <img
          src={photo}
          className="object-cover rounded-r-2xl"
        />
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
      </CardBody>

      <CardFooter className="pt-3">
        <Button size="sm" color="light-blue" fullWidth={true}>
          See Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BookCard;


BookCard.propTypes = {
  book: PropTypes.object,
};
