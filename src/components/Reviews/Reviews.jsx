import { useDispatch, useSelector } from "react-redux";
import { getCamperById } from "../../redux/selectors";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchCamperById } from "../../redux/operations";

import css from "./Reviews.module.css";
import FeedbackForm from "../FeedbackForm/FeedbackForm";

export default function Reviews() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector(getCamperById);

  useEffect(() => {
    if (id) {
      dispatch(fetchCamperById(id));
    }
  }, [id, dispatch]);

  if (!camper) return <p>Loading...</p>;

  const { reviews } = camper;

  return (
    <div className={css.wrapper}>
      {reviews && reviews.length > 0 ? (
        <ul className={css.wrap}>
          {reviews.map((review, index) => (
            <li key={index} className={css.reviewItem}>
              <div className={css.reviewer}>
                <div className={css.avatar}>
                  {review.reviewer_name[0].toUpperCase()}
                </div>
                <div className={css.nameRating}>
                  <h2>{review.reviewer_name}</h2>
                  <div className={css.stars}>
                    {Array.from({ length: 5 }, (_, i) => (
                      <span key={i}>
                        <svg width={16} height={16}>
                          <use
                            className={
                              i < review.reviewer_rating
                                ? css.starFilled
                                : css.starEmpty
                            }
                            width={16}
                            height={16}
                            href="/sprite.svg#icon-star"
                          />
                        </svg>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className={css.comment}>{review.comment}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.comment}>No reviews available for this camper.</p>
      )}
      <FeedbackForm />
    </div>
  );
}
