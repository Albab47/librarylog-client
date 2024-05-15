import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  return (
    <Card className="w-96 md:w-auto">
      <CardHeader className="h-56 mt-4 hover:opacity-80 transition-opacity duration-300 flex justify-center items-center bg-light-blue-50">
        <img
          src={category.img}
          alt="card-image"
          className="object-contain w-32"
        />
      </CardHeader>
      <CardBody className="flex justify-between">
        <Typography variant="h5" color="light-blue" className="mb-2">
          {category.category}
        </Typography>
        <Link to={`/books/category/${category.category}`}>
          <IconButton color="blue" size="sm" className="group">
            <ChevronRightIcon className="size-5 group-hover:translate-x-1 duration-200" />
          </IconButton>
        </Link>
      </CardBody>
    </Card>
  );
};

CategoryCard.propTypes = {
  category: PropTypes.object,
};

export default CategoryCard;
