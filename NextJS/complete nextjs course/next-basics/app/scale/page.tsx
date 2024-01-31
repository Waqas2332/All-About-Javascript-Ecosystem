import Hero from "@/components/hero";
import scaleImg from "@/public/scale.jpg";

export default function ScalePage() {
  return (
    <Hero
      imgData={scaleImg}
      alt="Scale Image"
      title="Scale your up to infinity"
    />
  );
}
