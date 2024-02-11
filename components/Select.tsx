import { GradientBackground } from "@/lib/types";
import { Listbox } from "@headlessui/react";
import { LanguageName } from "@uiw/codemirror-extensions-langs";
import clsx from "clsx";

interface selectProps<T> {
  type: "language" | "theme";
  initialValue: T;
  setValue: (_: T) => void;
  options: T[];
}

export default function Select<T extends GradientBackground | LanguageName>({
  type,
  initialValue,
  setValue,
  options,
}: selectProps<T>) {
  return (
    <Listbox value={initialValue} onChange={setValue}>
      <div className="relative">
        <Listbox.Button
          className={clsx(
            "flex select-none items-center justify-between gap-3 rounded-lg p-2 text-xs",
            "border-[1px] border-white/20 bg-black",
            "transition-colors duration-200 ease-in-out",
            "hover:cursor-pointer hover:bg-white/20 focus:outline-none"
          )}
        ></Listbox.Button>
      </div>
    </Listbox>
  );
}
