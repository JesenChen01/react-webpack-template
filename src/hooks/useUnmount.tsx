import React, { useEffect } from "react";
import useLatest from "./useLatest";

// 组件卸载时执行hook
const useUnmount = (fn: () => void) => {
  const fnRef = useLatest(fn);

  useEffect(() => {
    return () => {
      fnRef.current();
    };
  }, []);
};

export default useUnmount;
