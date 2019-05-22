import React from 'react';
import SearchInput from '../SearchInput/SearchInput';
import ModalContact from '../Modal/Modal';
import { Button, Header, Segment, ModalContent } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { openModal } from '../../store/actions/modal';


// const styledHeader = {
//     justifyContent: 'space-between',
//     padding: '30px'
// }

const header = (props) => {
  const modal =  props.isModalOpen ? <ModalContact /> : null;
  return (
    <Segment inverted>
      <Header as='h4' inverted color='teal' size='tiny' >
          <SearchInput />
        Phone book
            <Button onClick={() => {props.openModal()}}>SAD NEW CONTACT</Button>
            {modal}
      </Header>
    </Segment>
  )
}

export default connect((store) => ({isModalOpen: store.modal.isModalOpen}), {openModal})(header);