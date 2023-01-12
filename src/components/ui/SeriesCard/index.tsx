import classnames from "classnames/bind";
import Link from "next/link";
import { ComponentPropsWithoutRef, FC, memo } from "react";
import { Url } from "url";

import styled from "./style.module.scss";

const cx = classnames.bind(styled);

type Props = ComponentPropsWithoutRef<"div"> & {
  title?: string;
  transparent?: boolean;
  more?: string | Url;
  items?: any[];
};

const SeriesCard = memo(props => {
  const { className, title, transparent, more, items, ...attr } = props;
  const classes = cx(styled.card, transparent && "is_transparent", className);

  return (
    <div className={classes} {...attr}>
      {title && <h3 className={styled.title}>{title}</h3>}

      {items?.length && (
        <div className={styled.items}>
          {items.map((item: any, i: number) => {
            return (
              <Link href={item.href} key={`${item.title}-${i}`}>
                <a className={styled.item}>
                  {item.thumbnail && (
                    <div className={styled.item__thumbnail}>
                      <img src={item.thumbnail.src} alt={item.thumbnail.alt} {...item.thumbnail} />
                    </div>
                  )}
                  <p className={styled.item__title}>{item.title}</p>
                </a>
              </Link>
            );
          })}
        </div>
      )}

      {more && (
        <div className={styled.footer}>
          <Link href={more}>
            <a className={styled.more}>もっと見る</a>
          </Link>
        </div>
      )}
    </div>
  );
}) as FC<Props>;

export default SeriesCard;
