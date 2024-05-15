import PropTypes from "prop-types"; 
import { Typography } from "@material-tailwind/react";
import BookImgCard from "../BookImgCard/BookImgCard";


const ReadersPick = ({topBooks}) => {
  return (
    <section className="my-28">
      <header className="text-center px-6">
        <Typography variant="h5" color="light-blue" className="font-bold text-3xl">
          Readers Pick
        </Typography>

        <div className="max-w-screen-lg mx-auto px-4 my-14 grid gap-5 grid-cols-2 md:grid-cols-4">
            {topBooks?.map(book => (
                <BookImgCard key={book._id} book={book} />
            ))}
        </div>
      </header>
    </section>
  );
};



ReadersPick.propTypes = {
  topBooks: PropTypes.array,
};

export default ReadersPick;
