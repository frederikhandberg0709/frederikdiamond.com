/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { NostrProvider, useNostrEvents, useProfile } from "nostr-react";
import PostDropdownMenu from "./PostDropdownMenu";
import PostActionButton from "./reaction-buttons/ReactionButtons";
import styleHashtags from "../highlightHashtags";
import React, { FC } from "react";

interface NotesListProps {
  filterType: string;
  activeSection: string;
}

const NotesList: FC<NotesListProps> = ({ filterType, activeSection }) => {
  const relayUrls = ["wss://relay.primal.net", "wss://relay.damus.io"];

  return (
    <NostrProvider relayUrls={relayUrls} debug={true}>
      {/* <Profile /> */}
      <ProfileFeed filterType={filterType} activeSection={activeSection} />
    </NostrProvider>
  );
};

interface ProfileFeedProps {
  filterType: string;
  activeSection: string;
}

const ProfileFeed: React.FC<ProfileFeedProps> = ({
  filterType,
  activeSection,
}) => {
  const { events } = useNostrEvents({
    filter: {
      authors: [
        "9c9f81ed795f0f5efa558932824687d84fc7e6a4cfa6db5d6d3b50fcb7ffaec2",
      ],
      since: 0,
      kinds: [1],
    },
  });

  const pubkey =
    "9c9f81ed795f0f5efa558932824687d84fc7e6a4cfa6db5d6d3b50fcb7ffaec2";
  const { data: userData } = useProfile({
    pubkey,
  });

  function convertTimestamp(event: any) {
    var d = new Date(event.created_at * 1000), // Convert the passed timestamp to milliseconds
      yyyy = d.getFullYear(),
      mm = ("0" + (d.getMonth() + 1)).slice(-2), // Months are zero based. Add leading 0.
      dd = ("0" + d.getDate()).slice(-2), // Add leading 0.
      hh = d.getHours(),
      h = hh,
      min = ("0" + d.getMinutes()).slice(-2), // Add leading 0.
      ampm = "AM",
      time;

    if (hh > 12) {
      h = hh - 12;
      ampm = "PM";
    } else if (hh === 12) {
      h = 12;
      ampm = "PM";
    } else if (hh == 0) {
      h = 12;
    }

    // ie: 2014-03-24, 3:00 PM
    // time = yyyy + "-" + mm + "-" + dd + ", " + h + ":" + min + " " + ampm;
    time = dd + "-" + mm + "-" + yyyy + ", " + h + ":" + min + " " + ampm;
    return time;
  }

  const maxElements = 5;

  const hideMediaLinks = (content: string) => {
    const regex = /https:\/\/.*\.(jpg|png|mp4|avi|mov)/gi;
    return content.replace(regex, "");
  };

  const filterEvents = (events: any[]) => {
    return events.filter((event) => {
      const hasImage = /https:\/\/.*\.(jpg|png)/.test(event.content);
      const hasVideo = /https:\/\/.*\.(mp4|avi|mov)/.test(event.content);
      const isArticle = /#article/i.test(event.content);
      if (filterType == "articles" && isArticle) return true;
      if (filterType === "image" && hasImage) return true;
      if (filterType === "video" && hasVideo) return true;
      if (filterType === "text" && !hasImage && !hasVideo) return true;
      if (filterType === "all") return true;
      return false;
    });
  };

  return (
    <>
      <div className="flex flex-col gap-[20px] items-center">
        {filterEvents(events)
          .slice(0, maxElements)
          .map((event) => (
            <p
              key={event.id}
              className="flex flex-col gap-[20px] w-screen items-center sm:flex-none"
            >
              <div className="flex flex-col gap-[10px] sm:w-[600px] w-[90%] sm:border border-gray-900 hover:border-gray-800 transition duration-200 bg-black sm:p-[15px] sm:rounded-[15px]">
                {/* Author */}
                <div className="flex items-center justify-between">
                  <Link
                    href="https://primal.net/p/npub1nj0crmtetu84a7j43yegy358mp8u0e4ye7ndkhtd8dg0edll4mpqn52gqz"
                    className="flex gap-[10px] group"
                  >
                    {/* Profile picture */}
                    <img
                      src={userData?.picture}
                      alt="Frederik Diamond"
                      width={40}
                      height={40}
                      className="rounded-full h-[40px] w-[40px] object-cover"
                    />
                    <div className="flex flex-col gap-[1px]">
                      {/* Profile name */}
                      <p className="font-bold text-[13px] group-hover:text-blue-500">
                        {userData?.display_name}
                      </p>
                      {/* Username */}
                      <p className="text-[13px] text-gray-500">
                        @{userData?.name}
                      </p>
                    </div>
                  </Link>
                  <div className="flex items-center gap-[15px]">
                    {/* Time ago posted */}
                    <p className="text-[15px] text-right text-textGray">
                      {/* {event.created_at * 1000} */}
                      {convertTimestamp(event)}
                    </p>
                    <PostDropdownMenu />
                  </div>
                </div>
                {/* Text content */}
                <p className="text-[15px] leading-normal overflow-x-hidden">
                  {/* {hideMediaLinks(event.content)} */}
                  {styleHashtags(hideMediaLinks(event.content))}
                </p>
                {/* Image */}
                {(() => {
                  const regex = /https:\/\/.*\.(jpg|png)/;
                  const match = event.content.match(regex);
                  return match ? (
                    <img
                      src={match[0]}
                      alt="This is an image uploaded by FREDERIK DIAMOND's profile."
                      className="rounded-[10px]"
                    />
                  ) : null;
                })()}
                {/* Video */}
                {(() => {
                  const regex = /https:\/\/.*\.(mp4|avi|mov)/;
                  const match = event.content.match(regex);
                  return match ? (
                    <video
                      src={match[0]}
                      className="rounded-[10px]"
                      width="100%"
                      controls
                      autoPlay
                      muted
                    />
                  ) : null;
                })()}
                {/* Reaction buttons */}
                {/* <PostActionButton
                likeCount={event.like_count}
                commentCount={event.comment_count}
                shareCount={event.share_count}
                zapCount={event.zap_count}
              /> */}
              </div>
              <div className="h-[1px] w-full sm:h-0 bg-white/10"></div>
            </p>
          ))}
      </div>
    </>
  );
};

export default NotesList;
