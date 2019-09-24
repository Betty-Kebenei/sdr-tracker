import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewsItems from './newsItems/NewsItems';
import { whatNew } from '../../../../actions/index';
 
class News extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  
  componentWillMount() {
    this.props.whatNew()
  }
  
  render() { 
    const { news } = this.props
    return (
      <NewsItems news={news} />
    );
  }
}

const mapStateToProps = (state) => {
  const { news } = state
  
  return news
}
 
export default connect(mapStateToProps, {whatNew})(News);