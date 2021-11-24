import Layout from "../components/layout";
import {getNavigation} from "../lib/content";
import HomeContent from '../components/home';
import agent from './api/agent';
import React from "react";

export default function Home() {
  return (
      <Layout>
       <HomeContent/>
          {console.log(agent, 'products')}
      </Layout>
  )
}

// export async function getStaticProps(context){
//     const categories = getNavigation()
//     return {
//         props: {categories}
//     }
// }