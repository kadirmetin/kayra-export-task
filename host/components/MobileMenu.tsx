"use client";

import { MenuOutlined } from "@ant-design/icons";
import { Button, Drawer, Flex } from "antd";
import { useState } from "react";

interface MobileMenuProps {
  menuItems: Array<{ key: string; label: string }>;
}

const MobileMenu = ({ menuItems }: MobileMenuProps) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="text" icon={<MenuOutlined />} onClick={showDrawer} />
      <Drawer
        title="Menu"
        placement="left"
        onClose={onClose}
        open={open}
        width={"50%"}
      >
        <Flex vertical gap={16}>
          {menuItems.map((item) => (
            <Button key={item.key} type="text" block>
              {item.label}
            </Button>
          ))}
        </Flex>
      </Drawer>
    </>
  );
};

export default MobileMenu;
