import React from 'react';
import SearchInput from '../SearchInput/SearchInput';
import AddContactModal from '../Modal/AddContactModal';
import { Button, Header, Segment, ModalContent } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addContactOpenModal } from '../../store/actions/modal';


// const styledHeader = {
//     justifyContent: 'space-between',
//     padding: '30px'
// }

const HeaderQ = (props) => {
  const modal =  props.isModalOpen ? <AddContactModal /> : null;
  // console.warn(modal);
  
  return (
    <Segment inverted>
      <Header as='h4' inverted color='teal' size='tiny' >
          <SearchInput />
        Phone book
            <Button onClick={() => {props.addContactOpenModal()}}>SAD NEW CONTACT</Button>
            {modal}
      </Header>
    </Segment>
  )
}

export default connect((store) => ({isModalOpen: store.modal.isAddContactModalOpen}), {addContactOpenModal})(HeaderQ);