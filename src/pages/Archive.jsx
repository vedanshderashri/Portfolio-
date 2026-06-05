import { motion } from "framer-motion";
// auto import all images from folder
const images = import.meta.glob("../assets/works/*.{png,jpg,jpeg,webp}", {
  eager: true,
});

// convert into array
const projects = Object.values(images).map((img) => img.default);

const itemVariants = {
  hidden: (i) => ({
    opacity: 0,
    y: i % 2 === 0 ? 40 : -40,
  }),

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Archive() {
  return (
    <>
      {/* HERO */}
      <section className="archive-hero">
        <h1 className="archive-title" data-scramble>
          ARCHIVE
        </h1>

        <span className="archive-scroll">
          SCROLL TO DISCOVER
        </span>
      </section>

      {/* GRID */}
      <section className="archive-grid">
        {projects.map((img, i) => (
          <motion.div
            key={i}
            className="archive-card"
            custom={i}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: "-100px",
            }}
          >
            <img
              src={img}
              alt={`Archive ${i + 1}`}
              loading="lazy"
            />
          </motion.div>
        ))}
      </section>
    </>
  );
}