import { useGetAllProductsQuery } from "@/store/products";

const ProductsList = () => {
  const { data, isLoading, error } = useGetAllProductsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error: {error instanceof Error ? error.message : "An error occurred"}
      </div>
    );
  }

  if (!data || data.length === 0) {
    return <div>No products found.</div>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {data.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
