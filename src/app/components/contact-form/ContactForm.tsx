"use client";

import React from "react";
import "./input.css";

type State = {
  email: string;
  subject: any;
  message: string;
  openCopiedToClipboard: boolean;
  emailSent: boolean;
  successMessage: string;
};

export default class ContactForm extends React.Component<{}, State> {
  state: State = {
    email: "",
    subject: "",
    message: "",
    openCopiedToClipboard: false,
    emailSent: false,
    successMessage: "",
  };

  handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    this.setState({ [e.target.name]: e.target.value } as unknown as Pick<
      State,
      keyof State
    >);
  };

  handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const mailApiUrl = process.env.MAIL_API_URL;
    const mailAccessKey = process.env.MAIL_ACCESS_KEY;

    if (!mailApiUrl) {
      console.error("Mail API URL is not defined in environment variables");
      return;
    }

    const response = await fetch(mailApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: mailAccessKey, // hide this in dot env
        email: this.state.email,
        subject: this.state.subject,
        message: this.state.message,
      }),
    });

    const result = await response.json();
    if (result.success) {
      console.log(result);
      this.setState({
        emailSent: true,
        successMessage: "Your message has been sent successfully!",
      });
    }
  };

  handleSendAnotherEmail = () => {
    this.setState((prevState) => ({
      ...prevState,
      name: "",
      email: "",
      message: "",
      openCopiedToClipboard: false,
      emailSent: false,
      successMessage: "",
    }));
  };

  render() {
    return (
      <>
        <div className="w-full px-[15px] sm:w-[500px]">
          {this.state.emailSent ? (
            <div className="success-message text-center">
              <p>{this.state.successMessage}</p>
              <button
                onClick={this.handleSendAnotherEmail}
                className="font-semibold text-blue-400 hover:text-blue-500 hover:underline transition ease-in-out duration-150 mt-[10px]"
              >
                Send Another Email
              </button>
            </div>
          ) : (
            <form
              onSubmit={this.handleSubmit}
              className="flex flex-col items-center gap-[20px] w-full"
            >
              <div className="floating-input relative w-full">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  className="h-16 w-full sm:full rounded-[15px] bg-transparent px-[20px] py-5 outline-none border-2 border-gray-800 hover:border-[#418DFF] focus:border-[#418DFF] transition-all duration-300 ease-in-out"
                  placeholder="name@example.com"
                  autoComplete="off"
                  required
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
                  name="subject"
                  // value={this.state.usernameEmail}
                  onChange={this.handleChange}
                  className="h-16 w-full sm:w-full rounded-[15px] bg-transparent px-[20px] py-5 outline-none border-2 border-gray-800 hover:border-[#418DFF] focus:border-[#418DFF] transition-all duration-300 ease-in-out"
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
          )}
        </div>
      </>
    );
  }
}
