import Link from "next/link";
import NotesList from "../components/nostr/NotesList";

export default function BlogSection() {
  return (
    <div className="flex flex-col items-center relative">
      <div className="my-[20px]">
        <NotesList activeSection="all" filterType="all" />
      </div>

      <div className="sticky flex justify-center items-end z-10 bottom-0 h-[150px] w-full bg-gradient-to-b from-transparent to-black/90">
        <Link
          href="/blog"
          className="mb-[30px] hover:mb-[35px] text-[15px] font-semibold px-[20px] py-[12px] rounded-full bg-gradient-to-b from-[#0EBEFE] to-[#312FAD] hover:shadow-[0px_5px_30px_0px_#312FAD] transition-all duration-150 ease-in-out"
        >
          Visit my blog
        </Link>
      </div>
      {/* <Link
        href="https://primal.net/p/npub1nj0crmtetu84a7j43yegy358mp8u0e4ye7ndkhtd8dg0edll4mpqn52gqz"
        className="font-semibold text-[15px] mt-[10px] transition-all ease-in-out hover:text-purple-500"
      >
        Go to my Nostr profile
      </Link> */}
    </div>
  );
}
