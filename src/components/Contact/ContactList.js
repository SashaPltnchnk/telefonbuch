import React, { Component } from 'react';
import ContactSummary from '../Contact/ContactSummary';
import { connect } from 'react-redux';
import { fetchContacts } from '../../store/actions/contacts';



class ContactList extends Component {

  componentDidMount() {
    this.props.fetchContacts();

  }

  render() {
    return (
      <div> 
        {this.props.contacts.map(contact => (
          <ContactSummary key={contact.id} {...contact}/>
        ))}
      </div>
    )
  }
}




export default connect((store) => ({contacts: store.contacts}), {fetchContacts})(ContactList);