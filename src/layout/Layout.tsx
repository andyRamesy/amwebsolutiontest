import React from "react";
import { styled } from "@mui/system";

const Wrapper = styled("div")({
  width: "100%",
  // height: "100vh",
  display: "flex",
  margin: "30px",
  gap: "100px"
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="xs:w-auto w-full flex m-[30px] gap-[100px] md:flex-col lg:flex-row sm:flex-col md:item xs:flex-col ">{children}</div>;
};

export default Layout;