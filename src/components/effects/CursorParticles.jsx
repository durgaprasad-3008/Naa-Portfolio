import { useEffect } from "react";

function CursorParticles() {

  useEffect(() => {

    const particlesContainer = document.createElement("div");

    particlesContainer.className = "particles-container";

    document.body.appendChild(particlesContainer);

    const handleMouseMove = (e) => {

      const particle = document.createElement("div");

      particle.className = "particle";

      const size = Math.random() * 4 + 2;

      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      particle.style.left = `${e.clientX}px`;
      particle.style.top = `${e.clientY}px`;

      particle.style.opacity = "0.7";

      particle.style.background =
        Math.random() > 0.5
          ? "rgba(255,0,0,0.9)"
          : "rgba(0,140,255,0.9)";

      particle.style.boxShadow =
        Math.random() > 0.5
          ? "0 0 12px rgba(255,0,0,0.9)"
          : "0 0 12px rgba(0,140,255,0.9)";

      particlesContainer.appendChild(particle);

      requestAnimationFrame(() => {

        particle.style.transition = "all 1.5s ease-out";

        particle.style.transform = `
          translate(
            ${Math.random() * 80 - 40}px,
            ${Math.random() * 80 - 40}px
          )
          scale(0)
        `;

        particle.style.opacity = "0";

      });

      setTimeout(() => {

        particle.remove();

      }, 1500);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {

      document.removeEventListener("mousemove", handleMouseMove);

      particlesContainer.remove();

    };

  }, []);

  return null;
}

export default CursorParticles;