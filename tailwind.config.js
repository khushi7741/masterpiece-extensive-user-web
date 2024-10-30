module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        brown: "#BA570B",
        E8E8E8: "#E8E8E8",
        fill: "#F6F2EC",
        C1DFDD: "#C1DFDD",
        E6C3AD: "#E6C3AD",
        EEF6F6: "#EEF6F6",
        A8C2C3: "#A8C2C3",
        E1E1E1: "#E1E1E1",
        B8AEAD: "#B8AEAD",
        978684: "#978684",
        EDEDED: "#EDEDED",
        B7AEAE: "#B7AEAE",
        E6D7D7: "#E6D7D7",
      },
      screens: {
        "max-xs": { max: "425px" }, // For screens <= 425px
        "max-sm": { max: "640px" }, // For screens <= 640px
        "max-md": { max: "768px" }, // For screens <= 768px
        "max-lg": { max: "1024px" }, // For screens <= 1024px
        "max-xl": { max: "1280px" }, // For screens <= 1024px
        "max-2xl": { max: "1536px" }, // For screens <= 1024px
      },
      maxWidth: {
        "1400px": "1400px",
      },
    },
    fontFamily: {
      Mazaeni: ["Mazaeni"],
      baloo: ["Baloo 2", "sans-serif"],
      nunito: ["nunito", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
