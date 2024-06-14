"use client";

import { motion } from "framer-motion";
import NotesList from "@/app/components/nostr-blog/NotesList";

export default function PicturesPage() {
  return (
    <motion.div className="mt-[70px]">
      <h1>Pictures testing</h1>
      <p>
        🚧 UNDER CONSTRUCTION 🚧
        <br />
        Sometimes images refuse to open in fullscreen. Seems to happen everytime
        switching page, i.e. from Timeline to Pictures.
      </p>
      <NotesList filterType="image" activeSection="pictures" maxElements={50} />
    </motion.div>
  );
}
