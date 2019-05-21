import React from 'react';
import { Icon, Input } from 'semantic-ui-react';


const searchInput = () => (
  <Input icon={<Icon name='search' inverted circular link />} placeholder='Search...' size='small' />
)

export default searchInput;