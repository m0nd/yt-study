import { useEffect, useState } from "react";
import Layout from "../../components/layout";
import Image from "next/image";
import { getTopicIds, getTopicData } from "../../util/topics";
import utilStyles from '../../styles/utils.module.css'

export default function TopicDetail({topicData}) {
    const [isLoading, setIsLoading] = useState(true)
    const [videos, setVideos] = useState([])

    useEffect(() => {
        fetch(`/api/youtube?q=${topicData.searchName}`).then((res) => res.json()).then(data => {
            setVideos(data.items);
            setIsLoading(false);
        });
    }, [])

    return (
        <Layout>
            <section>
                <div className={utilStyles.grid}>
                    {isLoading ? 'Loading Videos...' : videos.map(vid => {
                            <div className={utilStyles.card}>
                                <h3>{vid.snippet.title}</h3>
                                <Image
                                    src={vid.snippet.thumbnails.default.url}
                                    width={144}
                                    height={144}
                                />
                                <p>Video content or whatever</p>
                            </div>})}        
                </div>
            </section>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getTopicIds()

    return {
        paths,
        fallback: false    
    }
}

export async function getStaticProps({params}) {
    const topicData = getTopicData(params.id);
    return {
        props: {
            topicData
        }
    }
}