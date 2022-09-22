import Head from 'next/head'
import '../styles/global.css'
// Import WalletConnectionProvider from components
// Import the solana wallet css

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Todo App</title>
            </Head>
            <main>
                {/* Wrap provider around App */}
                    <Component {...pageProps} />
            </main>
        </>
    )
}

export default MyApp;
// https://withered-orbital-mountain.solana-devnet.discover.quiknode.pro/8ddf07c963cfb151ee5298fda08385e1e82c8ff1/
