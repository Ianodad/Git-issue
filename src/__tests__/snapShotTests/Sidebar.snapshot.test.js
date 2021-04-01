import Sidebar from "../../components/Sidebar";
import renderer from 'react-test-renderer';

import { BrowserRouter, Switch } from 'react-router-dom';




describe("<Sidebar/> testing component", () => {
    let component
    
    beforeEach(() => {
    component = renderer.create(
    <BrowserRouter>
        <Switch>
        <Sidebar/>
        </Switch>
    </BrowserRouter>
    );
  });

    describe("Check component renders", () => {
         it('should render snapshot', () => {
          expect(component.toJSON()).toMatchSnapshot();
        });
        
    });
});