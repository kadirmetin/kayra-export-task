"use client";

import { useBasket } from "@/context/BasketContext";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  ShoppingFilled,
  UserOutlined,
} from "@ant-design/icons";
import { Badge, Button, Col, Flex, Row } from "antd";
import { Header } from "antd/es/layout/layout";
import Text from "antd/es/typography/Text";
import { useResponsive } from "../utils/useResponsive";
import MobileMenu from "./MobileMenu";

const MainHeader = () => {
  const { isMobile, isTablet } = useResponsive();
  const { state } = useBasket();

  const menuItems = [
    {
      key: "women",
      label: "Women",
    },
    {
      key: "men",
      label: "Men",
    },
    {
      key: "kids",
      label: "Kids",
    },
    {
      key: "gift-cards",
      label: "Gift Cards",
    },
  ];

  return (
    <>
      {/* TOP HEADER */}
      <Header
        style={{
          backgroundColor: "#0958D9",
          height: "38px",
          lineHeight: "38px",
          padding: "0 20px",
          borderBottom: "1px solid #ffffff",
        }}
      >
        <Row justify="center" align="middle">
          <Col>
            <Text style={{ color: "white" }}>
              Free delivery on orders above $50
            </Text>
          </Col>
        </Row>
      </Header>

      {/* MAIN HEADER */}
      <Header
        style={{
          backgroundColor: "#ffffff",
          height: "64px",
          lineHeight: "64px",
          padding: !isMobile ? "0 48px" : "0 16px",
          borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
        }}
      >
        <Row justify="space-between" align="middle">
          <Col span={isMobile ? 4 : 8}>
            {isTablet || isMobile ? (
              <MobileMenu menuItems={menuItems} />
            ) : (
              menuItems.map((item, index) => (
                <Button key={index} type="text" size="middle">
                  {item.label}
                </Button>
              ))
            )}
          </Col>

          <Col
            span={isMobile ? 16 : 8}
            style={{ textAlign: "center" }}
            className="logo"
          >
            <ShoppingFilled
              style={{
                fontSize: 24,
                color: "#0958D9",
                cursor: "pointer",
              }}
            />
          </Col>

          <Col span={isMobile ? 4 : 8} style={{ textAlign: "right" }}>
            <Flex justify="end">
              <Button
                type="text"
                size={isMobile ? "middle" : "large"}
                icon={<SearchOutlined />}
              />
              <Button
                type="text"
                size={isMobile ? "middle" : "large"}
                icon={<UserOutlined />}
              />
              <Badge showZero count={state.items.length}>
                <Button
                  type="text"
                  size={isMobile ? "middle" : "large"}
                  icon={<ShoppingCartOutlined />}
                />
              </Badge>
            </Flex>
          </Col>
        </Row>
      </Header>
    </>
  );
};

export default MainHeader;
