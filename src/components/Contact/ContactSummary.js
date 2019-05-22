import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import imagys from '../../assets/math.jpg';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { deleteContact, fetchContacts } from '../../store/actions/contacts';
// import { openModal } from '../../store/actions/modal';

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
  return (
    <Card style={{padding: 20}} color='teal'>
    <Icon name='pencil alternate' color='orange' size='large' link />
    <Icon name='close' color='red' size='large' onClick={deleteContact} link />
    <Image src={imagys} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.name} {props.surname}</Card.Header>
      <Card.Meta>{props.phone}</Card.Meta>
      <Card.Description>{props.mail}</Card.Description>
      <Card.Description>
        <Icon name='user' />
        {props.company}
      </Card.Description>
    </Card.Content>
  </Card>
  )
  }

export default connect(null, {deleteContact, fetchContacts})(contactSummary);