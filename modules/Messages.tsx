import React from 'react';
import { ErrorIcon, CheckIcon } from '../modules/Icons';
import { MessagesProps } from '../types/modules/MessagesTypes';

const Messages: React.FC<MessagesProps> = (props) => {
  const { messages, error, success, warning } = props;

  if (!messages.length) return null;
  
  const messagesClass = error ? 'error' : success ? 'success' : 'warning';
  const messageIcon = error || warning ? 
    <ErrorIcon className="icon" />
    :
    <CheckIcon className="icon" />;


  function renderMessages(): React.ReactNode[] {
    return messages.map((msg, index) => (
      <div className="message" key={`${messagesClass}-${index}`}>
        {messageIcon}
        <span>{msg}</span>
      </div>
    ));
  }

  return (
    <div className={`messages-container ${messagesClass}`}>
      {renderMessages()}
    </div>
  );
};

export default Messages;