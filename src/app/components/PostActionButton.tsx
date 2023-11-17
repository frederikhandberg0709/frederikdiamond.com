import React from "react";
import SinglePostActionButton from "./PostActionButtonsComponent";

type PostActionButtonProps = {
  likeCount: number;
  commentCount: number;
  shareCount: number;
  zapCount: number;
};

function formatCount(num: any) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M"; // Converts to M representation for millions
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K"; // Converts to K representation for thousands
  }
  return num; // Less than 1000
}

const PostActionButton: React.FC<PostActionButtonProps> = ({
  likeCount,
  commentCount,
  shareCount,
  zapCount,
}) => {
  return (
    <div className="flex gap-[15px]">
      <SinglePostActionButton
        tooltipText="Like"
        count={formatCount(likeCount)} // Number of likes
        bgColorOnHover="#DE2654"
        bgColorOnActive="#DE2654"
      >
        {/* Like icon */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ef4444"
            d="M2 9.137C2 14 6.02 16.591 8.962 18.911C10 19.729 11 20.5 12 20.5s2-.77 3.038-1.59C17.981 16.592 22 14 22 9.138c0-4.863-5.5-8.312-10-3.636C7.5.825 2 4.274 2 9.137Z"
          />
        </svg>
      </SinglePostActionButton>
      <SinglePostActionButton
        tooltipText="Comment"
        count={formatCount(commentCount)} // Number of comments
        bgColorOnHover="#3B82F6"
        bgColorOnActive="#3B82F6"
      >
        {/* Comment icon */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#3b82f6"
            d="M20 6h-1v8c0 .55-.45 1-1 1H6v1c0 1.1.9 2 2 2h10l4 4V8c0-1.1-.9-2-2-2zm-3 5V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v13l4-4h9c1.1 0 2-.9 2-2z"
          />
        </svg>
      </SinglePostActionButton>
      <SinglePostActionButton
        tooltipText="Share"
        count={formatCount(shareCount)} // Number of shares
        bgColorOnHover="#10B981"
        bgColorOnActive="#10B981"
      >
        {/* Share icon */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#10B981"
            d="M136 552h63.6c4.4 0 8-3.6 8-8V288.7h528.6v72.6c0 1.9.6 3.7 1.8 5.2a8.3 8.3 0 0 0 11.7 1.4L893 255.4c4.3-5 3.6-10.3 0-13.2L749.7 129.8a8.22 8.22 0 0 0-5.2-1.8c-4.6 0-8.4 3.8-8.4 8.4V209H199.7c-39.5 0-71.7 32.2-71.7 71.8V544c0 4.4 3.6 8 8 8zm752-80h-63.6c-4.4 0-8 3.6-8 8v255.3H287.8v-72.6c0-1.9-.6-3.7-1.8-5.2a8.3 8.3 0 0 0-11.7-1.4L131 768.6c-4.3 5-3.6 10.3 0 13.2l143.3 112.4c1.5 1.2 3.3 1.8 5.2 1.8c4.6 0 8.4-3.8 8.4-8.4V815h536.6c39.5 0 71.7-32.2 71.7-71.8V480c-.2-4.4-3.8-8-8.2-8z"
          />
        </svg>
      </SinglePostActionButton>
      <SinglePostActionButton
        tooltipText="Zap"
        count={formatCount(zapCount)} // Number of zaps
        bgColorOnHover="#EAB308"
        bgColorOnActive="#EAB308"
      >
        {/* Zap icon */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#fbb11c"
            d="M43.4.159L12.06 28.492l24.31 7.538L18.12 64l35.26-33.426l-18.978-8.464z"
          />
        </svg>
      </SinglePostActionButton>
    </div>
  );
};

export default PostActionButton;
