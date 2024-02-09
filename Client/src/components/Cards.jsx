import { useState } from "react";
import Card from "./Card";
import style from "./cards.module.css";
import Alert from "./Alert";

export default function Cards({ characters }) {
  const [warning, setWarning] = useState(false);

  function handleWarning() {
    setWarning(true);
    setTimeout(() => {
      setWarning(false);
    }, 5000);
  }
  return (
    <div className={style.cardList}>
      {warning && <Alert />}
      {characters.map((ch) => (
        <Card key={ch.id} character={ch} handleWarning={handleWarning} />
      ))}
    </div>
  );
}
