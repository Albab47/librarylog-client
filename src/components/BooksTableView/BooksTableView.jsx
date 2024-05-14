import { PencilIcon } from "@heroicons/react/24/solid";

import {
  Card,
  Typography,
  CardBody,
  Chip,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";

const TABLE_HEAD = ["Book", "Rating", "Category", "Action"];

const BooksTableView = ({ books }) => {
  return (
    <Card className="h-full w-full">
      <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {books?.map(
              ({ _id, photo, name, author, category, rating }, index) => {
                const isLast = index === books.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={name}>
                    {/* Img, Name, author */}
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Avatar
                          src={photo}
                          alt={name}
                          size="lg"
                          variant="rounded"
                        />
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {name}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {author}
                          </Typography>
                        </div>
                      </div>
                    </td>

                    {/* Rating */}
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {rating}
                        </Typography>
                      </div>
                    </td>

                    {/* Category */}
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          variant="ghost"
                          size="sm"
                          value={category}
                          color={"light-blue"}
                        />
                      </div>
                    </td>

                    {/* Action */}
                    <td className={classes}>
                      <Tooltip content="Edit Book">
                        <Link to={`/update-book/${_id}`}>
                          <IconButton
                            variant="outlined"
                            size="sm"
                            color="blue-gray"
                          >
                            <PencilIcon className="h-4 w-4" />
                          </IconButton>
                        </Link>
                      </Tooltip>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
};

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

BooksTableView.propTypes = {
  books: PropTypes.array,
};

export default BooksTableView;
