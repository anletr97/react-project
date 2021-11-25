import React from 'react';

const Article = () => {
  return (
    <div className="col-12 col-sm-6 col-lg-4 mb-5 ">
      <div className="campaign-dn">
        <a
          href="/cong-dong/trao-lac-quan-vuot-qua-nghich-canh-cho-tre-em-va"
          className="link-absolute"
          target=""
        ></a>
        <div className="campaign-dn-img">
          <img
            src="https://static.mservice.io/blogscontents/momo-upload-api-211103140628-637715451885641557.jpg"
            alt="“Trao lạc quan vượt qua nghịch cảnh” cho trẻ em và người già neo đơn tại các mái ấm cùng Trăng Khuyết"
            className="img-fluid"
          />
        </div>
        <div className="campaign-dn-body">
          <h5 className="campaign-dn-title">
            “Trao lạc quan vượt qua nghịch cảnh” cho trẻ em và người già neo đơn tại
            các mái ấm cùng Trăng Khuyết
          </h5>
          <p className="campaign-dn-summary">
            Cùng chung tay đóng góp sửa chữa lại cơ sở vật chất tại mái ấm để đem đến
            niềm vui cho các cụ già. Xây dựng những chương trình chăm sóc tinh thần,
            trò chuyện, văn nghệ và động viên các cụ vượt qua đau buồn.
          </p>
        </div>
        <div className="campaign-dn-footer">
          <div className="campaign-dn-info">
            <div className="campaign-dn-money">
              <b>14.709.790đ</b>
              <span>quyên góp</span>
            </div>
            <div className="campaign-dn-percent">9.81%</div>
          </div>
          <div className="campaign-progress">
            <div className="campaign-progress-bar" style={{ width: '9.81%' }}></div>
          </div>

          <div className="campaign-dn-time">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-users ico"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <span>3.836 lượt quyên góp</span>
            </div>

            <div className="text-lowercase">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-clock ico"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>32 Ngày còn lại</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
