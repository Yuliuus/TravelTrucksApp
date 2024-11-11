import FeedbackForm from "../FeedbackForm/FeedbackForm";
import EquipmentList from "../EquipmentList/EquipmentList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCamperById } from "../../redux/selectors";
import { fetchCamperById } from "../../redux/operations";

import css from "./Features.module.css";

export default function Features() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camperById = useSelector(getCamperById);

  useEffect(() => {
    if (!id) return;
    dispatch(fetchCamperById(id));
  }, [id, dispatch]);

  if (!camperById) {
    return <p>Loading...</p>;
  }

  const { form, length, width, height, tank, consumption } = camperById;

  return (
    <div className={css.wrapper}>
      <div className={css.wrap}>
        <div>
          <EquipmentList />
        </div>
        <div className={css.detailsWrap}>
          <h2 className={css.title}>Vehicle details</h2>
          <ul className={css.features}>
            <li className={css.detailsList}>
              <p>Form</p>
              <p>{form}</p>
            </li>
            <li className={css.detailsList}>
              <p>Length</p>
              <p>{length}</p>
            </li>
            <li className={css.detailsList}>
              <p>Width</p>
              <p>{width}</p>
            </li>
            <li className={css.detailsList}>
              <p>Height</p>
              <p>{height}</p>
            </li>
            <li className={css.detailsList}>
              <p>Tank</p>
              <p>{tank}</p>
            </li>
            <li className={css.detailsList}>
              <p>Consumption</p>
              <p>{consumption}</p>
            </li>
          </ul>
        </div>
      </div>
      <FeedbackForm />
    </div>
  );
}
