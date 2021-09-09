import Image from "next/image";
import styles from "../styles/aniamtionBorder.css";
export default function Home() {
  return (
    <div className="bg-cyan-50 flexs gap-5 w-screen h-screen overflow-x-hidden">
      <div className="w-96 h-96 bg-green-500 shadow-2xl text-red-100">
        qqweew
      </div>
      <div className="relative ">
        <Image src="/images/MainPageIcon.png" width={400} height={400} />
        <div className="absolute animationBorder   transition-all inset-0 border-4 border-double border-cyan-600 w-fll h-full "></div>
      </div>
    </div>
  );
}
