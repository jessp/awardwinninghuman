import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Project from '../components/project'

const Home: NextPage = () => {
  return (
    <div>
      <div className={styles.containerOuter + " " + styles.real}>
        <div className={styles.containerInner}>
          <Head>
            <title>Jess Peter | Designer</title>
            <meta name="description" content="Award-winning Human Jess Peter" />
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href="/assets/favicon-01.png" />
          </Head>

          <main className={styles.main}>
            <div className={styles.splash}>
              <div className={styles.inner}>
                <h1 className={"grad"}>
                  Jess Peter is an interaction designer and creative coder living in London.
                </h1>
                <ul className={styles.links}>
                  <li>
                    <a href="https://github.com/jessp" target="_blank" rel="noreferrer">Github</a>
                  </li>
                  <li>
                    <a href="mailto:jess@awardwinninghuman.com" target="_blank" rel="noreferrer">Email</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.projectList}>
              <Project 
              org= {"Thomson Reuters Labs"}
              title= {"Senior Designer"}
              info= {"Thomson Reuters Labs are the \“global reaching innovation arm\” of Thomson Reuters. I worked alongside multi-disciplinary teams on creating new features and powering up existing products with state-of-the-art data science techniques."}
              responsibilities={"Product design, user research, user experience design, data analysis, front-end development."}
              alt={"Thomson Reuters logo"}
              image= {"/assets/tr-logo.png"}
              years= {[2019, 2021]}
              link={
                {"display": "innovation.thomsonreuters.com",
                "address": "https://innovation.thomsonreuters.com"}
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
              info= {"I created this interactive piece for the Pudding while completing my Master's. On this site, you can explore the covers of more than a decade of New York Times best-sellers (approximately 5,000 books!) and judge your heart out. You can also filter by metadata from the Goodreads and The New York Times APIs, and by visual features detected by the Google Cloud Vision API."}
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
              years= {[2017, 2019]}
              link={
                {"display": "jessp.github.io/kcodeblog",
                "address": "https://jessp.github.io/kcodeblog/"}
              }/>

              <Project 
              org= {"The Globe and Mail (Sophi)"}
              title= {"Design and Front-end Dev Lead"}
              info= {"I worked with The Globe and Mail's data science team to create Sophi: an in-house analytics systems to help editors understand how news stories are performing. I designed and developed both the front-end web experience, as well as a Chrome extension."}
              responsibilities={"Product design, user research, user experience design, front-end development."}
              alt={"The Globe and Mail logo"}
              image= {"/assets/globe.jpeg"}
              years= {[2016, 2017]}
              link={
                {"display": "sophi.io",
                "address": "https://www.sophi.io/"}
              }/>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Home
