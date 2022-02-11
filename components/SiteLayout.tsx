import Head from 'next/head'
import { Header } from './Header'

// @ts-ignore
export default function SiteLayout({ children }) {
    const title = `Trisha Lim - Frontend Engineer`;
    const description = `Frontend Engineer with 5+ years experience working on single page applications using React, Next.js, TypeScript.`;

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="icon" href="/favicon.ico" />

                <meta property="og:url" content="https://trishalim.com" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content={title}
                />
                <meta name="twitter:card" content={description} />
                <meta
                    property="og:description"
                    content={description}
                />
                <meta property="og:image" content="/fb-social-share.jpg" />
                <script async src="https://platform.twitter.com/widgets.js"></script>
            </Head>

            <Header />

            {children}
        </>
    )
}