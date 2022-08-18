import Head from 'next/head'
import Image from 'next/image'

import Topic from '../components/topic'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import utilStyles from '../styles/utils.module.css'
import { useEffect } from 'react'

export default function Home() {
  const topics = [
    {name: "DFS", route: "dfs"},
    {name: "BFS", route: "bfs"},
    {name: "Backtracking", route: "backtrack"},
    {name: "Recursion", route: "recursion"}
  ]

  useEffect(() => {

  })

  return (
    <Layout isHome>
      <Head>
        <title>YT Study - Home</title>
      </Head>
      <section className={styles.main}>
        <h1 className={styles.title}>
          Welcome to YT Study!  
        </h1>
        <p>Choose a topic to get started...</p>
        <div className={utilStyles.grid}>
          {topics.map(t => <Topic key={t.route} topic={t} />)}
        </div>
      </section>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </Layout>
  )
}
