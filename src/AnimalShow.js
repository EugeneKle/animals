import { useState } from "react";
import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import heart from "./svg/heart.svg";
import horse from "./svg/horse.svg";

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};

function AnimalShow({ type }) {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => setClicks(clicks + 1);

  return (
    <div onClick={handleClick} style={{ position: "relative" }}>
      <img src={svgMap[type]} width={50} alt="animal" />
      <img
        src={heart}
        alt="heart"
        style={{
          position: "absolute",
          bottom: "0",
          right: "0",
          width: 10 + 10 * clicks + 'px',
        }}
      />
    </div>
  );
}

export default AnimalShow;
