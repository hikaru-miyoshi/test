import classnames from "classnames/bind";
import Link from "next/link";
import { ComponentPropsWithoutRef, FC } from "react";
import { Url } from "url";

import styled from "./style.module.scss";

const cx = classnames.bind(styled);

type Props = ComponentPropsWithoutRef<"a"> & {
  href: string | Url;
  title: string;
  thumbnail?: ComponentPropsWithoutRef<"img">;
  datetime: string;
};

export default (props => {
  const { title, className, thumbnail, datetime, href, ...attr } = props;
  const classes = cx(styled.item, className);

  return (
    <Link href={href}>
      <a className={classes} {...attr}>
        {thumbnail ? (
          <div className={styled.thumbnail}>
            <img src={thumbnail.src} alt={thumbnail.alt} {...thumbnail} />
          </div>
        ) : (
          false
        )}
        <div className={styled.contents}>
          <p className={styled.title}>{title}</p>
          <p className={styled.datetime}>
            <time>{datetime}</time>
          </p>
        </div>
      </a>
    </Link>
  );
}) as FC<Props>;
