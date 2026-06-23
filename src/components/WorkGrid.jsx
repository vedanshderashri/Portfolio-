import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// AUTO IMPORT IMAGES
const images = import.meta.glob("../assets/works/*.{png,jpg,jpeg,webp}", {
  eager: true,
});

// ONLY ADD LINKS HERE
const projectLinks = {
  "work1.png": "https://prourls.link/7JNYjP",
  "work2.png": "https://prourls.link/lyXuT3",
  "work3.png": "https://prourls.link/EaldXd",
  "work4.png": "https://prourls.link/nfIzTr",
  "work5.png": "https://www.figma.com/proto/vY1vrLrnoffku0dCNY9xVE/Vaulta?node-id=1-3&t=dilqu8hnkk0CcRG1-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
};

// AUTO CREATE PROJECTS
const projects = Object.entries(images).map(([path, img], index) => {
  const fileName = path.split("/").pop();
  const baseName = fileName.split(".")[0];
  const href = projectLinks[fileName] || 
               projectLinks[`${baseName}.png`] || 
               projectLinks[`${baseName}.webp`] || 
               projectLinks[baseName] || 
               null;

  return {
    id: index + 1,
    img: img.default,
    href: href,
  };
});

export default function WorkPage() {
  const [hovered, setHovered] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      {/* GRID */}
      <section className="work-grid">
        {projects.map((project, i) => {
          const isHovered = hovered === project.id;
          const isDimmed =
            hovered !== null && hovered !== project.id;

          const card = (
            <motion.div
              className="work-card"
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              style={{
                transform: isDimmed
                  ? "scaleY(0.92)"
                  : "scaleY(1)",

                filter: isDimmed
                  ? "blur(0px)"
                  : "blur(0px)",

                transition: "0.35s ease",
              }}
            >
              <motion.img
                src={project.img}
                alt=""
                className="work-image"
                animate={{
                  scale: isHovered ? 1.01 : 1,
                }}
                transition={{
                  duration: 0.4,
                }}
              />

              <span className="work-index">
                [{String(i + 1).padStart(2, "0")}]
              </span>

              {isHovered && (
                <span className="work-view">
                  {project.href
                    ? "VIEW PROJECT →"
                    : "ZOOM IMAGE →"}
                </span>
              )}
            </motion.div>
          );

          // LINK PROJECTS
          if (project.href) {
            return (
              <a
                key={project.id}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="work-link"
              >
                {card}
              </a>
            );
          }

          // IMAGE ZOOM PROJECTS
          return (
            <div
              key={project.id}
              onClick={() =>
                setSelectedImage(project.img)
              }
              className="work-link"
              style={{ cursor: "pointer" }}
            >
              {card}
            </div>
          );
        })}
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="image-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt=""
              className="modal-image"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}