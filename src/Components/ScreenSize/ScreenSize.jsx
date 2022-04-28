import { useState, useEffect } from "react";
import headphoneImg from "../../assets/images/category-headphones/desktop/image-xx99-mark-two.jpg";
import headphoneTab from "../../assets/images/category-headphones/tablet/image-xx99-mark-two.jpg";
import headphoneMobile from "../../assets/images/category-headphones/mobile/image-xx99-mark-two.jpg";

export default function ScreenSize({ image }) {
  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimenion]);

  return (
    <>
      {windowDimenion.winWidth > 990 && (
        <img src={image?.desktop} className="w-2/5 " alt="headphoneImg" />
      )}
      {windowDimenion.winWidth > 480 && windowDimenion.winWidth < 991 && (
        <img src={image?.tablet} className="w-full" alt="headphoneImg" />
      )}
      {windowDimenion.winWidth < 480 && (
        <img src={image?.mobile} className="w-full" alt="headphoneImg" />
      )}
    </>
  );
}
