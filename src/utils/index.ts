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
