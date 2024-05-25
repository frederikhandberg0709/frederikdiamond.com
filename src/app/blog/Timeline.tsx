import { motion } from "framer-motion";
import NotesList from "../components/nostr/NotesList";

const TimelinePage = () => {
  return (
    <motion.div className="mt-[70px]">
      <h1>Timeline</h1>
      <p>🚧 UNDER CONSTRUCTION 🚧</p>
      <NotesList filterType="all" activeSection="timeline" />
    </motion.div>
  );
};

export default TimelinePage;
