import React, { Component } from 'react';
import ContactSummary from '../Contact/ContactSummary';
import { connect } from 'react-redux';
import { fetchContacts } from '../../store/actions/contacts';
import { setContacts } from '../../store/actions/search';


class ContactList extends Component {

  componentDidMount() {
    this.props.fetchContacts();
    this.props.setContacts(this.props.contacts)
  }

  render() {
    const {search} = this.props 
    const contactList = this.props.contacts.filter( contact => contact.name.indexOf(search) > -1 )
    return (
        <div > 
            {/* {this.props.contacts.map(contact => (
                <ContactSummary key={contact.id} {...contact}/>
            ))} */}
            {contactList.map(contact => (
            <ContactSummary key={contact.id} {...contact}/>
            ))}
        </div>

        
      
    )
  }
}


const mapStateToProps = state => ({
  contacts: state.contact.contacts,
  search: state.search.search,
//   contactList: state.contact.contacts
})

const mapDispatchToProps = { fetchContacts, setContacts}



export default connect(mapStateToProps, mapDispatchToProps)(ContactList);