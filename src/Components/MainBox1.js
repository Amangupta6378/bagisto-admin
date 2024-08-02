import React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const MainBox1 = () => {
  const data = [
    {
      image:
        "https://demo.bagisto.com/bagisto-common/themes/admin/default/build/assets/total-sales-5b2c7b58.svg",
      dollar: "$200.96",
      sale: "Total Sales",
      percent: "100%",
    },
    {
      image:
        "https://demo.bagisto.com/bagisto-common/themes/admin/default/build/assets/total-orders-f1b2017e.svg",
      dollar: "6",
      sale: "Total Orders",
      percent: ` 100%`,
    },
    {
      image:
        "https://demo.bagisto.com/bagisto-common/themes/admin/default/build/assets/customers-199df769.svg",
      dollar: "0",
      sale: "Total Customers",
      percent: ` 0%`,
    },
    {
      image:
        "https://demo.bagisto.com/bagisto-common/themes/admin/default/build/assets/average-orders-71c4bf9a.svg",
      dollar: "$33.49",
      sale: "Average Order Sale",
      percent: ` 100%`,
    },
    {
      image:
        "https://demo.bagisto.com/bagisto-common/themes/admin/default/build/assets/total-sales-5b2c7b58.svg",
      dollar: "$0.00",
      sale: "Total Unpaid Invoices",
      percent: "0%",
    },
  ];
  return (
    <div className=" main-div mt-1 rounded-lg p-4 ">
      <div className="box ">
        {data.map((item) => {
          return (
            <div className="d-flex box2 ">
              <div className="image">
                <img src={item.image}></img>
              </div>
              <div className="items">
                <p className="para1">{item.dollar}</p>
                <p className="para2 ">{item.sale}</p>
                <p className="para3 ">
                  {/* <ArrowUpwardIcon /> */}
                  {item.percent}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainBox1;
