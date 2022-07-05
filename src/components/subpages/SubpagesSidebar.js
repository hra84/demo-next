import React, { useState } from "react";
import { Button, Drawer } from "antd";
import Link from "next/link";

import ClientOnlyPortal from "../../common/ClientOnlyPortal";

export default function SubpagesSidebar() {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(!visible);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <ClientOnlyPortal selector="#subpages-sidebar">
      <Drawer
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
        forceRender={true}
        className="subpages-sidebar-main"
        width={445}
      >
        <Button onClick={showDrawer} className="subpages-sidebar-opener">
          <i className="fas fa-cog fa-spin" />
        </Button>
        <h2>
          <span>4</span>
          Demo
        </h2>
        <p>You can easily combine various features from different demos.</p>
        <div className="subpages-homepages-group">
          <Link href={process.env.PUBLIC_URL + "/"}>
            <a>
              <img
                src={
                  process.env.PUBLIC_URL + "/assets/images/subpages/home1.png"
                }
                alt="Homepage 01"
              />
              <span>Homepage 01</span>
            </a>
          </Link>
          <Link href={process.env.PUBLIC_URL + "/homepage2"}>
            <a>
              <img
                src={
                  process.env.PUBLIC_URL + "/assets/images/subpages/home2.png"
                }
                alt="Homepage 02"
              />
              <span>Homepage 02</span>
            </a>
          </Link>
          <Link href={process.env.PUBLIC_URL + "/homepage3"}>
            <a>
              <img
                src={
                  process.env.PUBLIC_URL + "/assets/images/subpages/home3.png"
                }
                alt="Homepage 03"
              />
              <span>Homepage 03</span>
            </a>
          </Link>
          <Link href={process.env.PUBLIC_URL + "/homepage4"}>
            <a>
              <img
                src={
                  process.env.PUBLIC_URL + "/assets/images/subpages/home4.png"
                }
                alt="Homepage 04"
              />
              <span>Homepage 04</span>
            </a>
          </Link>
        </div>
      </Drawer>
    </ClientOnlyPortal>
  );
}
