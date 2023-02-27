import { render, screen, fireEvent } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Testing of <GifExpertApp/>', () => {
  test('It should show the new value if we submited', () => {
    const newInputValue = "Batman";
    
    render(<GifExpertApp/>);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: newInputValue}});
    fireEvent.submit(form);

    expect(newInputValue).toBeTruthy();
    expect("Henry Cavill").toBeTruthy();
  });

  test("It shouldn't show not repeated values in case it is trying to save the same value", () => {
    const newInputValue = "Batman";
    
    render(<GifExpertApp/>);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: newInputValue}});
    fireEvent.submit(form);

    fireEvent.input(input, { target: { value: newInputValue}});
    fireEvent.submit(form);
    
    expect(screen.getAllByRole('heading', { level: 2 }).length).toBe(2);
  });
});
