import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BarChart, axisClasses } from "@mui/x-charts";
import { LineChart } from "@mui/x-charts/LineChart";
import usersImage from "../Assets/images/users.png";
import { ThemeProvider } from "@mui/styled-engine-sc";
import { styled } from "@mui/system";
import { createTheme } from "@mui/material/styles";

const Home = () => {
  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
  const xLabels = [
    "Page A",
    "Page B",
    "Page C",
    "Page D",
    "Page E",
    "Page F",
    "Page G",
  ];

  const chartSetting = {
    yAxis: [
      {
        label: "rainfall ()",
      },
    ],
    width: 500,
    height: 300,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: "rotate(-90deg) translate(0px, -20px)",
      },
    },
  };
  const dataset = [
    {
      Users: 59,
      paris: 57,
      newYork: 86,
      Farms: 21,
      month: "Jan",
    },
    {
      Users: 50,
      paris: 52,
      newYork: 78,
      Farms: 28,
      month: "Fev",
    },
    {
      Users: 47,
      paris: 53,
      newYork: 106,
      Farms: 41,
      month: "Mar",
    },
    {
      Users: 54,
      paris: 56,
      newYork: 92,
      Farms: 73,
      month: "Apr",
    },
    {
      Users: 57,
      paris: 69,
      newYork: 92,
      Farms: 99,
      month: "May",
    },
    {
      Users: 60,
      paris: 63,
      newYork: 103,
      Farms: 144,
      month: "June",
    },
    {
      Users: 59,
      paris: 60,
      newYork: 105,
      Farms: 319,
      month: "July",
    },
    {
      Users: 65,
      paris: 60,
      newYork: 106,
      Farms: 249,
      month: "Aug",
    },
    {
      Users: 51,
      paris: 51,
      newYork: 95,
      Farms: 131,
      month: "Sept",
    },
    {
      Users: 60,
      paris: 65,
      newYork: 97,
      Farms: 55,
      month: "Oct",
    },
    {
      Users: 67,
      paris: 64,
      newYork: 76,
      Farms: 48,
      month: "Nov",
    },
    {
      Users: 61,
      paris: 70,
      newYork: 103,
      Farms: 25,
      month: "Dec",
    },
  ];

  const valueFormatter = (value) => `${value}`;

  return (
    <div className="col-lg-12 vh-100 bg-light ">
      <div className="body">
        <div
          className="row"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            padding: "40px",
          }}
        >
          <div
            className="col-3  d-flex justify-content-center align-items-center gap-4"
            style={{
              marginRight: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "172px",
              backgroundColor: "#FFFFFF",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.04)",
              borderRadius: "14px",
            }}
          >
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                width: "85px",
                height: "85px",
                borderRadius: "50%",
                backgroundColor: "#FAFAFA",
              }}
            >
              <div className="fs-1">
                <img src={usersImage} alt="usersImage" />
              </div>
            </div>
            <div>
              <span style={{ fontWeight: "700", fontSize: "40px" }}>175</span>
              <span
                style={{
                  fontWeight: "400",
                  fontSize: "16px",
                  color: "#464255",
                  display: "block",
                }}
              >
                Total Users
              </span>
            </div>
          </div>
          <div
            className="col-3  d-flex justify-content-center align-items-center gap-4"
            style={{
              marginRight: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "172px",
              backgroundColor: "#FFFFFF",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.04)",
              borderRadius: "14px",
            }}
          >
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                width: "85px",
                height: "85px",
                borderRadius: "50%",
                backgroundColor: "#FAFAFA",
              }}
            >
              <div className="fs-1">
                <img src={usersImage} alt="usersImage" />
              </div>
            </div>

            <div>
              <span style={{ fontWeight: "700", fontSize: "40px" }}>363</span>
              <span
                style={{
                  fontWeight: "400",
                  fontSize: "16px",
                  color: "#464255",
                  display: "block",
                }}
              >
                Total Farms
              </span>
            </div>
          </div>
          <div
            className="col-3  d-flex justify-content-center align-items-center gap-4"
            style={{
              marginRight: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "172px",
              backgroundColor: "#FFFFFF",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.04)",
              borderRadius: "14px",
            }}
          >
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                width: "85px",
                height: "85px",
                borderRadius: "50%",
                backgroundColor: "#FAFAFA",
              }}
            >
              <div className="fs-1">
                <img src={usersImage} alt="usersImage" />
              </div>
            </div>
            <div>
              <span style={{ fontWeight: "700", fontSize: "40px" }}>325</span>
              <span
                style={{
                  fontWeight: "400",
                  fontSize: "16px",
                  color: "#464255",
                  display: "block",
                }}
              >
                Total Verified
              </span>
            </div>
          </div>
        </div>

        <div className="row  d-flex justify-content-center algin-items-center ">
          <div className="col-10  bg-white  d-flex justify-content-center algin-items-center">
            <BarChart
              dataset={dataset}
              xAxis={[{ scaleType: "band", dataKey: "month" }]}
              series={[
                {
                  dataKey: "Users",
                  label: "Users",
                  valueFormatter,
                  color: "#67B6B1", // Specify the color for this data series
                },
                {
                  dataKey: "Farms",
                  label: "Farms",
                  valueFormatter,
                  color: "#088277", // Specify the color for this data series
                },
              ]}
              {...chartSetting}
            />

            <BarChart
              width={700}
              height={300}
              series={[
                {
                  data: pData,
                  label: "Users",
                  id: "pvId",
                  color: "#67B6B1", // Specify the color for this data series
                  yAxisKey: "leftAxisId",
                },
                {
                  data: uData,
                  label: "Farms",
                  id: "uvId",
                  yAxisKey: "rightAxisId",
                  color: "#088277",
                },
              ]}
              xAxis={[{ data: xLabels, scaleType: "band" }]}
              yAxis={[{ id: "leftAxisId" }, { id: "rightAxisId" }]}
              rightAxis="rightAxisId"
              style={{ fill: "purple" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
