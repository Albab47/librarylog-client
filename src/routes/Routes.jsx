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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
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
          fetch(`http://localhost:5000/books/${params.id}`),
      },
      {
        path: "/borrowed-books",
        element: (
          <PrivateRoute>
            <BorrowedBooksPage />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
