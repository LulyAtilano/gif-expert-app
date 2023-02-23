import { fireEvent, render,screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/index";

describe('Testing of <AddCategory/> component', () => {
  
  test("It should change the value inside of the inputText", () => {
    render(<AddCategory onNewValue={() => {}} />);
    const input = screen.getByRole("textbox");

    fireEvent.input(input, { target: { value: "Batman"}});
    
    expect(input.value).toBe("Batman");
  });

  test("It should call onNewCategory if the input have at least one value", () => {
    const inputValue = "Batman";
    
    render(<AddCategory onNewValue={() => {}} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue}});
    fireEvent.submit(form);

    //screen.debug();
    expect(input.value).toBe("");
  });

});
