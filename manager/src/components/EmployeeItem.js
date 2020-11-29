import React, {Component} from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {CardSection} from './common';

class EmployeeList extends Component {
  onRowPress() {
    Actions.employeeEdit({employee: this.props.employee.item});
  }

  render() {
    // console.log(this.props.employee.item);
    const {name} = this.props.employee.item;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>{name}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
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
