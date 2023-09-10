import { useReducer } from "react";

// 强制组件重新渲染，最终返回一个函数
// 借助useReducer搞了一个累加器，当数据更新，组件就会触发重新渲染。因此，也可以使用useState去做类似的事情。
function useUpdate(): () => void {
  const [, update] = useReducer((num: number): number => num + 1, 0);

  return update;
}

export default useUpdate;
