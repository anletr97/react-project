import campaignApi from 'api/services/campaign';
import { useCampaignId } from 'hooks';
import { ITransaction } from 'models';
import React, { useEffect, useState } from 'react';
import 'styles/detail.scss';
import { Utils } from 'utils';

export type ListProps = {
  transactions: ITransaction[];
};

const DonateList = ({ transactions }: ListProps) => {
  return (
    <div id="nhahaotam" className="ds-nhahaotam ng-scope">
      <div className="donation__detail__heading has-border-top">
        <h2 className="mb-3">Nhà hảo tâm mới nhất</h2>
      </div>
      <div className="border widget-nhahaotam">
        <div className="campaign-people-list">
          {transactions.map((e) => (
            <div className="campaign-people-item ng-scope">
              <div className="campaign-people-avatar ng-binding ng-scope">
                {e.user?.full_name.substring(0, 1)}
              </div>

              <div className="campaign-people-info">
                <div className="campaign-people-name ng-binding">
                  {e.user?.full_name}
                </div>
                <div className="campaign-people-phone ng-binding">
                  {e.user?.email}
                </div>
              </div>

              <div className="campaign-people-money">
                <text className="ng-binding">{Utils.addCommas(e.amount)}</text>
                <text className="ng-scope">đ</text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DonateList;
