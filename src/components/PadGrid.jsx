import Pad from "./Pad";

import bassDrum from "../assets/bass-drum.wav";
import drumDeepImpact from "../assets/drum-deep-impact.wav";
import metallicDrum from "../assets/metallic-cinematic-drum-trailer-sound.wav";
import softDrum from "../assets/soft-horror-hit-drum.wav";
import dryDrum from "../assets/tribal-dry-drum.wav";

import drummingAtmospheric from "../assets/drumming-atmospheric.wav";
import drummingJungle from "../assets/drumming-jungle-music.wav";
import drummingAmbience from "../assets/tribal-drumming-ambience.wav";

import futuristicBass from "../assets/futuristic-bass-hit.wav";
import knockingSubBass from "../assets/knocking-sub-bass.wav";
import pulsatingBass from "../assets/pulsating-bass-transition.wav";
import drumBassHit from "../assets/drum-bass-hit.wav";
import drumJokeAccent from "../assets/drum-joke-accent.wav";
import drumJoke from "../assets/joke-drums.wav";
import badJokeDrums from "../assets/bad-joke-drums.wav";

import mysteryHeartbeat from "../assets/cinematic-mystery-heartbeat-transition.wav";

function PadGrid() {
  return (
    <div className="h-[38%] w-[38%] absolute gap-[1%] grid grid-cols-4 grid-rows-4 bottom-[14%] right-[11%]">
      <Pad
        className={
          "bg-gradient-radial from-teal-200 to-teal-400 shadow-teal-600"
        }
        audio={{ name: "bass-drum", clip: bassDrum }}
        keyId="Q"
      />
      <Pad
        className={
          "bg-gradient-radial from-teal-200 to-teal-400 shadow-teal-600"
        }
        audio={{ name: "drum-deep-impact", clip: drumDeepImpact }}
        keyId="W"
      />
      <Pad
        className={
          "bg-gradient-radial from-teal-200 to-teal-400 shadow-teal-600"
        }
        audio={{ name: "metallic-drum", clip: metallicDrum }}
        keyId="E"
      />
      <Pad
        className={
          "bg-gradient-radial from-teal-200 to-teal-400 shadow-teal-600"
        }
        audio={{ name: "soft-drum", clip: softDrum }}
        keyId="A"
      />

      <Pad
        className={
          "bg-gradient-radial from-amber-200 to-amber-500 shadow-amber-600"
        }
        audio={{ name: "futuristic-bass", clip: futuristicBass }}
        keyId="S"
      />

      <Pad
        className={
          "bg-gradient-radial from-amber-200 to-amber-500 shadow-amber-600"
        }
        audio={{ name: "knocking-sub-bass", clip: knockingSubBass }}
        keyId="D"
      />
      <Pad
        className={
          "bg-gradient-radial from-amber-200 to-amber-500 shadow-amber-600"
        }
        audio={{ name: "pulsating-bass", clip: pulsatingBass }}
        keyId="Z"
      />
      <Pad
        className={
          "bg-gradient-radial from-amber-200 to-amber-500 shadow-amber-600"
        }
        audio={{ name: "drum-bass-hit", clip: drumBassHit }}
        keyId="X"
      />

      <Pad
        className={
          "bg-gradient-radial from-amber-200 to-amber-500 shadow-amber-600"
        }
        audio={{ name: "drum-joke-accent", clip: drumJokeAccent }}
        keyId="C"
      />

      <Pad
        className={
          "bg-gradient-radial from-amber-200 to-amber-500 shadow-amber-600"
        }
        audio={{ name: "drum-joke", clip: drumJoke }}
        keyId="O"
      />
      <Pad
        className={
          "bg-gradient-radial from-teal-200 to-teal-400 shadow-teal-600"
        }
        audio={{ name: "dry-drum", clip: dryDrum }}
        keyId="P"
      />
      <Pad
        className={"bg-gradient-radial from-sky-200 to-sky-400 shadow-sky-600"}
        audio={{ name: "drumming-atmospheric", clip: drummingAtmospheric }}
        keyId="Å"
      />

      <Pad
        className={"bg-gradient-radial from-red-400 to-red-600 shadow-red-800"}
        audio={{ name: "mystery-heartbeat", clip: mysteryHeartbeat }}
        keyId="L"
      />
      <Pad
        className={
          "bg-gradient-radial from-amber-200 to-amber-500 shadow-amber-600"
        }
        audio={{ name: "bad-joke-drums", clip: badJokeDrums }}
        keyId="Ö"
      />
      <Pad
        className={"bg-gradient-radial from-sky-200 to-sky-400 shadow-sky-600"}
        audio={{ name: "drumming-ambience", clip: drummingAmbience }}
        keyId="Ä"
      />
      <Pad
        className={"bg-gradient-radial from-sky-200 to-sky-400 shadow-sky-600"}
        audio={{ name: "drumming-jungle", clip: drummingJungle }}
        keyId="M"
      />
    </div>
  );
}

export default PadGrid;
