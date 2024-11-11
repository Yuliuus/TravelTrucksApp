import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchCamperById } from "../../redux/operations";
import { useDispatch, useSelector } from "react-redux";
import { getCamperById } from "../../redux/selectors";
import { NavLink, Outlet } from "react-router-dom";
import Location from "../../components/Location/Location";
import css from "./CampersDetailsPage.module.css";
import clsx from "clsx";

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
        <ul className={css.info}>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${css.infoText} active` : css.infoText
              }
              to="features"
            >
              Features
            </NavLink>
          </li>
          <li>
            <NavLink className={css.infoText} to="reviews">
              Reviews
            </NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
}
