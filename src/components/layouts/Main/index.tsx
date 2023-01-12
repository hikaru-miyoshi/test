import { ComponentPropsWithoutRef, FC, memo } from "react";

import styled from "./style.module.scss";

type Props = ComponentPropsWithoutRef<"main">;

const Main = memo(({ children }) => {
  return <main className={styled.main}>{children}</main>;
}) as FC<Props>;

export default Main;
