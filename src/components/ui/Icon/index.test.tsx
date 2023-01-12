import { render } from "@testing-library/react";
import { expect, test } from "vitest";

import Icon from "./index";

test("Icon", () => {
  const { container } = render(<Icon src={"/icon/heart.png"} alt="heart" />);

  expect(container).toMatchSnapshot();
});
