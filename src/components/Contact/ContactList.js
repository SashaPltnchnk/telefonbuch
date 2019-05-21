import React, { Component } from 'react';
import axios from '../../axios-contacts';


class ContactList extends Component {
    state = {
        contacts: []
    }
    componentDidMount() {
        axios.get('/contacts/')
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.error(err);
            })
    }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default ContactList;
