import {
  Button,
  Input,
  Option,
  Select,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import AddBookImg from "../assets/add-book.png";
import AddBookIcon from "../assets/add-book-icon.png";
import { useForm } from "react-hook-form";
import ErrorMsg from "../components/ErrorMsg/ErrorMsg";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddBookPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  // const navigate = useNavigate()

  const onAddBook = async(book) => {
    console.log(book);
    try {
      const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/books`, book)
      if (data.insertedId) {
        toast.success("Books added successfully");
        reset();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="bg-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-16 justify-between lg:gap-8 lg:flex-row">
          <div className="flex justify-center items-center lg:w-2/5 lg:py-12">
            <img src={AddBookImg} alt="" />
          </div>

          <div className="rounded-lg bg-white p-8 shadow-lg w-full sm:max-w-2xl lg:w-3/5 lg:p-10">
            <div className="flex gap-2">
              <img className="size-8" src={AddBookIcon} />
              <Typography variant="h4" color="light-blue" className="mb-7">
                Add New Book
              </Typography>
            </div>

            <form onSubmit={handleSubmit(onAddBook)} className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Input
                    label="Name"
                    name="name"
                    placeholder="Book Name"
                    color="light-blue"
                    size="md"
                    {...register("name", {
                      required: "This field is required",
                    })}
                  />
                  {errors?.name && <ErrorMsg>{errors.name?.message}</ErrorMsg>}
                </div>
                <div>
                  <Input
                    label="Author"
                    placeholder="Author Name"
                    color="light-blue"
                    size="md"
                    {...register("author", {
                      required: "This field is required",
                    })}
                  />
                  {errors.author && (
                    <ErrorMsg>{errors.author?.message}</ErrorMsg>
                  )}
                </div>
              </div>

              {/* Category, Quantity, Rating  */}
              <div className="grid gap-4 sm:grid-cols-3">
                {/* Category options */}
                <div>
                  <select
                    {...register("category", {required: "This field is required"})}
                    className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-light-blue-500 focus:border-light-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-light-blue-500 dark:focus:border-light-blue-500"
                  >
                    <option>Select Category</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Non-Fiction">Non-Fiction</option>
                    <option value="Self-Help">Self-Help</option>
                    <option value="Business">Business</option>
                  </select>
                  {errors?.category && <ErrorMsg>{errors.category?.message}</ErrorMsg>}
                </div>

                <div>
                  <Input
                    type="number"
                    label="Quantity"
                    placeholder="Book Quantity"
                    color="light-blue"
                    size="md"
                    containerProps={{ className: "min-w-[50px]" }}
                    {...register("quantity", {
                      required: "This field is required",
                    })}
                  />
                  {errors.quantity && (
                    <ErrorMsg>{errors.quantity?.message}</ErrorMsg>
                  )}
                </div>

                <div>
                  <Input
                    type="number"
                    min={1}
                    max={5}
                    label="Rating"
                    placeholder="Book Rating"
                    color="light-blue"
                    size="md"
                    containerProps={{ className: "min-w-[50px]" }}
                    {...register("rating", {
                      required: "This field is required",
                    })}
                  />
                  {errors.rating && (
                    <ErrorMsg>{errors.rating?.message}</ErrorMsg>
                  )}
                </div>
              </div>

              <div>
                <Input
                  label="Photo"
                  placeholder="Photo URL"
                  color="light-blue"
                  size="md"
                  {...register("photo", {
                    required: "This field is required",
                  })}
                />
                {errors.photo && <ErrorMsg>{errors.photo?.message}</ErrorMsg>}
              </div>

              <div>
                <Input
                  label="Short Description"
                  placeholder="Describe in short"
                  color="light-blue"
                  size="md"
                  {...register("shortDesc", {
                    required: "This field is required",
                  })}
                />
                {errors.shortDesc && (
                  <ErrorMsg>{errors.shortDesc?.message}</ErrorMsg>
                )}
              </div>

              <div>
                <Textarea
                  size="lg"
                  color="light-blue"
                  label="Textarea Large"
                  {...register("desc", {
                    required: "This field is required",
                  })}
                />
                {errors.desc && <ErrorMsg>{errors.desc?.message}</ErrorMsg>}
              </div>

              <div className="mt-4">
                <Button type="submit" color="green" fullWidth>
                  Add Book
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddBookPage;
