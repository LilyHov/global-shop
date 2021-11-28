import Layout from "../../components/layout";
import React from "react";
import Basket from '../../components/cart'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Cart() {
    return (
        <Layout>
            <Basket/>
        </Layout>
    )
}

export const getStaticProps = async () => ({
    props: {
        ...(await serverSideTranslations('en-us', ['common', 'footer'])),
    },
});
