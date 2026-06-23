import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// AUTO IMPORT IMAGES
const images = import.meta.glob("../assets/works/*.{png,jpg,jpeg,webp}", {
  eager: true,
});

// ONLY ADD LINKS HERE
const projectLinks = {
  "landing_anim2.png" : "https://www.figma.com/proto/AhGcatWVbGtuI5GkdhHL7w/Landing-Page---Animation?node-id=0-3&t=matHFlb6WhvxWClA-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
  "landing_anim.png": "https://www.figma.com/proto/YPTodrqTVyTQ6MB1hBHWS9/Landing-Page-Animated?node-id=1-3&t=ilz13RaOwVWxAmQP-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
  "interia.png": "https://www.figma.com/proto/Gbycl2NXm4FsYWHSENIs03/Interia?node-id=1-2&t=TP6WY4TAz1KeUz2z-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2",
  "work1.png": "https://www.figma.com/proto/da0dVbuQ7Vx2Eh1BE4d9mu/QuickPay?node-id=2-147&p=f&t=RGbz9vmhEMcnC8Df-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=76%3A39",
  "work2.png": "https://www.figma.com/proto/wLmRGAkb78LjL09PcgElkh/Digital-Solutions?node-id=2-4&p=f&t=kWkEopW0Oh3lBSrn-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=8%3A245",
  "work3.png": "https://www.figma.com/proto/3Oo6S8DcbR4D7kO1GsZMy2/Credit-Card?node-id=1-2&p=f&t=MpcwKH0y9cb7OG1S-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
  "work4.png": "https://www.figma.com/proto/FlBwKJ4KMdyUGyRVYH0xhk/Crypp?node-id=2001-2&t=0Ifp6Y6ixiq7iQDX-1",
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