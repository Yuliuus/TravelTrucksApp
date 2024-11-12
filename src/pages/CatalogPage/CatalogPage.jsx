import css from "./CatalogPage.module.css";
import CamperList from "../../components/CampersList/CampersList";
import LocationSearch from "../../components/LocationSearch/LocationSearch";
import Filters from "../../components/Filters/Filters";

export default function CatalogPage() {
  return (
    <section className={css.wrap}>
      {/* Sidebar */}
      <aside className={css.sidebar}>
        <LocationSearch />
        <div>
          <Filters />
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
