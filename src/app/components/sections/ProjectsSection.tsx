import { Montserrat } from "next/font/google";
import Link from "next/link";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function ProjectsSection() {
  return (
    <div>
      <div className="flex items-center gap-[20px] relative">
        <span className="font-black text-[25px] opacity-50 text-stroke-1 text-stroke-white text-fill-black absolute max-[924px]:bottom-[70px] min-[925px]:left-[-50px]">
          02
        </span>
        <h1 className={`font-bold text-[50px] ${montserrat.className}`}>
          PROJECTS
        </h1>
      </div>
      <p>
        I enjoy working on projects in my spare time and always have plenty of
        ideas for things to build. As an optimist, I often dive into projects
        that end up being more challenging than expected. However, my
        determination drives me to learn whatever is necessary to complete them.
        <br />
        <br />I primarily focus on building web and native applications.
      </p>

      <div className="mt-5">
        <div>
          <i className="text-amber-500">
            Next step: Display the projects I&apos;m working on here...
          </i>
        </div>
      </div>
    </div>
  );
}
