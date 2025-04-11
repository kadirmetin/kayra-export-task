import { Button, Card, Col, Row, Typography } from "antd";

const { Text, Title } = Typography;

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <Card
      cover={
        <img
          alt={product.title}
          src={product.image}
          style={{ height: 200, objectFit: "contain", padding: "1rem" }}
        />
      }
      style={{ height: "100%" }}
      actions={[
        // CART ACTION BUTTON FOR ADDING PRODUCT TO CART
        <Button
          key="addToCart"
          type="primary"
          onClick={() => {
            if (onAddToCart) {
              onAddToCart(product);
            }
          }}
        >
          Add to Cart
        </Button>,
      ]}
    >
      <Row gutter={[0, 12]}>
        <Col span={24}>
          <Title level={5} ellipsis={{ rows: 2 }} style={{ marginBottom: 0 }}>
            {product.title}
          </Title>
        </Col>
        <Col span={24}>
          <Text strong style={{ fontSize: "16px" }}>
            ${product.price.toFixed(2)}
          </Text>
        </Col>
      </Row>
    </Card>
  );
};

export default ProductCard;
