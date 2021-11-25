import React from 'react';

const Summary = () => {
  return (
    <section className="container pt-6 pb-6">
      <div className="row align-items-center justify-content-center">
        <div className="col-12 col-md-7 col-lg-6">
          <h1 className="text-pink">Nền tảng quyên góp từ thiện Mầm Xanh</h1>
          <p className="lead text-gray-700 mt-5 mb-5">
            Mầm Xanh&nbsp;là nền&nbsp;tảng giúp bạn dễ dàng chung tay quyên góp tiền
            cùng hàng triệu người, giúp đỡ các hoàn cảnh khó khăn trên khắp cả nước.
          </p>
          <div className="pt-1 solieu-list">
            <div className="solieu-item">
              <h4
                className="solieu-item-title"
                data-countup=""
                data-end="95"
                data-start="0"
                data-suffix="%"
              >
                95%
              </h4>
              <div className="solieu-item-subtitle">
                dự án đã được gây quỹ thành công
              </div>
            </div>
            <div className="solieu-item">
              <h4
                className="solieu-item-title"
                data-countup=""
                data-end="7500"
                data-start="1000"
                data-suffix="+"
              >
                7500+
              </h4>
              <div className="solieu-item-subtitle">
                trẻ em được thay đổi cuộc sống
              </div>
            </div>
            <div className="solieu-item">
              <h4
                className="solieu-item-title"
                data-countup=""
                data-end="23"
                data-start="0"
                data-suffix=" tỷ +"
              >
                23 tỷ +
              </h4>

              <div className="solieu-item-subtitle">đồng được quyên góp</div>
            </div>
          </div>

          <div className="mt-5">
            <a className="btn btn-pink font-weight-bold mr-2">Quyên góp </a>
            <a className="btn btn-light font-weight-bold"> Hướng dẫn </a>
          </div>
        </div>

        <div className="col-12 col-md-5 mt-4 mt-lg-0 col-lg-6 text-center d-none d-md-block">
          <img
            alt=""
            className="img-fluid"
            src="https://static.mservice.io/images/s/momo-upload-api-210118152714-637465804342708477.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Summary;
