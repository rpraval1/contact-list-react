import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class ContactForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      fullName: '',
      email: ''
    }
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleEditClick(e){
    e.preventDefault()
    console.log(this.state.fullName)
    localStorage.setItem('fullName', this.state.fullName)
    localStorage.setItem('email', this.state.email)
    browserHistory.push('/edit');

  }

  componentWillMount(){
    var fullName = localStorage.getItem('fullName')
    var email = localStorage.getItem('email')

    if(fullName){
      this.setState({
        fullName
      })
    }

    if(email){
      this.setState({
        email
      })
    }
  }


  render(){
    const {showSave} = this.props

    return(
      <div className="panel panel-default">
        <div className="panel-body">
          <form>
            <div className="form-group">
              <label>Contact Name</label>
              <input
                name='fullName'
                value={this.state.fullName}
                onChange={this.handleChange.bind(this)}
                className="form-control"></input>
            </div>
            <div className="form-group">
              <label>Add Email</label>
              <input
                name='email'
                value={this.state.email}
                onChange={this.handleChange.bind(this)}
                className="form-control"></input>
            </div>
            <div className="form-group">
              <button className="btn btn-default"
                onClick={this.handleEditClick.bind(this)}>Edit</button>
              { showSave
                ?
                <button className="btn btn-default">Save</button>
                :
                ''
              }
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactForm;
