import React from 'react';
import SluggedPage from '../components/slugg';
import SluggedPageApi from './api/sluggedPageApi';
import Layout from '../components/layout';
const api = new SluggedPageApi();

const SluggedPageView = ({ data }) => {
    return (
        <Layout>
            <div style={{ padding: '5px 25px' }}>
            <SluggedPage data={data} />
            </div>
        </Layout>
    );
};

export default SluggedPageView;


export async function getServerSideProps(ctx) {
    const props = {};
    const { query } = ctx;
    const slug = query.sluggedPage;

    try {
        const { data } = await api.get(slug);
        props.data = data || {};
    } catch (e) {
        props.data = {};
        console.error(e);
    }
    return {
        props: { ...props },
    };
}