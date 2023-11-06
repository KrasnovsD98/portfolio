import gitHubIcon from './gitHub-black.svg';
import "./style.css"
import { motion } from "framer-motion";

const BtnGitHub = ({ link }) => {
	return (
    <motion.a
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      href={link}
      target="_blank"
      rel="noreferrer"
      className="btn-outline"
    >
      <img src={gitHubIcon} alt="" />
      GitHub repo
    </motion.a>
  );
};

export default BtnGitHub;