import MainFooter from "@/components/MainFooter";
import MainHeader from "@/components/MainHeader";
import { ConfigProvider, Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import type { AppProps } from "next/app";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "SF Pro Text",
        },
      }}
    >
      <Layout>
        <Content>
          <MainHeader />
          <Component {...pageProps} />
          <MainFooter />
        </Content>
      </Layout>
    </ConfigProvider>
  );
}
