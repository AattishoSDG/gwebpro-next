// "use client"

import Image from "next/image";

// import { useEffect, useState } from 'react';
// import Loader from "./components/Loader"

// export default function Loading() {
//   const [show, setShow] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setShow(false), 1000);
//     return () => clearTimeout(timer);
//   }, []);

//   if (!show) return null;
//   return <Loader />;
// }

// ====================================================================
// "use client";

// import { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";
// import Loader from "./components/Loader";

// export default function Loading() {
//   const [show, setShow] = useState(true);
//   const [startTime, setStartTime] = useState(Date.now());
//   const pathname = usePathname();

//   useEffect(() => {
//     // Reset the timer whenever the path changes
//     setStartTime(Date.now());
//     setShow(true);
//   }, [pathname]);

//   useEffect(() => {
//     const elapsed = Date.now() - startTime;
//     const remainingTime = Math.max(1000 - elapsed, 0);

//     const timer = setTimeout(() => setShow(false), remainingTime);
//     return () => clearTimeout(timer);
//   }, [startTime]);

//   if (!show) return null;
//   return <Loader />;
// }
// ====================================================================
export default function Loading() {
  return (
    <div className={`custom-loading ${"show"}`}>
      <div className="spinner">
        <Image src="/images/gwebpro_logo.png" alt="" width={173} height={49} />
        <div className="disc"></div>
      </div>
    </div>
  );
}
