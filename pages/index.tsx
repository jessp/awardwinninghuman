import type { NextPage } from 'next'
import Head from 'next/head'
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Hero from '../components/hero'
import Links from '../components/links'
import Nav from '../components/nav'
import ProjectListPlay from '../components/projectListPlay'
import ProjectListWork from '../components/projectListWork'



const Home: NextPage = () => {
  const [isPinned, updatePinned] = useState(false);
  const [isWork, updateWork] = useState(true);
  const pageRef = useRef<null | HTMLInputElement>(null);
  const projRef = useRef<null | HTMLInputElement>(null);

  const scrollToProj = (e: MouseEvent) => {
    e.preventDefault();
    projRef.current.scrollIntoView({ behavior: "smooth" });
  }

 useEffect(() => {
    if (pageRef !== null && pageRef.current !== null) {
      const cachedRef = pageRef.current;
      const observer = new IntersectionObserver(
        ([e]) => updatePinned(e.intersectionRatio < 1 && e.boundingClientRect.y < 1),
        { threshold: [1] }
      );
      observer.observe(cachedRef);
      return () => observer.unobserve(cachedRef);
    }
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
      <div className={`container`}>
        <div className={"innerContainer"}>
          <div className={styles.header}>
            <Hero isWork={isWork} setWork={(e) => updateWork(e)}></Hero>
            <div className={styles.info}>
              <div className={styles.descriptionWrapper}>
                <p className={styles.description}>
                Product designer. Creative coder. UX researcher. I have an unhealthy fascination with the strange and the complex.
                </p>
                <Links/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref={pageRef} className={styles.navHolder}>
        <Nav scrolled={isPinned} isWork={isWork} setWork={(e) => updateWork(e)} scrollToProj={(e) => scrollToProj(e)}/>
      </div>

      <div className={`${isWork ? "work" : "play"} container`}  ref={projRef}>
        <div className={"innerContainer"}>
          <div className={styles.category}>
            <div className={styles.catHolder}>
              <h2>{isWork ? "work" : "play"}</h2>
            </div>
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
      <div className={`${isWork ? "work" : "play"} containerNoSmall`}>
          <div className={"innerContainerNoSmall"}>
            {!isWork && 
              <ProjectListPlay/>
            }
            {isWork && 
              <ProjectListWork/>
            }
          </div>
      </div>


      </div>
      <div className={styles.ender}>
      <div className={`${isWork ? "work" : "play"} container`}>
        <div className={`innerContainer ${styles.enderHolder}`}>
          <h3>Why award-winning human?</h3>
          <p className={"caption"}>Whenever my domain name comes up, I get questions. First of all, yes, I have won some awards. Mostly for pretty niche things that become less and less topical the older I get. But if I were put on trial for domain name veracity, I bet I would win.</p>
          <p className={"caption"}>I chose this domain for a few reasons: a) it was available, b) I found it really funny, and c) as a designer who prefers to disappear into their work, it makes a lot of the self-promotional statements for me so I don’t have to.</p>
          <p className={"caption"}>So there you have it.</p>
        </div>
        </div>
        
      </div>

    </main>
  </div>
  )
}

export default Home
