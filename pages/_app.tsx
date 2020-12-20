import React from 'react';
import { createWrapper } from 'next-redux-wrapper';
import store from '../state/store';
import { ApplicationState } from '../types/state/StoreTypes';
import logger from '../lib/ErrorReporting';

// Gobal styles
import '../styles/App.scss';

// Vendor imports
import 'animate.css';

class Portfolio extends React.Component<any> {
  componentDidCatch(error, info) {
    console.log(error, info);
    logger.error(error);
  }

  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />
  }
}

const makeStore = store => store;

export const wrapper = createWrapper<ApplicationState>(makeStore(store), {});

export default wrapper.withRedux(Portfolio);;
