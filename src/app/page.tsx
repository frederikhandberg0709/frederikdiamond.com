"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Image from "next/image";
import Link from "next/link";
import PostDropdownMenu from "./components/nostr/PostDropdownMenu";
import PostActionButtons from "./components/nostr/reaction-buttons/ReactionButtons";
import "./components/gradients.css";
import NotesList from "./components/nostr/NotesList";
import Business from "./sections/Business";
import About from "./sections/About";
import Inventory from "./sections/Inventory";
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
        <header className="flex flex-col items-center gap-[20px] h-[100vh] w-full z-10">
          <h1 className="mt-[250px] z-10 text-[50px] font-black text-center leading-[60px]">
            UPCOMING
            <br />
            WEB / APP DEVELOPER
          </h1>
          <p className="text-[20px] text-amber-400 font-bold">
            🚧 WEBSITE UNDER CONSTRUCTION 🚧
          </p>
        </header>
        {/* <div className="header-gradient"></div>
        <Image
          src={Noise}
          className="absolute z-[-10] top-0 w-full h-full"
          alt="Decoration"
        /> */}
        <div className="flex justify-center py-[200px] w-full z-10">
          <div className="flex w-[90%] flex-col md:flex-row md:max-w-[800px] md:justify-center gap-[50px]">
            <div>
              <div className="flex items-center gap-[20px] relative">
                <span className="font-black text-[25px] opacity-50 text-stroke-1 text-stroke-white text-fill-black absolute left-[-50px]">
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
          className="flex flex-col items-center gap-[50px] pb-[100px] w-[90%] md:max-w-[800px]"
        >
          <Business />
        </div>
      </div>
      {/* My Nostr Timeline */}
      <div className="flex justify-center">
        <div
          id="blog"
          ref={blogRef}
          className="flex flex-col items-center gap-[50px] w-[800px] py-[100px]"
        >
          <div className="flex items-center gap-[20px]">
            <span className="font-black text-[25px] opacity-50 text-stroke-1 text-stroke-white text-fill-black">
              03
            </span>
            <h1 className="font-bold text-[50px]">MY NOSTR BLOG</h1>
          </div>
          <NotesList />

          {/* OLD */}
          <div className="w-[600px]">
            <div className="flex flex-col gap-[10px] border border-gray-800 bg-black/50 backdrop-blur-md p-[15px] rounded-[15px]">
              {/* Author */}
              <div className="flex items-center justify-between">
                <Link href="/profile" className="flex gap-[10px] group">
                  <Image
                    src="/fd-profile-pic.jpg"
                    alt="Frederik Diamond"
                    width={40}
                    height={40}
                    // src={item.author.profilePicture}
                    // alt={item.author.profileName}
                    className="rounded-full h-[40px] w-[40px] object-cover"
                  />
                  <div className="flex flex-col gap-[1px]">
                    <p className="font-bold text-[13px] group-hover:text-[#8E30EB]">
                      {/* {item.author.profileName} */}
                      FREDERIK DIAMOND
                    </p>
                    <p className="text-[13px] text-gray-500">
                      {/* @{item.author.username} */}
                      @frederikdiamond
                    </p>
                  </div>
                </Link>
                <div className="flex items-center gap-[15px]">
                  {/* Time ago posted */}
                  <p className="text-[15px] text-right text-textGray">
                    {/* {item.author.timeAgo} */}3 min ago
                  </p>
                  <PostDropdownMenu />
                </div>
              </div>
              <p className="text-[15px] leading-normal">
                Lorem ipsum dolor sit amet consectetur. Pellentesque nulla
                libero neque sapien facilisi tincidunt proin. Convallis turpis a
                in nec nisl hendrerit volutpat sit vestibulum.
              </p>
              <img
                src="https://images.pexels.com/photos/1797121/pexels-photo-1797121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Post image"
                className="rounded-[10px]"
              />
              <PostActionButtons
                likeCount={3}
                commentCount={7}
                shareCount={5}
                zapCount={21}
              />
            </div>
          </div>
          <Link
            href="https://primal.net/p/npub1nj0crmtetu84a7j43yegy358mp8u0e4ye7ndkhtd8dg0edll4mpqn52gqz"
            className="bg-blue-500 font-semibold text-[15px] px-[20px] py-[12px] rounded-md cursor-pointer mt-[10px] relative bottom-0 hover:drop-shadow-[0_10px_30px_rgba(59,130,246,0.75)] hover:bottom-[5px] transition-all ease-in-out"
          >
            SHOW ALL
          </Link>
        </div>
      </div>
      {/* Inventory Section */}
      <div className="flex justify-center">
        <div
          id="inventory"
          ref={inventoryRef}
          className="flex flex-col items-start gap-[50px] w-[800px] py-[100px]"
        >
          <Inventory />
        </div>
      </div>
      {/* About Section */}
      <div className="flex justify-center">
        <div
          id="about"
          ref={aboutRef}
          className="flex flex-col items-center gap-[50px] pb-[100px] w-[90%] md:max-w-[800px]"
        >
          <About />
        </div>
      </div>
      {/* Contact Section */}
      <div ref={contactRef}>
        <Footer contactVisibility={contactVisibility} />
      </div>
    </main>
  );
}
