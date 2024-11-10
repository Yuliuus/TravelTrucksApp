import { useDispatch, useSelector } from "react-redux";
import { getCamperById } from "../../redux/selectors";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchCamperById } from "../../redux/operations";

export default function Reviews() {
  const dispatch = useDispatch();
  const camper = useSelector(getCamperById);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchCamperById(id)); // Dispatch the action to fetch data
    }
  }, [id, dispatch]);

  if (!camper) return <p>Loading...</p>;

  const { reviews } = camper;
  console.log(camper);

  return (
    <div>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <h2>{review.reviewer_name}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}
