import PropTypes from "prop-types"; 

const ErrorMsg = ({children}) => {
  return (
    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
      {children}
    </p>
  );
};

ErrorMsg.propTypes = {
  children: PropTypes.node,
};

export default ErrorMsg;