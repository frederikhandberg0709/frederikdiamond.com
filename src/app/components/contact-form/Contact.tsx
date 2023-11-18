"use client";

import React, { useState, ChangeEvent, useEffect } from "react";
import "./input.css";
import Link from "next/link";
import Image from "next/image";
import CopyToClipboard from "../CopyToClipboard";
import ContactPopup from "./ContactPopup";
import ButtonMailto from "./ButtonMailto";
import ProtonMail from "../../assets/protonmail.svg";
import Session from "../../assets/session.svg";
import SimpleX from "../../assets/simplex.svg";

type State = {
  email: string;
  message: string;
  openCopiedToClipboard: boolean;
};

export default class Contact extends React.Component<{}, State> {
  state: State = {
    email: "",
    message: "",
    openCopiedToClipboard: false,
  };

  handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    const { name, value } = target;

    // Assure TypeScript that the dynamic key is a valid key of the component's state
    // this.setState(
    //   (prevState) =>
    //     ({
    //       ...prevState,
    //       [name]: value,
    //     } as Pick<State, keyof State>)
    // );

    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  handleContactButton = () => {
    this.setState((prevState) => ({
      openCopiedToClipboard: !prevState.openCopiedToClipboard,
    }));
  };

  componentDidUpdate(prevProps: {}, prevState: State) {
    if (this.state.openCopiedToClipboard && !prevState.openCopiedToClipboard) {
      const timeout = setTimeout(() => {
        this.setState({ openCopiedToClipboard: false });
      }, 5000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }

  render() {
    return (
      <>
        <div className="w-[500px]">
          <form
            action="mailto:290750@via.dk"
            method="post"
            className="flex flex-col items-center gap-[20px] w-full"
          >
            <div className="floating-input relative w-full">
              <input
                type="email"
                id="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                className="h-16 w-[500px] rounded-[15px] bg-transparent px-[20px] py-5 outline-none border-2 border-gray-800 hover:border-[#418DFF] focus:border-[#418DFF] transition-all duration-300 ease-in-out"
                placeholder="name@example.com"
                autoComplete="off"
              />
              <label
                htmlFor="email"
                className="text-gray-400 pointer-events-none absolute top-0 left-0 h-full origin-left transform px-[25px] py-5 transition-all duration-150 ease-in-out"
              >
                Email (required)
              </label>
            </div>
            <div className="floating-input relative w-full">
              <input
                type="subject"
                id="subject"
                name=""
                // value={this.state.usernameEmail}
                onChange={this.handleChange}
                className="h-16 w-[500px] rounded-[15px] bg-transparent px-[20px] py-5 outline-none border-2 border-gray-800 hover:border-[#418DFF] focus:border-[#418DFF] transition-all duration-300 ease-in-out"
                placeholder="name@example.com"
                autoComplete="off"
              />
              <label
                htmlFor="email"
                className="text-gray-400 pointer-events-none absolute top-0 left-0 h-full origin-left transform px-[25px] py-5 transition-all duration-150 ease-in-out"
              >
                Subject
              </label>
            </div>

            <div className="floating-input relative w-full">
              <textarea
                name="message"
                placeholder="Message"
                className="border-2 border-gray-800 hover:border-blue-500 focus:border-blue-500 min-h-[200px] bg-transparent outline-none px-[20px] py-5 rounded-xl w-full transition ease-in-out"
                value={this.state.message}
                onChange={this.handleChange}
                required
              />
              <label
                htmlFor="message"
                className="text-gray-400 pointer-events-none absolute top-0 left-0 h-full origin-left transform px-[25px] py-5 transition-all duration-150 ease-in-out"
              >
                Message (required)
              </label>
            </div>
            <input
              type="submit"
              className="bg-blue-500 font-semibold text-[15px] px-[20px] py-[12px] rounded-md cursor-pointer mt-[10px] relative bottom-0 hover:drop-shadow-[0_10px_30px_rgba(59,130,246,0.75)] hover:bottom-[5px] transition-all ease-in-out disabled:cursor-not-allowed disabled:bg-[#418DFF]/20 disabled:shadow-none disabled:bottom-0"
              value="SEND"
              disabled={!this.state.email || !this.state.message}
            />
          </form>
        </div>

        <div className="flex gap-[20px] mt-[100px]">
          <div className="w-[350px] h-[100px] truncate flex items-center gap-[15px] px-[20px] py-[10px] rounded-[10px] hover:bg-white hover:bg-opacity-10 transition duration-200">
            <div className="h-[50px] w-[50px] bg-white rounded-full flex items-center justify-center">
              <Image src={ProtonMail} alt="Email" className="h-[20px]" />
            </div>
            <div>
              <p className="text-white/40">Email address</p>
              <ButtonMailto
                label="unknownuser0709@proton.me"
                mailto="mailto:unknownuser0709@proton.me"
              />
            </div>
          </div>
          <div className="w-[350px] h-[100px] flex items-center rounded-[10px] hover:bg-white hover:bg-opacity-10 transition duration-200">
            <div className="flex gap-[15px] items-center mx-[20px] my-[10px] text-ellipsis overflow-hidden whitespace-nowrap">
              <Image
                src={Session}
                alt="Session Messenger"
                className="h-[50px] w-[50px]"
              />
              <div>
                <p className="text-white/40">Session</p>
                <button onClick={this.handleContactButton}>
                  <CopyToClipboard />
                </button>
              </div>
            </div>
          </div>
          <div className="w-[350px] h-[100px] text-ellipsis flex items-center gap-[15px] px-[20px] py-[10px] rounded-[10px] hover:bg-white hover:bg-opacity-10 transition duration-200">
            <div className="h-[40px] w-[40px] bg-white rounded-full flex items-center justify-center">
              <Image
                src={SimpleX}
                alt="SimpleX Chat"
                className="h-[50px] w-[50px]"
              />
            </div>
            <div>
              <p className="text-white/40">SimpleX</p>
              <Link
                href="https://simplex.chat/contact#/?v=1-2&smp=smp%3A%2F%2F0YuTwO05YJWS8rkjn9eLJDjQhFKvIYd8d4xG8X1blIU%3D%40smp8.simplex.im%2FT8hXg42LKJ0NS6irlr2dAZrGmFdcEkx-%23%2F%3Fv%3D1-2%26dh%3DMCowBQYDK2VuAyEAYbBGwUuV1VtUgRLXLrV0BZje8GW7zD8YK8Lm-XpNWwA%253D%26srv%3Dbeccx4yfxxbvyhqypaavemqurytl6hozr47wfc7uuecacjqdvwpw2xid.onion"
                target="_blank"
                className="font-semibold transition-all hover:text-blue-500 hover:underline"
              >
                Link to QR-code
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`fixed top-[110px] z-50 w-flex flex items-center transition ease-in-out duration-200 slide-in-out
          ${
            this.state.openCopiedToClipboard
              ? "activeContactPopup"
              : "inactiveContactPopup"
          }`}
        >
          {this.state.openCopiedToClipboard && <ContactPopup />}
        </div>
      </>
    );
  }
}
