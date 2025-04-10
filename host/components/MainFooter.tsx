"use client";

import {
  FacebookFilled,
  InstagramFilled,
  ShoppingFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";
import { Button, Divider, Flex, Input } from "antd";
import { Footer } from "antd/es/layout/layout";
import Text from "antd/es/typography/Text";
import Title from "antd/es/typography/Title";
import { useResponsive } from "../utils/useResponsive";

interface LinkItem {
  title: string;
  links: string[];
}

const MainFooter = () => {
  const { isMobile } = useResponsive();
  const links = [
    {
      title: "Shop",
      links: [
        "Clothing",
        "Shoes",
        "Accessories",
        "Brands",
        "Sale",
        "Gift Cards",
      ],
    },
    {
      title: "Gift Cards",
      links: [
        "Buy Gift Cards",
        "About Gift Cards",
        "Redeem a Gift Card",
        "Corporate a Gift Card",
        "Subscribe",
      ],
    },
    {
      title: "About Store",
      links: ["About Us", "Support", "Careers", "Newsroom", "Investors"],
    },
    {
      title: "Legal",
      links: ["Legal Notice", "Privacy Policy", "Terms & Conditions"],
    },
  ];

  const LinkComponent = ({ links }: { links: LinkItem[] }) => {
    return (
      <Flex
        gap={24}
        style={{ width: "100%" }}
        wrap={isMobile ? "wrap" : "nowrap"}
        justify={isMobile ? "flex-start" : "space-between"}
      >
        {links.map((section, index) => (
          <Flex
            vertical
            key={index}
            style={{
              //flex basis
              flex: isMobile ? "40%" : 1,
              marginBottom: isMobile ? "24px" : 0,
            }}
          >
            <Title level={5}>{section.title}</Title>
            <Divider />
            <Flex vertical gap={8} justify="left" align="start">
              {section.links.map((link, linkIndex) => (
                <Text
                  type="secondary"
                  key={linkIndex}
                  style={{
                    cursor: "pointer",
                  }}
                >
                  {link}
                </Text>
              ))}
            </Flex>
          </Flex>
        ))}
      </Flex>
    );
  };

  return (
    <Footer style={{ background: "#fff" }}>
      <Flex vertical gap={48} style={{ padding: !isMobile ? "48px" : 0 }}>
        {/* NEWSLETTER SECTION */}
        <Flex
          align={isMobile ? "stretch" : "center"}
          justify="space-between"
          vertical={isMobile}
          style={{
            backgroundColor: "#00000005",
            borderRadius: "6px",
            border: "1px solid #00000010",
            padding: "24px",
          }}
        >
          <Flex vertical>
            <Title level={5}>Sign up for our newsletter</Title>
            <Text type="secondary">
              Get notified about new products, discounts and articles.
            </Text>
          </Flex>

          <Flex gap={8} style={{ marginTop: isMobile ? "16px" : 0 }}>
            <Input placeholder="Email" />
            <Button type="primary">Sign Up</Button>
          </Flex>
        </Flex>

        {/* LINKS SECTION */}
        <Flex
          justify="space-between"
          style={{ width: "100%" }}
          vertical={isMobile}
        >
          <Flex
            vertical
            gap={24}
            style={{
              width: isMobile ? "100%" : "25%",
              marginBottom: isMobile ? "24px" : 0,
            }}
          >
            <ShoppingFilled
              style={{
                fontSize: 24,
                color: "#0958D9",
              }}
            />

            <Text type="secondary" style={{ width: "100%" }}>
              Quality materials, good designs, professional craftsmanship and
              sustainability.
            </Text>
          </Flex>
          <Flex style={{ width: isMobile ? "100%" : "70%" }}>
            <LinkComponent links={links} />
          </Flex>
        </Flex>

        <Divider />

        {/* COPYRIGHT & SOCIAL MEDIA SECTION */}

        <Flex
          justify="space-between"
          align="center"
          vertical={isMobile}
          gap={isMobile ? 16 : 0}
        >
          <Text type="secondary" style={{ textAlign: "center" }}>
            &copy; 2023 Company Name. All Rights Reserved.
          </Text>

          <Flex align="center" gap={8}>
            <Button
              type="text"
              size="large"
              icon={<FacebookFilled />}
              style={{
                color: "#00000073",
              }}
            />
            <Button
              type="text"
              size="large"
              icon={<InstagramFilled />}
              style={{
                color: "#00000073",
              }}
            />
            <Button
              type="text"
              size="large"
              icon={<TwitterSquareFilled />}
              style={{
                color: "#00000073",
              }}
            />
          </Flex>
        </Flex>
      </Flex>
    </Footer>
  );
};

export default MainFooter;
