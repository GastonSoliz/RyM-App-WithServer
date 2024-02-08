import style from "./alert.module.css";

export default function Alert() {
  return (
    <div className={style.alertContainer}>
      <span>Alerta!</span>
    </div>
  );
}
