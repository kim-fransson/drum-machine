import Button from "./Button";

function DrumMachine() {
  return (
    <div className="relative flex bg-drum-machine bg-contain bg-no-repeat w-full h-0 pt-[99%]">
      <div className="h-[38%] w-[38%] absolute gap-[1%] grid grid-cols-4 grid-rows-4 bottom-[14%] right-[11%]">
        <Button
          className={
            "bg-gradient-radial from-teal-200 to-teal-400 shadow-teal-600"
          }
        />
        <Button
          className={
            "bg-gradient-radial from-teal-200 to-teal-400 shadow-teal-600"
          }
        />
        <Button
          className={
            "bg-gradient-radial from-teal-200 to-teal-400 shadow-teal-600"
          }
        />
        <Button
          className={
            "bg-gradient-radial from-teal-200 to-teal-400 shadow-teal-600"
          }
        />

        <Button
          className={
            "bg-gradient-radial from-amber-200 to-amber-500 shadow-amber-600"
          }
        />
        <Button
          className={
            "bg-gradient-radial from-amber-200 to-amber-500 shadow-amber-600"
          }
        />
        <Button
          className={
            "bg-gradient-radial from-amber-200 to-amber-500 shadow-amber-600"
          }
        />
        <Button
          className={
            "bg-gradient-radial from-amber-200 to-amber-500 shadow-amber-600"
          }
        />

        <Button
          className={
            "bg-gradient-radial from-amber-200 to-amber-500 shadow-amber-600"
          }
        />
        <Button
          className={
            "bg-gradient-radial from-amber-200 to-amber-500 shadow-amber-600"
          }
        />
        <Button
          className={
            "bg-gradient-radial from-teal-200 to-teal-400 shadow-teal-600"
          }
        />
        <Button
          className={
            "bg-gradient-radial from-sky-200 to-sky-400 shadow-sky-600"
          }
        />

        <Button
          className={
            "bg-gradient-radial from-red-400 to-red-600 shadow-red-800"
          }
        />
        <Button
          className={
            "bg-gradient-radial from-amber-200 to-amber-500 shadow-amber-600"
          }
        />
        <Button
          className={
            "bg-gradient-radial from-sky-200 to-sky-400 shadow-sky-600"
          }
        />
        <Button
          className={
            "bg-gradient-radial from-sky-200 to-sky-400 shadow-sky-600"
          }
        />
      </div>
    </div>
  );
}

export default DrumMachine;
