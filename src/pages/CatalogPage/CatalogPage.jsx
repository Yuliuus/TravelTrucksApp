import css from "./CatalogPage.module.css";
import CamperListItem from "../../components/CamperListItem/CamperListItem";

export default function CatalogPage() {
  return (
    <section className={css.wrap}>
      {/* Sidebar */}
      <aside className={css.sidebar}>
        <div>
          <h2>Location</h2>
        </div>
        <div>
          <h2>Filters</h2>
        </div>
        <div>
          <h2>Vehicle Type</h2>
        </div>
      </aside>
      {/* Main Content */}
      <main className={css.main}>
        <div>
          <h3>List of Campers</h3>
          <CamperListItem />
        </div>
      </main>
    </section>
  );
}
