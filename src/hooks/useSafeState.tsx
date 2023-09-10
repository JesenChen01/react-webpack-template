import React, { useCallback, useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import useUnmountedRef from "./useUnmountedRef";

// 使用方法和useState一样，但在组件卸载后异步回调内的setState不再执行，这样可以避免因组件卸载后更新状态而导致的内存泄露
function useSafeState<S>(
  initialState: S | (() => S)
): [S, Dispatch<SetStateAction<S>>];
function useSafeState<S = undefined>(): [
  S | undefined,
  Dispatch<SetStateAction<S | undefined>>
];
function useSafeState<S>(initialState?: S | (() => S)) {
  const unmountedRef: { current: boolean } = useUnmountedRef();
  const [state, setState] = useState(initialState);
  const setCurrentState = useCallback((currentState: any) => {
    if (unmountedRef.current) return;
    setState(currentState);
  }, []);

  return [state, setCurrentState] as const;
}

export default useSafeState;
