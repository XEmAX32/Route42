import { Suspense } from "react";
import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <Spline
      scene="https://prod.spline.design/jN9VUulDUPIpIpQO/scene.splinecode" 
      style={{ width: "100vw", height: "60vh" }}
      // className="w-[90vw] md:w-[50vw] md:h-[50vh] md:mx-auto"
    />
  );
}
