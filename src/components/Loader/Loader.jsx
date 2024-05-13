import PropTypes from "prop-types"; 
import { SyncLoader } from "react-spinners";


const Loader = ({loading, size}) => {
  return (
    <div className="h-screen flex justify-center items-center">
      <SyncLoader
        color="#44c1ff"
        loading={loading}
        size={size}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};



Loader.propTypes = {
  loading: PropTypes.bool,
  size: PropTypes.number,
};

export default Loader;