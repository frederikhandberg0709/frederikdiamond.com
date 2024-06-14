"use client";

import { motion } from "framer-motion";
import NotesList from "../../components/nostr-blog/NotesList";

const ArticlesPage = () => {
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
};

export default ArticlesPage;
