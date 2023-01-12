import classnames from "classnames/bind";
import { ComponentPropsWithoutRef, FC, memo } from "react";

import { SnsUrls } from "@/types/sns";
import { Thumbnail } from "@/types/thumbnail";

import SnsIcon from "../SnsIcon";
import styled from "./style.module.scss";

const cx = classnames.bind(styled);

type Props = ComponentPropsWithoutRef<"div"> & {
  thumbnail: Thumbnail;
  name: {
    kana: string;
    kanji: string;
  };
  job: string;
  sns: SnsUrls;
  description: string;
};

const WriterDetail = memo(props => {
  const { className, thumbnail, name, job, sns, description, ...attr } = props;
  const classes = cx(className, styled.writerDetail);

  return (
    <div className={classes} {...attr}>
      <div className={styled.picture}>
        <img className={styled.pictureImage} src={thumbnail.src} alt={thumbnail?.alt} />
      </div>
      <div className={styled.contents}>
        <div className={styled.name}>
          <p className={styled.nameKana}>{name.kana}</p>
          <h2 className={styled.nameKanji}>{name.kanji}</h2>
        </div>
        <p className={styled.job}>{job}</p>
        <SnsIcon sns={sns} className={styled.snsIcon} />
        <p className={styled.text}>{description}</p>
      </div>
    </div>
  );
}) as FC<Props>;

export default WriterDetail;
