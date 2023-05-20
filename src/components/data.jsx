import { useContext, useId } from "react";
import s from "./styles/data.module.scss";
import { ValidationContext } from "../context/validation.context";

export default function Data() {
  const { sizeChecked, time, totalTime, writeVelocity } =
    useContext(ValidationContext);

  return (
    <div className={s.Data}>
      <h1>Data</h1>
      <p>
        Size checked:{" "}
        <span>
          {sizeChecked && sizeChecked} {!sizeChecked && "..."}
        </span>
      </p>
      <p>
        Time:{" "}
        <span>
          {time && time} {!time && "..."}
        </span>{" "}
        /{" "}
        <span>
          {totalTime && totalTime} {!totalTime && "..."}
        </span>
      </p>
      <p>
        Write Velocity:{" "}
        <span>
          {writeVelocity && writeVelocity} {!writeVelocity && "..."}
        </span>
      </p>
    </div>
  );
}
