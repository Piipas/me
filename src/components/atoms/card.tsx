import { CSSProperties, useMemo } from "react";
import { Button } from "./button";
import { Code, Github, MoveRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { GlareCard } from "../ui/glare-card";
import CardBackSide from "../organisms/card-back-side";

export type Card = {
  label: string;
  title: string;
  logo: string;
  screenshot: string;
  description: string;
  sourceCode?: string;
  url: string;
  tags?: string[];
  visible: boolean;
};

export const Card = ({
  content: { description, label, logo, screenshot, title, url, sourceCode, tags },
  style,
  isActive,
  screenSize,
  className,
}: {
  content: Card;
  style?: CSSProperties;
  isActive: boolean;
  screenSize: number;
  className?: string;
}) => {
  const rotation = useMemo(() => Math.round(Math.random() * (10 - -10) + -10), []);

  return (
    <div
      className={cn(
        className,
        "w-[300px] h-[400px] flex items-center justify-center text-3xl text-background select-none pb-16 md:p-0",
      )}
      style={{ perspective: "1000px", zIndex: isActive ? "50" : undefined, ...style }}
    >
      <div
        className="w-full h-full relative transition-transform duration-500 transform-style-3d"
        style={{
          transform: isActive || screenSize < 768 ? `rotate(${0}deg) rotateY(180deg)` : `rotate(${rotation}deg)`,
        }}
      >
        <GlareCard className="flex items-center justify-center w-full h-full top-0 left-0 overflow-hidden backface-visibility-hidden">
          <p className="text-foreground">{label}</p>
        </GlareCard>
        <CardBackSide
          description={description}
          sourceCode={sourceCode}
          tags={tags}
          title={title}
          label={label}
          url={url}
          screenshot={screenshot}
          className="bg-white dark:bg-black w-full h-full"
        />
      </div>
    </div>
  );
};
