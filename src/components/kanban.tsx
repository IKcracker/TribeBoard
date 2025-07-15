"use client";

import React, {
  Dispatch,
  SetStateAction,
  useState,
  DragEvent,
  FormEvent,
} from "react";
import { FiPlus } from "react-icons/fi";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { Circle, Info, Settings } from "lucide-react";
import { AnimatedTooltip } from "./ui/animated-tooltip";

export const Kanban = () => {
  return (
    <div className={cn("h-full w-full bg-neutral-900 text-neutral-50")}>
      <Board />
    </div>
  );
};

const Board = () => {
  const [cards, setCards] = useState(DEFAULT_CARDS);

  return (
    <div className=" grid grid-cols-6 h-[85vh] w-full gap-3 overflow-scroll ">
      <Column
        title="Backlog"
        column="backlog"
        headingColor="text-neutral-500"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="TODO"
        column="todo"
        headingColor="text-yellow-200"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="In progress"
        column="doing"
        headingColor="text-blue-200"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="In Review"
        column="review"
        headingColor="text-purple-200"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="In Testing"
        column="testing"
        headingColor="text-red-200"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="Complete"
        column="done"
        headingColor="text-emerald-200"
        cards={cards}
        setCards={setCards}
      />
    </div>
  );
};

type ColumnProps = {
  title: string;
  headingColor: string;
  cards: CardType[];
  column: ColumnType;
  setCards: Dispatch<SetStateAction<CardType[]>>;
};

const Column = ({
  title,
  headingColor,
  cards,
  column,
  setCards,
}: ColumnProps) => {
  const [active, setActive] = useState(false);

  const handleDragStart = (e: DragEvent, card: CardType) => {
    e.dataTransfer.setData("cardId", card.id);
  };

  const handleDragEnd = (e: DragEvent) => {
    const cardId = e.dataTransfer.getData("cardId");

    setActive(false);
    clearHighlights();

    const indicators = getIndicators();
    const { element } = getNearestIndicator(e, indicators);

    const before = element.dataset.before || "-1";

    if (before !== cardId) {
      let copy = [...cards];

      let cardToTransfer = copy.find((c) => c.id === cardId);
      if (!cardToTransfer) return;
      cardToTransfer = { ...cardToTransfer, column };

      copy = copy.filter((c) => c.id !== cardId);

      const moveToBack = before === "-1";

      if (moveToBack) {
        copy.push(cardToTransfer);
      } else {
        const insertAtIndex = copy.findIndex((el) => el.id === before);
        if (insertAtIndex === undefined) return;

        copy.splice(insertAtIndex, 0, cardToTransfer);
      }

      setCards(copy);
    }
  };

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    highlightIndicator(e);

    setActive(true);
  };

  const clearHighlights = (els?: HTMLElement[]) => {
    const indicators = els || getIndicators();

    indicators.forEach((i) => {
      i.style.opacity = "0";
    });
  };

  const highlightIndicator = (e: DragEvent) => {
    const indicators = getIndicators();

    clearHighlights(indicators);

    const el = getNearestIndicator(e, indicators);

    el.element.style.opacity = "1";
  };

  const getNearestIndicator = (e: DragEvent, indicators: HTMLElement[]) => {
    const DISTANCE_OFFSET = 50;

    const el = indicators.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();

        const offset = e.clientY - (box.top + DISTANCE_OFFSET);

        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY,
        element: indicators[indicators.length - 1],
      }
    );

    return el;
  };

  const getIndicators = () => {
    return Array.from(
      document.querySelectorAll(
        `[data-column="${column}"]`
      ) as unknown as HTMLElement[]
    );
  };

  const handleDragLeave = () => {
    clearHighlights();
    setActive(false);
  };

  const filteredCards = cards.filter((c) => c.column === column);

  return (
    <div className="col-span-1 px-2 border-r-2 border-gray-500 shrink-0">
      <div className="mb-3 flex items-center p-4 border-b border-gray-500 justify-between text-neutral-200">
        <div className="flex items-center  gap-1">
          <Circle size={20} className={headingColor} />
          <h3 className={`font-medium  mt-[2px] ${headingColor}`}>{title}</h3>
          <span className="rounded-full bg-neutral-800 px-2 text-sm text-neutral-400">
            {filteredCards.length}
          </span>
        </div>
        <Settings size={16} />
      </div>
      <div
        onDrop={handleDragEnd}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`h-full w-full transition-colors ${
          active ? "bg-neutral-800/50" : "bg-neutral-800/0"
        }`}
      >
        {filteredCards.map((c) => {
          return <Card key={c.id} {...c} handleDragStart={handleDragStart} />;
        })}
        <DropIndicator beforeId={null} column={column} />
        <AddCard column={column} setCards={setCards} />
      </div>
    </div>
  );
};

type CardProps = CardType & {
  handleDragStart: (e: DragEvent, card: CardType) => void;
};

