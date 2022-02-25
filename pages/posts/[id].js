import Head from 'next/head'
import Layout from '../../components/layout'
import { getAllPostIds, getPostData} from '../../lib/posts'

export async function getStaticProps({ params }){
    const postData = await getPostData(params.id)
    return{
        props: {
            postData
        }
    }
}

export async function getStaticPaths(){
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export default function Post({postData}){
    return(
        <Layout>
            <head>
               <title>{postData.title}</title> 
            </head>
            <br />
            {postData.id}
            <br />
            {postData.date}
            <br />
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </Layout>
    )
}