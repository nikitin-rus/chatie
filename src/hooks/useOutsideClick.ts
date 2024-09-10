import { MutableRefObject, useEffect } from "react";

function isNode(eventTarget: EventTarget): eventTarget is Node {
  return (eventTarget as Node).nodeType !== undefined;
}

export function useOutsideClick(
  onOutsideClick: () => void,
  ...refs: MutableRefObject<Node | null>[]
) {
  function handleOutsideClick(e: PointerEvent) {
    if (
      refs.every(
        (ref) =>
          e.target && isNode(e.target) && !ref.current?.contains(e.target)
      )
    ) {
      onOutsideClick();
    }
  }

  useEffect(() => {
    if (refs.length) {
      document.addEventListener("pointerdown", handleOutsideClick);

      return () =>
        document.removeEventListener("pointerdown", handleOutsideClick);
    }
  }, [refs]);
}
