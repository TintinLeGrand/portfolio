"use client";

import { HiInformationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react";
import React from "react";

export function DisplayAlert({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [visible, setVisible] = React.useState(true);

  if (!visible) {
    return null;
  }

  return (
    <div className="z-40 w-screen h-screen md:invisible top-0 left-0 fixed bg-black bg-opacity-0 dark:bg-opacity-70">
      <Alert
        className="absolute inset-0 m-auto z-50 h-fit w-fit flex items-center justify-center"
        color="failure"
        icon={HiInformationCircle}
        onDismiss={() => setVisible(false)}
      >
        {children}
      </Alert>
    </div>
  );
}
