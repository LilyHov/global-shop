import {getContent, getNavigation, getPaths} from "../../lib/content";
import Index from "../../components/layout";

export default function Item({content, categories}) {
    return (
        <Index title="Next Sample" categories={categories}>
            {content}
        </Index>
    );
}

export async function getStaticPaths(){
    const paths = getPaths();
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context){
    const content = getContent(context.params.category, context.params.item);
    const categories = getNavigation();
    return {
        props: {content, categories}
    }
}