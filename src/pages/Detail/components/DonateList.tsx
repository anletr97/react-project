import React from 'react';

const DonateList = () => {
  return (
    <div id="nhahaotam" className="ds-nhahaotam ng-scope">
      <div className="donation__detail__heading has-border-top">
        <h2 className="mb-3">Nhà hảo tâm mới nhất</h2>
      </div>
      <div className="border widget-nhahaotam">
        <div className="campaign-people-list">
          <div className="campaign-people-item ng-scope">
            <div
              className="campaign-people-avatar ng-binding ng-scope"
              ng-if="!item.isAnonymous"
              ng-bind="item.sortCusName"
            >
              PB
            </div>

            <div className="campaign-people-info">
              <div
                className="campaign-people-name ng-binding"
                ng-bind="item.cusName"
              >
                LE TRUONG AN
              </div>
              <div
                className="campaign-people-phone ng-binding"
                ng-bind="item.phoneNumber"
              >
                *******706
              </div>
            </div>

            <div className="campaign-people-money">
              <text className="ng-binding">1.000</text>
              <text className="ng-scope">đ</text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateList;
