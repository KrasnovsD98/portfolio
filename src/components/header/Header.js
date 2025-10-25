import "./style.css";
import photo from "./../../img/profile.jpg";
import { motion } from "framer-motion";


const Header = () => {

    return (
      <header className="header">
        <div className="header__wrapper">
          <img src={photo} alt="" className="profile_img" />
          <h1 className="header__title">
            <strong>
              Hi, my name is <em>Dāvids</em>
            </strong>
            <br />a ServiceNow Leading Engineer
            <br />&
            <br />
            Scrum Master
          </h1>
          <div className="header__text">
            <p>with passion for learning and creating.</p>
          </div>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} 
            href="https://drive.google.com/file/d/1zm96shzXInldICU6CVQRcZGVovvOGgWD/view?usp=drive_link"
            className="btn"
          >
            Download CV
          </motion.a>
        </div>
      </header>
    );
}

export default Header;
