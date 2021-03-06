import Layout from "../../components/layout";
import React from "react";
import ProductCard from "../../components/product-card";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import agent from "../api/agent";

export default function Shop() {
    const productData = agent.Products().products

    return (
        <Layout>
            {productData.map((item, key) => {
               return <ProductCard product={item} key={key}/>}
            )}
        </Layout>
    )
}

export const getStaticProps = async () => ({
    props: {
        ...(await serverSideTranslations('en-us', ['common', 'footer'])),
    },
});
