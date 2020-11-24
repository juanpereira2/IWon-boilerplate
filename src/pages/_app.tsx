import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from '../styles/global'

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>React Avançado </title>
                <link rel="shortcut icon " href="/img/icon-512.png"></link>
                <link rel="apple-touch-icon " href="/img/icon-512.png"></link>
                <meta
                    name="description"
                    content="A simple project with started with react,next,syled components"
                />
            </Head>
            <GlobalStyles />
            <Component {...pageProps} />
        </>
    )
}

export default App
