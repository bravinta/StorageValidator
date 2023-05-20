import { useEffect } from "react";
import {
  isPermissionGranted,
  requestPermission,
} from "@tauri-apps/api/notification";

import Data from "./components/data";
import Header from "./components/header";
import Main from "./components/main";
import Panel from "./components/panel";

import s from "./styles/app.module.scss";

export default function App() {
  // Comprobamos si tenemos permiso para enviar notificaciones
  const notify = async () => {
    let permissionGranted = await isPermissionGranted();

    // Si no tenemos permiso, lo solicitamos
    if (!permissionGranted) {
      const permission = await requestPermission();
      permissionGranted = permission === "granted";
    }
  };

  useEffect(() => {
    notify();
  }, []);

  return (
    <div className="">
      <Header />
      <br />
      <Main />
      <Data />
      <Panel />
    </div>
  );
}
