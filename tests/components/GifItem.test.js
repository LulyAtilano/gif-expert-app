import { GifItem } from "../../src/components/GifItem";
import { render, screen } from "@testing-library/react";

describe('Testing of <GifItem/>', () => {
  const title = "Cris Evans";
  const url = "https://google.com/";

  test("It should show an error if the component doesn't received the corresponding props", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });
  test('It should show the image with the corresponding URL and ALT', () => {
    render(<GifItem title={title} url={url} />);
    // expect(screen.getByRole("img").src).toBe(url);
    // expect(screen.getByRole("img").alt).toBe(title);

    // Another way to do the same test
    const {src, alt} = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });
  test('It should show the title in the component', () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
