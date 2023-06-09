import React from "react";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import { Flex, Spacer } from "@chakra-ui/react";

import portalLogo from "../public/portal-logo.png";

export default function Header(): JSX.Element {
  return (
    <Flex
      zIndex={2}
      padding="2"
      alignItems="center"
      justifyContent="space-between"
      backgroundColor="#292929"
      borderBottom="1px solid #e8e8e8"
    >
      <Flex alignItems="center" padding="10px" width="290px">
        <a
          href="https://portalnet.tk"
          target="_blank"
          rel="noreferrer"
        >
          <Image priority alt="logo" width={150} height={35} src={portalLogo} />
        </a>
      </Flex>
      <Spacer />
      <Flex alignItems="center" padding="10px">
      </Flex>
    </Flex>
  );
}
