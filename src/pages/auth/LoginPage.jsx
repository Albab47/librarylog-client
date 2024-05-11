import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import ErrorMsg from "../../components/ErrorMsg/ErrorMsg";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="border min-h-screen grid place-items-center px-4 bg-yellow-50">
      <Card className="w-full max-w-sm -mt-16">
        <CardHeader
          variant="gradient"
          color="light-blue"
          className="mb-4 text-center grid h-24 sm:h-28 place-items-center"
        >
          <div>
            <Typography variant="h3" color="white">
              Welcome back
            </Typography>
            <Typography variant="small" color="white">
              Login to access your account
            </Typography>
          </div>
        </CardHeader>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardBody className="flex flex-col gap-5">
            <div>
              <Input
                label="Email"
                color="light-blue"
                size="lg"
                {...register("email", {
                  required: "Please enter your email",
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "Email is not valid",
                  },
                })}
              />
              {errors.email && <ErrorMsg>{errors.email?.message}</ErrorMsg>}
            </div>

            <div>
              <Input
                label="Password"
                type="password"
                color="light-blue"
                size="lg"
                icon={<i className="fas fa-heart" />}
                {...register("password", {
                  required: "Please enter your password",
                })}
              />
              {errors.password && (
                <ErrorMsg>{errors.password?.message}</ErrorMsg>
              )}
            </div>

            <div className="-ml-2.5">
              <Checkbox label="Remember Me" color="light-blue" />
            </div>
          </CardBody>

          <CardFooter className="pt-0">
            <Button
              type="submit"
              variant="gradient"
              color="light-blue"
              fullWidth
            >
              Log In
            </Button>
            {/* hr line */}
            <div className="inline-flex relative items-center justify-center w-full">
              <hr className="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
              <span className="absolute px-3 font-medium text-blue-gray-500 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
                or
              </span>
            </div>
            <Button
              size="md"
              fullWidth
              variant="outlined"
              color="blue-gray"
              className="flex items-center justify-center gap-3"
            >
              <img
                src="https://docs.material-tailwind.com/icons/google.svg"
                alt="metamask"
                className="h-4 w-4"
              />
              Continue with Google
            </Button>

            <Typography variant="small" className="mt-6 flex justify-center">
              Don&apos;t have an account yet?
              <Link>
                <Typography
                  as="span"
                  variant="small"
                  color="light-blue"
                  className="ml-1 font-bold"
                >
                  Sign up
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
        </form>
      </Card>
    </section>
  );
};

export default LoginPage;
