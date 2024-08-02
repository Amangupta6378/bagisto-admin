import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";
import "../";

const MainBox2 = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const options = {
        chart: {
          type: "bar",
        },
        series: [
          {
            // <canvas id="36_chart" class="flex items-end w-full" width="490" height="347" style="aspect-ratio: 1.41 / 1; display: block; box-sizing: border-box; height: 231px; width: 326px;"></canvas>
            data: [
              {
                x: "19 feb.",
                y: 10,
              },
              {
                x: "20 feb.",
                y: 18,
              },
              {
                x: "21 feb.",
                y: 13,
              },
              {
                x: "22 feb.",
                y: 11,
              },
              {
                x: "23 feb.",
                y: 17,
              },
              {
                x: "24 feb.",
                y: 16,
              },
              {
                x: "24 feb.",
                y: 17,
              },
              {
                x: "24 feb.",
                y: 10,
              },
              {
                x: "24 feb.",
                y: 20,
              },
              {
                x: "24 feb.",
                y: 13,
              },
            ],
          },
        ],
      };

      const chart = new ApexCharts(chartRef.current, options);
      chart.render();

      return () => {
        <div className="chart">
          <h5>Total Sales</h5>
          chart.destroy()
        </div>;
      };
    }
  }, []);

  return <div ref={chartRef} />;
};

export default MainBox2;
