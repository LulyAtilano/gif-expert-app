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
    const onNewValue = jest.fn()

    render(<AddCategory onNewValue={onNewValue} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue}});
    fireEvent.submit(form);

    //screen.debug();
    expect(input.value).toBe("");
    expect(onNewValue).toHaveBeenCalled();
    expect(onNewValue).toHaveBeenCalledTimes(1);
    expect(onNewValue).toHaveBeenCalledWith(inputValue);
  });
  
  test("It shouldn't call onNewCategory if input is empty", () => {
    const onNewValue = jest.fn()
    render(<AddCategory onNewValue={onNewValue} />);

    const form = screen.getByRole("form");

    fireEvent.submit(form);

    expect(onNewValue).toHaveBeenCalledTimes(0);
    expect(onNewValue).not.toHaveBeenCalled();
  });
});
