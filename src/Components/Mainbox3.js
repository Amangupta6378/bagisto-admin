import React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import MainBox31 from "./MainBox31";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

const MainBox3 = () => {
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
  ];
  return (
    <div className=" main-div  rounded-lg p-4 ">
      <div className="box3 ">
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
      <hr></hr>
      <MainBox31 />
    </div>
  );
};

export default MainBox3;
