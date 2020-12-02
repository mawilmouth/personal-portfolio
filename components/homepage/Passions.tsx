import React from 'react';
import { connect } from 'react-redux';
import { PassionsProps } from '../../types/pages/HomepageTypes';
import { DevIcon, BookIcon, NewFileIcon } from '../../modules/Icons';
import { addNavSectionListeners, removeNavSectionListeners } from '../../helpers/layout/navHelpers';

const Passions: React.FC<PassionsProps> = (props) => {
  const sectionId: string = 'passions';

  React.useEffect(() => {
    addNavSectionListeners(sectionId, props.dispatch);

    return removeNavSectionListeners(sectionId, props.dispatch);
  });

  const icons = {
    NewFileIcon: <NewFileIcon className="icon file"/>,
    DevIcon: <DevIcon className="icon"/>,
    BookIcon: <BookIcon className="icon book"/>
  };

  function renderPassions(): React.ReactNode {
    return props.passions.map((item, index) => (
      <div className="columns small-12 passion" key={`passion-${index}`}>
        <div className="icon-container">
          {icons[item.icon]}
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
          <div className="row large-unstack passions-row">
            {renderPassions()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect()(Passions);