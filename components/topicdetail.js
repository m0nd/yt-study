import {useState } from 'react'

export default function TopicDetail({name}) {
    const [videolist, setVideoList] = useState([])

    return (
        <Layout>
            <Script src="https://apis.google.com/js/api.js" />
            <section>
                <div className={styles.grid}>
                </div>
            </section>
        </Layout>
    )
}