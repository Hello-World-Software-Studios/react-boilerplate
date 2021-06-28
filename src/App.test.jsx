import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders greeting", () => {
  render(<App />);
  const testingText = screen.getByText("Hello World");
  expect(testingText).toBeInTheDocument();
});
