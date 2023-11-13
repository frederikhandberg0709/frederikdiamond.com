import Link from "next/link";
import Twitter from "public/assets/images/twitter.svg";
import Nostr from "public/assets/images/nostr.svg";
import Instagram from "public/assets/images/instagram.svg";
import Noise from "public/assets/images/noise.png";
import Image from "next/image";
import FooterGradient from "public/assets/images/footer-gradient.png";

export default function Footer() {
  return (
    <>
      {/* Contact & Footer */}
      <div id="contact" className="relative h-[100vh]">
        <div className="relative z-10 h-full flex flex-col items-center">
          <div className="flex flex-col items-center mt-[100px]">
            <h1 className="text-[50px] font-bold">CONTACT</h1>
            {/* Contact Options */}
            {/* <Contact /> */}
            {/* Social Links */}
            <div className="flex gap-[40px] mt-[60px]">
              {/* Twitter */}
              <Link href="https://twitter.com/frederikdiamond" target="_blank">
                <Image
                  src={Twitter}
                  alt="Twitter"
                  className="rounded-full h-[60px] hover:scale-150 transition-all ease-in-out"
                />
              </Link>
              {/* Nostr */}
              <Link
                href="https://snort.social/p/npub1nj0crmtetu84a7j43yegy358mp8u0e4ye7ndkhtd8dg0edll4mpqn52gqz"
                target="_blank"
              >
                <Image
                  src={Nostr}
                  alt="Nostr"
                  className="rounded-full h-[60px] hover:scale-150 transition-all ease-in-out"
                />
              </Link>
              {/* Instagram */}
              <Link
                href="https://www.instagram.com/frederik_diamond/"
                target="_blank"
              >
                <Image
                  src={Instagram}
                  alt="Instagram"
                  className="rounded-full h-[60px] hover:scale-150 transition-all ease-in-out"
                />
              </Link>
            </div>
            <p className="mt-[60px] text-center text-[#5F5F5F]">
              This website is open-source.
              <br />
              Check the code here:
            </p>
            <Link
              href="https://github.com/frederikdiamond/frederikdiamond-personal_website"
              target="_blank"
              className="flex items-center gap-[5px] mt-[15px] px-[10px] py-[10px] border-solid border-white border-[3px] rounded-lg font-medium text-[17px] group hover:bg-white hover:drop-shadow-[0_5px_40px_rgba(255,255,255,0.35)] transition-all ease-in-out"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="h-[40px] fill-white group-hover:fill-black"
              >
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
              </svg>
              <p className="text-[20px] font-medium group-hover:text-black">
                GitHub
              </p>
            </Link>
          </div>
          <p className="absolute bottom-[20px] text-[15px]">
            MADE WITH ❤️ BY{" "}
            <span className="font-semibold">FREDERIK DIAMOND</span>
          </p>
        </div>
        <div>
          <Image
            src={Noise}
            className="absolute z-[-1] bottom-0 w-full"
            alt="Decoration"
          />
          <Image
            src={FooterGradient}
            className="absolute z-[-2] bottom-0 w-full"
            alt="Decoration"
          />
        </div>
      </div>
    </>
  );
}
