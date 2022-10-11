import { useState, useEffect } from "react";
import { padsData } from "../pads-data";
import Display from "./Display";
import PadGrid from "./PadGrid";

function DrumMachine() {
  const [pads, setPads] = useState(padsData);
  const [currentText, setCurrentText] = useState("");

  const handleButtonClick = (keyId, audioName) => {
    document.getElementById(keyId).play();
    setCurrentText(audioName);
  };

  const handleKeyDown = (event) => {
    const pad = pads.find((pad) => pad.keyId === event.key?.toUpperCase());
    if (pad) {
      document.getElementById(pad.audio.name).click();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      id="drum-machine"
      className="relative flex bg-drum-machine bg-contain bg-no-repeat w-full h-0 pt-[99%]"
    >
      <PadGrid pads={pads} handleButtonClick={handleButtonClick} />
      <Display text={currentText} />
    </div>
  );
}

export default DrumMachine;
