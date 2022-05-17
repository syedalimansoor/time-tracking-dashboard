export interface User {
  name: string;
  avatar: string;
}

export interface Activity {
  title: string;
  timeframes: {
    daily: {
      current: number;
      previous: number;
    };
    weekly: {
      current: number;
      previous: number;
    };
    monthly: {
      current: number;
      previous: number;
    };
  };
}

export type Timeframe = "daily" | "weekly" | "monthly";
