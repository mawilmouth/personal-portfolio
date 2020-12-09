import React from 'react';
import { connect } from 'react-redux';
import axios, { AxiosResponse } from 'axios';
import { MailIcon } from '../../modules/Icons';
import { TextInput, TextAreaInput } from '../../modules/Inputs';
import { BasicButton } from '../../modules/Buttons';
import { validateContactEntries } from '../../helpers/components/homepage/HomepageHelpers';
import { ContactFormEntries } from '../../types/helpers/components/homepage/HomepageHelpersTypes';
import { ContactProps, ContactState } from '../../types/pages/HomepageTypes';
import Messages from '../../modules/Messages';
import { addNavSectionListeners, removeNavSectionListeners } from '../../helpers/layout/navHelpers';

class Contact extends React.Component<ContactProps, ContactState> {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      messageSent: false,
      errors: [],
      messages: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.setLoading = this.setLoading.bind(this);
  }

  private sectionId: string = 'contact';

  renderErrors = (): React.ReactNode => <Messages messages={this.state.errors} error />

  renderMessages = (): React.ReactNode => <Messages messages={this.state.messages} success />


  async handleSubmit(e: React.FormEvent): Promise<void> {
    e.preventDefault();

    this.setLoading();
    
    const data = new FormData(e.target as HTMLFormElement);
    const entries: ContactFormEntries = {
      firstName: data.get('fname') as string,
      lastName: data.get('lname') as string,
      email: data.get('email') as string,
      message: data.get('message') as string,
    };

    let errors: string [] = validateContactEntries(entries);
    let messages: string [] = [];

    if (errors.length) return this.setState({ errors, messages, loading: false });

    const defaultEmailError: string = 'There was an error sending your email. Please try again later.';

    try {
      const { data }: AxiosResponse = await axios.post('/api/contact', { data: entries });
      messages = messages.concat(data.messages);
    } catch (err) {
      errors = [err.response?.data] || err.response?.data?.messages || [defaultEmailError];
    }

    const messageSent: boolean = !errors.length;

    this.setState({ errors, messages, messageSent, loading: false });
  }

  setLoading(loading = true): void {
    this.setState({ loading })
  }

  componentDidMount() {
    addNavSectionListeners(this.sectionId, this.props.dispatch);
  }

  componentWillUnmount() {
    removeNavSectionListeners(this.sectionId, this.props.dispatch);
  }

  render() {
    const { loading, messageSent } = this.state;
    const submitButtonDisabledText: string = loading ? 'sending message' : messageSent && 'message sent';

    return (
      <div id={this.sectionId} className="homepage-contact-container">
        <div className="row">
          <div className="columns wrapper">
            <MailIcon className="mail-icon" />
            <h4 className="contact-heading">get in touch</h4>
            <p className="contact-description">
              Whether you are reaching out for potential opportunities or a looking for
              some custom work done for a web app, my in box is always open!
            </p>
            <form className="form-container" onSubmit={this.handleSubmit}>
              {this.renderMessages()}
              {this.renderErrors()}
              <div className="input-row half">
                <TextInput label="first name" placeholder="enter first name" name="fname" className="firstname field" />
                <TextInput label="last name" placeholder="enter last name" name="lname" className="lastname field" />
              </div>
              <div className="input-row">
                <TextInput label="email" placeholder="enter email" name="email" className="email field" />
              </div>
              <div className="input-row">
                <TextAreaInput
                  label="message"
                  placeholder="What do you want to say?"
                  name="message"
                  className="message field"
                />
              </div>
              <BasicButton
                disabled={loading || messageSent}
                disabledText={submitButtonDisabledText}
                className="submit-btn"
                text="send message"
                submit
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Contact);