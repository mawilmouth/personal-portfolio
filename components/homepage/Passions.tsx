import React from 'react';
import { connect } from 'react-redux';
import { PassionsProps } from '../../types/pages/HomepageTypes';
import { DevIcon, BookIcon } from '../../modules/Icons';
import { addNavSectionListeners, removeNavSectionListeners } from '../../helpers/layout/navHelpers';


const Passions: React.FC<PassionsProps> = (props) => {
  const sectionId: string = 'passions';

  React.useEffect(() => {
    addNavSectionListeners(sectionId, props.dispatch);

    return removeNavSectionListeners(sectionId, props.dispatch);
  });

  function renderPassions(): React.ReactNode {
    return props.passions.map((item, index) => (
      <div className="columns small-12 passion" key={`passion-${index}`}>
        <div className="icon-container">
          { item.icon === 'dev' ? <DevIcon className="icon"/> : <BookIcon className="icon book"/> }
        </div>
        <div className="description-container">
          <h2 className="description-title">{item.title}</h2>
          <p className="description">{item.description}</p>
        </div>
      </div>
    ));
  }

  return (
    <div id={sectionId} className="homepage-passions-container">
      <div className="row wrapper">
        <div className="columns small-12">
          <h2 className="passions-heading">what i do</h2>
          <div className="row medium-unstack passions-row">
            {renderPassions()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect()(Passions);