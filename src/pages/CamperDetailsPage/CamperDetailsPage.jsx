import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchCamperById } from "../../redux/operations";
import { useDispatch, useSelector } from "react-redux";
import { getCamperById } from "../../redux/selectors";
import Location from "../../components/Location/Location";
import css from "./CampersDetailsPage.module.css";

export default function CamperDetailsPage() {
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

  const { name, price, description, gallery, reviews } = camperById;

  return (
    <div className={css.wrap}>
      <div>
        <h2>{name}</h2>
        <Location data={camperById} />
        <h2 className={css.price}>€{price}.00</h2>
      </div>
      <div>
        <ul className={css.gallery}>
          {gallery.length > 0 &&
            gallery.map(({ original }, index) => {
              return (
                <li key={index} className={css.item}>
                  <img src={original} alt={name} className={css.img} />
                </li>
              );
            })}
        </ul>
      </div>
      <p className={css.description}>{description}</p>
      <div>
        <h2>Features</h2>
        <h2>Reviews</h2>
      </div>
    </div>
  );
}
