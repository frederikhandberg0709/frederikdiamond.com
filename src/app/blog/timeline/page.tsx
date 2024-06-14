"use client";

import { motion } from "framer-motion";
import NotesList from "@/app/components/nostr-blog/NotesList";

export default function Timeline() {
  return (
    <motion.div className="mt-[70px]">
      <h1>Timeline</h1>
      <p>🚧 UNDER CONSTRUCTION 🚧</p>
      <NotesList filterType="all" activeSection="timeline" maxElements={50} />
    </motion.div>
  );
}
