import Layout from "../../components/layout";
import React from "react";
import ProductCard from "../../components/product-card";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Shop() {
    return (
        <Layout>
            <ProductCard/>
        </Layout>
    )
}

export const getStaticProps = async () => ({
    props: {
        ...(await serverSideTranslations('en-us', ['common', 'footer'])),
    },
});
