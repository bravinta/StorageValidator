import { createContext, useState } from "react";

export const DeviceContext = createContext();

export const DeviceProvider = ({ children }) => {
  const [device, setDevice] = useState(null);
  const [size, setSize] = useState(null);

  const refresh = () => {};

  const selectDevice = () => {};

  const valueProvider = {
    device,
    size,
    refresh,
    selectDevice,
  };

  return (
    <DeviceContext.Provider value={valueProvider}>
      {children}
    </DeviceContext.Provider>
  );
};
