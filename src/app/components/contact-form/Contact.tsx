"use client";

import React, { useState, ChangeEvent, useEffect } from "react";
import "./input.css";
import Link from "next/link";
import Image from "next/image";
import CopyToClipboard from "../CopyToClipboard";
import ContactPopup from "./ContactPopup";
import ButtonMailto from "./ButtonMailto";
import ProtonMail from "/public/protonmail.svg";
import Session from "/public/session.svg";
import SimpleX from "/public/simplex.svg";
import ContactForm from "./ContactForm";

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
        {/* Contact Form */}
        <ContactForm />

        {/* Contact Options */}
        <div className="flex flex-col xl:flex-row gap-[20px] mt-[100px]">
          <div className="w-[350px] h-[100px] truncate flex items-center gap-[15px] px-[20px] py-[10px] rounded-[10px] hover:bg-white hover:bg-opacity-10 transition duration-200">
            <div className="h-[50px] w-[50px] bg-white rounded-full flex items-center justify-center">
              <Image src={ProtonMail} alt="Email" className="h-[20px]" />
            </div>
            <div>
              <p className="text-white/40">Email address</p>
              <ButtonMailto
                label="hello@frederikdiamond.com"
                mailto="mailto:hello@frederikdiamond.com"
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
