import { LayoutProps } from "./Layout.props";
import styles from "./Layout.module.css";
import cn from "classnames";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { Sidebar } from "./Sidebar/Sidebar";
import { Component, FunctionComponent } from "react";

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header></Header>
      <div>
        <Sidebar></Sidebar>
        <div>{children}</div>
      </div>
      <Footer></Footer>
    </>
  );
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props}></Component>
      </Layout>
    );
  };
};
