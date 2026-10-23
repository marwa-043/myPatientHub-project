import { useEffect , useState } from "react";
import { useNavigate } from "react-router-dom";


const FONT_LINKS = [
  "https://fonts.googleapis.com/icon?family=Material+Icons+Round",
  "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap",
];

const NB_CSS = `
.nb-btn, .nb-btn:hover, .nb-btn:focus, .nb-btn:focus-visible, .nb-btn:active {
  margin: 0 !important;
  border: 0 !important;
  outline: 0 !important;
  text-decoration: none !important;
}
.nb-tab, .nb-tab:hover, .nb-tab:focus, .nb-tab:active { transform: none !important; }
.nb-book { transition: all 150ms ease-in !important; }
.nb-book:hover { transform: scale(1.02) !important; opacity: 0.9; }
.nb-book:active { transform: scale(0.98) !important; }
`;

function useFonts() {
  useEffect(() => {
    FONT_LINKS.forEach((href) => {
      if (document.querySelector(`link[href="${href}"]`)) return;
      const l = document.createElement("link");
      l.rel = "stylesheet";
      l.href = href;
      document.head.appendChild(l);
    });
  }, []);
}

const CARD =
  "rounded-2xl! bg-white! border-0 p-4 shadow-[0_20px_27px_rgba(0,0,0,0.05)]! sm:p-5";

  const BOOK_BTN =
  "inline-flex min-h-10 min-w-16 cursor-pointer select-none items-center justify-center " +
  "rounded-lg border-0! outline-none bg-[linear-gradient(310deg,#7928ca,#ff0080)]! bg-[length:150%]! bg-[position:25%_center]! " +
  "px-6! py-3! text-center font-[family-name:Roboto,Helvetica,Arial,sans-serif]! antialiased text-[12px]! font-medium! uppercase " +
  "leading-[1.4]! tracking-[0.02857em]! text-white! " +
  "shadow-[0_4px_7px_-1px_rgba(0,0,0,0.11),0_2px_4px_-1px_rgba(0,0,0,0.07)] " +
  "transition-all! duration-300! ease-in-out! " +
  "hover:scale-[1.04]! hover:opacity-90! active:scale-[0.98]!";

  function BookBtn({ to, children }) {
    const navigate = useNavigate();
    const [hover, setHover] = useState(false);
    return (
      <button
        type="button"
        onClick={() => navigate(to)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={BOOK_BTN}
        style={{
          transform: hover ? "scale(1.04)" : "scale(1)",
          opacity: hover ? 0.9 : 1,
          transition: "all 150ms ease-in",
        }}
      >
        {children}
      </button>
    );
  }

  let lastTab = null;

export function PageTabs({ active }) {
  const navigate = useNavigate();
  useFonts();
  const [pos, setPos] = useState(lastTab ?? active);

  useEffect(() => {
    const t = setTimeout(() => setPos(active), 30);
    lastTab = active;
    return () => clearTimeout(t);
  }, [active]);

  const items = [
    ["appointments", "Appointments", "travel_explore", "/appointments"],
    ["booking", "New Booking", "view_list", "/new-booking"],
  ];


  const go = (id, path) => {
    if (id === pos) return;
    lastTab = id;
    setPos(id);
    setTimeout(() => navigate(path), 300);
  };

  return (
    <div className="my-4 flex justify-center">
      <div className="relative grid w-[400px] max-w-[90vw] grid-cols-2 rounded-lg bg-[#f8f9fa] p-1">
        <div
          className={
            "absolute bottom-1 left-1 top-1 w-[calc(50%-4px)] rounded-lg bg-white shadow-[0_1px_5px_1px_#ddd] transition-transform duration-300 ease-in-out " +
            (pos === "booking" ? "translate-x-full" : "translate-x-0")
          }
        />
        {items.map(([id, label, icon, path]) => (
          <button
            key={id}
            type="button"
            onClick={() => go(id, path)}
            className="nb-btn nb-tab relative z-10 flex cursor-pointer items-center justify-center gap-2 rounded-lg border-0! bg-transparent! p-1! font-[family-name:Roboto,Helvetica,Arial,sans-serif]! text-base! font-normal! leading-[26px]! tracking-[0.02857em]! normal-case text-[#344767]!"
          >
            <span className="material-icons-round mr-1 select-none text-[24px]! leading-none! text-[#CB0C9F]!">
              {icon}
            </span>
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
export default function NewBooking() {
  const navigate = useNavigate();

  return (
    <div
      dir="ltr"
      className="flex w-full! max-w-none! flex-col p-0! text-left! text-[#344767]"
    >
      <main className="flex-1 px-3 py-2 sm:px-6">
        <PageTabs active="booking" />

        <div className="mt-6 flex flex-col items-center gap-2">
          <button type="button" onClick={() => navigate("/doctor")} className={BOOK_BTN}>
            Book an appointment with doctor
          </button>
          <button type="button" onClick={() => navigate("/clinic")} className={BOOK_BTN}>
            Book room in hospital
          </button>
        </div>
      </main>
    </div>
  );
}