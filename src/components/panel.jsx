import s from "./styles/panel.module.scss";

export default function Panel() {
  return (
    <div className={s.Panel}>
      <button>Verify Device</button>
      <p>Ha habido un error</p>
    </div>
  );
}
