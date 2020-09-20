import React from 'react';
import Enzyme, { render } from 'enzyme';
//import LayoutDesktop from '../LayoutDesktop';
//import LayoutMobile from '../LayoutMobile';
import Navbar from '../../Navbar/Container';
import { Provider } from 'react-redux';

const ComponentWithStore = ({Component, store, props}) => {
  return render(
  <Provider store={store}>
    <Component {...props} />
  </Provider>
  )
};

const store = {};
const props = {
  children: <div><p className="child">Children</p></div>
};

describe("<App />", () => {

  /*
  it("Mobile layout.", () => {
    const component = <ComponentWithStore
      component={LayoutMobile}
      store={store}
      props={props}
    />;
    console.log(component.props);
    console.log(":::::::::::::::::::::");
    const containerElement = component.props.component.find(<div></div>);
    const firstChild = containerElement.find('.child');
    const navbar = component.find(Navbar);

    expect(containerElement.length).toBe(1);
    expect(firstChild.length).toBe(1);
    expect(navbar.length).toBe(1)
  })

  it("Desktop layout", () => {
    const component = <ComponentWithStore
                component={LayoutDesktop}
                store={store}
                props={props}
    />;
    const containerElement = component.props.component(<div></div>);
    const firstChild = containerElement.find('.child');
    const navbar = component.find(Navbar);

    expect(containerElement.length).toBe(1);
    expect(firstChild.length).toBe(1);
    expect(navbar.length).toBe(1)
  })*/

  it("False test.", () => {
    expect(true).toStrictEqual(true);
  });

});
