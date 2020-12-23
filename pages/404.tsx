import React from 'react';
import BasicLayout from '../layout/BasicLayout';
import ErrorContainer from '../components/error/ErrorContainer';

const NotFound: React.FC = () => {
  const message: string = 'This page cannot be found.';
  return (
    <BasicLayout clearNav={false}>
      <ErrorContainer code={404} message={message}/>
    </BasicLayout>
  );
}

export default NotFound;