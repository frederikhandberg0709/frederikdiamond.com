"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import "../../components/gradients.css";
import { DM_Serif_Display } from "next/font/google";
import { useEffect, useState } from "react";
import Footer from "@/app/components/Footer";
import ProjectNav from "@/app/components/ProjectNav";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
});

export default function BLOPstr() {
  const [contactVisibility, setContactVisibility] = useState<boolean>(false);

  return (
    <>
      {/* Navbar */}
      <ProjectNav projectName="BLOPstr!" />

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
                  src="https://media.primal.net/uploads/b/ee/d1/beed1c36b09b892871d9d0e9566dc7a0556077a38253608fc89c57b455ab35aa.png"
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

      {/* Footer */}
      <Footer contactVisibility={contactVisibility} />
    </>
  );
}
