import { IdentificationIcon } from "@heroicons/react/24/outline";
import { Typography } from "@material-tailwind/react";

const BecomeMember = () => {
  return (
    <section className="my-20">
      <Typography
        variant="h4"
        color="light-blue"
        className="text-center font-bold mb-8"
      >
        How to become library member?
      </Typography>

      <div className="max-w-screen-xl mx-auto px-4">
        <ol className="grid grid-cols-1 divide-x divide-gray-100 overflow-hidden rounded-lg border border-gray-100 text-sm text-gray-500 sm:grid-cols-3">
          <li className="flex items-center justify-center gap-2 p-4">
            <IdentificationIcon className="size-8" />

            <p className="leading-none">
              <strong className="block font-medium"> Details </strong>
              <small className="mt-1"> Get library card by filling form </small>
            </p>
          </li>

          <li className="relative flex items-center justify-center gap-2 bg-gray-50 p-4">
            <span className="absolute -left-2 top-1/2 hidden size-4 -translate-y-1/2 rotate-45 border border-gray-100 sm:block ltr:border-b-0 ltr:border-s-0 ltr:bg-white rtl:border-e-0 rtl:border-t-0 rtl:bg-gray-50"></span>

            <span className="absolute -right-2 top-1/2 hidden size-4 -translate-y-1/2 rotate-45 border border-gray-100 sm:block ltr:border-b-0 ltr:border-s-0 ltr:bg-gray-50 rtl:border-e-0 rtl:border-t-0 rtl:bg-white"></span>

            <svg
              className="size-7 shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>

            <p className="leading-none">
              <strong className="block font-medium"> Sign up </strong>
              <small className="mt-1"> Sign up to our website </small>
            </p>
          </li>

          <li className="flex items-center justify-center gap-2 p-4">
            <svg
              className="size-7 shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>

            <p className="leading-none">
              <strong className="block font-medium"> Borrow book </strong>
              <small className="mt-1"> Borrow book and return </small>
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default BecomeMember;
