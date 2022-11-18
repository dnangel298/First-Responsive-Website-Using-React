import "chart.js/auto";
import { React, useState, useEffect, Fragment } from "react";
import { Chart } from "react-chartjs-2";
import { fetchDailyData } from "../FetchedData";



//Chart with fetched API using Axios
export const LineChart = () => {
  const [dailyData, setDailyData] = useState([]);

  const fetchApi = async () => {
    const dailyData = await fetchDailyData();
    setDailyData(dailyData);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const lineChart = dailyData[0] ? (
    <Chart
      type="line"
      data={{
        labels: dailyData.map(({ date }) =>
          new Date(date).toLocaleDateString()
        ),
        datasets: [
          {
            data: dailyData.map((data) => data.confirmed),
            label: "Infected",
            borderColor: "rgb(0, 217, 255)",
            fill: true,
          },
          {
            data: dailyData.map((data) => data.deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgb(255, 0, 0)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return (
    <>
      <Fragment>{lineChart}</Fragment>
    </>
  );
};

//Static ChartJS
export const BarChart = () => {
  const labels = ["January", "February", "March", "April", "May", "June"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };
  return (
    <div>
      <Chart type="bar" data={data} />
    </div>
  );
};
