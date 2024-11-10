import CamperListItem from "../CamperListItem/CamperListItem";
import { getCampers } from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCampers } from "../../redux/operations";

import css from "./CampersList.module.css";

export default function CampersList() {
  const dispatch = useDispatch();
  const campers = useSelector(getCampers);
  console.log(campers);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <div>
      <ul className={css.wrap}>
        {campers.map((camper) => (
          <li key={camper.id}>
            <CamperListItem data={camper} />
          </li>
        ))}
      </ul>
    </div>
  );
}
