import Chart from "react-apexcharts"; import { CARD, GRAY, MONTHS } from "./ui/constants"; import { TOOLTIP_FIX } from "./ui/styles";
export default function LineCard({ title, total, delta, data }) { return ( <div className={CARD + " min-w-0 overflow-hidden @4xl:h-[168px] [&_.apexcharts-gridline]:[stroke-width:0.5px]!"}> <div className="mb-[6.5px]! text-sm! font-medium! leading-[21px]! text-[#67748e]!">{title}</div> <h5 className="m-0! text-xl! font-bold! leading-[1.375]! text-[#344767]!"> {total}{" "} <span className="ml-1! text-sm! font-bold! leading-[21px]! text-[#82d616]!">+{delta}</span> </h5>
  <div className={TOOLTIP_FIX}>
    <Chart
      type="area"
      width="100%"
      height={100}
      series={[{ name: title, data: data }]}
      options={{
        chart: {
          toolbar: { show: false },
          parentHeightOffset: 0,
          offsetY: -10,
          zoom: { enabled: false },
        },
        stroke: { curve: "smooth", width: 2 },
        colors: ["#17C1E8"],
        fill: {
          type: "gradient",
          colors: ["#D8E3F0"],
          gradient: {
            shade: "light",
            type: "vertical",
            shadeIntensity: 0,
            gradientToColors: ["#BED1E6"],
            inverseColors: false,
            opacityFrom: 0.3,
            opacityTo: 0.3,
            stops: [0, 100],
          },
        },
        dataLabels: { enabled: false },
        xaxis: {
          categories: MONTHS,
          tickPlacement: "on",
          tooltip: { enabled: false },
          axisBorder: { show: false },
          axisTicks: { show: false },
          labels: { style: { colors: GRAY, fontSize: "12px", fontWeight: 500, fontFamily: "Roboto, Helvetica, Arial, sans-serif" } },
        },
        yaxis: {
          min: 40,
          max: 100,
          tooltip: { enabled: false },
          tickAmount: 6,
          forceNiceScale: false,
          labels: {
            style: { colors: GRAY, fontSize: "13px", fontWeight: 500, fontFamily: "Roboto, Helvetica, Arial, sans-serif" },
            formatter: (v) => (v === 40 || v === 80 ? String(v) : ""),
          },
        },
        grid: {
          borderColor: "#c8d0dc",
          strokeDashArray: 6,
          padding: { top: 0, bottom: -10, left: 10, right: 20 },
          xaxis: { lines: { show: true } },
          yaxis: { lines: { show: false } },
        },
        tooltip: {
          theme: "dark",
          style: { fontSize: "11px", fontFamily: "Roboto, Helvetica, Arial, sans-serif" },
          x: { show: true },
          y: {
            title: { formatter: () => "Visitors" },
            formatter: (v) => String(v),
          },
          marker: { show: true, fillColors: ["#ffffff"] },
        },
        markers: {
          size: 0,
          colors: ["#ffffff"],
          strokeColors: "#17C1E8",
          strokeWidth: 2,
          hover: { size: 5 },
        },
      }}
    />
  </div>
</div>
); }