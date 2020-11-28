import React, {Component} from 'react';
import {Text} from 'react-native';
import {CardSection} from './common';

class EmployeeList extends Component {
  render() {
    // console.log(this.props.employee.item);
    const {name} = this.props.employee.item;

    return (
      <CardSection>
        <Text style={styles.titleStyle}>{name}</Text>
      </CardSection>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 20,
    paddingLeft: 15,
  },
};

export default EmployeeList;
