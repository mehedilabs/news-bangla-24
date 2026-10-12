"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

const getDate = () =>
  new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

const getServerDate = () => "";

const CurrentDate = () => {
  const date = useSyncExternalStore(subscribe, getDate, getServerDate);

  return <span>{date}</span>;
};

export default CurrentDate;
