import React, { Component } from 'react';
import { MdSearch } from 'react-icons/md';
import { Form, Input } from 'reactstrap';
import { connect } from 'react-redux'
import {search} from '../../store/actions/helperActions'

class SearchInput extends Component {
  
  state = {
    search: this.search
  }

  handleChange = (e) => {
    this.props.searchFilter(e.target.value)
  };
  
  render(){
    return (
      <Form inline className="cr-search-form" onSubmit={e => e.preventDefault()}>
        <MdSearch
          size="20"
          className="cr-search-form__icon-search text-secondary"
        />
        <Input
          type="search"
          className="cr-search-form__input"
          placeholder="Search..."
          id="searchInput"
          onChange={this.handleChange}
          value={this.state.search}
        />
      </Form>
    );
  };
}

const mapStateToProps = (state) => {
  return {
      search: state.search.search
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      searchFilter: (filter) => dispatch(search(filter)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps) (SearchInput);
