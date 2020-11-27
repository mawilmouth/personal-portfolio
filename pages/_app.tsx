import { createWrapper } from 'next-redux-wrapper';
import store from '../state/store';
import { ApplicationState } from '../types/state/StoreTypes';

// Gobal styles
import '../styles/App.scss';

// Vendor imports
import 'animate.css';

const Portfolio = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

const makeStore = store => store;

export const wrapper = createWrapper<ApplicationState>(makeStore(store), {});

export default wrapper.withRedux(Portfolio);;
