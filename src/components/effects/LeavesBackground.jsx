function LeavesBackground() {

  const leaves = [
    "https://www.pngmart.com/files/1/Fall-Autumn-Leaves-Transparent-PNG.png",
    "https://www.pngmart.com/files/1/Autumn-Fall-Leaves-Pictures-Collage-PNG.png",
    "https://www.pngmart.com/files/1/Autumn-Fall-Leaves-Clip-Art-PNG.png",
    "https://www.pngmart.com/files/1/Green-Leaves-PNG-File.png",
    "https://www.pngmart.com/files/1/Transparent-Autumn-Leaves-Falling-PNG.png",
    "https://www.pngmart.com/files/1/Realistic-Autumn-Fall-Leaves-PNG.png",
  ];

  return (

    <>

      <style>

        {`

          .global-leaf-animation {

            position: absolute;
            top: -10%;
            animation-name: globalLeafFall;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
            pointer-events: none;

          }

          @keyframes globalLeafFall {

            0% {
              transform: translateY(-10vh) translateX(0px) rotate(0deg);
              opacity: 0;
            }

            10% {
              opacity: 0.8;
            }

            25% {
              transform: translateY(25vh) translateX(20px) rotate(90deg);
            }

            50% {
              transform: translateY(50vh) translateX(-20px) rotate(180deg);
            }

            75% {
              transform: translateY(75vh) translateX(20px) rotate(270deg);
            }

            100% {
              transform: translateY(120vh) translateX(-20px) rotate(360deg);
              opacity: 0;
            }

          }

        `}

      </style>

      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">

        {[...Array(25)].map((_, index) => (

          <img
            key={index}
            src={leaves[index % leaves.length]}
            alt=""
            className="global-leaf-animation"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${35 + Math.random() * 25}px`,
              height: `${35 + Math.random() * 25}px`,
              animationDuration: `${10 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 8}s`,
              opacity: 0.6,
            }}
          />

        ))}

      </div>

    </>

  );

}

export default LeavesBackground;