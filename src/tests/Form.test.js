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
    user: {
      firstName: "Kayla",
      lastName: "Jensen"
    },
    dispatch: jest.fn()
  }

  let component = shallow(<Form {...state}/>);
  return {
    headerContainer: component.find('#FormContainer'),
    firstNameField: component.find(Field).find('#firstName'),
    lastNameField: component.find(Field).find('#lastName'),
    address1Field: component.find(Field).find('#address1'),
    address2Field: component.find(Field).find('#address2'),
    cityField: component.find(Field).find('#city'),
    stateField: component.find(Field).find('#state'),
    phoneField: component.find(Field).find('#phone'),
    emailField: component.find(Field).find('#email'),
    updateButton: component.find('#updateButton'),
    component
  }
}

describe('Renders Header', () => {
  it('renders header component', () => {
    let {headerContainer} = setup();
    expect(headerContainer).toHaveLength(1);
  });
  it('renders title and field components', () => {
    let {firstNameField, lastNameField, address1Field, address2Field, cityField, stateField, phoneField, emailField, updateButton} = setup();

    expect(firstNameField).toHaveLength(1);
    expect(lastNameField).toHaveLength(1);
    expect(address1Field).toHaveLength(1);
    expect(address2Field).toHaveLength(1);
    expect(cityField).toHaveLength(1);
    expect(stateField).toHaveLength(1);
    expect(phoneField).toHaveLength(1);
    expect(emailField).toHaveLength(1);
    expect(updateButton).toHaveLength(1);
  });
});
