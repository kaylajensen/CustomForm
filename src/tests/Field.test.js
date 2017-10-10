import React from 'react';
import { shallow } from 'enzyme';
import { Form } from '../Form';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import sinon from 'sinon';
import TextField from 'material-ui/TextField';
import Field from '../Field'

configure({ adapter: new Adapter() });

let handleChange;
let spyHandleChange;
function setup() {
  let state = {
    title: "First Name",
    id: "firstName"
  }

  let component = shallow(<Field {...state}/>);
  return {
    field: component.find('.formRow'),
    firstNameTitle: component.find('.inputTitle'),
    firstNameField: component.find(TextField).find('#firstName'),
    component
  }
}

describe('Renders Field component', () => {
  it('renders header component', () => {
    let {field} = setup();
    expect(field).toHaveLength(1);
  });
  it('renders title and field components', () => {
    let {component, firstNameField, firstNameTitle} = setup();

    expect(firstNameField).toHaveLength(1);
    expect(firstNameTitle).toHaveLength(1);
  });
});
