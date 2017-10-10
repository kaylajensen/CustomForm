import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
configure({ adapter: new Adapter() });

function setup() {
  let component = shallow(<App />);
  return {
    App: component.find('.App'),
    reactTitle: component.find('#reactTitle')
  }
}

describe('Renders App without crashing', () => {
  it('renders App component', () => {
    let {App} = setup();
    expect(App).toHaveLength(1);
  });
  it('renders title component', () => {
    let {reactTitle} = setup();
    expect(reactTitle).toHaveLength(1);
    expect(reactTitle.text()).toEqual("SIGN UP");
  });
});
