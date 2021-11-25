import React from 'react';

const Outro = () => {
  return (
    <section className="bg-pink-light bg-cover pt-6">
      <div className="container overflow-hidden">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="text-center section__title">
              <h2 className="font-weight-bold text-pink mb-5">
                Mầm Xanh - Việc tốt không khó
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center sm-gutters reason__service mt-5">
          <div className="col-12 col-md-6 col-lg-4 order-1 order-md-1 pt-5">
            <div
              className="reason__item remove_maxwith align-items-start aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="reason__item__avatar">
                <img
                  alt=""
                  src="https://static.mservice.io/fileuploads/svg/momo-file-210119153342.svg"
                  style={{ width: '45px', height: '45px' }}
                />
              </div>
              <div className="reason__item__content">
                <h3 className="text-pink">Quyên góp nhanh chóng, dễ dàng</h3>
                <p>
                  Chỉ với vài chạm, bạn đã góp phần giúp đỡ 1 hoàn cảnh khó khăn có
                  cuộc sống tốt đẹp hơn.
                </p>
              </div>
            </div>
            <div
              className="reason__item remove_maxwith align-items-start aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="reason__item__avatar">
                <img
                  alt=""
                  src="https://static.mservice.io/fileuploads/svg/momo-file-210119153228.svg"
                  style={{ width: '45px', height: '45px' }}
                />
              </div>
              <div className="reason__item__content">
                <h3 className="text-pink">1000đ cũng là đáng quý</h3>
                <p>
                  Với mức ủng hộ tối thiểu 1.000 đồng, bạn đã cùng hàng triệu nhà hảo
                  tâm khác của “Trái tim MoMo” giúp đỡ những mảnh đời khó khăn.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 order-3 order-md-2 align-self-center">
            <div className="position-relative mt-md-5 mt-lg-0 reason__item__phone">
              <img
                alt="Trái tim MoMo"
                className="img-fluid d-block mx-auto lazyloaded"
                src="https://static.mservice.io/blogscontents/momo-upload-api-210106173929-637455515693568072.png"
                style={{ width: '422px', height: '330px' }}
              />
              <div className="reason__cta">
                <a
                  className="hocvien-btn"
                  href="https://momo.vn/download#service"
                  target="_blank"
                >
                  <img
                    alt=""
                    className="img-fluid d-block mx-auto"
                    src="https://static.mservice.io/fileuploads/svg/momo-file-201201152229.svg"
                    width="142"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 order-2 order-md-3 pt-5">
            <div
              className="reason__item remove_maxwith align-items-start aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="reason__item__avatar">
                <img
                  alt=""
                  src="https://static.mservice.io/fileuploads/svg/momo-file-210119153328.svg"
                  style={{ width: '53px', height: '53px' }}
                />
              </div>
              <div className="reason__item__content">
                <h3 className="text-pink">
                  Minh bạch, công khai mọi khoản đóng góp
                </h3>
                <p>
                  Mọi thông tin về hoạt động đóng góp, tài trợ đều được công khai và
                  cập nhật liên tục.
                </p>
              </div>
            </div>
            <div
              className="reason__item remove_maxwith align-items-start aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="reason__item__avatar">
                <img
                  alt=""
                  src="https://static.mservice.io/fileuploads/svg/momo-file-210119153304.svg"
                  style={{ width: '58px', height: '42px' }}
                />
              </div>
              <div className="reason__item__content">
                <h3 className="text-pink">
                  Đối tác của các cơ quan, tổ chức hảo tâm uy tín
                </h3>
                <p>
                  “Trái tim MoMo” đã và đang kết nối được với rất nhiều đơn vị bảo
                  trợ, báo chí, đơn vị hảo tâm uy tín trên cả nước.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Outro;
