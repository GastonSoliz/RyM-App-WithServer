import Card from "./Card";
import style from "./cards.module.css";

export default function Cards({ characters, onClose }) {
  console.log("ACA EN CARDS:", characters);
  return (
    <div className={style.cardList}>
      {characters.map((ch) => (
        <Card key={ch.id} character={ch} onClose={onClose} />
      ))}
    </div>
  );
}
