import { useEffect, useRef, useState } from "react";

const MENU_ITEMS = ["Action", "Another action", "Something else here"];

export default function RowMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const close = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div ref={ref} className="relative!">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex! cursor-pointer! border-0! bg-transparent! p-0!"
      >
        <span className="material-icons-round text-[24px]! leading-none! text-[#8392AB]!">more_vert</span>
      </button>

      <div
        className={
          "absolute! right-full! top-0! z-50! min-w-[176px]! origin-top-right! rounded-xl! bg-white! p-2! shadow-[0_0.5rem_1.625rem_-0.25rem_rgb(20_20_20/15%),0_0.5rem_0.5625rem_-0.3125rem_rgb(20_20_20/6%)]! transition-all! duration-200! " +
          (open ? "scale-100! opacity-100!" : "pointer-events-none! scale-90! opacity-0!")
        }
      >
        {MENU_ITEMS.map((label) => (
          <button
            key={label}
            type="button"
            onClick={() => setOpen(false)}
            className="block! w-full! cursor-pointer! rounded-lg! border-0! bg-transparent! px-4! py-[4.8px]! text-left! text-sm! font-normal! leading-normal! text-[#67748e]! hover:bg-[#f0f2f5]! hover:text-[#344767]!"
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}