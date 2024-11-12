import css from "./Filters.module.css";
export default function Filters() {
  return (
    <div>
      <p className={css.name}>Filters</p>
      <div>
        <h2 className={css.title}>Vehicle equipment</h2>
        <ul className={css.listWrap}>
          <li className={css.listItem}>AC</li>
          <li className={css.listItem}>Transmission</li>
          <li className={css.listItem}>Kitchen</li>
          <li className={css.listItem}>TV</li>
          <li className={css.listItem}>Bathroom</li>
        </ul>
      </div>
      <div>
        <h2 className={css.title}>Vehicle type</h2>
        <ul className={css.listWrap}>
          <li className={css.listItem}>Van</li>
          <li className={css.listItem}>Fully</li>
          <li className={css.listItem}>Alcove</li>
        </ul>
      </div>
      <button className={css.btn}>Search</button>
    </div>
  );
}
