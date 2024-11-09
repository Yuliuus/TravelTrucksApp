import css from "./CamperListItem.module.css";

export default function CamperListItem() {
  return (
    <div className={css.wrap}>
      <div>
        <img
          className={css.camperimg}
          src="/bg-hero-1x.png"
          alt="camper photo"
        />
      </div>
      <div>
        <p>info about camper</p>
      </div>
    </div>
  );
}
