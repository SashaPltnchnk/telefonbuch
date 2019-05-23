import React, { Component } from 'react';
import { Icon, Input } from 'semantic-ui-react';
import { connect } from 'react-redux'
import { changeSearchValue } from '../../store/actions/search';


class SearchInput extends Component {
  searchHandleChange = e => {
    this.props.changeSearchValue(e.target.value)
  }
  render () {
    return (
      <Input 
        icon={<Icon name='search' inverted circular link />} 
        placeholder='Search...' 
        size='small' 
        onChange={this.searchHandleChange}
        value={this.props.value} />
    )
  }
} 

const mapStateToProps = state => ({
  value: state.search.search
})


export default connect(mapStateToProps, { changeSearchValue, })(SearchInput);