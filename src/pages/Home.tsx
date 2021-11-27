import campaignApi from 'api/services/campaign';
import { Campaign, Layout, Summary } from 'components';
import { defautlCampaignSummary, ICampaign, ICampaignSummary } from 'models';
import { Utils } from 'utils';
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [campaignList, setCampaignList] = useState<ICampaign[]>([]);
  const [summary, setSummary] = useState<ICampaignSummary>(defautlCampaignSummary);

  // Fetch campaign list
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
    return arr;
  };
  // Fetch campaign summary
  useEffect(() => {
    const getSummary = async () => {
      const summary = await fetchCampaignSummary();
      setSummary(summary);
    };
    getSummary();
  }, []);

  const fetchCampaignSummary = async () => {
    let retObj = { ...defautlCampaignSummary };
    await campaignApi.getSummary().then((res) => {
      retObj = { ...res };
    });
    return retObj;
  };

  return (
    <Layout>
      <Summary data={summary} />
      <section className="bg-pink-light pt-6 pb-6">
        <div className="container">
          <div className="row">
            <div className="col text-center mb-5">
              <h2 className="text-pink">Các chương trình Quyên góp</h2>
              <p className="lead text-gray-700 pb-0 "></p>

              <div className="row donation-list">
                {campaignList &&
                  campaignList.map((campaign) => (
                    <Campaign data={campaign} key={campaign.id} />
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
