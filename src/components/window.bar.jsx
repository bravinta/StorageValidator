import {} from "react";
import s from "./styles/window.module.scss";
import { appWindow } from "@tauri-apps/api/window";
import { IconX } from "@tabler/icons-react";

export default () => {
  const minimize = () => {
    appWindow.minimize();
  };

  const close = () => {
    appWindow.close();
  };

  return (
    <div data-tauri-drag-region className={s.Bar}>
      <h1 data-tauri-drag-region>QSValidator</h1>
      <div className={s.Right}>
        <button onClick={minimize} className={s.Minimize}>
          <span></span>
        </button>
        <button onClick={close} className={s.Close}>
          <IconX />
        </button>
      </div>
    </div>
  );
};
