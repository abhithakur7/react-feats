import Counter from "@/components/counter";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

describe("counter", () => {
  test("should call function on click", async () => {
    user.setup();
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();

    render(
      <Counter
        count={0}
        incrementCount={incrementHandler}
        decrementCount={decrementHandler}
      />
    );

    const increamentButton = screen.getByRole("button", {
      name: "Increment",
    });
    const decreamentButton = screen.getByRole("button", {
      name: "Decrement",
    });

    await user.click(increamentButton);
    await user.click(decreamentButton);

    expect(incrementHandler).toHaveBeenCalledTimes(1);
    expect(incrementHandler).toHaveBeenCalledTimes(1);
  });
});
