import Hero from "@/components/hero";
import relaibiltyImg from "@/public/reliability.jpg";

export default function RelaibilityPage() {
  return (
    <Hero
      imgData={relaibiltyImg}
      alt="Relaibilty Image"
      title="Super high relaibilty hosting"
    />
  );
}
