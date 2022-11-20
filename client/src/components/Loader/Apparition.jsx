import { motion } from "framer-motion";
import React from "react";

const ApparitionElement = ({ children }) => {
  return (
    <motion.div
      animate={{ x: 0, opacity: 1 }}
      initial={{ x: 10, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default ApparitionElement;
