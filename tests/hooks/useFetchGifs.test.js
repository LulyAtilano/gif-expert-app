import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("Testing of useFetchGifs'hook", () => {
  test('It should return the initial state', () => {
    const category = "Superman";
    const { result } = renderHook(() => useFetchGifs(category));
    const { images, isLoading } = result.current;
    
    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test('It should return an array of images and isLoading in false', async () => {
    const category = "Superman";
    const { result } = renderHook(() => useFetchGifs(category));
    
    await waitFor(
      () => expect(result.current.images.length).toBeGreaterThan(0)
    );
    
    const { images, isLoading } = result.current;
    
    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
