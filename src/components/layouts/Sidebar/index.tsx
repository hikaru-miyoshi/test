import { ComponentPropsWithoutRef, FC, memo } from "react";

import styled from "./style.module.scss";

type Props = ComponentPropsWithoutRef<"aside">;

const Sidebar = memo(({ children }) => {
  return <aside className={styled.sidebar}>{children}</aside>;
}) as FC<Props>;

export default Sidebar;
