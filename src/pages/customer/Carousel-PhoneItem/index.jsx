import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../../components/customize/fetch";
// import { useParams } from "react-router-dom";
import ThemeContext from "../../../components/customer/Context/ThemeContext";
import "./CarouselPhone.scss";

function CarouselPhone(props) {
  let params = useParams();
  //Fake API
  const {data: dataProductItem,isLoading,isError,} = useFetch(`http://localhost:3006/productitem/${params.id}`);
  
  //set add cart
  const {setMycart} = useContext(ThemeContext);
  const handleClickCart = () => {
    // add iphone13,12
    const newItems = {
      img: dataProductItem.img,
      name: dataProductItem.name,
      priceNew: dataProductItem.priceNew,
      priceOld: dataProductItem.priceOld

    };
    // [1,2] arr.push(2);
    setMycart((item) => [...item, newItems]);
   console.log(newItems);
  };
  return (
    <div className="container-fluid mt-5">
      {isError === false && isLoading === false && (
        <div className="row">
          <div className="col-md-5">
            <div
              className="carousel slide"
              data-ride="carousel"
              id="carousel-1"
            >
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                  <img
                    className="img-thumbnail w-100 d-block"
                    src={dataProductItem.img}
                    alt="Slide Image"
                    loading="lazy"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="img-thumbnail w-100 d-block"
                    src="https://images.fpt.shop/unsafe/fit-in/960x640/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2022/4/19/637859769705793853_iPhone%2013%20Promax%20(4).jpg"
                    alt="Slide Image"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="img-thumbnail w-100 d-block"
                    src="https://images.fpt.shop/unsafe/fit-in/960x640/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2022/3/30/637842409657755231_iphone-13-pro-max-green-1.jpg"
                    alt="Slide Image"
                  />
                </div>
              </div>
              <div>
                <a
                  className="carousel-control-prev"
                  href="#carousel-1"
                  role="button"
                  data-slide="prev"
                >
                  <span className="carousel-control-prev-icon"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carousel-1"
                  role="button"
                  data-slide="next"
                >
                  <span className="carousel-control-next-icon"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
              <ol className="carousel-indicators">
                <li
                  data-target="#carousel-1"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li data-target="#carousel-1" data-slide-to="1"></li>
                <li data-target="#carousel-1" data-slide-to="2"></li>
              </ol>
            </div>
          </div>
          <div className="col-md-7">
            <h4 className="h2">{dataProductItem.name}</h4>
            <div className="price">
              <span className="mr-2 font-weight-bold">
                <i className="fa fa-rupee text-success"></i>&nbsp;
                {dataProductItem.priceNew.toLocaleString()} VN??
              </span>
              <span className="mr-2 cut">{dataProductItem.priceOld.toLocaleString()} VN??</span>
              <span className="text-success">25% OFF</span>
            </div>
            <div className="d-flex flex-row">
              <div className="icons mr-2">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-o"></i>
                <i className="fa fa-star-o"></i>
              </div>
              <span>1200 ratings &amp; 564 reviews</span>
            </div>
            <div className="d-flex list-color-item">
              <div className="color-item">
              <a className=""><p>Xanh</p></a>
              </div>
              <div className="color-item">
              <a className=""><p>V??ng</p></a>
              </div>
              <div className="color-item">
              <a className=""><p>Tr???ng</p></a>
              </div>
              <div className="color-item">
              <a className=""><p>??en</p></a>
              </div>
               
              
            </div>
            <div className="d-flex align-items-center mt-4 offers mb-1">
              <i className="fa fa-check-square-o mt-1"></i>
              <span className="ml-1 font-weight-bold">Bank Offers</span>
              <span className="ml-1">
                20% Instant Discount on SBI Credit Cards
                <br />
              </span>
            </div>
            <div className="d-flex align-items-center offers mb-1">
              <i className="fa fa-check-square-o mt-1"></i>
              <span className="ml-1 font-weight-bold">Bank Offers</span>
              <span className="ml-1">
                5% Unlimited Cashback on Axis Bank Credit Card
                <br />
              </span>
            </div>
            <div className="d-flex align-items-center offers mb-1">
              <i className="fa fa-check-square-o mt-1"></i>
              <span className="ml-1 font-weight-bold">Bank Offers</span>
              <span className="ml-1">
                Extra 5% off* with Axis Bank Buzz Credit Card
                <br />
              </span>
            </div>
            <div className="d-flex align-items-center offers">
              <i className="fa fa-check-square-o mt-1"></i>
              <span className="ml-1 font-weight-bold">Bank Offers</span>
              <span className="ml-1">
                20% Instant Discount on pay with&nbsp;&nbsp;google wallet
                <br />
              </span>
            </div>
            <div className="d-flex align-items-center mt-5 delivery">
              <i className="fa fa-map-marker"></i>
              <span className="ml-2">
                Da Nang by 23 Jul, Tuesday
                <br />
              </span>
              <span className="ml-2 mr-2">
                |<br />
              </span>
              <span className="ml-2 mr-2 text-success">
                FREE
                <br />
              </span>
            </div>
            <hr />
            <div className="d-flex align-items-center mt-2">
              {" "}
              <label className="radio">
                {" "}
                <input
                  type="radio"
                  name="ram"
                  value="128GB"
                  defaultChecked
                />{" "}
                <span>128GB</span>{" "}
              </label>{" "}
              <label className="radio">
                {" "}
                <input type="radio" name="ram" value="256GB" />{" "}
                <span>256GB</span>{" "}
              </label>{" "}
              <label className="radio">
                {" "}
                <input type="radio" name="ram" value="256GB" />{" "}
                <span>512GB</span>{" "}
              </label>{" "}
            </div>
            <div>
              <span className="font-weight-bold">Branh:</span>
              <span className="ml-2">{dataProductItem.producer}</span>
            </div>
            <div className="mt-3">
              <button className="btn btn-dark mr-2" type="button">
                Mua ngay
              </button>
              <button
                className="btn btn-success"
                onClick={ 
                  handleClickCart
                }
              >
                Th??m v??o gi???
              </button>
            </div>
          </div>
        </div>
      )}
      {/* loading */}
      {isLoading === true && (
        <p className="p-style" style={{ textAlign: "center" }}>
          {" "}
          Loading...
        </p>
      )}
      {/* ko c?? d??? li???u */}
      {isError === true && (
        <p className="p-style" style={{ textAlign: "center" }}>
          {" "}
          Something wrong state 404...{" "}
        </p>
      )}
    </div>
  );
}

export default CarouselPhone;
