import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Powerful API Wrapper for <a>Discord </a>
        </h1>

        <p className={styles.description}>
          Why are you reading this idot? Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>

        <div className={styles.first} style={{"textAlign": "center"}}>
        <a className={styles.button} href="/docs">Get Started</a> 
        <a className={styles.button} href="https://discord.gg/mKyRmPB" style={{"paddingLeft": "4rem", "paddingRight": "4rem"}}>Discord</a>
        </div>

        <div className={styles.second} style={{"textAlign": "center"}}>
        <a className={styles.button}>Get Started</a> 
        <br></br><br></br>
        <a className={styles.button} style={{"paddingLeft": "4rem", "paddingRight": "4rem"}}>Discord</a>
        </div>
      </main>
    </div>
  )
}
