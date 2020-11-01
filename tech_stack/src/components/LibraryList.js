import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';
import ListItem from './LibraryItem';

class LibraryList extends Component {
  renderRow({item}) {
    return <ListItem library={item} />;
  }

  render() {
    // console.log(this.props);
    return (
      <FlatList
        data={this.props.libraries}
        renderItem={this.renderRow}
        keyExtractor={(library, index) => library.id.toString()}
      />
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {libraries: state.libraries};
};

export default connect(mapStateToProps)(LibraryList);
