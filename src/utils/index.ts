import type { Timeframe } from "$src/types";

/** Will return "Yesterday", "Last week", "Last month", etc. based on the given timeframe */
export const getPreviousDurationText = (timeframe: Timeframe) => {
  switch (timeframe) {
    case "daily":
      return "Yesterday";
    case "weekly":
      return "Last week";
    case "monthly":
      return "Last month";
    default:
      throw new TypeError("Invalid timeframe provided");
  }
};

/** Convert space separated words to kebab-case, removing all punctuation */
export const toKebabCase = (sentence: string) => {
  let words: string[] = Array.from(
    sentence.matchAll(new RegExp(/\w+/, "g"))
  ).map((match) => match[0].toLowerCase());
  return words.join("-");
};
