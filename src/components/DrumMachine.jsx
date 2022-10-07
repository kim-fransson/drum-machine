import PadGrid from "./PadGrid";

function DrumMachine() {
  return (
    <div
      id="drum-machine"
      className="relative flex bg-drum-machine bg-contain bg-no-repeat w-full h-0 pt-[99%]"
    >
      <PadGrid />
      <div id="display"></div>
    </div>
  );
}

export default DrumMachine;
