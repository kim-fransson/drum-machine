module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "drum-machine": "url('./src/assets/drum-machine.jpg')",
        "gradient-radial":
          "radial-gradient(var(--tw-gradient-from), var(--tw-gradient-to))",
      },
    },
  },
  plugins: [],
};
