import Chart from "react-apexcharts";
import { CARD } from "./ui/constants";
export default function AppointmentBarChart() {
  return (
    <div className={CARD + " mb-6! [&_.apexcharts-legend-marker]:rounded-[2px]! [&_.apexcharts-menu-item]:font-['Roboto',Helvetica,Arial,sans-serif]! [&_.apexcharts-menu-item]:text-[12px]! [&_.apexcharts-menu-item]:text-[rgba(0,0,0,0.87)]! [&_.apexcharts-tooltip]:[background:rgba(255,255,255,0.96)]! [&_.apexcharts-tooltip]:[border:1px_solid_#e3e3e3]! [&_.apexcharts-tooltip]:rounded-[5px]! [&_.apexcharts-tooltip]:overflow-hidden! [&_.apexcharts-tooltip]:shadow-[2px_2px_6px_-4px_#999]! [&_.apexcharts-tooltip-title]:[background:#ECEFF1]! [&_.apexcharts-tooltip-title]:[border-bottom:1px_solid_#ddd]! [&_.apexcharts-tooltip-title]:px-2! [&_.apexcharts-tooltip-title]:py-[6px]! [&_.apexcharts-tooltip-title]:text-xs!"}>
    <Chart
      type="bar"
      width="100%"
      height={350}
      series={[
        { name: "Emergency", data: [44, 55, 41, 67, 22, 43] },
        { name: "Examination", data: [13, 23, 20, 8, 13, 27] },
        { name: "Consultation", data: [11, 17, 15, 15, 21, 14] },
        { name: "Routine Checkup", data: [21, 7, 25, 13, 22, 8] },
      ]}
      options={{
        chart: {
          stacked: true,
          fontFamily: "Helvetica, Arial, sans-serif",
          toolbar: { show: true, offsetY: 0 },
        },
        title: {
          text: "Appointment",
          align: "left",
          offsetX: 0,
          offsetY: 0,
          style: {
            fontSize: "14px",
            fontWeight: 900,
            fontFamily: "Helvetica, Arial, sans-serif",
            color: "#373d3f",
          },
        },
        colors: [
          "rgb(0, 143, 251)",
          "rgb(0, 227, 150)",
          "rgb(254, 176, 25)",
          "rgb(255, 69, 96)",
        ],
        fill: { opacity: 1 },
    plotOptions: {
    bar: {
    columnWidth: "60%",
     borderRadius: 8,
    borderRadiusApplication: "end",
 borderRadiusWhenStacked: "last",
},
},
        dataLabels: {
          enabled: true,
          style: { fontSize: "12px", fontWeight: 600, colors: ["#fff"] },
        },
        xaxis: {
          categories: ["jan", "Feb.", "Mar.", "Apr.", "May", "Jun"],
          axisBorder: { show: true, color: "#c8d0dc" },
          axisTicks: { show: false },
          labels: {
            rotate: 0,
            rotateAlways: false,
            style: { colors: "#373d3f", fontSize: "12px", fontWeight: 400, fontFamily: "Helvetica, Arial, sans-serif" },
          },
        },     
        yaxis: {
          min: 0,
          max: 120,
          tickAmount: 4,
          labels: {
            style: { colors: "#373d3f", fontSize: "11px", fontWeight: 400, fontFamily: "Helvetica, Arial, sans-serif" },
          },
        },
        grid: { borderColor: "#e3e8f0" },
        legend: {
          position: "bottom",
          horizontalAlign: "center",
          offsetX: 50,
          fontSize: "12px",
          fontWeight: 400,
          fontFamily: "Helvetica, Arial, sans-serif",
          width: 300,
          labels: { colors: "#000" },
          markers: { width: 12, height: 12, radius: 2, offsetX: 0, offsetY: 0 },
          itemMargin: { horizontal: 5, vertical: 4 },
        },
      }}
    ></Chart>
  </div>
  );
}