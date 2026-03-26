"use client";

import { cn } from "../lib/utils";

// const PRIMARY_STRAND = Array.from({ length: 15 }, (_, index) => ({
//   id: `primary-${index}`,
//   top: 6 + index * 6.2,
//   delay: `${index * -0.7}s`,
// }));

// const SECONDARY_STRAND = Array.from({ length: 12 }, (_, index) => ({
//   id: `secondary-${index}`,
//   top: 10 + index * 7.1,
//   delay: `${index * -0.9}s`,
// }));

// function Helix({
//   nodes,
//   className,
//   compact = false,
// }: {
//   nodes: { id: string; top: number; delay: string }[];
//   className: string;
//   compact?: boolean;
// }) {
//   return (
//     <div className={className}>
//       {nodes.map((node, index) => (
//         <div
//           key={node.id}
//           className={`dna-row ${compact ? "dna-row-compact" : ""}`}
//           style={{ top: `${node.top}%`, animationDelay: node.delay }}
//         >
//           <span className="dna-node dna-node-left" style={{ animationDelay: node.delay }} />
//           <span
//             className="dna-rung"
//             style={{ animationDelay: `${index * -0.25}s` }}
//           />
//           <span
//             className="dna-node dna-node-right"
//             style={{ animationDelay: `${index * -0.35}s` }}
//           />
//         </div>
//       ))}
//     </div>
//   );
// }

export default function DnaBackground({
  variant = "default",
  className,
}: {
  variant?: "default" | "hero";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "absolute inset-0 z-0 overflow-hidden",
        variant === "hero" ? "opacity-100" : "opacity-20",
        className
      )}
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#BF2026] opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F68721] opacity-10 rounded-full blur-3xl"></div>
    </div>        
  );
}
