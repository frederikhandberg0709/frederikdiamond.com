/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import ProjectNav from "@/app/components/ProjectNav";
import { DM_Serif_Display } from "next/font/google";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
});

export default function CryptoWithoutKyc() {
  return (
    <>
      {/* Navbar */}
      <ProjectNav projectName="CRYPTOWITHOUTKYC" />

      <main className="flex justify-center relative">
        <div className="w-[900px] mt-[250px]">
          <p className="text-white/50 text-[20px]">PROJECT NAME</p>
          <h1 className="font-black text-[90px] leading-none">
            CRYPTOWITHOUTKYC
          </h1>
          <div className="flex flex-col gap-[150px]">
            <div className="mt-[150px]">
              <h2 className={`${dmSerifDisplay.className} text-[50px]`}>
                What is it?
              </h2>
              <p className="text-[15px] opacity-70 leading-relaxed">
                Working on this...
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
                distinctio?
              </h2>
              <p className="text-[15px] opacity-70 leading-relaxed">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
                ullam ea exercitationem molestias error! Praesentium recusandae
                amet molestiae officia beatae repellat, suscipit quia, deserunt
                blanditiis obcaecati magni perspiciatis, sit quisquam maxime
                consequuntur voluptatem quis quae! Dolorum modi ut inventore
                maxime. Nulla veniam ut delectus itaque perferendis fugit
                laboriosam adipisci accusamus.
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
    </>
  );
}
