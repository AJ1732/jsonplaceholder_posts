import { Button, Masonary } from "@/components";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-96 justify-between max-lg:flex-col-reverse lg:items-center">
      <Masonary />

      <div className="absolute top-24 -z-10 h-96 w-full bg-neutral-200 lg:right-10 lg:-top-20"></div>

      <div className="space-y-2 uppercase max-lg:-mb-24 lg:text-right">
        <h3 className="text-xs italic">Jsonplaceholder</h3>
        <h1 className="text-6xl font-bold">Posts</h1>
      </div>
    </section>
  );
};
export default HeroSection;
