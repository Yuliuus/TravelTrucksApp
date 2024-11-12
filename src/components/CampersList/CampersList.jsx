import CamperListItem from "../CamperListItem/CamperListItem";
import { getCampers, getIsLoading } from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCampers } from "../../redux/operations";
import { useState } from "react";

import css from "./CampersList.module.css";

export default function CampersList() {
  const dispatch = useDispatch();
  const campers = useSelector(getCampers);
  const isLoading = useSelector(getIsLoading);

  const [page, setPage] = useState(1);
  const limit = 4;

  useEffect(() => {
    dispatch(fetchCampers({ page, limit }));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <div>
        <ul className={css.wrap}>
          {campers.map((camper) => (
            <li key={camper.id}>
              <CamperListItem data={camper} />
            </li>
          ))}
        </ul>
        {campers.length > 0 && !isLoading && (
          <button onClick={handleLoadMore} className={css.btn}>
            Load more
          </button>
        )}
      </div>
    </>
  );
}
