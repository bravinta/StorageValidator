import { useContext, useState } from "react";
import s from "./styles/main.module.scss";
import { DeviceContext } from "../context/device.context";

export default function Main() {
  const { device, size, refresh, selectDevice } = useContext(DeviceContext);

  return (
    <div className={s.Main}>
      <div className={s.Left}>
        <p>
          Device:{" "}
          <strong>
            {device && device}
            {!device && "..."}
          </strong>
        </p>
        <p>
          Available device size:{" "}
          <strong>
            {size && size}
            {!size && "..."}
          </strong>{" "}
        </p>
      </div>
      <div className={s.Right}>
        <button onClick={selectDevice}>Select device</button>
        <button onClick={refresh}>Refresh</button>
      </div>
    </div>
  );
}
