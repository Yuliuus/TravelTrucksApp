import css from "./CatalogPage.module.css";
import CamperList from "../../components/CampersList/CampersList";

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
          <CamperList />
        </div>
      </main>
    </section>
  );
}
