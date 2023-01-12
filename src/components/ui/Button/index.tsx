import classnames from "classnames/bind";
import Link from "next/link";
import {
  ComponentPropsWithoutRef,
  createElement,
  forwardRef,
  JSXElementConstructor,
  ReactElement,
  ReactNode,
} from "react";
import { UrlObject } from "url";

import styled from "./style.module.scss";

const cx = classnames.bind(styled);

type Tags = "button" | "a" | "input";
type Element = HTMLButtonElement | HTMLAnchorElement | HTMLInputElement;
type Variant = {
  variant?: "default";
};

type ButtonProps = {
  as: "button";
  href?: never;
  children?: ReactNode;
  className?: string;
} & Variant &
  ComponentPropsWithoutRef<"button">;
type AnchorProps = {
  as: "a";
  href: string | UrlObject;
  children?: ReactNode;
  className?: string;
} & Variant &
  ComponentPropsWithoutRef<"a">;
type InputProps = {
  as: "input";
  href?: never;
  children?: never;
  className?: string;
} & Variant &
  ComponentPropsWithoutRef<"input">;

export type Props<T extends Tags> = T extends "a" ? AnchorProps : T extends "input" ? InputProps : ButtonProps;

type Return = ReactElement<Element, string | JSXElementConstructor<Element>> | null;

const Button: <T extends Tags>(props: Props<T>) => Return = forwardRef<Element, Props<Tags>>((props, ref) => {
  const { as, children, className, href, variant = "default", ...attr } = props;
  const classes = cx(styled.button, className, styled[`is_${variant}`]);
  const elm = createElement(as, { ref, className: classes, ...attr }, children);

  if (as === "a") {
    return (
      <Link href={href} className={classes} legacyBehavior>
        {elm}
      </Link>
    );
  }

  return elm;
});

export default Button;
