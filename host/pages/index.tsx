import dynamic from "next/dynamic";

const ProductsList = dynamic(() => import("productsRemote/ProductsList"), {
  ssr: false,
});

export default function Home() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      TEST
      <ProductsList />
    </div>
  );
}
