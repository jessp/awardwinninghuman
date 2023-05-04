import type { NextPage } from 'next'
import Head from 'next/head'
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Hero from '../components/hero'
import Links from '../components/links'
import Nav from '../components/nav'
import ProjectList from '../components/projectList'



const Home: NextPage = () => {
  const [isPinned, updatePinned] = useState(false);
  const pageRef = useRef();


 useEffect(() => {
  const cachedRef = pageRef.current;
    const observer = new IntersectionObserver(
      ([e]) => updatePinned(e.intersectionRatio < 1 && e.intersectionRect.y === 0),
      { threshold: [1] }
    );
    observer.observe(cachedRef);
    return () => observer.unobserve(cachedRef);
  }, [pageRef]);


  return (
  <div>
    <Head>
      <title>Jess Peter | Designer</title>
      <meta name="description" content="Award-winning Human Jess Peter" />
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link rel="icon" href="/assets/favicon-01.png" />
    </Head>

    <main>
      <div className={"work container"}>
        <div className={"innerContainer"}>
          <div className={styles.header}>
            <Hero></Hero>
            <div className={styles.info}>
              <div className={styles.descriptionWrapper}>
                <p className={styles.description}>A product designer, creative coder, and UX researcher, who carefully balances an eye for detail with a pragmatic understanding that done is better than perfect.</p>
                <Links/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref={pageRef} className={styles.navHolder}>
        <Nav scrolled={isPinned}/>
      </div>

      <div className={"work container"}>
        <div className={"innerContainer"}>
          <h2>Full-time Jobs</h2>

          <h2>Projects</h2>

          <ProjectList/>

      </div>


      </div>

    </main>
  </div>
  )
}

export default Home
