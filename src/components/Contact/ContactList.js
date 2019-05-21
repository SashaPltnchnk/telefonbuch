import React, { Component } from 'react';
import ContactSummary from '../Contact/ContactSummary';
import { connect } from 'react-redux';
import { fetchContacts } from '../../store/actions/contacts';



class ContactList extends Component {

  render() {
    console.log(this.props.fetchContacts())
    return (
      <div>
        
        
      </div>
    )
  }
}




export default connect(null, {fetchContacts})(ContactList);