import { LineChart } from "react-native-gifted-charts";

const data = [
  {
    label: "10 July",
    value: 80,
  },
  {
    label: "10 July",
    value: 20,
  },
  {
    label: "11 July",
    value: 30,
  },
  {
    label: "11 July",
    value: 90,
  },
  {
    label: "12 July",
    value: 80,
  },
  {
    label: "12 July",
    value: 20,
  },
  {
    label: "13 July",
    value: 30,
  },
  {
    label: "13 July",
    value: 90,
  },
  {
    label: "14 July",
    value: 30,
  },
  {
    label: "14 July",
    value: 90,
  },
  {
    label: "15 July",
    value: 80,
  },
  {
    label: "15 July",
    value: 20,
  },
  {
    label: "16 July",
    value: 30,
  },
];

const Chart = () => {
  return <LineChart data={data} adjustToWidth />;
};

export default Chart;
