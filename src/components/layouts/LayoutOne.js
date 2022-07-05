import React from "react";
import Head from "next/head";
import { BackTop, message } from "antd";
import classNames from "classnames";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import WithHeaderScroll from "../../common/WithHeaderScroll";
// import SubpagesSidebar from "../subpages/SubpagesSidebar";

const ScrollHeader = WithHeaderScroll(Header);

function LayoutOne({
  title,
  headerStyle,
  containerType,
  children,
  clearSpaceTop,
}) {
  message.config({
    maxCount: 3,
    duration: 1,
  });
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <ScrollHeader headerStyle={headerStyle} containerType={containerType} />
      <div className={`content ${classNames({ "clear-top": clearSpaceTop })}`}>
        {children}
      </div>
      <Footer containerType={containerType} />
      <BackTop />
      {/* <SubpagesSidebar /> */}
    </>
  );
}

export default React.memo(LayoutOne);
