import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import ErrorMsg from "../../components/ErrorMsg/ErrorMsg";
import useShowPassword from "../../hooks/useShowPassword";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const { createUser, updateUserProfile } = useAuth();
  const { showPassword, handleShowPassword } = useShowPassword();
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    watch,
    trigger,
    formState: { errors },
  } = useForm();

  const onSignIn = async ({ name, email, photoURL, password }) => {
    try {
      await createUser(email, password);
      await updateUserProfile(name, photoURL);
      toast.success("Account Created Successfully");
      reset()
      navigate('/')
    } catch (error) {
      console.error(error);
      toast.error("Account creation failed");
    }
  };

  return (
    <section className="min-h-screen grid place-items-center px-4 bg-yellow-50">
      <Card className="w-full max-w-lg p-6 -mt-16 mx-auto bg-white rounded-xl shadow-md dark:bg-gray-800">
        <Typography variant="h4" color="blue-gray" className="font-bold">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>

        <form onSubmit={handleSubmit(onSignIn)} className="mt-8 mb-2">
          <div className="mb-1 flex flex-col gap-6">
            {/* Name field */}
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-3">
                Your Name
              </Typography>
              <Input
                label="Name"
                color="light-blue"
                size="lg"
                {...register("name", { required: "This field is required" })}
              />
              {errors.name && <ErrorMsg>{errors.name?.message}</ErrorMsg>}
            </div>

            {/* Email field */}
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-3">
                Your Email
              </Typography>
              <Input
                label="Email"
                color="light-blue"
                size="lg"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "Email is not valid",
                  },
                })}
              />
              {errors.email && <ErrorMsg>{errors.email?.message}</ErrorMsg>}
            </div>

            {/* Photo field */}
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-3">
                Your Photo URL
              </Typography>
              <Input
                label="Photo"
                color="light-blue"
                size="lg"
                {...register("photoURL")}
              />
            </div>

            {/* Password fields */}
            <div className="md:flex gap-6">
              <div>
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Password
                </Typography>
                <Input
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  color="light-blue"
                  size="lg"
                  icon={
                    showPassword ? (
                      <IoMdEyeOff onClick={handleShowPassword} />
                    ) : (
                      <IoMdEye onClick={handleShowPassword} />
                    )
                  }
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Requires at least 6 characters",
                    },
                    pattern: {
                      value: /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}|:"<>?]).*$/,
                      message:
                        "Requires one capital letter and a special character",
                    },
                  })}
                  onKeyUp={() => trigger("password")}
                />
                {errors.password && (
                  <ErrorMsg>{errors.password?.message}</ErrorMsg>
                )}
              </div>

              <div>
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Confirm password
                </Typography>
                <Input
                  label="Confirm Password"
                  type="password"
                  color="light-blue"
                  size="lg"
                  {...register("confirmPass", {
                    required: true,
                    validate: (value) =>
                      value === watch("password", "") ||
                      "Password did not match",
                  })}
                  onKeyUp={() => trigger("confirmPass")}
                />
                {errors.confirmPass && (
                  <ErrorMsg>{errors.confirmPass?.message}</ErrorMsg>
                )}
              </div>
            </div>
          </div>

          <Checkbox
            color="light-blue"
            label={
              <Typography
                variant="small"
                color="light-blue"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />

          <Button type="submit" className="mt-6" color="light-blue" fullWidth>
            sign up
          </Button>

          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold underline text-light-blue-400"
            >
              Log In
            </Link>
          </Typography>
        </form>
      </Card>
    </section>
  );
};

export default SignUpPage;
