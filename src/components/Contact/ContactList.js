import React, { Component } from 'react';
import ContactSummary from '../Contact/ContactSummary';
import { connect } from 'react-redux';
import { fetchContacts } from '../../store/actions/contacts';
import { setContacts } from '../../store/actions/search';
import classes from '../../App.module.css'


class ContactList extends Component {

  componentDidMount() {
    this.props.fetchContacts();

  }

  render() {
    const {search} = this.props 
    // const contactList = this.props.contactList.filter( item => item.name.first.indexOf(search) > -1 )
    // debugger
    return (
      <div > 
        {this.props.contacts.map(contact => (
          <ContactSummary key={contact.id} {...contact}/>
        ))}
      </div>
    )
  }
}


const mapStateToProps = state => ({
  contacts: state.contact.contacts,
  search: state.search.search,
  contactList: state.search.contactList
})

const mapDispatchToProps = { fetchContacts, setContacts}



export default connect(mapStateToProps, mapDispatchToProps)(ContactList);