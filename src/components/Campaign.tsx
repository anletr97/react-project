import { ICampaign } from 'models/campaign';
import React from 'react';
import { Utils } from 'utils';
import 'styles/donation.scss';

type CampaignProps = {
  data: ICampaign;
};

const Campaign = ({ data }: CampaignProps) => {
  const daysLeft = Utils.getDaysLeft(data.end_date);
  return (
    <div className="col-12 col-sm-6 col-lg-4 mb-5 ">
      <div className="campaign-dn">
        <div className="campaign-dn-img">
          <img
            src={data.images ? data.images[0] : ''}
            alt={data.name}
            className="img-fluid"
          />
        </div>
        <div className="campaign-dn-body">
          <h5 className="campaign-dn-title">{Utils.truncate(data.name, 150)}</h5>
          <p className="campaign-dn-summary">{Utils.truncate(data.description, 200)}</p>
        </div>
        <div className="campaign-dn-footer">
          <div className="campaign-dn-info">
            <div className="campaign-dn-money">
              <b>{Utils.addCommas(data.current_amount_of_money)}đ</b>
              <span> quyên góp</span>
            </div>
            <div className="campaign-dn-percent">
              {data.current_percent_of_donation}%
            </div>
          </div>
          <div className="campaign-progress">
            <div
              className="campaign-progress-bar"
              style={{
                width: `${
                  data.current_percent_of_donation
                    ? data.current_percent_of_donation
                    : 0
                }%`,
              }}
            ></div>
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
              <span>{data.current_numbers_of_donation} lượt quyên góp</span>
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
              <span>{daysLeft} Ngày còn lại</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaign;
