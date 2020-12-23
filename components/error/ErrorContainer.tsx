import React from 'react';
import Link from 'next/link';
import { LeftArrow } from '../../modules/Icons';
import { ErrorContainerProps } from '../../types/components/error/ErrorContainerTypes';
import logger from '../../lib/ErrorReporting';

const ErrorContainer: React.FC<ErrorContainerProps> = (props) => {
  const { code, message } = props;

  React.useEffect(() => {
    const errorMsg: string = `${code}: ${message}`;
    const error: Error = new Error(errorMsg);
    logger.error(error);
  });

  return (
    <div className="error-container">
      <p className="code">{code}</p>
      <p className="message">{message}</p>
      <Link href="/">
        <a className="link-to-home">
          <LeftArrow className="back-icon" />
          Go back home
        </a>
      </Link>
    </div>
  );
}

export default ErrorContainer;