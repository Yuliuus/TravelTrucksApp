import css from "./CamperListItem.module.css";
import { useDispatch } from "react-redux";

export default function CamperListItem({ data }) {
  return (
    <div className={css.wrap}>
      <div>
        <img
          className={css.camperimg}
          src={data.gallery[0].original}
          alt="camper photo"
        />
      </div>
      <div className={css.wrapInfo}>
        <div className={css.title}>
          <h2>{data.name}</h2>
          <h2>&euro;{data.price}.00</h2>
        </div>
        <div className={css.wrapLocation}>
          <p>
            {data.rating}({data.reviews.length} Reviews)
          </p>
          <p>{data.location}</p>
        </div>
        <p className={css.description}>{data.description}</p>
        <div className={css.features}>
          <h2>features</h2>
        </div>
        <button className={css.btn}>Show more</button>
      </div>
    </div>
  );
}
