import Pad from "./Pad";

import bassDrum from "../assets/bass-drum.wav";
import drumDeepImpact from "../assets/drum-deep-impact.wav";
import metallicDrum from "../assets/metallic-cinematic-drum-trailer-sound.wav";
import softDrum from "../assets/soft-horror-hit-drum.wav";
import dryDrum from "../assets/tribal-dry-drum.wav";

function PadGrid() {
  return (
    <div className="h-[38%] w-[38%] absolute gap-[1%] grid grid-cols-4 grid-rows-4 bottom-[14%] right-[11%]">
      <Pad
        className={
          "bg-gradient-radial from-teal-200 to-teal-400 shadow-teal-600"
        }
        audio={{ name: "bass-drum", clip: bassDrum }}
      />
      <Pad
        className={
          "bg-gradient-radial from-teal-200 to-teal-400 shadow-teal-600"
        }
        audio={{ name: "drum-deep-impact", clip: drumDeepImpact }}
      />
      <Pad
        className={
          "bg-gradient-radial from-teal-200 to-teal-400 shadow-teal-600"
        }
        audio={{ name: "metallic-drum", clip: metallicDrum }}
      />
      <Pad
        className={
          "bg-gradient-radial from-teal-200 to-teal-400 shadow-teal-600"
        }
        audio={{ name: "soft-drum", clip: softDrum }}
      />

      {/* <Pad
        className={
          "bg-gradient-radial from-amber-200 to-amber-500 shadow-amber-600"
        }
      />
      <Pad
        className={
          "bg-gradient-radial from-amber-200 to-amber-500 shadow-amber-600"
        }
      />
      <Pad
        className={
          "bg-gradient-radial from-amber-200 to-amber-500 shadow-amber-600"
        }
      />
      <Pad
        className={
          "bg-gradient-radial from-amber-200 to-amber-500 shadow-amber-600"
        }
      />

      <Pad
        className={
          "bg-gradient-radial from-amber-200 to-amber-500 shadow-amber-600"
        }
      />
      <Pad
        className={
          "bg-gradient-radial from-amber-200 to-amber-500 shadow-amber-600"
        }
      /> */}
      <Pad
        className={
          "bg-gradient-radial from-teal-200 to-teal-400 shadow-teal-600"
        }
        audio={{ name: "dry-drum", clip: dryDrum }}
      />
      {/* <Pad
        className={"bg-gradient-radial from-sky-200 to-sky-400 shadow-sky-600"}
      />

      <Pad
        className={"bg-gradient-radial from-red-400 to-red-600 shadow-red-800"}
        audio={{ name: "melodic techno loop", clip: melodicTechnoLoop }}
      />
      <Pad
        className={
          "bg-gradient-radial from-amber-200 to-amber-500 shadow-amber-600"
        }
      />
      <Pad
        className={"bg-gradient-radial from-sky-200 to-sky-400 shadow-sky-600"}
      />
      <Pad
        className={"bg-gradient-radial from-sky-200 to-sky-400 shadow-sky-600"}
      /> */}
    </div>
  );
}

export default PadGrid;
