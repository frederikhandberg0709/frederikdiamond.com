"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import "../../components/gradients.css";
import { DM_Serif_Display } from "next/font/google";
import { useEffect, useState } from "react";
import Footer from "@/app/components/Footer";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
});

export default function BLOPstr() {
  // Background opacity
  const [opacity, setOpacity] = useState(0);
  // Blurry effect behind the navbar
  const [blurValue, setBlurValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (0.3 * window.innerHeight)) * 100;
      const newOpacity = Math.min(0.75, scrollPercent / 100); // Maximum 75% opacity
      setOpacity(newOpacity);

      const maxScroll = document.body.clientHeight * 0.05;
      const newBlurValue = Math.min(15, (window.scrollY / maxScroll) * 15); // Maximum 15px for backdrop blur
      setBlurValue(newBlurValue);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const navbarStyle = {
    backgroundColor: `rgba(0, 0, 0, ${opacity})`,
    backdropFilter: `blur(${blurValue}px)`,
  };

  const [openMenu, setOpenMenu] = useState(false);

  const [contactVisibility, setContactVisibility] = useState<boolean>(false);

  return (
    <>
      {/* Navbar */}
      <nav
        className="navbar w-full flex flex-col justify-center items-center fixed top-0 left-0 right-0 z-50 bg-[rgba(0,0,0,0)] backdrop-blur-0"
        style={navbarStyle}
      >
        <div className="flex items-center gap-[5px] w-[90%] mt-[15px] mb-[15px]">
          {/* Brand */}
          <Link href="/" className="text-center leading-[25px] group mr-[10px]">
            <p className="text-[20px] font-black text-[#4FACFE] group-hover:drop-shadow-[0_0px_15px_rgba(79,172,254,1)] transition-all ease-in-out duration-200">
              FREDERIK
            </p>
            <p className="text-[20px] font-black text-[#FE5196] group-hover:drop-shadow-[0_0px_15px_rgba(254,81,150,1)] transition-all ease-in-out duration-200">
              DIAMOND
            </p>
          </Link>

          <svg
            width="30"
            height="30"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="none"
              stroke="#78787878"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="4"
              d="M19 12L31 24L19 36"
            />
          </svg>
          <Link
            href="/#projects"
            className="font-semibold text-gray-500 px-[10px] py-[5px] rounded-lg hover:text-white hover:bg-gray-600/50 transition-all ease-in-out duration-200"
          >
            PROJECTS
          </Link>
          <svg
            width="30"
            height="30"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="none"
              stroke="#78787878"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="4"
              d="M19 12L31 24L19 36"
            />
          </svg>
          <Link
            href="/projects/blopstr"
            className="font-semibold text-gray-500 px-[10px] py-[5px] rounded-lg hover:text-white hover:bg-gray-600/50 transition-all ease-in-out duration-200"
          >
            BLOPstr!
          </Link>
        </div>
      </nav>

      <main className="flex justify-center relative">
        <div className="w-[900px] mt-[250px]">
          <p className="text-white/50 text-[20px]">PROJECT NAME</p>
          <h1 className="font-black text-[90px] leading-none">BLOPstr!</h1>
          <div className="flex flex-col gap-[150px]">
            <div className="mt-[150px]">
              <h2 className={`${dmSerifDisplay.className} text-[50px]`}>
                What is it?
              </h2>
              <p className="text-[15px] opacity-70 leading-relaxed">
                BLOPstr is a beautiful and easy-to-use social media built on the
                open-protocol called Nostr.
                <br />
                <br />
                Nostr is an open protocol for decentralized social networking
                and communication. Nostr is the only viable solution that truly
                enables freedom and anti-censorship. Its name is an acronym for
                {` "`}Notes and Other Stuff Transmitted by Relays.{`"`}
                <br />
                <br />
                Unlike traditional social networks that are controlled by a
                single entity, Nostr is decentralized. This means there is no
                central server or authority controlling the network.
                <br />
                <br />
                The network operates through a combination of relays and
                clients. Relays are servers that pass messages around, and
                clients are user-facing applications that people use to interact
                with the network. Anyone can run a relay, and users can choose
                which relays to use.
                <br />
                <br />
                BLOPstr is one of the many social-media clients available for
                Nostr. However, where BLOPstr differs from almost every other
                client is its beautiful user-interface and ease-of-use.
                <br />
                <br />
                My ultimate goal of BLOPstr is developing a Nostr client where
                users are in 100% control of everything. For instance, deciding
                which algorithm you want to use, or no algorithm at all.
              </p>
              <div className="rounded-[15px] h-[500px] w-full mt-[50px] relative bottom-0 hover:bottom-[10px] ease-in-out duration-300">
                <img
                  src="https://imgproxy.iris.to/insecure/plain/https://image.nostr.build/07270fb2796c41f0168f5940cc6de38a6b5472fc1879683c7ebd31de8e46ebc9.png"
                  alt="Blopstr Preview"
                  className="object-cover rounded-[15px]"
                />
              </div>
            </div>
            <div className="mt-[50px]">
              <h2 className={`${dmSerifDisplay.className} text-[50px]`}>
                How to make Nostr profitable?
              </h2>
              <p className="text-[15px] opacity-70 leading-relaxed">
                It’s always about money. People need an incentive to spend their
                time developing a client for Nostr or running a relay.
                <br />
                <br />
                The truth is, right now there isn’t much of a monetary
                incentive. However, the incentive for me and many others lies in
                fighting for freedom and against big-tech.
                <br />
                <br />
                Some relays require a one-time payment or subscription to use.
                We might see some relays and clients starting to implement
                advertisements.
              </p>
            </div>
            <div>
              <h2 className={`${dmSerifDisplay.className} text-[50px]`}>
                Tech-Stack
              </h2>
              <p className="text-[15px] opacity-70 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
                veniam esse voluptate itaque rem doloremque voluptatibus eius
                mollitia velit recusandae, totam eum odit quae, molestiae
                excepturi neque beatae. Neque fugit accusantium assumenda est
                aliquid provident temporibus. Ullam autem eos provident minus
                vel veniam quod, esse voluptatem similique neque, iusto quas.
              </p>
            </div>
          </div>
        </div>
        <div className="header-gradient top-[0%] left-[20%]"></div>
      </main>
      <Footer contactVisibility={contactVisibility} />
    </>
  );
}
