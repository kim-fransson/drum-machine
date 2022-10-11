import Pad from "./Pad";

function PadGrid({ pads, handleButtonClick }) {
  return (
    <div className="h-[38%] w-[38%] absolute gap-[1%] grid grid-cols-4 grid-rows-4 bottom-[14%] right-[11%]">
      {pads.map((pad) => (
        <Pad
          key={pad.keyId}
          audio={pad.audio}
          keyId={pad.keyId}
          className={getClassName(pad)}
          handleButtonClick={handleButtonClick}
        />
      ))}
    </div>
  );
}

const getClassName = (pad) => {
  switch (pad.keyId) {
    case "Q":
    case "W":
    case "E":
    case "A":
    case "P":
      return "bg-gradient-radial from-teal-200 to-teal-400 shadow-teal-600";
    case "S":
    case "D":
    case "Z":
    case "X":
    case "C":
    case "O":
    case "Ö":
      return "bg-gradient-radial from-amber-200 to-amber-500 shadow-amber-600";
    case "Ä":
    case "M":
    case "Å":
      return "bg-gradient-radial from-sky-200 to-sky-400 shadow-sky-600";
    case "L":
      return "bg-gradient-radial from-red-200 to-red-400 shadow-red-600";
  }
};

export default PadGrid;
