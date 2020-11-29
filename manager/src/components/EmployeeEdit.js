import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Communications from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
import {employeeUpdate, employeeSave, employeeDelete} from '../actions';
import {Card, CardSection, Button, Confirm} from './common';

class EmployeeEdit extends Component {
  state = {showModel: false};

  componentDidMount() {
    _.each(this.props.employee, (value, prop) => {
      // console.log({prop, value});
      this.props.employeeUpdate({prop, value});
    });
  }

  onButtonPress() {
    const {name, phone, shift} = this.props;

    // console.log(name, phone, shift);
    this.props.employeeSave({name, phone, shift, uid: this.props.employee.uid});
  }

  onSendPress() {
    const {phone, shift} = this.props;

    Communications.text(phone, `Your upcomming shift is on ${shift}`);
  }

  onAccept() {
    const {uid} = this.props.employee;

    this.props.employeeDelete({uid});
  }

  onDecline() {
    this.setState({showModel: false});
  }

  render() {
    // console.log(this.props.employee);
    return (
      <Card>
        <EmployeeForm {...this.props} />

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Save Changes</Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onSendPress.bind(this)}>Send Schedule</Button>
        </CardSection>

        <CardSection>
          <Button
            onPress={() => this.setState({showModel: !this.state.showModel})}>
            Fire Employee
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModel}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}>
          Are you sure you want to delete this employee?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const {name, phone, shift} = state.employeeForm;

  return {name, phone, shift};
};

export default connect(mapStateToProps, {
  employeeUpdate,
  employeeSave,
  employeeDelete,
})(EmployeeEdit);
