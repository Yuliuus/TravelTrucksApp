import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <p>
      sorry, this page doesn`t exist return to <Link to="/">Home</Link>
    </p>
  );
}
