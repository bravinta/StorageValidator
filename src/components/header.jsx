import s from "./styles/header.module.scss";

export default function Header() {
  const handleLanguageChange = (e) => {};

  return (
    <div className={s.Header}>
      <a target="_blank" href="https://www.bravinta.com">
        <img src="/BravintaPowered.svg" />
      </a>
      <select onChange={handleLanguageChange}>
        <option value={"en"}>English</option>
        <option value={"es"}>Español</option>
      </select>
    </div>
  );
}
