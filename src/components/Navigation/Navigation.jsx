import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";

import css from "./Navigation.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(isActive && css.active);
};

export default function Navigation() {
  return (
    <header className={css.navigationWrap}>
      <div className={css.logo}>
        <Link to="/" className={css.logoText}>
          <img
            srcSet="/public/Logo-1x.png 1x, /public/Logo-2x.png 2x"
            src="/public/Logo-1x.png"
            alt="TravelTrucks"
          />
        </Link>
      </div>
      <nav className={css.navigation}>
        <NavLink to="/" className={(buildLinkClass, css.link)}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={(buildLinkClass, css.link)}>
          Catalog
        </NavLink>
      </nav>
    </header>
  );
}
