import { render, screen, waitFor } from "@testing-library/react";
import User from "@/components/user";
import axios from "axios";

jest.mock("axios");

test("fetches and displays user data", async () => {
  const mockResponse = { data: { name: "John Doe" } };
  (axios.get as jest.Mock).mockResolvedValue(mockResponse);

  render(<User />);

  // Check if the mocked response is used in the component
  const userNameElement = await waitFor(() => screen.getByText(/John Doe/i));
  expect(userNameElement).toBeInTheDocument();
});
