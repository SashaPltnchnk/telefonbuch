import React from 'react';
import { Icon, Image, List } from 'semantic-ui-react';
// import styled from 'styled-components';
import { connect } from 'react-redux';
import { deleteContact, fetchContacts } from '../../store/actions/contacts';
import { editContactOpenModal } from '../../store/actions/modal';
import EditContactModal from '../Modal/EditContactModal';
// import { img } from '../../assets/images.png'

// const Wrapper = styled.div`
//     width: ${pr => pr.width}px;
//     color" ${pr => pr.red ? '#321321' : ''}
// `

// const ExtendedWrapper = styled(Wrapper)`
    
// `

// const CardStyled = styled(Card)`
//     padding: 20px;
// `

const contactSummary = (props) => {

  const deleteContact = () => {
    props.deleteContact(props.id)
      .then(() => {props.fetchContacts()});
  }

  const modal =  props.isModalOpen ? <EditContactModal /> : null;

  const nameStyle = {
      textTransform: 'capitalize'
  };

//   const image = props.selectedFile ? <Image src={props.selectedFile} wrapped ui={false} /> : <Image src={img} wrapped ui={false} />

  return (
    <List selection verticalAlign='middle'>
        <List.Item>
            <List.Content floated='right'>
                <List.Header as='a'>
                    <Icon 
                        name='close' 
                        color='red' 
                        size='large' 
                        onClick={deleteContact} 
                        link />
                </List.Header>
                <List.Description>
                    <Icon 
                        name='pencil alternate' 
                        color='orange' 
                        size='large' 
                        link 
                        onClick={() => {props.editContactOpenModal(props.id)}}/>

                    {modal}
                </List.Description>
            </List.Content>
        <Image avatar src={props.selectedFile} size='small' />
        <List.Content>
            <List.Header as='a' style={nameStyle}>{props.name} {props.surname}</List.Header>
            <List.Description>
                <div>{props.phone}</div>
                <div>{props.mail}</div>
                <div>{props.company}</div>
            </List.Description>
        </List.Content>
        </List.Item>
    </List>
  )
  }

export default connect((store) => ({isModalOpen: store.modal.isEditContactModalOpen}), {deleteContact, fetchContacts, editContactOpenModal})(contactSummary);