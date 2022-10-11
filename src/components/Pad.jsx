import { classNames } from "../utils/class-names";

function Pad({ className, audio, keyId, handleButtonClick }) {
  return (
    <button
      id={audio.name}
      onClick={() => handleButtonClick(keyId, audio.name)}
      className={classNames(
        "drum-pad cursor-pointer border border-black rounded-md active:scale-[98%] text-transparent",
        className,
        "active:shadow-2xl active:scale-[98%]"
      )}
    >
      {keyId}
      <audio id={keyId} className="clip" src={audio.clip}></audio>
    </button>
  );
}

export default Pad;
