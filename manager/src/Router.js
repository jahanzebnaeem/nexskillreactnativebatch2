import React from 'react';
import {Router, Stack, Scene, Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene key="login" component={LoginForm} title="Please Login" />
        <Scene
          onRight={() => Actions.employeeCreate()}
          rightTitle="Add"
          key="employeeList"
          component={EmployeeList}
          title="Employees"
          left={() => null}
        />
        <Scene
          key="employeeCreate"
          component={EmployeeCreate}
          title="Create Employee"
          renderBackButton={() => null}
        />
        <Scene
          key="employeeEdit"
          component={EmployeeEdit}
          title="Edit Employee"
          renderBackButton={() => null}
        />
      </Stack>
    </Router>
  );
};

export default RouterComponent;
