import { Masonary } from "@/components";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-96 justify-between max-lg:flex-col-reverse lg:items-center">
      <Masonary />

      <div className="absolute top-[5.5rem] -z-10 h-96 w-full bg-neutral-200 lg:-top-20 lg:right-10"></div>

      <div className="z-20 flex max-w-96 flex-col gap-8 max-lg:-mb-24 md:max-lg:w-1/2 lg:mt-20 lg:max-w-[30rem] lg:text-right">
        <div className="space-y-2 uppercase">
          <h3 className="text-xs italic">Jsonplaceholder</h3>
          <h1 className="text-6xl font-bold lg:text-8xl">Posts</h1>
        </div>

        <p className="max-lg:pl-3 max-lg:text-sm text-black">
          Utilized Jsonplaceholder, a free and reliable fake API, for extensive
          testing and prototyping during development to ensure robust
          functionality.
        </p>
      </div>
    </section>
  );
};
export default HeroSection;
