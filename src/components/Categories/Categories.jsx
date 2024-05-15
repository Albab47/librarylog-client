import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";
import CategoryCard from "./CategoryCard";

const Categories = ({ categories }) => {
  return (
    <section className="bg-light-blue-400 my-28">
      <div className="max-w-screen-xl mx-auto px-4">
        <Typography
          variant="h2"
          className="text-2xl bg-white text-light-blue-900 text-center max-w-44 mx-auto -translate-y-7 rounded-lg py-3 px-5 drop-shadow-xl"
        >
          Categories
        </Typography>

        <div className="pt-12 pb-16 grid gap-6 justify-center md:grid-cols-2 lg:grid-cols-4">
          {categories?.map((cat) => (
            <CategoryCard key={cat._id} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
};

Categories.propTypes = {
  categories: PropTypes.array,
};

export default Categories;
