"use client";

import { motion } from "framer-motion";
import NotesList from "../../components/nostr-blog/NotesList";

export default function Articles() {
  return (
    <motion.div className="mt-[70px]">
      <h1>Articles</h1>
      <p>🚧 UNDER CONSTRUCTION test 🚧</p>
      <NotesList
        filterType="articles"
        activeSection="articles"
        maxElements={50}
      />
    </motion.div>
  );
}
