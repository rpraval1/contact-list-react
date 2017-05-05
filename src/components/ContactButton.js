import React, { Component } from 'react';
import '../../public/css/style.css';
import ContactForm from './ContactForm';

class ContactButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      openContact: false
    }
  }

  handleClick(){
    this.setState({
      openContact: true
    })
  }

  handleClose(){
    this.setState({
      openContact: false
    })
  }
  render(){
    const {openContact} = this.state
    return (
      <div className="contact-button">
        <button type="button" onClick={this.handleClick.bind(this)}>Add Contact</button>
        {openContact
          ?
          <div>
            <button className="pull-right" onClick={this.handleClose.bind(this)}>Close</button>
            <ContactForm />
          </div>
          :
          ''
        }
      </div>
    );
  }
}

export default ContactButton;
