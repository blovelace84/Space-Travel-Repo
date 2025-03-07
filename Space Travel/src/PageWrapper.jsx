import { motion } from "framer-motion";
import { Children } from "react";
import "./PageWrapper.css";

const PageWrapper = ({ Children }) => {
    return(
        <motion.div
        initial={{ opacity: 0, y: 20}}
        animate={{ opacity: 1, y:0}}
        exit={{ opacity: 0, y:-20}}
        transition={{ duration: 0.5}}
        >
            {Children}
        </motion.div>
    );
};

export default PageWrapper;