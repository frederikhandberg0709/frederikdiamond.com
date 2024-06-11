"use client";
/* eslint-disable @next/next/no-img-element */

import { useRef, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Link from "next/link";
import "./components/gradients.css";
import HeaderSection from "./sections/HeaderSection";
import InventorySection from "./sections/InventorySection";
import AboutSection from "./sections/AboutSection";
import BlogSection from "./sections/BlogSection";
import BusinessSection from "./sections/BusinessSection";
// import Noise from "../../public/noise.svg";

export default function Home() {
  const homeRef = useRef<HTMLDivElement>(null);
  const businessRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);
  const inventoryRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const [contactVisibility, setContactVisibility] = useState<boolean>(true);

  return (
    <main>
      <Navbar
        homeRef={homeRef}
        businessRef={businessRef}
        blogRef={blogRef}
        inventoryRef={inventoryRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
      />
      <div ref={homeRef} id="home" className="relative w-full">
        <HeaderSection />
        <div className="flex justify-center py-[200px] w-full z-10">
          <div className="flex w-[90%] flex-col md:flex-row md:max-w-[800px] md:justify-center gap-[50px]">
            <div>
              <div className="flex items-center gap-[20px] relative">
                <span className="font-black text-[25px] opacity-50 text-stroke-1 text-stroke-white text-fill-black absolute max-[924px]:bottom-[70px] min-[925px]:left-[-50px]">
                  01
                </span>
                <h1 className="font-montserrat text-[50px] font-black leading-[70px]">
                  PRIVACY.
                </h1>
              </div>

              <h1 className="font-montserrat text-[50px] font-black leading-[70px]">
                FREEDOM.
                <br />
                ANONYMITY.
              </h1>
            </div>
            <div className="flex flex-col gap-[15px] mt-[50px] text-[16px]">
              <p className="font-semibold">
                I believe privacy is a human right.
              </p>
              <div className="flex flex-col gap-[15px] opacity-80">
                <p>
                  Without the freedom to use technology that empowers anonymity,
                  we don’t have any privacy.
                </p>
                <p>
                  We see laws being proposed and passed that are in direct
                  conflict with the right to privacy.
                </p>
                <p>
                  For example, the British government has proposed a bill that
                  would make end-to-end encrypted messaging illegal.
                </p>
                <p>
                  Governments around the world are at war with our rights to
                  privacy. We must not let them win! Otherwise, we risk being on
                  a path towards a tyrannical state, from which reversing course
                  will not be easy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Business Section */}
      <div className="flex justify-center">
        <div
          id="business"
          ref={businessRef}
          className="flex flex-col items-center gap-[50px] pb-[100px] w-[90%] md:max-w-[800px] py-[100px]"
        >
          <BusinessSection />
        </div>
      </div>
      {/* My Nostr Timeline */}
      <div className="flex justify-center">
        <div
          id="blog"
          ref={blogRef}
          className="flex flex-col items-center gap-[50px] w-full min-[800px]:w-[800px] py-[100px]"
        >
          <div className="flex flex-col items-center w-[90%] sm:w-full">
            <div className="flex items-center gap-[20px] relative">
              <span className="font-black text-[25px] opacity-50 text-stroke-1 text-stroke-white text-fill-black absolute max-[924px]:bottom-[150px] min-[925px]:left-[-50px]">
                03
              </span>
              <h1 className="font-bold text-[50px] sm:text-center">
                MY NOSTR BLOG
              </h1>
            </div>
            <p className="sm:text-center text-[15px] opacity-75">
              On my Nostr blog, I write about the topics I{"’"}m passionate
              about.
              <br />
              These primarily include business, technology, Monero, privacy,
              freedom, e/acc, and capitalism.
              <br />I also share the pictures and videos I capture as a news
              photographer.
            </p>
            <p className="mt-[15px] text-[16px]">
              Visit{" "}
              <Link
                href="frederikdiamond.com/blog"
                className="font-semibold text-blue-400 hover:text-blue-500 hover:underline transition ease-in-out duration-150"
              >
                frederikdiamond.com/blog
              </Link>{" "}
              to see all my posts and articles.
            </p>
          </div>
          <BlogSection />
        </div>
      </div>
      {/* Inventory Section */}
      <div className="flex justify-center">
        <div
          id="inventory"
          ref={inventoryRef}
          className="flex flex-col items-start gap-[50px] w-[90%] md:max-w-[800px] py-[100px]"
        >
          <InventorySection />
        </div>
      </div>
      {/* About Section */}
      <div className="flex justify-center">
        <div
          id="about"
          ref={aboutRef}
          className="flex flex-col items-center gap-[50px] pb-[100px] w-full md:max-w-[800px] mx-[25px] py-[100px]"
        >
          <AboutSection />
        </div>
      </div>
      {/* Contact Section */}
      <div ref={contactRef}>
        <Footer contactVisibility={contactVisibility} />
      </div>
    </main>
  );
}
