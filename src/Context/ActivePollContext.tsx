import React, { createContext, useContext, useState, ReactNode } from "react";
import Questions from "../../assets/data/data.json";

export interface PollOption {
  optionId: string;
  text: string;
  amount: number;
}

export interface Poll {
  pollId: string;
  question: string;
  options: PollOption[];
  createdBy: string;
  createdAt: string;
  excerpt: string;
  traders: number;
}

interface ActivePollContextData {
  activePoll: Poll | null;
  setActivePoll: (poll: Poll | null) => void;
  activeOption: PollOption | null;
  setActiveOption: (activeOption: PollOption | null) => void;
}

const ActivePollContext = createContext<ActivePollContextData | undefined>(
  undefined
);

interface ActivePollProviderProps {
  children: ReactNode;
}

export const ActivePollProvider: React.FC<ActivePollProviderProps> = ({
  children,
}) => {
  const [activePoll, setActivePoll] = useState<Poll | null>(null);
  const [activeOption, setActiveOption] = useState<PollOption | null>(null);

  return (
    <ActivePollContext.Provider
      value={{ activePoll, setActivePoll, activeOption, setActiveOption }}
    >
      {children}
    </ActivePollContext.Provider>
  );
};

export const useActivePoll = (): ActivePollContextData => {
  const context = useContext(ActivePollContext);
  if (context === undefined) {
    throw new Error("useActivePoll must be used within an ActivePollProvider");
  }
  return context;
};
