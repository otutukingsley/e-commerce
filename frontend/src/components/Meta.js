import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, desc, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome to Tutu's Store",
  desc: "We sell the best electronics",
  keywords: "Samsung, Apple, Google",
};

export default Meta;
