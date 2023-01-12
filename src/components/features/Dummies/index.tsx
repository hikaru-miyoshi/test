import { ComponentPropsWithoutRef, FC, memo, Suspense } from "react";

import { ErrorBoundary } from "@/components/features/ErrorBoundary";
import Grid from "@/components/layouts/Grid";
import { DummyBox } from "@/utils/storybook";

import { useDummies } from "./hooks/useDummies";

type Props = ComponentPropsWithoutRef<"div">;

const Items = memo(() => {
  const { items } = useDummies();

  return (
    <>
      {items && (
        <Grid cols={2} colsTablet={4} gap={8}>
          {items.map((e: any, i: number) => (
            <DummyBox key={`dummies-${i}`}>{e.title}</DummyBox>
          ))}
        </Grid>
      )}
    </>
  );
});

export default (() => {
  return (
    <ErrorBoundary fallback={<h1>error</h1>}>
      <Suspense fallback={<h1 className="text-center">Loading...</h1>}>
        <Items />
      </Suspense>
    </ErrorBoundary>
  );
}) as FC<Props>;
