import Index from "../components/layout";
import {getNavigation} from "../lib/content";

export default function Home({categories}) {
  return (
      <Index title="Next Sample" categories={categories}>
        Hello World!
      </Index>
  )
}

export async function getStaticProps(context){
    const categories = getNavigation()
    return {
        props: {categories}
    }
}