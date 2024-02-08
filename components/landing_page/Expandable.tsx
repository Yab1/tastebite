import Image from "next/image";
const size: number = 400;

export default function Expandable() {
  return (
    <section className="flex h-screen text-white w-full">
      <div className="bg-dark-slate-wood-gradient collapsed-card">
        <h2 className="card-title">Cake</h2>
        <Image
          src={"/images/realistic_cake.svg"}
          alt=""
          width={size}
          height={size}
        />
      </div>
      <div className="bg-wood-brown-gradient collapsed-card">
        <h2 className="card-title">Bread</h2>
        <Image
          src={"/images/realistic_bread.svg"}
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
