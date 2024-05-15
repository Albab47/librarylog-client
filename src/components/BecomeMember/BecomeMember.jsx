// import { IdentificationIcon } from "@heroicons/react/24/outline";
import { Typography } from "@material-tailwind/react";
import signinIcon from '../../assets/icons8-sign-in.png';
import borrowIcon from '../../assets/icons8-borrow.png';
import returnIcon from '../../assets/icons8-return.png';

const BecomeMember = () => {
  return (
    <section className="mt-20 mb-[9rem]">
      <Typography
        variant="h4"
        color="light-blue"
        className="text-center text-3xl dark:text-yellow-400 font-bold mb-8 max-w-sm mx-auto"
      >
        Start Borrowing Books In Few Steps
      </Typography>

      <div className="max-w-screen-xl mx-auto px-4">
        <ol className="grid grid-cols-1 divide-x divide-gray-100 dark:divide-blue-800 overflow-hidden rounded-lg border border-gray-100 dark:border-blue-800 text-md text-gray-500 dark:text-gray-200 sm:grid-cols-3">
          <li className="flex items-center justify-center gap-2 p-4">
            <img src={signinIcon} className="w-10" alt="" />

            <p className="leading-none">
              <strong className="block font-medium mb-1"> Sign up </strong>
              <small className="mt-1">Sign up to our website</small>
            </p>
          </li>

          <li className="relative flex items-center justify-center gap-2 bg-gray-50 dark:bg-blue-800 p-4">

            <span className="absolute -right-2 top-1/2 hidden size-4 -translate-y-1/2 rotate-45 border border-gray-100 dark:border-gray-800 sm:block ltr:border-b-0 ltr:border-s-0 ltr:bg-gray-50 rtl:border-e-0 rtl:border-t-0 rtl:bg-white"></span>

            <img src={borrowIcon} className="w-10" alt="" />

            <p className="leading-none">
              <strong className="block font-medium"> Borrow </strong>
              <small className="mt-1"> Borrow your desired book </small>
            </p>
          </li>

          <li className="flex items-center justify-center gap-2 p-4">
          <img src={returnIcon} className="w-10" alt="" />

            <p className="leading-none">
              <strong className="block font-medium"> Return </strong>
              <small className="mt-1"> return borrowed book </small>
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default BecomeMember;
