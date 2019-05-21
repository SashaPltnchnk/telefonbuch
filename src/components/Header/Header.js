import React from 'react';
import SearchInput from '../SearchInput/SearchInput';
import ModalContact from '../Modal/Modal';
import { Header, Segment } from 'semantic-ui-react';


// const styledHeader = {
//     justifyContent: 'space-between',
//     padding: '30px'
// }

const header = () => (
   
  <Segment inverted>
    <Header as='h4' inverted color='teal' size='tiny' >
        <SearchInput />
      Phone book
        <ModalContact />
    </Header>
  </Segment>
)

export default header;