import { Box, Button } from "@mui/material";
import ReactApexChart from "react-apexcharts";

const ApexChart = () => {
  const series = [
    {
      name: "Servings",
      data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 68, 65, 35],
    },
  ];
  const annotations = {
    points: [
      {
        x: "Bananas",
        seriesIndex: 0,
        label: {
          borderColor: "#775DD0",
          offsetY: 0,
          style: {
            color: "#fff",
            background: "#775DD0",
          },
          text: "Bananas are good",
        },
      },
    ],
  };

  const options = {
    chart: {
      height: 300,
      type: "bar",
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        columnWidth: "50%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 2,
    },
    grid: {
      row: {
        colors: ["#fff", "#f2f2f2"],
      },
    },
    xaxis: {
      labels: {
        rotate: -45,
      },
      // categories: [
      //   "Apples",
      //   "Oranges",
      //   "Strawberries",
      //   "Pineapples",
      //   "Mangoes",
      //   "Bananas",
      //   "Blackberries",
      //   "Pears",
      //   "Watermelons",
      //   "Cherries",
      //   "Pomegranates",
      //   "Tangerines",
      //   "Papayas",
      // ],
      tickPlacement: "on",
    },
    yaxis: {
      title: {
        text: "Servings",
      },
    },
    fill: {
      colors: ["#7F00FF"],
      type: "gradient",
      gradient: {
        shade: "light",
        type: "horizontal",
        shadeIntensity: 0.25,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 0.85,
        opacityTo: 0.85,
        stops: [50, 0, 100],
      },
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={270}
      />
      <Box sx={{ textAlign: "center" }}>
        <Button
          size="small"
          variant="contained"
          sx={{
            backgroundColor: "purple",
            color: "white",
            width: "80%",
          }}
        >
          submit
        </Button>
      </Box>
    </div>
  );
};

export default ApexChart;
