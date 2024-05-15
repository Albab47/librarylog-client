import PropTypes from "prop-types"; 
import { Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const SlideContent = ({ slider }) => {
  
  return (
    <div className="flex gap-6 flex-col-reverse text-center md:text-start md:flex-row md:justify-between items-center h-full py-14">
      <div className="max-w-xl space-y-4">
        <Typography
          variant="h1"
          className="font-bold dark:text-yellow-400"
          color="light-blue"
          textGradient={true}
        >
          {slider.title}
        </Typography>
        <Typography variant="paragraph" className="dark:text-gray-100 text-lg">{slider.text}</Typography>

        <Link to="/sign-up" className="flex justify-center md:justify-start">
          <Button size="sm" color="light-blue" variant="gradient" className="dark:text-yellow-600">
            Get Started
          </Button>
        </Link>
      </div>
      <img src={slider.img} className="h-80 -mr-20 md:-mr-4 md:h-96" alt="" />
    </div>
  );
};


SlideContent.propTypes = {
  slider: PropTypes.object
};

export default SlideContent;
