import PropTypes from "prop-types"; 
import { Card, CardHeader } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const BookImgCard = ({ book }) => {
  return (
    <Link to={`/books/${book._id}`}>
      <Card className="drop-shadow-sm pb-4 h-full">
        <CardHeader shadow={true} floated={false} className="h-76">
          <img
            src={book?.photo}
            alt="card-image"
            className="object-cover content-center rounded-xl"
          />
        </CardHeader>
      </Card>
    </Link>
  );
};



BookImgCard.propTypes = {
  book: PropTypes.object,
};

export default BookImgCard;
