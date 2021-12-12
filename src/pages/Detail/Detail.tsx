import campaignApi from 'api/services/campaign';
import { Layout } from 'components';
import { useCampaignId } from 'hooks';
import { ICampaign, ITransaction } from 'models';
import React, { useEffect, useState } from 'react';
import { getToken, Utils } from 'utils';
import { DonateList, DonateForm } from './components';
import Carousel from 'nuka-carousel';
import { useHistory } from 'react-router-dom';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

const Detail = () => {
  const [campaign, setCampaign] = useState<Partial<ICampaign>>({});
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const [open, setOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const id = useCampaignId();
  const history = useHistory();

  // Fetch campaign detail
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

  // Fetch donate List
  useEffect(() => {
    const getTransaction = async () => {
      const list = await getTransactionsById();
      setTransactions(list);
    };
    getTransaction();
  }, []);

  const getTransactionsById = async () => {
    let arr: any[] = [];
    await campaignApi.getTransactionsById(id).then((res) => {
      arr = Utils.deepCloneArray(res);
    });
    return arr;
  };

  // Donate
  const donate = async (amount: number) => {
    const body = { amount };
    campaignApi.donateToCampaignId(body, id).then((res) => {
      if (res) {
        setTransactions([res, ...transactions]);
        toggleModal();
        toggleMessage();
      }
    });
  };

  // Open/Close donate form
  const toggleModal = () => {
    // Only login user can donate
    if (!getToken()) {
      history.push('/login');
    } else {
      setOpen(!open);
    }
  };

  // Display message
  const toggleMessage = () => {
    setShowMessage(!showMessage);
  };

  const article = campaign.content || '';

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
                {campaign.description}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Carousel>
                {campaign.images?.map((i) => (
                  <img src={i.toString()} alt={campaign.name} />
                ))}
              </Carousel>
            </div>
            <div className="container mt-5">
              <div className="row">
                <div className="col-8">
                  <div dangerouslySetInnerHTML={{ __html: article }} />
                </div>

                <div className="col-4">
                  <div className="quyengop-sticky pt-4">
                    <div className="widget-donation pb-0 pb-lg-4">
                      <h2 className="d-block mb-5">Thông tin quyên góp</h2>
                      <div className="campaign-money">
                        <strong className="value text-gray-900 fs-24">
                          {Utils.addCommas(
                            campaign?.summary?.current_amount_of_money,
                          )}
                          đ
                        </strong>{' '}
                        quyên góp /
                        <div className="sub">
                          {Utils.addCommas(campaign?.target_amount_of_money)}đ
                        </div>
                      </div>
                      <div className="campaign-progress">
                        <div
                          className="campaign-progress-bar"
                          style={{
                            width: `${campaign?.summary?.current_percent_of_donation}%`,
                          }}
                        ></div>
                      </div>

                      <div className="row sm-gutters justify-content-between widget-donation-meta mt-3">
                        <div className="col-auto">
                          <div className="">Lượt quyên góp</div>
                          <div className="text-gray-900 font-weight-bold">
                            {campaign?.summary?.current_numbers_of_donation}
                          </div>
                        </div>

                        <div className="col-auto">
                          <div className="text-center">Đạt được</div>
                          <div className="text-gray-900 font-weight-bold text-center">
                            {campaign?.summary?.current_percent_of_donation}%
                          </div>
                        </div>

                        <div className="col-auto">
                          <div className="">Thời hạn còn</div>
                          <div className="text-gray-900 font-weight-bold">
                            {campaign?.summary?.days_left} Ngày
                          </div>
                        </div>
                      </div>
                      <div className="row align-items-end mt-3 mt-md-3">
                        <div className="col">
                          <div className="campaign-cta">
                            <div className="my-2">
                              <button
                                className="btn btn-block btn-pink w-100"
                                onClick={toggleModal}
                              >
                                {' '}
                                Quyên góp{' '}
                              </button>
                            </div>
                            <div className="my-2 d-none d-lg-block">
                              <a
                                className="btn btn-block btn-light w-100"
                                href="javascript:void(0)"
                              >
                                {' '}
                                Hướng dẫn Quyên góp{' '}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="widget-sponser">
                        <div className="text-gray-800 mb-1 font-weight-bold">
                          Đồng hành cùng dự án
                        </div>
                        <div className="row align-items-center no-gutters position-relative">
                          <div className="col-auto sponser-logo">
                            <img
                              src="https://static.mservice.io/blogscontents/momo-upload-api-211029145722-637711162428096708.png"
                              loading="lazy"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="col">
                            <strong>Quỹ Từ thiện Hoa Chia Sẻ</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <DonateList transactions={transactions} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <DonateForm open={open} toggleModal={toggleModal} onSubmit={donate} />
      <Snackbar open={showMessage} autoHideDuration={2000} onClose={toggleMessage}>
        <Alert onClose={toggleMessage} severity="success" style={{ width: '100%' }}>
          Bạn đã quyên góp thành công!
        </Alert>
      </Snackbar>
    </Layout>
  );
};

export default Detail;
