"use client";
import { useEffect } from "react";
import { useLoader } from "./LoaderContext";
import Image from "next/image";
export default function Loader() {
  const { isLoading } = useLoader();
  useEffect(() => {
    // Optionally, you could add side effects here
  }, [isLoading]);
  return (
    <>
      {isLoading ? (
        // <div className={`custom-loading ${"show"}`}>
        //   <div className="spinner">
        //     <Image
        //       src="/images/gwebpro_logo.png"
        //       alt=""
        //       width={173}
        //       height={49}
        //     />
        //     <div className="disc"></div>
        //   </div>
        // </div>
        <div
          style={{
            position: "fixed",
            inset: "0",
            backgroundColor: "transparent",
            width: "100%",
            height: "100%",
            zIndex: "10000",
          }}
        ></div>
      ) : (
        <></>
      )}
    </>
  );
}
