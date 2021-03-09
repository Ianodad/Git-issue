import React from "react";
import { create } from "react-test-renderer";
import Card from "../../components/Card/Card";


describe("Card component", () => {
  test("Matches the snapshot", () => {
    const card = create(<Card />);
    expect(card.toJSON()).toMatchSnapshot();
  });
});