import Raven from "raven-js";
import { UserInfo } from '../types/lib/ErrorReportingTypes';

class ClientSideErrorReporter {
  constructor() {
    Raven.config(process.env.SENTRY_DSN).install();

    this.error = this.error.bind(this);
    this.message = this.message.bind(this);
    this.setUserInfo = this.setUserInfo.bind(this);
    this.removeUserInfo = this.removeUserInfo.bind(this);
  }

  private isProd: boolean = process.env.APP_ENV === 'production';
  
  private initialized = (): boolean => Raven.isSetup();

  error(err: Error): void {
    console.error(err.message);
    if (this.isProd && this.initialized()) Raven.captureException(err);
  }

  message(msg: string): void {
    console.warn(msg);
    if (this.isProd && this.initialized()) Raven.captureMessage(msg);
  }

  setUserInfo({ id, email }: UserInfo): void {
    if (this.isProd && this.initialized()) Raven.setUserContext({ id, email });
  }

  removeUserInfo(): void {
    if (this.isProd && this.initialized()) Raven.setUserContext({});
  }
}

export default new ClientSideErrorReporter();