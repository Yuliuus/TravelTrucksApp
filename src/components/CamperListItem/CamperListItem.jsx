import css from "./CamperListItem.module.css";
import { useDispatch } from "react-redux";
import Location from "../Location/Location";
import { useNavigate } from "react-router-dom";

export default function CamperListItem({ data }) {
  const navigate = useNavigate();

  const handleShowMore = () => {
    navigate(`/camper/${data.id}`);
  };
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
          <h2>features</h2>
        </div>
        <button className={css.btn} onClick={handleShowMore}>
          Show more
        </button>
      </div>
    </div>
  );
}
