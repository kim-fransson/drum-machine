import { classNames } from "../utils/class-names";
import { useAudio } from "../hooks/use-audio";

function Pad({ className, audio, keyId }) {
  const [playing, toggle] = useAudio(audio.clip);

  return (
    <div
      id={audio.name}
      checked={playing}
      onClick={toggle}
      className={classNames(
        "drum-pad cursor-pointer border border-black rounded-md active:scale-[98%] text-transparent",
        playing
          ? classNames(className, "shadow-2xl scale-[98%]")
          : "bg-gradient-radial from-gray-200 to-white"
      )}
    >
      {keyId}
    </div>
  );
}

export default Pad;
