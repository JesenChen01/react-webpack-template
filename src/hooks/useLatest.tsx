import React, { useRef } from "react";

// 包裹一个变量，让变量缓存，下次能拿到最近的值
const useLatest = <T,>(value: T): { readonly current: T } => {
  const ref = useRef(value);
  ref.current = value;

  return ref;
};

export default useLatest;
