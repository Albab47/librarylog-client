import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import UpdateImg from "../assets/updateImg.png";
import UpdateIcon from "../assets/icons8-update.png";
import { useForm } from "react-hook-form";
import ErrorMsg from "../components/ErrorMsg/ErrorMsg";
import axios from "axios";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate, useNavigation } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";

const UpdateBookPage = () => {
  const axiosSecure = useAxiosSecure()
  const book = useLoaderData()
  const navigation = useNavigation()
  const {currentUser} = useAuth()
  const { _id, name, author, category, photo, rating } = book || {};

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onUpdateBook = async (book) => {
    const updatedFields = {...book}

    try {
      const { data } = await axiosSecure.patch(
        `/update-book/${_id}?email=${currentUser?.email}`,
        updatedFields
      );
      if (data.modifiedCount) {
        toast.success("Books Updated successfully");
        reset();
        navigate("/books");
      }
    } catch (err) {
      console.error(err);
    }
  };

  if(navigation.state === 'loading') {
    return <Loader />
  }

  return (
    <section className="bg-gray-100 min-h-[calc(100vh-64px)]">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-16 justify-between lg:gap-8 lg:flex-row">
          <div className="flex justify-center items-center lg:w-2/5 lg:py-12">
            <img src={UpdateImg} alt="" />
          </div>

          <div className="rounded-lg bg-white p-8 shadow-lg w-full sm:max-w-2xl lg:w-3/5 lg:p-10">
            <div className="flex gap-2">
              <img className="size-8" src={UpdateIcon} />
              <Typography variant="h4" color="light-blue" className="mb-7">
                Update Existing Book
              </Typography>
            </div>

            <form onSubmit={handleSubmit(onUpdateBook)} className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Input
                    label="Name"
                    name="name"
                    placeholder="Book Name"
                    color="light-blue"
                    size="md"
                    defaultValue={name}
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
                    defaultValue={author}
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
              <div className="grid gap-4 sm:grid-cols-2">
                {/* Category options */}
                <div>
                  <select
                    {...register("category", {
                      required: "This field is required",
                    })}
                    className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-light-blue-500 focus:border-light-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-light-blue-500 dark:focus:border-light-blue-500"
                  >
                    <option defaultValue={category}>{category}</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Non-Fiction">Non-Fiction</option>
                    <option value="Self-Help">Self-Help</option>
                    <option value="Business">Business</option>
                  </select>
                  {errors?.category && (
                    <ErrorMsg>{errors.category?.message}</ErrorMsg>
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
                    defaultValue={rating}
                    containerProps={{ className: "min-w-[50px]" }}
                    {...register("rating", {
                      required: "This field is required",
                      valueAsNumber: true,
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
                  defaultValue={photo}
                  {...register("photo", {
                    required: "This field is required",
                  })}
                />
                {errors.photo && <ErrorMsg>{errors.photo?.message}</ErrorMsg>}
              </div>

              <div className="mt-4">
                <Button type="submit" variant="gradient" color="blue-gray" fullWidth>
                  Update Book
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdateBookPage;