import campaignApi from 'api/services/campaign';
import { Layout } from 'components';
import { useCampaignId } from 'hooks';
import { ICampaign } from 'models';
import React, { useEffect, useState } from 'react';
import { Utils } from 'utils';
import { DonateList } from './components';

const Detail = () => {
  const id = useCampaignId();
  const [campaign, setCampaign] = useState<Partial<ICampaign>>({});
  useEffect(() => {
    const query = async () => {
      const campaign = await getCampaign();
      setCampaign(campaign);
    };
    console.log(campaign);

    query();
  }, []);

  const getCampaign = async () => {
    let tmpCampaign = { ...campaign };
    await campaignApi.getCampaignById(id).then((res) => {
      tmpCampaign = { ...res };
    });
    return tmpCampaign;
  };

  return (
    <Layout>
      <section className="bg-gray-color pt-6 pb-0 page-detail">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="text-pink">{campaign.name}</h1>
              <span className="time">
                {Utils.numberToDateString(campaign.created_date)}
              </span>
            </div>
            <div className="col-12 mt-3 mb-4">
              <div className="description">
                <span>
                  <img
                    src="https://momo.vn/momo2020/img/donation/icon-heart.png"
                    className="img-fluid icon-case-heart"
                    alt={campaign.name}
                  />
                </span>
                Chung tay quyên góp để giúp đỡ hơn 21 em nhỏ có hoàn cảnh éo le
                (nghèo, mồ côi, không cha, mẹ, tàn tật..), góp phần ‘Nâng cánh ước
                mơ” và giúp các em có thêm niềm tin vượt lên trên số phận.
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              {/* <div className="owl-carousel owl-theme">
                <div className="item">
                  <img
                    src="https://static.mservice.io/blogscontents/momo-upload-api-211029110934-637711025743464790.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="item">
                  <img
                    src="https://static.mservice.io/blogscontents/momo-upload-api-211029111607-637711029675545908.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="item">
                  <img
                    src="https://static.mservice.io/blogscontents/momo-upload-api-211029111559-637711029597963378.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="item">
                  <img
                    src="https://static.mservice.io/blogscontents/momo-upload-api-211029110934-637711025743464790.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="item">
                  <img
                    src="https://static.mservice.io/blogscontents/momo-upload-api-211029111607-637711029675545908.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="item">
                  <img
                    src="https://static.mservice.io/blogscontents/momo-upload-api-211029111559-637711029597963378.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="item">
                  <img
                    src="https://static.mservice.io/blogscontents/momo-upload-api-211029110934-637711025743464790.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="item">
                  <img
                    src="https://static.mservice.io/blogscontents/momo-upload-api-211029111607-637711029675545908.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="item">
                  <img
                    src="https://static.mservice.io/blogscontents/momo-upload-api-211029111559-637711029597963378.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="item">
                  <img
                    src="https://static.mservice.io/blogscontents/momo-upload-api-211029110934-637711025743464790.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="item">
                  <img
                    src="https://static.mservice.io/blogscontents/momo-upload-api-211029111607-637711029675545908.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="item">
                  <img
                    src="https://static.mservice.io/blogscontents/momo-upload-api-211029111559-637711029597963378.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div> */}
            </div>
            <DonateList />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Detail;
