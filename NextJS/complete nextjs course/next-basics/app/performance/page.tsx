import Hero from "@/components/hero";
import performanceImg from "@/public/performance.jpg";

export default function PerformancePage() {
  return (
    <Hero
      imgData={performanceImg}
      alt="Performance Image"
      title="We serve high performance applications"
    />
  );
}
