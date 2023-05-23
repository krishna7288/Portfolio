import React from "react";
import styles from "../style";
import { logo } from "../assets";



const Footer = () => {
  const Day = new Date();
  const year = Day.getFullYear();
  return (
    <footer className={`${styles.paddingX} w-full flex items-center py-5 bottom-0 z-20 hover:outline-white mt-10`}>
      <div className="w-full flex flex-col sm:flex-row justify-between items-center max-w-7xl mx-auto bg-primary outline-white">
        <ul className="list-none flex flex-wrap justify-center sm:justify-start gap-10">
          <li>
            <p className="text-white text-18 font-bold cursor-pointer flex items-center">
              Designed and Developed by&nbsp;
              <span className="sm:block hidden">
                <img src={logo} alt="logo" className="w-6 h-7 object-contain" />
              </span>
            </p>
          </li>
          <li className="justify-center sm:justify-start">
            <h3 className="text-white text-18 font-bold cursor-pointer">Copyright © {year}</h3>
          </li>
        </ul>
         </div>
    </footer>
  );
};

export default Footer;
