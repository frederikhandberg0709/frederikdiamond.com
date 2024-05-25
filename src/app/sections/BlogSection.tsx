import Link from "next/link";
import NotesList from "../components/nostr/NotesList";

export default function BlogSection() {
  return (
    <div className="flex flex-col items-center relative">
      <div className="mt-[20px] mb-[20px]">
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

// {/* OLD */}
// <div className="w-[600px]">
//   <div className="flex flex-col gap-[10px] border border-gray-800 bg-black/50 backdrop-blur-md p-[15px] rounded-[15px]">
//     {/* Author */}
//     <div className="flex items-center justify-between">
//       <Link href="/profile" className="flex gap-[10px] group">
//         <Image
//           src="/fd-profile-pic.jpg"
//           alt="Frederik Diamond"
//           width={40}
//           height={40}
//           // src={item.author.profilePicture}
//           // alt={item.author.profileName}
//           className="rounded-full h-[40px] w-[40px] object-cover"
//         />
//         <div className="flex flex-col gap-[1px]">
//           <p className="font-bold text-[13px] group-hover:text-blue-500">
//             {/* {item.author.profileName} */}
//             FREDERIK DIAMOND
//           </p>
//           <p className="text-[13px] text-gray-500">
//             {/* @{item.author.username} */}
//             @frederikdiamond
//           </p>
//         </div>
//       </Link>
//       <div className="flex items-center gap-[15px]">
//         {/* Time ago posted */}
//         <p className="text-[15px] text-right text-textGray">
//           {/* {item.author.timeAgo} */}3 min ago
//         </p>
//         <PostDropdownMenu />
//       </div>
//     </div>
//     <p className="text-[15px] leading-normal">
//       This is a dummy post.
//       <br />
//       Working on adding the action buttons for like, comment, share, and
//       zaps for the posts.
//     </p>
//     <img
//       src="https://images.pexels.com/photos/1797121/pexels-photo-1797121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//       alt="Post image"
//       className="rounded-[10px]"
//     />
//     <PostActionButtons
//       likeCount={3}
//       commentCount={7}
//       shareCount={5}
//       zapCount={21}
//     />
//   </div>
// </div>
