import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import imagys from '../../assets/math.jpg';
import styled from 'styled-components'

const Wrapper = styled.div`
    width: ${pr => pr.width}px;
    color" ${pr => pr.red ? '#321321' : ''}
`

const ExtendedWrapper = styled(Wrapper)`
    
`

const CardStyled = styled(Card)`
    padding: 20px;
`

const contactSummary = () => (
  <CardStyled style={{padding: 20}}>
    <Image src={imagys} wrapped ui={false} />
    <Card.Content>
      <Card.Header>SAD GIRLS CLUB</Card.Header>
      <Card.Meta>+38066 666 66 66</Card.Meta>
      <Card.Description>
        test@test.com
      </Card.Description>
      <Card.Description>
        <Icon name='user' />
        Company
      </Card.Description>
    </Card.Content>
    {/* <Card.Content extra>
      <a>
        <Icon name='user' />
        10 Friends
      </a>
    </Card.Content> */}
  </CardStyled>
)

export default contactSummary;