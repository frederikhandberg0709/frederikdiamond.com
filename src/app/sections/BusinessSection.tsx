import { Montserrat } from "next/font/google";
import Link from "next/link";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function BusinessSection() {
  return (
    <div>
      <div className="flex items-center gap-[20px] relative">
        <span className="font-black text-[25px] opacity-50 text-stroke-1 text-stroke-white text-fill-black absolute max-[924px]:bottom-[70px] min-[925px]:left-[-50px]">
          02
        </span>
        <h1 className={`font-bold text-[50px] ${montserrat.className}`}>
          BUSINESS
        </h1>
      </div>
      <p>
        I am working on a company called <b>ForwardFuture</b> 🚀
        <br />
        <br />
        <b>ForwardFuture</b> is a holding company that manages two sister
        companies, each working in their respective fields. The whole point of{" "}
        <b>ForwardFuture</b> is to accelerate the future through technological
        growth and advancement.
      </p>
      <p className="mt-[20px]">
        <b>HAPPYDIAMOND</b> is laser-focused on developing user-friendly
        consumer technology products designed to simplify and enhance daily
        life. While innovation drives all <b>HAPPYDIAMOND</b>
        {"'"}s products, the company and I place a particular emphasis on
        open-source and decentralization for those where user privacy and trust
        is essential and must not be compromised.
        <br />
        Trust cannot exist without transparency, which is why open-source is
        indispensable for certain products where trust is essential.
        <br />
        <br />
        The mission is to move the world toward a cypherpunk utopia by
        developing technology that greatly respects user privacy, freedom,
        anonymity, and decentralization.
      </p>
      <p className="mt-[20px]">
        <b>BeyondBiology</b> is combining artificial intelligence (AI) with
        biotechnology to develop chemical fertilizers aimed at enhancing the
        growth rates of agricultural plants.
      </p>
      {/* Company Structure */}
      <div className="flex flex-col items-center gap-[100px] mt-[50px]">
        <div className="flex flex-col items-center">
          <p className="font-medium opacity-50">Holding Company</p>
          <Link
            href="https://forwardfuture.xyz"
            className="font-bold text-[25px]"
          >
            ForwardFuture<span className="opacity-50">.xyz</span>
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row gap-[100px]">
          <div className="flex flex-col items-center gap-[5px]">
            <p className="font-medium opacity-50">Consumer Technology</p>
            <Link
              href="https://happydiamond.tech"
              className={`group flex flex-col text-center leading-none font-[montserrat] ${montserrat.className}`}
            >
              <span className="text-[#4dacfe] text-[35px] font-[900] group-hover:drop-shadow-[0_0px_35px_rgba(79,172,254,0.99)] transition duration-300 ease-in-out">
                HAPPY
              </span>
              <span className="text-[#fe5297] text-[35px] font-[900] group-hover:drop-shadow-[0_0px_35px_rgba(254,81,150,0.99)] transition duration-300 ease-in-out">
                DIAMOND
              </span>
              <span className="font-semibold text-[13px] opacity-50 mt-[5px]">
                BE DIFFERENT. BE UNIQUE.
              </span>
            </Link>
            {/* <p className="opacity-50 font-medium mt-[20px]">
              HAPPYDIAMOND.tech
            </p> */}
          </div>
          <div className="flex flex-col items-center">
            <p className="font-medium opacity-50">Biotechnology</p>
            <Link
              href="https://beyondbiology.tech"
              className="text-[25px] font-bold"
            >
              BeyondBiology
              <span className="opacity-50">.tech</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
