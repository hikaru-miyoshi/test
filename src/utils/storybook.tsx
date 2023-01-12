import styled from "@emotion/styled";
import { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"div">;

const DummyBox = styled.div<Props>`
  display: grid;
  place-content: center;
  padding: 0.5em;
  border: 1px solid #dedede;
  border-radius: 0.25em;
`;

const DummyHStack = styled.div<Props>`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
`;

const screenshotOptions = {
  skip: false,
  fullPage: false,
  viewports: {
    mobile: {
      width: 375,
      height: 667,
    },
    tablet: {
      width: 768,
      height: 1024,
    },
    desktop: {
      width: 1280,
      height: 720,
    },
  },
};

export { DummyBox, DummyHStack, screenshotOptions };
