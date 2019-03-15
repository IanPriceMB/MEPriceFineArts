import React, { Fragment, Component } from 'react';

class Contact extends Component {
  constructor(props){
    super(props);

    this.state = {
      name: '',
      email: '',
      message: ''
    };
  };

  handleChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({[name]: value});
  };

  render() {
    return (
      <Fragment>
        <form action="mailto:someone@example.com" method="post" encType="text/plain">
          <label htmlFor='name'>Name:</label>
          <input type='text' name='name' id='name' value={this.state.name} onChange={this.handleChange} />
          <label htmlFor='email'>Email:</label>
          <input type='text' name='email' id='email' value={this.state.email} onChange={this.handleChange} />
          <label htmlFor='message'>Message:</label>
          <input type='text' name='message' id='message' value={this.state.message} onChange={this.handleChange} />
        </form>
      </Fragment>
    );
  };
};

export default Contact;