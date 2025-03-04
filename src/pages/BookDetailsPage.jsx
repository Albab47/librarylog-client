import { Link, useLoaderData, useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Chip,
} from "@material-tailwind/react";

import { useState } from "react";
import { useForm } from "react-hook-form";
import ErrorMsg from "../components/ErrorMsg/ErrorMsg";
import useAuth from "../hooks/useAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import toast from "react-hot-toast";

const BookDetailsPage = () => {
  const { currentUser } = useAuth();
  const book = useLoaderData();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    _id,
    name,
    author,
    category,
    photo,
    rating,
    quantity,
    shortDesc,
    desc,
  } = book;

  const handleOpen = () => setOpen(!open);

  const onBorrowBook = async (data) => {
    // Check if this book already in borrowed books coll
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/borrowed-books/find/${_id}?email=${
          currentUser?.email
        }`
      );
      if (data.name === name) {
        return toast.error("You have Already borrowed this books");
      }
    } catch (err) {
      console.log(err);
    }

    data.borrowed_date = new Date().toLocaleDateString();
    data.return_date = new Date(startDate).toLocaleDateString();
    const borrower = { ...data };
    const bookId = _id;
    const borrowedBook = {
      bookId,
      photo,
      name,
      author,
      category,
      rating,
      borrower,
    };

    // Decrement quantity on borrow
    try {
      console.log(_id);
      const { data } = await axios.patch(
        `${import.meta.env.VITE_API_URL}/books/${_id}`,
        { quantity: -1 }
      );
      console.log(data);
    } catch (err) {
      console.log(err);
    }

    // Add book to borrowed book db
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/borrowed-books`,
        borrowedBook
      );
      if (data.insertedId) {
        toast.success("Book borrowed successfully");
        navigate("/borrowed-books");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="my-16 max-w-screen-xl mx-auto px-4 min-h-[calc(100vh-64px)]">
      <Card
        shadow={false}
        className="!rounded-none dark:bg-inherit w-full flex-col items-center md:items-start mx-auto md:flex-row"
      >
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/6 shrink-0 !rounded-none bg-inherit"
        >
          <img
            src={photo}
            alt="card-image"
            className="h-[25rem] w-full object-contain"
          />
        </CardHeader>
        <CardBody className="!py-0">
          <Typography variant="h4" color="blue-gray" className="mb-3 dark:text-gray-50">
            {name}
          </Typography>
          <Typography
            variant="paragraph"
            color="gray"
            className="mb-2 font-normal dark:text-gray-200"
          >
            {/* <img src={AuthorIcon} className="size-6 inline -mt-2 mr-2" alt="" /> */}
            Author: <span className="text-light-blue-600">{author}</span>
          </Typography>
          <Typography color="gray" className="dark:text-gray-50 mb-4 font-normal">
            Category: <span className="text-light-blue-600">{category}</span>
          </Typography>

          <Chip
            variant="ghost"
            color="light-blue"
            size="sm"
            className="w-40 mb-8 dark:text-gray-300 "
            value={"Available quantity: " + quantity}
          />

          <Typography color="gray" className="mb-3 font-normal dark:text-gray-400">
            {shortDesc}
          </Typography>
          <Typography color="gray" className="mb-8 font-normal dark:text-gray-400">
            {desc}
          </Typography>

          <Link href="#" className="inline-block">
            <Button
              onClick={handleOpen}
              disabled={quantity === 0}
              size="md"
              color="light-blue"
              className="flex items-center gap-2"
            >
              Borrow this book
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </Link>
        </CardBody>
      </Card>

      {/* Modal */}
      <Dialog open={open} size="xs" handler={handleOpen}>
        <div className="flex items-center justify-between">
          <DialogHeader className="flex flex-col items-start">
            {" "}
            <Typography className="mb-1" variant="h4">
              Borrow This Book
            </Typography>
          </DialogHeader>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5"
            onClick={handleOpen}
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <form onSubmit={handleSubmit(onBorrowBook)}>
          <DialogBody>
            <Typography
              className="mb-10 -mt-7 font-normal"
              color="gray"
              variant="paragraph"
            >
              To borrow book you have to submit this form
            </Typography>

            <div className="grid gap-5">
              <div>
                <Typography className="mb-3" color="blue-gray" variant="h6">
                  Name
                </Typography>
                <Input
                  label="Name"
                  color="light-blue"
                  size="lg"
                  value={currentUser?.displayName}
                  {...register("name", { required: "This field is required" })}
                />
                {errors.name && <ErrorMsg>{errors.name?.message}</ErrorMsg>}
              </div>

              <div>
                <Typography className="mb-3" color="blue-gray" variant="h6">
                  Email
                </Typography>
                <Input
                  label="Email"
                  color="light-blue"
                  size="lg"
                  value={currentUser?.email}
                  {...register("email", { required: "This field is required" })}
                />
                {errors.email && <ErrorMsg>{errors.email?.message}</ErrorMsg>}
              </div>

              <div>
                <Typography className="mb-3" color="blue-gray" variant="h6">
                  Return date
                </Typography>
                <DatePicker
                  className="border rounded-md p-2 focus:outline-none focus:border-2 focus:border-light-blue-600"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
            </div>
          </DialogBody>

          <DialogFooter className="space-x-2">
            <Button variant="text" color="gray" onClick={handleOpen}>
              cancel
            </Button>
            <Button
              type="submit"
              variant="gradient"
              color="light-blue"
              onClick={handleOpen}
            >
              Submit
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </section>
  );
};

export default BookDetailsPage;
