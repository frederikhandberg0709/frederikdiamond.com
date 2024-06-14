import { motion } from "framer-motion";
import NotesList from "../components/nostr-blog/NotesList";

const TimelinePage = () => {
  return (
    <motion.div className="mt-[70px]">
      <h1>Timeline</h1>
      <p>
        🚧 UNDER CONSTRUCTION 🚧
        <br />
        Fix filter menu not being in correct position if scrolling down.
      </p>
      <NotesList filterType="all" activeSection="timeline" maxElements={50} />
    </motion.div>
  );
};

export default TimelinePage;
