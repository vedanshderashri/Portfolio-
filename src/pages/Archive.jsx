import { motion } from "framer-motion";
import a1 from "../assets/work.png";
import a2 from "../assets/work1.png";
import a3 from "../assets/work2.png";
import a4 from "../assets/work3.png";
import a5 from "../assets/work4.png";

const projects = [a1, a2, a3, a4, a5];

const itemVariants = {
  hidden: (i) => ({
    opacity: 0,
    y: i % 2 === 0 ? 40 : -40
  }),
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export default function Archive() {
  return (
    <>
      {/* HERO */}
      <section className="archive-hero">
        <h1 className="archive-title" data-scramble>ARCHIVE</h1>
        <span className="archive-scroll">SCROLL TO DISCOVER</span>
      </section>

      {/* ARCHIVE GRID */}
      <section className="archive-grid">
        {projects.map((img, i) => (
          <motion.div
            key={i}
            className="archive-card"
            custom={i}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <img src={img} alt="" />
          </motion.div>
        ))}
      </section>
    </>
  );
}
