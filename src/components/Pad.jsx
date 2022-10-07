import { classNames } from "../utils/class-names";
import { useAudio } from "../hooks/use-audio";
import { Switch } from "@headlessui/react";

function Pad({ className, audio }) {
  const [playing, toggle] = useAudio(audio.clip);

  return (
    <Switch
      checked={playing}
      onChange={toggle}
      className={classNames(
        "drum-pad cursor-pointer border border-black rounded-md active:scale-[98%]",
        playing
          ? classNames(className, "shadow-2xl scale-[98%]")
          : "bg-gradient-radial from-gray-200 to-white"
      )}
    ></Switch>
  );
}

export default Pad;
