export const patternsOptions = [
  {
    text: "None",
    value: "",
  },
  {
    text: "Pattern 1",
    value: "pattern1",
  },
  {
    text: "Pattern 2",
    value: "pattern2",
  },
  {
    text: "Pattern 3",
    value: "pattern3",
  },
  {
    text: "Pattern 4",
    value: "pattern4",
  },
  {
    text: "Pattern 5",
    value: "pattern5",
  },
  {
    text: "Pattern 6",
    value: "pattern6",
  },
  {
    text: "Pattern 7",
    value: "pattern7",
  },
  {
    text: "Pattern 8",
    value: "pattern8",
  },
  {
    text: "Pattern 9",
    value: "pattern9",
  },
  {
    text: "Pattern 10",
    value: "pattern10",
  },
  {
    text: "Pattern 11",
    value: "pattern11",
  },
  {
    text: "Pattern 12",
    value: "pattern12",
  },
  {
    text: "Pattern 13",
    value: "pattern13",
  },
  {
    text: "Pattern 14",
    value: "pattern14",
  },
  {
    text: "Pattern 15",
    value: "pattern15",
  },
  {
    text: "Pattern 16",
    value: "pattern16",
  },
  {
    text: "Pattern 17",
    value: "pattern17",
  },
  {
    text: "Pattern 18",
    value: "pattern18",
  },
  {
    text: "Pattern 19",
    value: "pattern19",
  },
  {
    text: "Pattern 20",
    value: "pattern20",
  },
];

const randomPatterns = [
  "pattern1",
  "pattern2",
  "pattern3",
  "pattern4",
  "pattern5",
  "pattern6",
  "pattern7",
  "pattern8",
  "pattern9",
  "pattern10",
  "pattern11",
  "pattern12",
  "pattern13",
  "pattern14",
  "pattern15",
  "pattern16",
  "pattern17",
  "pattern18",
  "pattern19",
  "pattern20",
  "",
];

const colorThemes = [
  {
    bgColor: "#d972ff",
    textColor: "#581b98",
  },
  {
    bgColor: "#a7ff83",
    textColor: "#17b978",
  },
  {
    bgColor: "#CB91FE",
    textColor: "#5F01B2",
  },
  {
    bgColor: "#9D2EFE",
    textColor: "#3D0C6A",
  },
  {
    bgColor: "#88EF69",
    textColor: "#362E48",
  },
  {
    bgColor: "#ffa600",
    textColor: "#44475a",
  },
  {
    bgColor: "#8078E7",
    textColor: "#4B4681",
  },
  {
    bgColor: "#B1B3E4",
    textColor: "#333794",
  },
  {
    bgColor: "#CA96DB",
    textColor: "#7D3394",
  },
  {
    bgColor: "#F9A6A8",
    textColor: "#55456F",
  },
  {
    bgColor: "#dcd6f7",
    textColor: "#424874",
  },
  {
    bgColor: "#aba9e9",
    textColor: "#64638f",
  },
  {
    bgColor: "#ffe9e3",
    textColor: "#7c73e6",
  },
  {
    bgColor: "#efb1ff",
    textColor: "#742dd2",
  },
  {
    bgColor: "#fee856",
    textColor: "#1b0044",
  },
  {
    bgColor: "#fee856",
    textColor: "#5c2a9d",
  },
  {
    bgColor: "#16db93",
    textColor: "#2c699a",
  },
  {
    bgColor: "#ffc4d6",
    textColor: "#ff5d8f",
  },
  {
    bgColor: "#80ed99",
    textColor: "#22577a",
  },
  {
    bgColor: "#ffb2e6",
    textColor: "#8447ff",
  },
];

export const randomPatternGenerator = () => {
  const indexOfPattern = Math.floor(Math.random() * randomPatterns.length);
  return randomPatterns[indexOfPattern];
};

export const randomThemeGenerator = () => {
  const indexOfColors = Math.floor(Math.random() * colorThemes.length);
  return colorThemes[indexOfColors];
};
