import { Montserrat } from "next/font/google";
import Image from "next/image";
import ArrowIcon from "/public/arrow-icon.svg";
import { useState } from "react";

const montserrat = Montserrat({ subsets: ["latin"] });

type VisibilityState = {
  opensourceAndDecentralizationSection: boolean;
  effectiveAccelerationism: boolean;
};

export default function AboutSection() {
  const [visibility, setVisibility] = useState<VisibilityState>({
    opensourceAndDecentralizationSection: false,
    effectiveAccelerationism: false,
  });

  const toggleVisibility = (section: keyof VisibilityState) => {
    setVisibility((prevVisibility) => ({
      ...prevVisibility,
      [section]: !prevVisibility[section],
    }));
  };

  return (
    <div>
      <div className="flex items-center gap-[20px] relative">
        <span className="absolute z-[1] font-black text-[25px] text-black max-[437px]:bottom-[150px] max-[924px]:bottom-[70px] min-[925px]:left-[-50px]">
          04
        </span>
        <span className="font-black text-[25px] opacity-50 text-stroke-2 text-stroke-white text-fill-black absolute max-[437px]:bottom-[150px] max-[924px]:bottom-[70px] min-[925px]:left-[-50px]">
          04
        </span>
        <h1 className={`font-bold text-[50px] ${montserrat}`}>ABOUT</h1>
      </div>
      <p>
        Hi 👋 My name is Frederik and I am from Denmark 🇩🇰
        <br />
        <br />
        Technology has always been my passion, ever since I was young. I{"'"}m a
        creative person, always coming up with new ideas, and I think that{"'"}s
        why I enjoy coding so much. I love that I can take my ideas and start
        building them with just my MacBook.
        <br />
        <br />I{"'"}m currently studying for a degree in Software Engineering
        while building fun projects in my spare time every chance I get. My
        focus is on learning both web development and app development, diving
        into the latest technologies, frameworks, and best practices.
        <br />
        <br />
        I also enjoy experimenting with AI and machine learning using Python,
        exploring different algorithms and techniques to understand how they can
        be applied to solve real-world problems.
        <br />
        <br />
        The idea of computers being able to think on their own and learn from
        their mistakes, just like a human would, is truly fascinating to me.
      </p>
      <div className="flex flex-col gap-[40px] mt-10">
        <div className="flex flex-col gap-[15px]">
          <div
            className={`flex gap-[20px] cursor-pointer transition duration-150 ease-in-out select-none ${
              visibility.opensourceAndDecentralizationSection
                ? "opacity-100"
                : "opacity-50 hover:opacity-100"
            }`}
            onClick={() =>
              toggleVisibility("opensourceAndDecentralizationSection")
            }
          >
            <h3 className="font-semibold text-[20px]">
              Open source and Decentralization
            </h3>
            <Image
              src={ArrowIcon}
              alt="Arrow"
              height={11}
              className={`${
                visibility.opensourceAndDecentralizationSection
                  ? "rotate-180"
                  : ""
              } transform transition-transform duration-300 ease-in-out`}
            />
          </div>
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              visibility.opensourceAndDecentralizationSection
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-[15px]">
              My belief is that every software should be open-source and
              decentralized, at least when it makes sense for the product or
              service.
              <br />
              <br />
              <i>So, when does it make sense?</i>
              <br />
              Well, whenever trust and anti-censorship is important, I think you
              should only use software that is open-source and decentralized.
              Here are some examples of services that I think should absolutely
              be open-source and decentralized: a social media, crypto wallet or
              a chatting/messaging-protocol.
              <br />
              <i>But why?</i> Why is it so important for these specific types of
              services to be open-source and decentralized? Let{"'"}s start with
              a social-media platform. Why should a social media platform be
              open-source and decentralized? In the case of a social media,
              there are mainly one very important reason: free speech.
              <br />
              <br />I suppose we have all heard of the mass banning of people on
              the Big Tech platforms because the government and Big Tech deemed
              their opinions as not allowed. When people are banned for holding
              certain opinions, it{"'"}s censorship. It{"'"}s exactly what
              totalitarian governments do. They ban opinions they deem as being
              a threat to their establishment.
              <br />
              <br />A platform like Facebook can easily ban users because the
              platform is entirely closed and Meta controls EVERYTHING. On the
              contrary we have a decentralized protocol. For instance, a
              protocol like Nostr. Banning a user from the entire network of
              Nostr is practically impossible, since no single entity controls
              the protocol. It is run and operated by the people. This is what
              decentralized protocols are all about. The idea is to delegate the
              power to everyone. Or at least, many more than just one or very
              few entities.
              <br />
              <br />
              Another really cool thing about being decentralized is that users
              can choose their own frontend clients — coders can even build
              their own! You know, how on Instagram, you can only use the
              official Instagram app. With a decentralized protocol like Nostr,
              you can choose between many different or completely build your own
              client from scratch. That{"'"}s because the protocol is completely
              independent of any frontend.
              <br />
              <br />
              For a chatting/messaging protocol, being censorship-resistant is
              certainly important. You don’t want anyone to have the power to
              completely ban you from the service. But privacy might be even
              more important, because you definitely do not want anyone to read
              your private messages. I hope that we will see a messaging
              protocol that is completely independent of any specific app. A
              protocol that anyone can build upon and setup their own relay
              (server) — maybe Nostr or something similar is the future of
              private messaging just like it very much could be the future of
              social media.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-[15px]">
          <div
            className={`flex gap-[20px] cursor-pointer transition duration-150 ease-in-out select-none ${
              visibility.effectiveAccelerationism
                ? "opacity-100"
                : "opacity-50 hover:opacity-100"
            }`}
            onClick={() => toggleVisibility("effectiveAccelerationism")}
          >
            <h3 className="font-semibold text-[20px]">
              Effective Accelerationism
            </h3>
            <Image
              src={ArrowIcon}
              alt="Arrow"
              height={11}
              className={`${
                visibility.effectiveAccelerationism ? "rotate-180" : ""
              } transform transition-transform duration-300 ease-in-out`}
            />
          </div>
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              visibility.effectiveAccelerationism
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-[15px]">
              I believe technological growth improves the world.
              <br />
              <br />
              Basically, I am pro-technology, advocating for the rapid
              advancement of innovation as a means to solve our most pressing
              challenges. By accelerating technological development, we can
              revolutionize healthcare, address environmental issues, enhance
              human capabilities, and so much more. Effective accelerationism is
              not about reckless progress; it{"'"}s about harnessing technology
              thoughtfully and ethically to push humanity forward.
              <br />
              <br />
              Ultimately, I think being pro-technology means being pro-humanity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
