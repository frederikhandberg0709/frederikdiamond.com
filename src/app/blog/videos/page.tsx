"use client";

import { motion } from "framer-motion";
import NotesList from "../../components/nostr-blog/NotesList";

export default function Videos() {
  return (
    <motion.div className="mt-[70px]">
      <h1>Videos</h1>
      <p>🚧 UNDER CONSTRUCTION 🚧</p>
      <NotesList filterType="video" activeSection="videos" maxElements={50} />
    </motion.div>
  );
}
