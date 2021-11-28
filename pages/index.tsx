import Layout from "../components/layout";
import {getNavigation} from "../lib/content";
import HomeContent from '../components/home';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import agent from './api/agent';
import React from "react";

export default function Home() {
  return (
      <Layout>
       <HomeContent/>
      </Layout>
  )
}

// export async function getStaticProps(context){
//     const categories = getNavigation()
//     return {
//         props: {categories}
//     }
// }

export const getStaticProps = async ({ locale }) => {
    console.log('🚀 ~ file: index.js ~ line 90 ~ getStaticProps ~ locale', locale);
    return ({
        props: {
            ...await serverSideTranslations('en-us', ['common', 'footer']),
        },
    });
};
