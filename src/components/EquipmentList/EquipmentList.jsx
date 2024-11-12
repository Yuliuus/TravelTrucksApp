import css from "./EquipmentList.module.css";

export default function EquipmentList({ features }) {
  const availableFeatures = [
    "transmission",
    "engine",
    "AC",
    "bathroom",
    "kitchen",
    "TV",
    "radio",
    "refrigerator",
    "microwave",
    "gas",
    "water",
  ];
  const campersFeatures = availableFeatures.filter(
    (feature) => features[feature]
  );
  return (
    <ul className={css.equipList}>
      {campersFeatures.length > 0 ? (
        campersFeatures.map((feature, index) => (
          <li key={index} className={css.equipListItem}>
            {feature.charAt(0).toUpperCase() + feature.slice(1)}
          </li>
        ))
      ) : (
        <li className={css.equipListItem}>No features available</li>
      )}
    </ul>
  );
}
