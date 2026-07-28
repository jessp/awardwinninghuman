import type { NextPage } from 'next'
import Head from 'next/head'
import { useRef, useEffect, useState, MouseEvent as rMouseEvent } from 'react';
import ProjectList from '../components/projectList'
import styles from '../styles/Home.module.scss'
import Header from '../components/header'
import Links from '../components/links'
import Nav from '../components/nav'
import ProjectListPlay from '../components/projectListPlay'
import ProjectListWork from '../components/projectListWork'



const Home: NextPage = () => {
  const [isWork, updateWork] = useState(true);
  const projRef = useRef<null | HTMLInputElement>(null);

  const scrollToProj = (e: rMouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (projRef !== null && projRef.current !== null) {
      e.preventDefault();
      projRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }


  return (
  <div>
    <Head>
      <title>Jess Peter | Designer</title>
      <meta name="description" content="Jess Peter is a product designer, creative coder, and UX researcher."/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>

      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://awardwinninghuman.com/"/>
      <meta property="og:title" content="award-winning human"/>
      <meta property="og:description" content="Jess Peter is a product designer, creative coder, and UX researcher."/>
      <meta property="og:image" content="https://awardwinninghuman.com/social.png"/>

      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content="https://awardwinninghuman.com/"/>
      <meta property="twitter:title" content="award-winning human"/>
      <meta property="twitter:description" content="Jess Peter is a product designer, creative coder, and UX researcher."/>
      <meta property="twitter:image" content="https://awardwinninghuman.com/social.png"/>
    </Head>

    <main>
      <h1 className={"sr-only"}></h1>
      <div className={`container`}>
        <div className={styles.headerHolder}>
          <Header/>
          <div className={styles.linksHolder}>
            <Links/>
          </div>
          <div className={styles.descriptionHolder}>
            <p>Jess Peter is a product designer, creative coder, and UX researcher, who carefully balances an eye for detail with a pragmatic understanding that done is better than perfect.</p>
          </div>
        </div>
      </div>



      <div className={"container"}>

        <div className={styles.catHolder}>
          <div className={styles.category}>
              <h2>This site is deprecated!</h2>
              <p>
                I've moved my personal website to <a href='http://jesspeter.com'>jesspeter.com</a>. Go there and check it out or hang out here and click the statue above just for fun. I really don't mind which.
              </p>
          </div>
        </div>

      </div>

    </main>
  </div>
  )
}

export default Home
