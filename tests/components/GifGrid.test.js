import { render, screen } from "@testing-library/react";
import { GifGrid, GifItem } from "../../src/components/index";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe('Testing of <GifGrid/> component', () => {
  const category = "Henry Cavill";

  test('It should show the initial loading', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    })

    render(<GifGrid category={category} />);
    
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  }); 

  test('It should show the items after load the images of useFetchGifs', () => {
    const gifs = [
      {
        id: "1",
        title: "Superman",
        url: "https://localhost/Superman-HenryCavill.jpg"
      }, {
        id: "2",
        title: "Batman",
        url: "https://localhost/Batman.jpg"
      }
    ];
  
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: true
    })

    render(<GifGrid category={category} />);
    expect(screen.getAllByRole('img').length).toBe(2);
  });
});
