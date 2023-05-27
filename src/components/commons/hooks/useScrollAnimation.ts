import { useEffect, useRef } from "react";

export default function useScrollAnimation<
  T extends HTMLUListElement | HTMLDivElement
>(className: string, startY: number, endY: number, id?: string) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const list = ref.current;
    if (!list) return;

    const items = list.querySelectorAll(className);

    const division = (endY - startY) / items.length;

    function handleScroll() {
      if (id && document.getElementById(id)) {
        document.getElementById(id)?.removeAttribute("id");
      }

      if (startY < window.scrollY && window.scrollY < endY) {
        const index = Math.floor((window.scrollY - startY) / division);

        updateDOM(index);
      }
    }

    function updateDOM(index: number) {
      if (id) {
        items[index].id = id;
      } else {
        items[index].classList.add("show");
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [className, startY, endY, id]);

  return ref;
}
