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

      <div className={styles.navHolder}>
        <Nav isWork={isWork} setWork={(e) => updateWork(e)} scrollToProj={(e) => scrollToProj(e)}/>
      </div>


      <div className={`${isWork ? "work" : "play"} container`} ref={projRef}>

        <div className={styles.catHolder}>
          <div className={styles.category}>
              <h2>{isWork ? "Work History" : "Personal Projects"}</h2>
            {isWork && 
              <p>
                A lot of my past jobs have been internal projects with sensitive data and internal users. I can’t always show as much as I’d like. Check out <span className={styles.clickableSpan} onClick={() => updateWork(false)}>some of the work</span> I’ve done for fun to see more of my breadth as a designer.
              </p>
            }
            {!isWork && 
              <p>
                I take on personal projects to explore new technologies and types of design. As much as I love exploring zany ideas, you should check out <span className={styles.clickableSpan} onClick={() => updateWork(true)}>my employment history</span> to see some of my more focussed undertakings.
              </p>
            }
          </div>
        </div>
 
      <div>
          <div className={"innerContainer"}>
            {!isWork &&
              <ProjectList>
                <ProjectListPlay/>
              </ProjectList>
            }
            {isWork &&
              <ProjectList>
                <ProjectListWork/>
              </ProjectList>
            }
          </div>
      </div>


      </div>

    
      <div className={styles.ender}>
      <div className={`container`}>
        <div className={`innerContainer ${styles.enderHolder}`}>
          <h3>Why award-winning human?</h3>
          <p>Whenever my domain name comes up, I get questions. First of all, yes, I have won some awards. Mostly for pretty niche things that become less and less topical the older I get. But if I were put on trial for domain name veracity, I bet I would win.</p>
          <p>I chose this domain for a few reasons: a) it was available, b) I found it really funny, and c) as a designer who prefers to disappear into their work, it makes a lot of the self-promotional statements for me so I don’t have to.</p>
          <p>So there you have it.</p>
        </div>
        </div>
        
      </div>

    </main>
  </div>
  )
}

export default Home
