function Display({ text }) {
  return (
    <div
      className="flex justify-center items-center absolute left-[9%] bottom-[36%] h-[4%] w-[30%] bg-gray-900 rounded-md text-green-800"
      id="display"
    >
      <p className="w-full text-center text-[0.65rem] sm:text-sm md:text-2xl lg:text-4xl">
        {text}
      </p>
    </div>
  );
}

export default Display;
