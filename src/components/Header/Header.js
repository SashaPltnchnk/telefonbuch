import React from 'react';
import SearchInput from '../SearchInput/SearchInput';
import AddContactModal from '../Modal/AddContactModal';
import { Button, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addContactOpenModal } from '../../store/actions/modal';
import classes from '../../App.module.css';


// const styledHeader = {
//     justifyContent: 'space-between',
//     padding: '30px'
// }

const HeaderQ = (props) => {
  const modal =  props.isModalOpen ? <AddContactModal /> : null;
  // console.warn(modal);
  
  return (
    <header className={classes.Header}>  
        <Button onClick={() => {props.addContactOpenModal()}}
                basic 
                inverted 
                // color='olive'
                >ADD NEW CONTACT</Button>
        {modal}
        <Header as='h1' color='teal' size='medium' >Phone book </Header> 
        <SearchInput />
    </header>
  )
}

export default connect((store) => ({isModalOpen: store.modal.isAddContactModalOpen}), {addContactOpenModal})(HeaderQ);