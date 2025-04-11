import dynamic from "next/dynamic";

const RemoteComponent = dynamic(
  // @ts-ignore
  () => import("productsRemote/RemoteComponent"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* REMOTE COMPONENT */}
    </div>
  );
}
