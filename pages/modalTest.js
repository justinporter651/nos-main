import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactUsModal from "../components/contactUsModal";

export default function ModalTest({}) {
  const [contactUsOpen, setContactUsOpen] = useState(false);

  const open = () => {
    setContactUsOpen(true);
    console.log("open function ran");
  };
  const close = () => setContactUsOpen(false);

  return (
    <div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="contactUsButton"
        onClick={() => {
          contactUsOpen ? close() : open();
        }}
      >
        Contact Us
      </motion.button>
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {contactUsOpen && <ContactUsModal modalOpen={contactUsOpen} handleClose={close} />}
      </AnimatePresence>
    </div>
  );
}
