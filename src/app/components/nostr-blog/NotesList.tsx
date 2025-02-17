/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { NostrProvider, useNostrEvents, useProfile } from "nostr-react";
import PostDropdownMenu from "./PostDropdownMenu";
import PostActionButton from "./reaction-buttons/ReactionButtons";
import styleHashtags from "../highlightHashtags";
import React, { FC, useEffect, useState } from "react";

interface NotesListProps {
  filterType: string;
  activeSection: string;
  maxElements: number;
}

const NotesList: FC<NotesListProps> = ({
  filterType,
  activeSection,
  maxElements,
}) => {
  const relayUrls = ["wss://relay.primal.net", "wss://relay.damus.io"];

  return (
    <NostrProvider relayUrls={relayUrls} debug={true}>
      {/* <Profile /> */}
      <ProfileFeed
        filterType={filterType}
        activeSection={activeSection}
        maxElements={maxElements}
      />
    </NostrProvider>
  );
};

interface ProfileFeedProps {
  filterType: string;
  activeSection: string;
  maxElements: number;
}

const ProfileFeed: React.FC<ProfileFeedProps> = ({
  filterType,
  activeSection,
  maxElements,
}) => {
  const [overlayImage, setOverlayImage] = useState<string | null>(null);
  const { events } = useNostrEvents({
    filter: {
      authors: [
        "9c9f81ed795f0f5efa558932824687d84fc7e6a4cfa6db5d6d3b50fcb7ffaec2",
      ],
      since: 0,
      kinds: [1],
      limit: 20,
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
    time = dd + "-" + mm + "-" + yyyy + ", " + h + ":" + min + " " + ampm;
    return time;
  }

  const processContent = (content: string) => {
    const mediaUrls = extractMediaUrls(content);
    const textContent = hideMediaLinks(content);
    return { mediaUrls, textContent };
  };

  const hideMediaLinks = (content: string) => {
    const regex = /https:\/\/.*\.(jpg|png|mp4|avi|mov|webp)/gi;
    return content.replace(regex, "");
  };

  const extractMediaUrls = (content: string) => {
    const imageRegex = /https:\/\/.*?\.(jpg|png|webp)/gi;
    const videoRegex = /https:\/\/.*?\.(mp4|avi|mov)/gi;

    const imageMatches = content.match(imageRegex);
    const videoMatches = content.match(videoRegex);

    const images = imageMatches ? [...imageMatches] : [];
    const videos = videoMatches ? [...videoMatches] : [];

    return {
      images,
      videos,
    };
  };

  const filterEvents = (events: any[]) => {
    return events.filter((event) => {
      const { images, videos } = extractMediaUrls(event.content);
      const isArticle = /#article/i.test(event.content);

      if (filterType == "articles" && isArticle) return true;
      if (filterType === "image" && images.length > 0) return true;
      if (filterType === "video" && videos.length > 0) return true;
      if (filterType === "text" && images.length === 0 && videos.length === 0)
        return true;
      if (filterType === "all") return true;
      return false;
    });
  };

  const handleImageClick = (src: string) => {
    setOverlayImage(src);
    document.body.style.overflow = "hidden"; // Disable scrolling
  };

  const closeOverlay = () => {
    setOverlayImage(null);
    document.body.style.overflow = "auto"; // Enable scrolling
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeOverlay();
    }
  };

  const renderMedia = ({
    images,
    videos,
  }: {
    images: string[];
    videos: string[];
  }) => {
    console.log("Rendering media with:", { images, videos });

    if (!images?.length && !videos?.length) {
      return null;
    }

    return (
      <div className="flex flex-col gap-4">
        {images.map((imgUrl, index) => (
          <img
            key={`img-${index}`}
            src={imgUrl}
            alt={`Media content ${index + 1}`}
            onClick={() => handleImageClick(imgUrl)}
            className="rounded-[10px] w-full"
          />
        ))}
        {videos.map((videoUrl, index) => (
          <video
            key={`video-${index}`}
            src={videoUrl}
            className="rounded-[10px] w-full"
            controls
            autoPlay
            muted
          />
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="flex flex-col gap-[20px] sm:gap-[10px] items-center">
        {filterEvents(events)
          .slice(0, maxElements)
          .map((event) => {
            const { mediaUrls, textContent } = processContent(event.content);
            return (
              <div
                key={event.id}
                className="flex flex-col gap-[20px] sm:gap-[10px] w-screen items-center sm:flex-none"
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
                  <div className="text-[15px] leading-normal whitespace-pre-wrap overflow-x-hidden">
                    {styleHashtags(textContent)}
                  </div>

                  {renderMedia(mediaUrls)}
                </div>
                <div className="h-[1px] w-full sm:h-0 bg-white/10"></div>
              </div>
            );
          })}
      </div>

      {/* Image Overlay */}
      {overlayImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={handleOverlayClick}
        >
          <div className="relative max-w-full max-h-full overflow-hidden">
            <button
              className="absolute top-0 right-0 m-4 font-semibold text-white bg-black/50 hover:bg-black/95 rounded-full px-2 py-1"
              onClick={closeOverlay}
            >
              Close
            </button>
            <img
              src={overlayImage}
              alt="Fullscreen"
              className="max-h-[90vh] max-w-[90vw] rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default NotesList;
