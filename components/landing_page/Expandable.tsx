import Image from "next/image";
const size: number = 380;

export default function Expandable() {
  return (
    <section className="flex h-screen text-white w-full">
      <div className="bg-dark-slate-wood-gradient collapsed-card">
        <h2 className="card-title">Cake</h2>
        <Image
          src={"/images/leaves.svg"}
          alt=""
          width={120}
          height={120}
          className="absolute top-2 rotate-90 left-0"
        />
        <Image
          src={"/images/leaves.svg"}
          alt=""
          width={70}
          height={70}
          className="absolute top-20 rotate-6 -right-4"
        />
        <Image
          src={"/images/leaf.svg"}
          alt=""
          width={80}
          height={50}
          className="absolute top-5 -left-8 rotate-0"
        />
        <Image
          src={"/images/leaf.svg"}
          alt=""
          width={60}
          height={60}
          className="absolute top-36 left-32 rotate-12 blur-sm"
        />
        <Image
          src={"/images/leaf.svg"}
          alt=""
          width={60}
          height={60}
          className="absolute top-56 -left-3 rotate-90 blur-sm"
        />
        <Image
          src={"/images/leaf.svg"}
          alt=""
          width={60}
          height={60}
          className="absolute top-56 -right-4 -rotate-90 blur-sm"
        />

        <Image
          src={"/images/realistic_cake.svg"}
          alt=""
          width={size}
          height={size}
        />
        <Image
          src={"/images/realistic_cake.svg"}
          className="opacity-25 absolute -bottom-[266px] -left-10 -rotate-[160deg]"
          alt=""
          width={size}
          height={size}
        />
        <Image
          src={"/images/strawberries.png"}
          className="absolute bottom-2"
          alt=""
          width={size}
          height={size}
        />
      </div>
      <div className="bg-wood-brown-gradient collapsed-card">
        <h2 className="card-title">Bread</h2>
        <Image
          src={"/images/realistic_bread.svg"}
          className="relative z-10"
          alt=""
          width={size}
          height={size}
        />
        <Image
          src={"/images/wheat.svg"}
          className="absolute -rotate-[33deg] opacity-10 -z-0 w-96"
          alt=""
          width={size}
          height={size}
        />
        <Image
          src={"/images/wheat.svg"}
          className="absolute -rotate-[23deg] -left-28 top-40 -z-0 w-96"
          alt=""
          width={size}
          height={size}
        />
        <Image
          src={"/images/wheat.svg"}
          className="absolute -rotate-[23deg] -left-28 top-40 -z-10 blur-sm"
          alt=""
          width={size}
          height={size}
        />
      </div>
      <div className="bg-charcoal-gray-gradient  collapsed-card">
        <h2 className="card-title">Pie</h2>
        <Image
          src={"/images/realistic_pie.svg"}
          alt=""
          width={size}
          height={size}
        />
        <Image
          src={"/images/particles_fruites.svg"}
          className="absolute -left-12 top-2 -z-0"
          alt=""
          width={600}
          height={600}
        />
      </div>
      <div className="bg-aquamarine-turquoise-gradient collapsed-card">
        <h2 className="card-title">Dessert</h2>
        <Image
          src={"/images/realistic_icecream.svg"}
          alt=""
          width={size}
          height={size}
        />
      </div>
    </section>
  );
}
