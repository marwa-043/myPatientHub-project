import { CARD } from "./ui/constants";
export default function NewAppointmentButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className={CARD + " flex min-h-32 flex-col items-center justify-center gap-2 border! border-[#dee2e6]! p-6! text-[#344767] @2xl:col-span-2 @4xl:col-span-1 @4xl:h-[168px]"}
    >
      <span className="material-icons-round text-[24px]! leading-6! text-[#8392ab]! [-webkit-text-stroke:1px_#8392ab]">add</span>
      <span className="text-center text-base! font-medium! leading-[26px]! text-[#8392ab]!">
        New<br />Appointment
      </span>
    </button>
  );
}