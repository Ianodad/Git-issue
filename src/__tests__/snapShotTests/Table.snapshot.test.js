import Table from "../../components/Table";
import renderer from 'react-test-renderer';

import { BrowserRouter, Switch } from 'react-router-dom';


describe("<Table/> testing component", () => {
    let component
    
    beforeEach(() => {
    component = renderer.create(
    <BrowserRouter>
        <Switch>
        <Table/>
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