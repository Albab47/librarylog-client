import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/auth/LoginPage";
import SignUpPage from "../pages/auth/SignUpPage";
import AddBookPage from "../pages/AddBookPage";
import PrivateRoute from "./PrivateRoute";
import BooksPage from "../pages/BooksPage";
import BookDetailsPage from "../pages/BookDetailsPage";
import BorrowedBooksPage from "../pages/BorrowedBooksPage";
import AllBooksPage from "../pages/AllBooksPage";
import UpdateBookPage from "../pages/UpdateBookPage";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/sign-up",
        element: <SignUpPage />,
      },
      {
        path: "/add-book",
        element: (
          <PrivateRoute>
            <AddBookPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-book/:id",
        element: (
          <PrivateRoute>
            <UpdateBookPage />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/books/${params.id}`),
      },
      {
        path: "/books/category/:category",
        element: (
          <PrivateRoute>
            <BooksPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/books/:id",
        element: (
          <PrivateRoute>
            <BookDetailsPage />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/books/${params.id}`),
      },
      {
        path: "/borrowed-books",
        element: (
          <PrivateRoute>
            <BorrowedBooksPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/books",
        element: (
          <PrivateRoute>
            <AllBooksPage />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
