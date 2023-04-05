import LandingUI from "./Landing.presenter";
import { useEffect, useRef } from "react";

export default function Landing() {
  const listRef = useRef<HTMLUListElement>(null);
  const imageListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const list = listRef.current;
    const imageList = imageListRef.current;

    const listStyleChangeStartY = 633;
    const listStyleChangeEndY = 1923;

    const imageListStyleChangeStartY = 1700;
    const imageListStyleChangeEndY = 2200;

    if (!list) return;
    if (!imageList) return;

    const items = list.querySelectorAll(".list-item");
    const images = imageList.querySelectorAll(".image-icon");

    const division =
      (listStyleChangeEndY - listStyleChangeStartY) / items.length;

    const imagesDivision =
      (imageListStyleChangeEndY - imageListStyleChangeStartY) / images.length;

    function handleScroll() {
      if (document.getElementById("on")) {
        document.getElementById("on")?.removeAttribute("id");
      }

      if (
        listStyleChangeStartY < window.scrollY &&
        window.scrollY < listStyleChangeEndY
      ) {
        const index = Math.floor(
          (window.scrollY - listStyleChangeStartY) / division
        );

        items[index].id = "on";
      }

      if (
        imageListStyleChangeStartY < window.scrollY &&
        window.scrollY < imageListStyleChangeEndY
      ) {
        const imagesIndex = Math.floor(
          (window.scrollY - imageListStyleChangeStartY) / imagesDivision
        );

        images[imagesIndex].className = `${images[imagesIndex].className} show`;
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <LandingUI listRef={listRef} imageListRef={imageListRef} />;
}
