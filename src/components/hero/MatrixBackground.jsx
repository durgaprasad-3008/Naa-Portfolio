import { useEffect, useRef } from "react";

function MatrixBackground() {

  const canvasRef = useRef(null);

  useEffect(() => {

    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const resizeCanvas = () => {

      canvas.width = window.innerWidth;

      canvas.height = document.documentElement.scrollHeight;

    };

    resizeCanvas();

    const chars =
      "01アイウエオカキクケコABCDEFGHIJKLMNOPQRSTUVWXYZ#$%^&*";

    const fontSize = 14;

    let columns = Math.floor(canvas.width / fontSize);

    let drops = Array(columns).fill(1);

    const draw = () => {

      ctx.fillStyle = "rgba(0,0,0,0.04)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {

        const text =
          chars[Math.floor(Math.random() * chars.length)];

        ctx.fillStyle = `rgba(239,68,68,${Math.random()})`;

        ctx.fillText(
          text,
          i * fontSize,
          drops[i] * fontSize
        );

        if (
          drops[i] * fontSize > canvas.height &&
          Math.random() > 0.975
        ) {

          drops[i] = 0;

        }

        drops[i]++;

      }

    };

    const interval = setInterval(draw, 35);

    const handleResize = () => {

      resizeCanvas();

      columns = Math.floor(canvas.width / fontSize);

      drops = Array(columns).fill(1);

    };

    window.addEventListener("resize", handleResize);

    return () => {

      clearInterval(interval);

      window.removeEventListener(
        "resize",
        handleResize
      );

    };

  }, []);

  return (

    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none opacity-[0.18]"
    />

  );
}

export default MatrixBackground;