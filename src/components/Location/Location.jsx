import css from "./Location.module.css";

export default function Location({ data }) {
  return (
    <div className={css.wrapLocation}>
      <div className={css.location}>
        <svg width={16} height={16}>
          <use
            href="/sprite.svg#icon-star"
            width={16}
            height={16}
            fill="var(--rating)"
          />
        </svg>
        <p>
          {data.rating}({data.reviews.length} Reviews)
        </p>
      </div>
      <div className={css.location}>
        <svg width={16} height={16}>
          <use href="/sprite.svg#icon-map" width={16} height={16} />
        </svg>
        <p>{data.location}</p>
      </div>
    </div>
  );
}
