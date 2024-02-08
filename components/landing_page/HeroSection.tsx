import Link from "next/link";
import { Heart, Search, UserRound } from "lucide-react";
import Image from "next/image";
import bread from "@/public/images/bread.svg";
import wheat_with_three_leaves from "@/public/images/wheat_with_three_leaves.svg";
import wheat_with_three_leaves_blur from "@/public/images/wheat_with_three_leaves_blur.svg";
import wheat_with_two_leaves from "@/public/images/wheat_with_two_leaves.svg";
import wheats from "@/public/images/wheats.svg";
import smoke from "@/public/images/smoke.svg";

export default function HeroSection() {
  return (
    <section className="bg-black h-screen relative">
      <nav className="flex items-center justify-center pr-20 py-5 relative z-10">
        <ul className="flex gap-12 flex-1 justify-center">
          <li>
            <Link href={"/"} className="text-[30px]">
              Home
            </Link>
          </li>
          <li>
            <Link href={"/"} className="text-[30px]">
              Feed
            </Link>
          </li>
          <li>
            <Link href={"/"} className="text-[30px]">
              Recipes
            </Link>
          </li>
          <li>
            <Link href={"/"} className="text-[30px]">
              Contact
            </Link>
          </li>
        </ul>

        <ul className="flex gap-11 ml-auto">
          <li className="cursor-pointer">
            <Search size={36} />
          </li>
          <li>
            <Link href={"/"}>
              <Heart size={36} />
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <UserRound size={36} />
            </Link>
          </li>
        </ul>
      </nav>

      <div className="pl-20 flex flex-col py-28 gap-3 h-full z-10 relative">
        <p className="text-[70px] flex flex-col cursor-default">
          BE THE CHEF OF YOUR <span>KITCHEN</span>
        </p>
        <p className="text-[26px] cursor-default">
          From Breakfast to Dinner, We Have You Covered
        </p>
        <button className="text-[24px] linear-gradient  w-fit px-12 py-2 rounded-full mt-12">
          Explore
        </button>
      </div>
      <Image
        alt="A bread with a flore splashing"
        src={wheats}
        sizes="100vw"
        className="absolute -top-16 left-[600px]"
        style={{
          width: "500px",
          height: "500px",
        }}
      />
      <div>
        <Image
          alt="A bread with a flore splashing"
          src={wheat_with_three_leaves_blur}
          sizes="100vw"
          className="absolute top-2 -left-4"
          style={{
            width: "350px",
            height: "350px",
          }}
        />
        <Image
          alt="A bread with a flore splashing"
          src={wheat_with_three_leaves}
          sizes="100vw"
          className="absolute top-0 -left-5"
          style={{
            width: "350px",
            height: "350px",
          }}
        />
      </div>
      <Image
        alt="A bread with a flore splashing"
        src={wheat_with_two_leaves}
        sizes="100vw"
        className="absolute -right-[90px] top-16 z-10"
        style={{
          width: "400px",
          height: "400px",
        }}
      />
      <Image
        alt="A bread with a flore splashing"
        src={smoke}
        sizes="100vw"
        className="absolute -right-56 top-1 -z-0"
        style={{
          width: "1500px",
          height: "1500px",
        }}
      />
      <Image
        alt="Smoke"
        src={smoke}
        sizes="100vw"
        className="absolute top-0 rotate-180"
        style={{
          width: "1000px",
          height: "1000px",
        }}
      />
      <Image
        alt="A bread with a flore splashing"
        src={bread}
        sizes="100vw"
        className="absolute -bottom-28"
        style={{
          width: "100%",
        }}
      />
    </section>
  );
}
