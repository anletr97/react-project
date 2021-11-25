import { Article, Layout } from 'components';
import React from 'react';

// TODO: DUMMY ARTICLE, WILL BE FETCHED FROM API SOON
const Home = () => {
  return (
    <Layout>
      <section className="bg-pink-light pt-6 pb-6">
        <div className="container">
          <div className="row">
            <div className="col text-center mb-5">
              <h2 className="text-pink">Các chương trình Quyên góp</h2>
              <p className="lead text-gray-700 pb-0 "></p>

              <div className="row donation-list">
                <Article />
                <Article />
                <Article />
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
