import classNames from "classnames/bind";
import { ComponentPropsWithoutRef, FC, memo } from "react";

import { SnsUrls } from "@/types/sns";

import styled from "./style.module.scss";

const cx = classNames.bind(styled);

type Props = ComponentPropsWithoutRef<"div"> & {
  sns: SnsUrls;
};

const SnsIcon = memo(props => {
  const { className, sns, ...attr } = props;
  const { homePage, facebook, youtube, twitter, instagram, line, tiktok } = sns;

  const classes = cx(styled.snsIconList, className);

  return (
    <div className={classes} {...attr}>
      {!!homePage?.href && (
        <a href={homePage.href} target="_blank" rel="noopener noreferrer" className={styled.snsIcon}>
          <img src="/ui/SnsIcon/icon_homepage_img01.svg" alt="homePage" className={styled.snsIconImage} />
        </a>
      )}
      {!!facebook?.href && (
        <a href={facebook.href} target="_blank" rel="noopener noreferrer" className={styled.snsIcon}>
          <img src="/ui/SnsIcon/icon_facebook_img01.svg" alt="facebook" className={styled.snsIconImage} />
        </a>
      )}
      {!!youtube?.href && (
        <a href={youtube.href} target="_blank" rel="noopener noreferrer" className={styled.snsIcon}>
          <img src="/ui/SnsIcon/icon_youtube_img01.svg" alt="youtube" className={styled.snsIconImage} />
        </a>
      )}
      {!!twitter?.href && (
        <a href={twitter.href} target="_blank" rel="noopener noreferrer" className={styled.snsIcon}>
          <img src="/ui/SnsIcon/icon_twitter_img01.svg" alt="twitter" className={styled.snsIconImage} />
        </a>
      )}
      {!!instagram?.href && (
        <a href={instagram.href} target="_blank" rel="noopener noreferrer" className={styled.snsIcon}>
          <img src="/ui/SnsIcon/icon_instagram_img01.svg" alt="instagram" className={styled.snsIconImage} />
        </a>
      )}
      {!!line?.href && (
        <a href={line.href} target="_blank" rel="noopener noreferrer" className={styled.snsIcon}>
          <img src="/ui/SnsIcon/icon_line_img01.svg" alt="line" className={styled.snsIconImage} />
        </a>
      )}
      {!!tiktok?.href && (
        <a href={tiktok.href} target="_blank" rel="noopener noreferrer" className={styled.snsIcon}>
          <img src="/ui/SnsIcon/icon_tiktok_img01.svg" alt="tiktok" className={styled.snsIconImage} />
        </a>
      )}
    </div>
  );
}) as FC<Props>;

export default SnsIcon;
