import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import imagys from '../../assets/math.jpg';
import styled from 'styled-components'

// const Wrapper = styled.div`
//     width: ${pr => pr.width}px;
//     color" ${pr => pr.red ? '#321321' : ''}
// `

// const ExtendedWrapper = styled(Wrapper)`
    
// `

const CardStyled = styled(Card)`
    padding: 20px;
`

const contactSummary = (props) => (
  <CardStyled style={{padding: 20}}>
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
  </CardStyled>
)

export default contactSummary;