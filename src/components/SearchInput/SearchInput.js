import React from 'react';
import { Icon, Input } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const searchInput = () => (
  <Input icon={<Icon name='search' inverted circular link />} placeholder='Search...' />
)

export default searchInput;