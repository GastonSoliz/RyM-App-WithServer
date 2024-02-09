import style from "./alert.module.css";

export default function Alert() {
  return (
    <div className={style.alertContainer}>
      <span>Debes iniciar sesion para acceder a esta propiedad!</span>
    </div>
  );
}
