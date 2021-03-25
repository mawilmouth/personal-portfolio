import React from 'react';
import { HistoryCardProps } from '../../types/pages/HomepageTypes';
import {
  HTMLIcon,
  CSSIcon,
  SassIcon,
  JSIcon,
  TSIcon,
  ReduxIcon,
  AWSIcon,
  PostgresIcon,
  JqueryIcon,
  ReactIcon,
  JestIcon,
  NextIcon,
  NodeIcon,
  RailsIcon,
  MySQLIcon,
  GitIcon
} from '../../modules/Icons';

const HistoryCard: React.FC<HistoryCardProps> = (props) => {

  return (
    <div className="history-card-container">
      <div className="row card-row">
        <div className="columns history-card-wrapper">
          <div className="card">
            <div className="row large-unstack">
              <div className="columns small-12 work-history-column">
                <h3 className="history-heading">technology history</h3>
                <div className="tech-icons-container">
                  <HTMLIcon className="icon html" />
                  <CSSIcon className="icon css" />
                  <SassIcon className="icon sass" />
                  <JSIcon className="icon js" />
                  <TSIcon className="icon ts" />
                  <ReduxIcon className="icon redux" />
                  <JqueryIcon className="icon jquery" />
                  <ReactIcon className="icon react" />
                  <JestIcon className="icon jest" />
                  <NextIcon className="icon next" />
                  <NodeIcon className="icon node" />
                  <RailsIcon className="icon rails" />
                  <MySQLIcon className="icon sql" />
                  <PostgresIcon className="icon psql" />
                  <AWSIcon className="icon aws" />
                  <GitIcon className="icon git" />
                </div>
              </div>
              <div className="columns work-history-column">
                <h3 className="history-heading">Places I have worked</h3>
                <div className="work-history-container">
                  <a href="https://www.actionvfx.com" target="_blank">
                    <img
                      className="work-logo"
                      src="https://www.creatorvault.com/images/logos/actionvfx-logo.png"
                      alt="Actionvfx: https://www.actionvfx.com"
                    />
                  </a>
                  <a href="https://www.creatorvault.com" target="_blank">
                    <img
                      className="work-logo"
                      src="https://www.creatorvault.com/images/logos/cv-logo.png"
                      alt="CreatorVault: https://www.creatorvault.com"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HistoryCard;