import Lottie from "lottie-react";
import errorGifAnimation from "../../public/errorGif.json";
import { Button } from "@material-tailwind/react";
import { ArrowLongLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="grid h-screen place-content-center bg-white px-4">
      <div className="flex flex-col items-center gap-5">
        <div className="max-w-5xl">
          <Lottie animationData={errorGifAnimation} loop={true} />
        </div>
        <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Oopps!
        </h1>
        <p className="mt-1 mb-4 text-gray-500">We can't find that page.</p>
        <Link to="/">
          <Button className="flex items-center gap-3" color="light-blue">
            <ArrowLongLeftIcon className="size-5" />
            Go back Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
