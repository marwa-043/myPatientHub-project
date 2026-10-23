import doctorImage from "../assets/doctor.jpg";
import { ui } from "./ui/styles";
import RowMenu from "./RowMenu";

export default function AppointmentCard({ title, items, children }) {
  return (
    <div className={ui.paper}>
      <div className={ui.body}>
        <h2 className={ui.title}>{title}</h2>

        {children}

        {items.map((item, index) => (
          <div key={index} className={ui.row}>
            <div className={ui.left}>
              <img src={doctorImage} alt="Doctor" className={ui.avatar} />
              <div className={ui.col}>
                <p className={ui.name}>{item.doctor}</p>
                <p className={ui.type}>{item.type}</p>
              </div>
            </div>

            <div className={ui.right}>
              <p className={ui.date}>{item.date.replace(", ", ",\n")}</p>
              <RowMenu />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}