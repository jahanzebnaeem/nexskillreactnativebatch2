import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FlatList} from 'react-native';
import {employeesFetch} from '../actions';
import EmployeeItem from './EmployeeItem';

class EmployeeList extends Component {
  componentDidMount() {
    this.props.employeesFetch();
  }

  renderData(employee) {
    return <EmployeeItem employee={employee} />;
  }

  render() {
    // console.log(this.props);
    return (
      <FlatList
        data={this.props.employees}
        renderItem={this.renderData}
        keyExtractor={(item) => item.uid.toString()}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const employees = _.map(state.employees, (val, uid) => {
    return {...val, uid}; // {id: lldfafdaf, name: 'Jahanzeb', phone: 88484848, shift: 'Monday'}
  });

  return {employees};
};

export default connect(mapStateToProps, {employeesFetch})(EmployeeList);
