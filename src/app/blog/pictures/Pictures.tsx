import { motion } from "framer-motion";
import NotesList from "../../components/nostr/NotesList";

const PicturesPage = () => {
  return (
    <motion.div className="mt-[70px]">
      <h1>Pictures</h1>
      <p>🚧 UNDER CONSTRUCTION 🚧</p>
      <NotesList filterType="image" activeSection="pictures" maxElements={50} />
    </motion.div>
  );
};

export default PicturesPage;
