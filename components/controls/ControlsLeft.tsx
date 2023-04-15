import React from "react";
import Image from "next/image";
import { Flex } from "@chakra-ui/react";

import portalLogo from "../../public/portal-logo.png";

export default function ControlsLeft(): JSX.Element {
  return (
    <Flex
      alignItems="center"
      display={{ base: "none", md: "flex" }}
      width="290px"
    >
      <a
        href="https://portalnet.tk"
        target="_blank"
        rel="noreferrer"
      >
        <Image priority alt="logo" width={150} height={35} src={portalLogo} />
      </a>
    </Flex>
  );
}
