import css from "./LocationSearch.module.css";
export default function LocationSearch() {
  return (
    <div>
      <p className={css.text}>Location</p>
      <input
        type="text"
        name="location"
        // value={value}
        placeholder="Kyiv, Ukraine"
        // onChange={onHandleChange}
        className={css.input}
      />
    </div>
  );
}
