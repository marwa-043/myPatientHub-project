import { useState } from "react"; 
import { previousAppointments, upcomingAppointments } from "./ui/constants"; 
import { ui } from "./ui/styles"; import AppointmentCard from "./AppointmentCard";
const TABS = ["Days", "Months", "Years"];
function NewAppointmentCard() { return ( <a href="/searchdoctor" className="mb-6! block! no-underline!"> 
<div className="h-[168px]! rounded-2xl! bg-white! shadow-[0_20px_27px_rgba(0,0,0,0.05)]!"> 
<div className="flex! h-full! flex-col! justify-center! bg-transparent! p-6! text-center! text-[20px]! font-normal! leading-[1.625]! tracking-[0.00938em]! text-[#344767]! opacity-100!"> 
<div className="mb-1! flex! h-[33.5px]! items-center! justify-center!"> 
<span className="material-icons-round text-[24px]! leading-6! text-[#8392ab]!">add</span> </div>

 <h6 className="m-0! p-0! text-[16px]! font-medium! leading-[26px]! tracking-[0.00938em]! text-[#8392ab]!"> New Appointment </h6> </div> </div> </a> ); }

export default function SideAppointments() { const [activeTab, setActiveTab] = useState("Days");
return ( <div className="ml-auto! w-full! mr-6! max-w-[600px]! antialiased!" style={{ fontFamily: "Roboto, Helvetica, Arial, sans-serif" }} > <NewAppointmentCard />
  <AppointmentCard title="Previous Appoinments" items={previousAppointments} />

  <AppointmentCard title="Up Coming Appoinments" items={upcomingAppointments}>
    <div className={ui.tabs}>
      <div
        className="absolute! bottom-1! left-1! top-1! w-[calc((100%-0.5rem)/3)]! rounded-lg! bg-white! shadow-sm! transition-transform! duration-300! ease-out!"
        style={{ transform: `translateX(${TABS.indexOf(activeTab) * 100}%)` }}
      />
      {TABS.map((tab) => (
        <button
          key={tab}
          type="button"
          onClick={() => setActiveTab(tab)}
          className="relative! z-10! flex-1! cursor-pointer! border-0! bg-transparent! p-1! text-base! font-normal! leading-[1.625]! tracking-[0.02857em]! text-[#344767]! outline-none!"
        >
          {tab}
        </button>
      ))}
    </div>
  </AppointmentCard>
</div>
); }