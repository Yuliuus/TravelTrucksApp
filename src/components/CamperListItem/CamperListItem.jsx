import css from "./CamperListItem.module.css";
import Location from "../Location/Location";
import { Link } from "react-router-dom";
import EquipmentList from "../EquipmentList/EquipmentList";

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
          <div className={css.like}>
            <h2>&euro;{data.price}.00</h2>
            <button className={css.likeBtn}>
              <svg width={26} height={24}>
                <use href="/sprite.svg#icon-like" />
              </svg>
            </button>
          </div>
        </div>
        <Location data={data} />
        <p className={css.description}>{data.description}</p>
        <div className={css.features}>
          <EquipmentList features={data} />
        </div>
        <button className={css.btn}>
          <Link to={`/catalog/${data.id}`}>Show more</Link>
        </button>
      </div>
    </div>
  );
}
