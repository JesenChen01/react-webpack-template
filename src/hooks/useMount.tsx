import React, { useEffect } from "react";

// 组件挂载时执行hook
const useMount = (fn: () => void) => {
  useEffect(() => {
    fn?.();
  }, []);
};

export default useMount;
