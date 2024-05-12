import { Montserrat } from "next/font/google";
import Image from "next/image";
import ArrowIcon from "/public/arrow-icon.svg";
import { useState } from "react";

const montserrat = Montserrat({ subsets: ["latin"] });

type VisibilityState = {
  cypherpunkSection: boolean;
  opensourceAndDecentralizationSection: boolean;
  moneyAndTheState: boolean;
  effectiveAccelerationism: boolean;
};

export default function About() {
  const [visibility, setVisibility] = useState<VisibilityState>({
    cypherpunkSection: false,
    opensourceAndDecentralizationSection: false,
    moneyAndTheState: false,
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
        <span className="font-black text-[25px] opacity-50 text-stroke-1 text-stroke-white text-fill-black absolute left-[-50px]">
          05
        </span>
        <h1 className={`font-bold text-[50px] ${montserrat}`}>ABOUT</h1>
      </div>
      <p>
        Hi 👋 My name is Frederik and I am from Denmark 🇩🇰
        <br />
        <br />I have some big ambitious dreams. Some of which I am already
        pursuing, and others require too many resources for me to pursue yet. I
        {"'"}m currently studying for a degree in Software Engineering, so that
        doesn{"'"}t leave me much time. But any chance I get, I{"'"}m working
        hard on making my dreams come true. Except, of course, when I{"'"}m
        hitting the trails on my dirt bike, building drones, or capturing
        moments as a freelance news photographer.
        <br />
        <br />I am a big proponent of open-source software, crypto (mainly
        Monero), privacy, freedom, anonymity, and decentralized protocols (for
        instance Nostr).
      </p>
      <div className="relative my-[40px] h-[60px]">
        <h2
          className={`text-[40px] font-black absolute z-10 text-black hover:text-white ${montserrat}`}
        >
          CYPHERPUNK. E/ACC.
        </h2>
        <h2
          className={`text-[40px] font-black text-stroke-2 text-stroke-white text-fill-black absolute ${montserrat}`}
        >
          CYPHERPUNK. E/ACC.
        </h2>
      </div>
      <div className="flex flex-col gap-[40px]">
        <div className="flex flex-col gap-[15px]">
          <div
            className={`flex gap-[20px] cursor-pointer transition duration-150 ease-in-out select-none ${
              visibility.cypherpunkSection
                ? "opacity-100"
                : "opacity-50 hover:opacity-100"
            }`}
            onClick={() => toggleVisibility("cypherpunkSection")}
          >
            <h3 className="font-semibold text-[20px]">Cypherpunk</h3>
            <Image
              src={ArrowIcon}
              alt="Arrow"
              height={11}
              className={`${
                visibility.cypherpunkSection ? "rotate-180" : ""
              } transform transition-transform duration-300 ease-in-out`}
            />
          </div>
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              visibility.cypherpunkSection
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-[15px]">
              I hope that we will reach a future where the digital world becomes
              a cypherpunk utopia. Right now, we are very far from that. Big
              Tech controls almost all of the digital world. The truth is, that
              most privacy preserving products suck. The user experience is just
              horrible compared to what you{"'"}d expect after having used a
              product by Big Tech. It all makes sense. Big Tech consists of huge
              companies with loads of resources. It{"'"}s almost impossible to
              compete with them. Especially, because the monetary incentive is
              generally non existent in the open-source and privacy preserving
              space. I mean, how many privacy tools do you hear about generating
              a huge profit big enough to hire talented developers? Not many.
              Most are run by passionate developers who work on those projects
              in their spare time as hobbies — not fulltime jobs.
              <br />
              <br />
              I am not saying you cannot make a profitable business by making
              open source software. I think Proton, Red Hat, MongoDB, etc., are
              great examples showing that it really is possible to create a
              business that generates revenue even though their products are
              fully or partly open source.
              <br />
              And I certainly think open source will win over closed source. It
              will take. Probably a lot of time simply due to the large
              corporations we are up against — but it will happen!
            </p>
          </div>
        </div>
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
              visibility.moneyAndTheState
                ? "opacity-100"
                : "opacity-50 hover:opacity-100"
            }`}
            onClick={() => toggleVisibility("moneyAndTheState")}
          >
            <h3 className="font-semibold text-[20px]">Money and the State</h3>
            <Image
              src={ArrowIcon}
              alt="Arrow"
              height={11}
              className={`${
                visibility.moneyAndTheState ? "rotate-180" : ""
              } transform transition-transform duration-300 ease-in-out`}
            />
          </div>
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              visibility.moneyAndTheState
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-[15px]">
              I think money and the State should be independent. In fact, I don
              {"'"}t think the State should have any influence over the currency
              we choose to use. It should be completely driven by the market —
              meaning what people prefer. I believe people would eventually come
              to the conclusion that privacy coins are to be preferred because
              they are, well, private. Having a public ledger like Bitcoin is a
              huge disadvantage when you are up against State powers and
              companies (i.e. Chainalysis) who are doing everything they can to
              track every transaction on the blockchain.
              <br />
              <br />
              The big advantage Monero has over Bitcoin is that the Monero
              blockchain is private by design. You know how on Bitcoin, you are
              able to see every transaction on the network and how much people
              have in their wallets? Well, that{"'"}s not possible on Monero.
              The senders address is hidden by ring signatures, stealth
              addresses hide the receivers address and transaction amounts are
              also hidden on the network. Not to mention, even the amounts of
              Monero held in a wallet is hidden from the network.
              <br />
              <br />
              Is Monero perfect? Absolutely not. Privacy is an endless battle
              which means Monero will need to keep evolving. The reason why I am
              bullish on Monero compared to other privacy coins, is because of
              the strong community behind it. Monero is getting updated quite
              frequently in order to stay up-to-date with cutting-edge privacy
              features.
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
              Ultimately, being pro-technology means being pro-humanity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
