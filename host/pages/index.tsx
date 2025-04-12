import { GiftOutlined, MailOutlined, ReloadOutlined } from "@ant-design/icons";
import { Button, Card, Col, Row, Space, Typography } from "antd";
import dynamic from "next/dynamic";
import { ReactNode } from "react";

const { Title, Paragraph } = Typography;

const RemoteComponent = dynamic(
  // @ts-ignore
  () => import("productsRemote/RemoteComponent"),
  {
    ssr: false,
  }
);
const RemoteComponent2 = dynamic(
  // @ts-ignore
  () => import("basketRemote/RemoteComponent"),
  {
    ssr: false,
  }
);

interface InfoCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function Home() {
  const InfoCard = ({ icon, title, description }: InfoCardProps) => {
    return (
      <Card
        variant="borderless"
        style={{ textAlign: "center", height: "100%", padding: "20px 0" }}
      >
        <Space direction="vertical" align="center">
          {icon}
          <div style={{ marginTop: "8px" }}>
            <Title level={5}>{title}</Title>
            <Paragraph>{description}</Paragraph>
          </div>
        </Space>
      </Card>
    );
  };

  return (
    <div style={{ padding: "40px" }}>
      {/* HERO SECTION */}

      <Row gutter={[24, 24]} style={{ marginBottom: "40px" }}>
        <Col xs={24} md={12}>
          <div style={{ padding: "40px 0" }}>
            <Title level={2}>Explore Fresh Cosmetic Arrivals!</Title>
            <Paragraph style={{ marginBottom: "20px" }}>
              Experience Beauty's Newest Delights: Discover Fresh Makeup,
              Skincare, and Beauty Products to Elevate Your Routine!
            </Paragraph>
            <Button type="primary" style={{ background: "#1677ff" }}>
              Shop now
            </Button>
          </div>
        </Col>
        <Col xs={24} md={12}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "300px",
                background: "#f0f0f0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="https://placehold.co/600x400/F0F0F0/000000/png?text=Kayra+Export"
                alt="Cosmetic Products"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </Col>
      </Row>

      {/* INFO BOXES */}
      <Row gutter={[24, 24]}>
        <Col xs={24} md={8}>
          <InfoCard
            icon={
              <GiftOutlined style={{ fontSize: "24px", color: "#1677ff" }} />
            }
            title="Exclusive Offer"
            description="Save 5% with Code 'NEW5'"
          />
        </Col>
        <Col xs={24} md={8}>
          <InfoCard
            icon={
              <MailOutlined style={{ fontSize: "24px", color: "#1677ff" }} />
            }
            title="Newsletter"
            description="Enjoy 15% Off Your Next Beauty Purchase!"
          />
        </Col>
        <Col xs={24} md={8}>
          <InfoCard
            icon={
              <ReloadOutlined style={{ fontSize: "24px", color: "#1677ff" }} />
            }
            title="Hassle-Free Shopping"
            description="Enjoy 60 Days of Free Returns"
          />
        </Col>
      </Row>

      {/* REMOTE COMPONENT */}

      <RemoteComponent />

      {/* REMOTE COMPONENT 2 */}

      <RemoteComponent2 />
    </div>
  );
}
