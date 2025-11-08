import { motion } from "framer-motion";
const AuthTitle = ({ text }: { text: string }) => {
  return (
    <motion.h2
      className="text-xl font-semibold mb-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {text}
      
    </motion.h2>
  );
};

export default AuthTitle;
