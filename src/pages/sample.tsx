import { NextPage, NextPageContext } from "next";
import dynamic from "next/dynamic";
import { NextSeo } from "next-seo";

import Slider from "@/components/features/Slider";
import Main from "@/components/layouts/Main";
import Section from "@/components/layouts/Section";
import Sidebar from "@/components/layouts/Sidebar";
import Stack from "@/components/layouts/Stack";
import { sliderDummies } from "@/utils/dummy";
import { DummyBox } from "@/utils/storybook";

// hydrateでエラーが出るので、SSRでレンダリングをオフに
const DynamicComponent = dynamic(() => import("@/components/features/Dummies"), {
  ssr: false,
});

export default (() => {
  return (
    <>
      <NextSeo />

      <Section variant="pink">
        <h1>Suspense fetch sample</h1>
        <DynamicComponent />
      </Section>

      <Section variant="gray">
        <h1>Section sample</h1>
        <DummyBox>DUMMY</DummyBox>
        <Slider items={sliderDummies} />
      </Section>

      <Section>
        <Stack direction="row" gap={50} gapTablet={40} wrap>
          <Main>
            <DummyBox>1col</DummyBox>
          </Main>
          <Sidebar>
            <DummyBox>2col</DummyBox>
          </Sidebar>
        </Stack>
      </Section>
    </>
  );
}) as NextPage<NextPageContext>;
