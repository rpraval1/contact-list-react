import React, { Component } from 'react';
import ContactForm from './ContactForm';

class EditContact extends Component {
  constructor(props){
    super(props);

  }


  render(){
    return(
      <div>
        <ContactForm showSave={true}/>
      </div>
    );
  }
}

export default EditContact;
