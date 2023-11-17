/* eslint-disable @next/next/no-img-element */
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Image from "next/image";
import Link from "next/link";
import PostDropdownMenu from "./components/PostDropdownMenu";
import PostActionButton from "./components/PostActionButton";
import "./components/gradients.css";
import Noise from "../../public/noise.svg";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div id="home" className="relative h-[100vh] w-[100%]">
        <header className="flex justify-center h-[100%] w-[100%] z-10">
          <h1 className="mt-[200px] z-10 text-[50px] font-black text-center leading-[60px]">
            UPCOMING
            <br />
            WEB / APP DEVELOPER
          </h1>
        </header>
        {/* <div className="header-gradient"></div>
        <Image
          src={Noise}
          className="absolute z-[-10] top-0 w-full h-full"
          alt="Decoration"
        /> */}
      </div>
      <div className="flex justify-center h-[100vh] z-10">
        {/* <div className="md:gap-[100px] w-[90%] md2:flex lg:w-[800px]"> */}
        <div className="flex w-[800px] gap-[50px]">
          <h1 className="font-montserrat text-[50px] font-black leading-[70px]">
            PRIVACY.
            <br />
            FREEDOM.
            <br />
            ANONYMITY.
          </h1>
          <div className="flex flex-col gap-[15px] mt-[50px] text-[16px]">
            <p className="font-semibold">I believe privacy is a human right.</p>
            <div className="flex flex-col gap-[15px] opacity-80">
              <p>
                Without the freedom to use technology that empowers anonymity,
                we don’t have any privacy.
              </p>
              <p>
                The essence of privacy hinges on our ability to harness
                technology that empowers anonymity. Without this capability, the
                very concept of privacy becomes fragile.
              </p>
              <p>
                We are witnessing the introduction and enactment of legislation
                that directly challenges our right to privacy. For instance, the
                British government has put forward a bill that seeks to outlaw
                end-to-end encrypted messaging.
              </p>
              <p>
                Governments worldwide seem to be in opposition to our
                fundamental privacy rights. It is our duty to resist their
                encroachments. Otherwise, we risk descending into a state of
                tyranny, and reclaiming our freedoms may prove to be an arduous
                journey.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* My Projects */}
      <div id="projects" className="flex justify-center py-[100px]">
        <div className="flex flex-col items-center gap-[50px] w-[800px]">
          <h1 className="font-bold text-[50px] mt-[100px]">MY PROJECTS</h1>
        </div>
      </div>
      {/* My Nostr Timeline */}
      <div id="blog" className="flex justify-center py-[100px]">
        <div className="flex flex-col items-center gap-[50px] w-[800px]">
          <h1 className="font-bold text-[50px] mt-[100px]">MY NOSTR BLOG</h1>
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
              <PostActionButton
                likeCount={3}
                commentCount={7}
                shareCount={5}
                zapCount={21}
              />
            </div>
          </div>
          <Link
            href="#"
            className="bg-blue-500 font-semibold text-[15px] px-[20px] py-[12px] rounded-md cursor-pointer mt-[10px] relative bottom-0 hover:drop-shadow-[0_10px_30px_rgba(59,130,246,0.75)] hover:bottom-[5px] transition-all ease-in-out"
          >
            SHOW ALL
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
