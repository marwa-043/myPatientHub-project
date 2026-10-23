import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

import { CARD } from "./ui/constants";
import { FC } from "./ui/styles";

export default function AppointmentCalendar({ events, onDateClick, onEventClick }) {
  return (
    <div className={CARD + " min-w-0 pt-8! px-4! " + FC}>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        initialDate="2022-04-01"
        headerToolbar={{ left: "title", right: "today prev,next" }}
        events={events}
        eventDisplay="block"
        height="auto"
        dateClick={(info) => onDateClick(info.dateStr)}
        eventClick={onEventClick}
      />
    </div>
  );
}