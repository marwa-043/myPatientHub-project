import { useState } from "react"; 
import { useNavigate } from "react-router-dom"; 
 
import { PageTabs } from "./NewBooking.jsx";
import {  KINDS, PROC_DATA, START_EVENTS, TREAT_DATA } from "../../components/ui/constants";
import LineCard from "../../components/LineCard";
import NewAppointmentButton from "../../components/NewAppointmentButton"; 
import AppointmentCalendar from "../../components/AppointmentCalendar"; 
import AppointmentBarChart from "../../components/AppointmentBarChart"; 
import SideAppointments from "../../components/SideAppointments";

export default function Appointment() { 
  
const navigate = useNavigate(); 
const [events, setEvents] = useState(START_EVENTS); 
const [search, setSearch] = useState("");
const today = new Date().toISOString().slice(0, 10);

const addEvent = (date) => { const title = window.prompt("Appointment title:");

if (!title) return; setEvents([...events, { id: String(Date.now()), title: title, date: date, kind: "orange" }]); };

const removeEvent = (info) => { if (window.confirm("Delete " + info.event.title + "?")) {
 setEvents(events.filter((e) => e.id !== info.event.id)); } };

const shown = events .filter((e) => e.title.toLowerCase().includes(search.toLowerCase())) 

.map((e) => ({ id: e.id, title: e.title, date: e.date, color: KINDS[e.kind], classNames: ["ev-" + e.kind], }));


return (
  <div
    dir="ltr"
    className="flex min-h-screen w-full! max-w-none! flex-col p-0! text-left! text-[#344767]"
  >
    <main className="@container flex-1 px-3 py-4 sm:px-6">
      <PageTabs active="appointments" />

      <div className="mt-4 grid grid-cols-1 gap-4 @2xl:grid-cols-2 @4xl:grid-cols-[395fr_395fr_148fr]">
        <LineCard title="Procedures Taken" total={30} delta={3} data={PROC_DATA} />
        <LineCard title="Treatments Taken" total={12} delta={1} data={TREAT_DATA} />
        <NewAppointmentButton onClick={() => addEvent(today)} />
      </div>

      <div className="mt-4 grid grid-cols-1 items-start gap-4 @4xl:grid-cols-[641fr_313fr]">
        <AppointmentCalendar
          events={shown}
          onDateClick={addEvent}
          onEventClick={removeEvent}
        />

        <div className="min-w-0">
          <AppointmentBarChart />
          <div className="[&>div]:mr-0! [&>div]:max-w-none! [&>div>a:first-child]:hidden!">
            <SideAppointments />
          </div>
        </div>
      </div>
    </main>
  </div>
);
}