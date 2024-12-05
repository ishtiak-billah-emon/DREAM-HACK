
import { Link } from 'react-router-dom';
import errorIcon from '../assets/errorIcon.jpg';
const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-24">
      <img className="w-96 h-96" src={errorIcon} alt="Error Icon" />
      <p>The page you're looking for does not exist.</p>
      <Link to="/">
        <span className='font-bold'>Go back to the Home Page</span>
      </Link>
    </div>
  );
};

export default ErrorPage;