import React from 'react';
import BasicLayout from '../layout/BasicLayout';
import ErrorContainer from '../components/error/ErrorContainer';

const NotFound: React.FC = () => {
  const message: string = 'The server ran into an internal issue...the developer has been notified.';
  return (
    <BasicLayout clearNav={false}>
      <ErrorContainer code={500} message={message}/>
    </BasicLayout>
  );
}

export default NotFound;