import campaignApi from 'api/services/campaign';
import { Campaign, Layout } from 'components';
import { ICampaign } from 'models/campaign';
import { Utils } from 'utils';
import React, { useEffect, useState } from 'react';

// TODO: DUMMY ARTICLE, WILL BE FETCHED FROM API SOON
const Home = () => {
  const [campaignList, setCampaignList] = useState<ICampaign[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const campaignList = await fetchCampaign();
      setCampaignList(campaignList);
    };
    fetch();
  }, []);

  const fetchCampaign = async () => {
    let arr: any[] = [];
    await campaignApi.fetch().then((res) => {
      arr = Utils.deepCloneArray(res);
    });
    console.log(arr);

    return arr;
  };

  return (
    <Layout>
      <section className="bg-pink-light pt-6 pb-6">
        <div className="container">
          <div className="row">
            <div className="col text-center mb-5">
              <h2 className="text-pink">Các chương trình Quyên góp</h2>
              <p className="lead text-gray-700 pb-0 "></p>

              <div className="row donation-list">
                {campaignList &&
                  campaignList.map((campaign) => (
                    <Campaign campaign={campaign} key={campaign.id} />
                  ))}
              </div>

              <div className="row mt-5 justify-content-center">
                <a className="btn btn-primary btn-blue font-weight-bold ">
                  Xem thêm
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
