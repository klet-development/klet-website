"use client";
import { useMemo } from "react";
import * as runtime from "react/jsx-runtime";

export function MDXContent({ code }: { code: string }) {
  const Component = useMemo(() => {
    // eslint-disable-next-line no-new-func
    const fn = new Function(code);
    return fn({ ...runtime }).default as React.ComponentType;
  }, [code]);

  return <Component />;
}
