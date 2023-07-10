import React from "react";

type Props = {
  title: string;
};

export default function Header({ title }: Props) {
  return (
    <header className="bg-sky-100">
      <nav className="flex p-4 justify-between container mx-auto items-center">
        <div className="text-2xl">{title}</div>
      </nav>
    </header>
  );
}
