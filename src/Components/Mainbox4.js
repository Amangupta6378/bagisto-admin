import React from "react";

const Mainbox4 = () => {
  const items = [
    {
      image:
        "https://demo.bagisto.com/bagisto-common/storage/product/356/MwfiTpZ3EK2ToYMmrPmlBnfye2hqjmIV1DNorbPg.webp",
      name: "CineXperience Monthly Movie Pass",
      title: "SKU - CXMPASS2023",
      price: "$99.00",
      stock: "99 Stock",
    },
    {
      image:
        "https://demo.bagisto.com/bagisto-common/storage/product/165/wveU2siGXWBBLhwCYwJPbBxr5lXUgMox9J2ZGPc4.webp",
      name: "Azure Comfort Full Sleeve T-Shirt-S",
      title: "SKU - AZURECOMFORTFULLSLEEVE2023",
      price: "$25.99",
      stock: "99 Stock",
    },
    {
      image:
        "https://demo.bagisto.com/bagisto-common/storage/product/223/r5IcrJK0cjE9CPAK8UbSDWRyMY1aqg6MHVtKYu1g.webp",
      name: "PureStride Men's Classic White Sneakers-06",
      title: "SKU - WHTSNEAK2023",
      price: "$59.99",
      stock: "99 Stock",
    },
    {
      image:
        "https://demo.bagisto.com/bagisto-common/storage/product/161/uHqVlUbi5Ft8Dx4psUGF885npog7TCbOydbZRbaf.webp",
      name: "Coastal Breeze Men's Blue Zipper Hoodie-S",
      title: "SKU - COASTALBREEZEMENSHOODIE2023",
      price: "$52.99",
      stock: "99 Stock",
    },
    {
      image:
        "https://demo.bagisto.com/bagisto-common/storage/product/169/PxSzTidAECXfybabjZJSHB6ZIGunlX0DpQ4vSX8e.webp",
      name: "Urban Slate Men's Grey Denim Jeans-28",
      title: "SKU - URBANSLATEMENSDENIM2023",
      price: "$37.99",
      stock: "99 Stock",
    },
  ];
  return (
    <div className="main-div shadow-xl">
      {items.map((item) => {
        return (
          <div className="d-flex px-4 pt-2 border-bottom">
            <div className="rounded-3 mt-1 ">
              <img
                width="60px"
                src={item.image}
                style={{ overflow: "hidden" }}
              ></img>
            </div>
            <div className="text-start ms-3 w-50">
              <h6>{item.name}</h6>
              <p className="text-secondary " style={{ fontSize: "13px" }}>
                {item.title}
              </p>
            </div>
            <div className="ms-3">
              <h6>{item.price}</h6>
              <p className="text-danger ">{item.stock}</p>
            </div>
            <hr></hr>
          </div>
        );
      })}
    </div>
  );
};

export default Mainbox4;
