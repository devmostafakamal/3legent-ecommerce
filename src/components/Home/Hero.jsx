import heroBg from "../../.././src/assets/images/hero_bg.png";
import PrimaryButton from "../ui/button/PrimaryButton";

export default function Hero() {
  return (
    <section
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="max-w-6xl mx-auto py-48 px-2">
        <h1
          className="text-[72px] font-medium leading-[1.2] tracking-[-2px]
          bg-linear-to-b from-white/80 via-white/90 to-white/80
          bg-clip-text text-transparent"
        >
          More than <br /> just a game. <br /> It&apos;s a lifestyle.
        </h1>

        <p className="text-white text-xl mt-2 mb-7 leading-8 inter">
          Whether you're just starting out, have played <br />
          your whole life or you're a Tour pro, your <br />
          swing is like a fingerprint.
        </p>

        <PrimaryButton>Shopping Now</PrimaryButton>
      </div>
    </section>
  );
}
