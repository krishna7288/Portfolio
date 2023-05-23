import React from "react";
import { motion } from "framer-motion";
import styles from "../style";
import SectionWrapper from "../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";
import { education } from "../constants";
import pdf from "../assets/resume/GopalakrishnanRavi.pdf"


const FeedbackCard = ({
  index,
  type,
  name,
  year,
  grade,
 }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[20px]'>{type}</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[15px]'>{name}</p>
      <p className='text-white tracking-wider text-[15px]'>{year}</p>
      <p className='text-white tracking-wider text-[15px]'>{grade}</p>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>More details about me</p>
          <h2 className={styles.sectionHeadText}>Education.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-12 ${styles.paddingX} flex flex-wrap gap-7`}>
        {education.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
      <div className="flex justify-center py-5 pb-10">
      <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white hover:outline-white font-bold text-center shadow-md shadow-primary align-middle'
          >
            <a href={pdf} download >Download Resume</a>

          </button>
          </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");