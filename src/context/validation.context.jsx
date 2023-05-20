import { createContext, useState } from "react";

export const ValidationContext = createContext();

export const ValidationProvider = ({ children }) => {
  const [sizeChecked, setSizeChecked] = useState(null);
  const [time, setTime] = useState(null);
  const [totalTime, setTotalTime] = useState(null);
  const [writeVelocity, setWriteVelocity] = useState(null);

  const startVerify = () => {};

  const stopVerify = () => {};

  const valueProvider = {
    sizeChecked,
    time,
    totalTime,
    writeVelocity,
    startVerify,
    stopVerify,
  };

  return (
    <ValidationContext.Provider value={valueProvider}>
      {children}
    </ValidationContext.Provider>
  );
};