const Card = ({
  title,
  id,
  column,
  handleDragStart,
  description,
  contributors,
  dueDate,
  priority,
}: CardProps) => {
  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <motion.div
        layout
        layoutId={id}
        className="cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing"
      >
        <div
          draggable="true"
          onDragStart={(e: React.DragEvent<HTMLDivElement>) =>
            handleDragStart(e, {
              title,
              id,
              column,
              description,
              contributors,
              dueDate,
              priority,
            })
          }
        >
          <div className="flex items-start justify-between">
            <p className="text-md w-[90%] text-neutral-100">{title}</p>
            <Info
              color={
                priority === "low"
                  ? "green"
                  : priority === "medium"
                  ? "yellow"
                  : "red"
              }
              size={18}
            />
          </div>

          <p className="text-xs font-light text-gray-400">{description}</p>
          <AnimatedTooltip
            items={contributors!}
            className=" justify-end pr-4"
          />
        </div>
      </motion.div>
    </>
  );
};

type DropIndicatorProps = {
  beforeId: string | null;
  column: string;
};

const DropIndicator = ({ beforeId, column }: DropIndicatorProps) => {
  return (
    <div
      data-before={beforeId || "-1"}
      data-column={column}
      className="my-0.5 h-0.5 w-full bg-violet-400 opacity-0"
    />
  );
};

type AddCardProps = {
  column: ColumnType;
  setCards: Dispatch<SetStateAction<CardType[]>>;
};

const AddCard = ({ column, setCards }: AddCardProps) => {
  const [text, setText] = useState("");
  const [adding, setAdding] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!text.trim().length) return;

    const newCard = {
      column,
      title: text.trim(),
      id: Math.random().toString(),
    };

    setCards((pv) => [...pv, newCard]);

    setAdding(false);
  };

  return (
    <>
      {adding ? (
        <motion.form layout onSubmit={handleSubmit}>
          <textarea
            onChange={(e) => setText(e.target.value)}
            autoFocus
            placeholder="Add new task..."
            className="w-full rounded border border-violet-400 bg-violet-400/20 p-3 text-sm text-neutral-50 placeholder-violet-300 focus:outline-0"
          />
          <div className="mt-1.5 flex items-center justify-end gap-1.5">
            <button
              onClick={() => setAdding(false)}
              className="px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
            >
              Close
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 rounded bg-neutral-50 px-3 py-1.5 text-xs text-neutral-950 transition-colors hover:bg-neutral-300"
            >
              <span>Add</span>
              <FiPlus />
            </button>
          </div>
        </motion.form>
      ) : (
        <motion.button
          layout
          onClick={() => setAdding(true)}
          className="flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
        >
          <span>Add card</span>
          <FiPlus />
        </motion.button>
      )}
    </>
  );
};

type ColumnType = "backlog" | "todo" | "doing" | "review" | "testing" | "done";

type CardType = {
  title: string;
  id: string;
  column: ColumnType;
  description?: string;
  contributors?: {
    id: number;
    name: string;
    designation: string;
    image: string;
  }[];
  dueDate?: string;
  priority?: "low" | "medium" | "high";
};

const DEFAULT_CARDS: CardType[] = [
  {
    title: "Look into render bug in dashboard",
    id: "1",
    column: "backlog",
    description: "Investigate the issue with the dashboard rendering",
    contributors: [
      {
        id: 1,
        name: "kutullo",
        designation: "a student",
        image: "/images/alexander-hipp-iEEBWgY_6lA-unsplash.jpg",
      },
      {
        id: 2,
        name: "sizwe",
        designation: "a student",
        image: "/images/alexander-hipp-iEEBWgY_6lA-unsplash.jpg",
      },
    ],
    dueDate: "2023-10-15",
    priority: "high",
  },
  {
    title: "SOX compliance checklist",
    id: "2",
    column: "backlog",
    description: "Create a checklist for SOX compliance",
    contributors: [
      {
        id: 1,
        name: "kutullo",
        designation: "a student",
        image: "/images/alexander-hipp-iEEBWgY_6lA-unsplash.jpg",
      },
      {
        id: 2,
        name: "lory",
        designation: "a student",
        image: "/images/alexander-hipp-iEEBWgY_6lA-unsplash.jpg",
      },
    ],
    dueDate: "2023-10-20",
    priority: "medium",
  },
  {
    title: "[SPIKE] Migrate to Azure",
    id: "3",
    column: "backlog",
    description: "Research the migration process to Azure",
    contributors: [
      {
        id: 1,
        name: "Sizwe",
        designation: "a student",
        image: "/images/alexander-hipp-iEEBWgY_6lA-unsplash.jpg",
      },
    ],
    dueDate: "2023-10-25",
    priority: "low",
  },
  {
    title: "Document Notifications service",
    id: "4",
    column: "backlog",
    description: "Write documentation for the Notifications service",
    contributors: [
      {
        id: 1,
        name: "Alicia",
        designation: "a student",
        image: "/images/alexander-hipp-iEEBWgY_6lA-unsplash.jpg",
      },
    ],
    dueDate: "2023-10-30",
    priority: "medium",
  },
];
