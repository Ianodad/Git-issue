import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter, Switch } from "react-router-dom";

import Card from "../../components/Card/Card";


describe("<Card/> testing component", () => {
  const defaultProps ={
  title: "title", 
  count: 5,
  style: {'color':"black"},
  image: "image",
  onSubmit: jest.fn()
  }

  const  wrapper = ({ children }) => (
        <BrowserRouter>
          <Switch> {children} </Switch>
        </BrowserRouter>
    );
  describe("Card component unit testing", () => {
    it("renders without any change", () => {
      render(<Card/>);
    });

    it("renders with all props", () => {
      render(<Card {...defaultProps}/>, {wrapper:wrapper});
    });

    it("renders with one  prop", () => {
      render(<Card title="Card"/>, {wrapper:wrapper});
    });

    test("renders with one prop", () => {
      const { rerender } = render(<Card title="Card"/>, {wrapper:wrapper});
      expect(screen.getByTestId('card-title')).toHaveTextContent('Card');

      rerender(<Card title="New Card"/>, {wrapper:wrapper});
      expect(screen.getByTestId('card-title')).toHaveTextContent('New Card')
      
    });
  });
});