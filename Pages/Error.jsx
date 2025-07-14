import { Link } from "react-router-dom"
import notFound from "/images/notFound.png";
export const Error = () => {
  return (
    <div className="container ">
    <img src={notFound} />
    <p className="text-center">
    <Link to="/" className="btn btn-danger">
      Go to Homepage
    </Link>
    </p>
    </div>
  )
}
