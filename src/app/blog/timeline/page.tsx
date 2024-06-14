"use client";

import { motion } from "framer-motion";
import NotesList from "@/app/components/nostr/NotesList";

export default function TimelinePage() {
  return (
    <motion.div className="mt-[70px]">
      <h1>Timeline testing</h1>
      <p>
        🚧 UNDER CONSTRUCTION 🚧
        <br />
        Sometimes images refuse to open in fullscreen. Seems to happen everytime
        switching page, i.e. from Timeline to Pictures.
      </p>
      <NotesList
        filterType="all"
        activeSection="timelinetest"
        maxElements={50}
      />
    </motion.div>
  );
}

// const TimelinePage = () => {
//   return (
//     <motion.div className="mt-[70px]">
//       <h1>Timeline</h1>
//       <p>
//         🚧 UNDER CONSTRUCTION 🚧
//         <br />
//         Sometimes images refuse to open in fullscreen. Seems to happen everytime
//         switching page, i.e. from Timeline to Pictures.
//       </p>
//       <NotesList filterType="all" activeSection="timeline" maxElements={50} />
//     </motion.div>
//   );
// };

// export default TimelinePage;
