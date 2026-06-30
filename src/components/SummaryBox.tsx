import type { ReactNode } from "react";

type SummaryBoxProps = {
  children: ReactNode;
  title?: string;
};

export function SummaryBox({ children, title = "重點摘要" }: SummaryBoxProps) {
  return (
    <section className="rounded-lg border border-teal-100 bg-white p-5 shadow-sm">
      <h2 className="text-xl font-semibold tracking-normal text-zinc-950">{title}</h2>
      <div className="mt-3 text-base leading-8 text-zinc-700">{children}</div>
    </section>
  );
}
