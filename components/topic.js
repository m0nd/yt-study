import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'

export default function Topic({topic}) {
    return (
        <div className={utilStyles.card}>
            <h2><Link href={`topics/${topic.route}`}>{topic.name}</Link></h2>
        </div>
    )
}