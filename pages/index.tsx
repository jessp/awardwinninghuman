import type { NextPage } from 'next'
import Head from 'next/head'
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Project from '../components/project'
import Hero from '../components/hero'
import Links from '../components/links'
import Nav from '../components/nav'



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

          <Project 
          org= {"Personal Project"}
          title= {"Maria: DIY Anime-inspired Holographic Virtual Assistant"}
          info= {"Maria is an anime-inspired holographic virtual assistant you can make at home. She runs on Raspberry Pi."}
          responsibilities={"Coding, 3D modelling and animation, front-end development."}
          alt={"A photo showing a small holographic anime character hovering in a plastic-looking case. An illustration of a character has a speech bubble saying \"I run on Raspberry Pi.\""}
          image= {"/assets/maria.jpg"}
          years= {[2022]}
          link={
            {"display": "maria.awardwinninghuman.com",
            "address": "https://maria.awardwinninghuman.com/"}
          }/>

          <Project 
          org= {"The Pudding"}
          title= {"deepwork"}
          info= {"I wrote and coded this satirical interactive essay about technology and corporate culture for The Pudding. It was featured on Fast Company."}
          responsibilities={"Coding, writing, front-end development."}
          alt={"Illustration showing glowing hands reaching up to alter a girl's appearance."}
          image= {"/assets/deepwork.jpeg"}
          years= {[2022]}
          link={
            {"display": "pudding.cool/2022/01/deepwork",
            "address": "https://pudding.cool/2022/01/deepwork/"}
          }/>

          <Project 
          org= {"Personal Project"}
          title= {"Goodwill Hunting"}
          info= {"I do a lot of personal projects to keep my skills sharp and investigate things that interest me. For Goodwill Hunting, I wanted to know what types of clothes are donated to Goodwill charity shops across the USA, and make some beautiful charts about my findings. This project made #1 on Hacker News. It's my nerdiest claim to fame."}
          responsibilities={"Visual design, data analysis, front-end development."}
          alt={"Chart showing fashion trends over time"}
          image= {"/assets/goodwill.png"}
          years= {[2020]}
          link={
            {"display": "goodwill.awardwinninghuman.com",
            "address": "https://goodwill.awardwinninghuman.com/"}
          }/>

          <Project 
          org= {"The Pudding"}
          title= {"11 Years of Top-Selling Book Covers"}
          info= {"I created this interactive piece for The Pudding while completing my Master's. On this site, you can explore the covers of more than a decade of New York Times best-sellers (approximately 5,000 books!) and judge your heart out. You can also filter by metadata from the Goodreads and The New York Times APIs, and by visual features detected by the Google Cloud Vision API."}
          responsibilities={"Coding, visual design, data analysis, front-end development."}
          alt={"A grid of book covers"}
          image= {"/assets/covers.jpg"}
          years= {[2019]}
          link={
            {"display": "pudding.cool/2019/07/book-covers",
            "address": "https://pudding.cool/2019/07/book-covers/"}
          }/>

          <Project 
          org= {"Oslo School of Architecture and Design"}
          title= {"Hack 1 Knit 2"}
          info= {"The software needed to use whole-garment knitting machines is incredibly complex, with users needing years of dedicated training to master. For my Master's Thesis, I developed open-source code that can be used to replicate many different knitting techniques that can be used by a wide range of makers for a wide range of projects on whole-garment knitting machines. This built off of work by the Carnegie Mellon Textiles Lab."}
          responsibilities={"Coding, research, writing, front-end development, knitting."}
          alt={"An assortment of small knitted objects"}
          image= {"/assets/knit.jpg"}
          years= {[2019]}
          link={
            {"display": "jessp.github.io/kcodeblog",
            "address": "https://jessp.github.io/kcodeblog/"}
          }/>
        </div>
      </div>

    </main>
  </div>
  )
}

export default Home
