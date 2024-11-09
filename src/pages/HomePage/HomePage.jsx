import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.homeWrap}>
      <div className={css.heroContent}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <h2 className={css.subtitle}>
          You can find everything you want in our catalog
        </h2>
        <button type="button" className={css.button}>
          View Now
        </button>
      </div>
    </div>
  );
}
