import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Business() {
  return (
    <div>
      <div className="flex items-center gap-[20px] relative">
        <span className="font-black text-[25px] opacity-50 text-stroke-1 text-stroke-white text-fill-black absolute left-[-50px]">
          02
        </span>
        <h1 className={`font-bold text-[50px] ${montserrat.className}`}>
          BUSINESS
        </h1>
      </div>
      <p>
        I am working on a company called ForwardFuture 🚀
        <br />
        <br />
        The primary mission of this company is to develop innovative products
        that are not only cool but also fundamentally aimed at accelerating the
        future. Privacy and freedom are incredibly important values for the
        company and for myself personally. I believe in decentralization and
        open-source whenever it makes sense for the product.
      </p>
      {/* Company Structure */}
      <div>
        <p className="font-bold text-[25px]">
          ForwardFuture<span className="opacity-50">.xyz</span>
        </p>
        <div className="flex items-start">
          <p
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
          </p>
        </div>
      </div>
    </div>
  );
}
