import { useGetAllProductsQuery } from "@/store/products";
import { Col, Row, Spin, Typography } from "antd";
import ProductCard from "./ProductCard";

const { Title } = Typography;

const ProductsList = () => {
  const { data, isLoading, error } = useGetAllProductsQuery();

  // LOADING HANDLER FOR USEGETALLPRODUCTSQUERY
  if (isLoading) {
    return (
      <Row>
        <Col span={24} style={{ textAlign: "center", padding: "4rem" }}>
          <Spin size="large" />
        </Col>
      </Row>
    );
  }

  // ERROR HANDLER FOR USEGETALLPRODUCTSQUERY
  if (error) {
    return (
      <Row>
        <Col span={24} style={{ textAlign: "center", padding: "4rem" }}>
          Error: {error instanceof Error ? error.message : "An error occurred"}
        </Col>
      </Row>
    );
  }

  // CHECKING IF DATA IS AVAILABLE
  if (!data || data.length === 0) {
    return (
      <Row>
        <Col span={24} style={{ textAlign: "center", padding: "4rem" }}>
          No products available.
        </Col>
      </Row>
    );
  }

  return (
    <Row gutter={[16, 16]} style={{ padding: "1rem" }}>
      <Col xs={24}>
        <Title level={3}>Products</Title>
      </Col>

      {/* RENDERING PRODUCT CARDS */}
      {data.map((product) => (
        <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  );
};

export default ProductsList;
