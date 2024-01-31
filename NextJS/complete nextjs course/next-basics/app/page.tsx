import Image from "next/image";
import homeImg from "@/public/home.jpg";

export default function Home() {
  return (
    <div>
      Home Page
      <div className="absolute -z-10 inset-0">
        <Image
          fill
          style={{ objectFit: "cover" }}
          src={homeImg}
          alt="Home Image"
        />
      </div>
    </div>
  );
}
