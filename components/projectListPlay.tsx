
import Project from '../components/project'

const ProjectListPlay= () => {
      return (
      	<div>
          <Project 
          title= {"Maria: Holographic Virtual Assistant"}
          alt={"A photo showing a small holographic anime character hovering in a plastic-looking case. An illustration of a character has a speech bubble saying \"I run on Raspberry Pi.\""}
          images= {["./maria-animated.gif", "./maria_website.png", "./maria_still.jpg", "./maria_materials.jpg"]}
          years= {[2022]}
          link={
            {"display": "maria.awardwinninghuman.com",
            "address": "https://maria.awardwinninghuman.com/"}
          }>
            <p>Maria is an anime-inspired holographic virtual assistant you can make at home. She runs on Raspberry Pi.</p>
            <p>I 3D modelled the character and the case, developed the interactions using C and Python, and developed the website.</p>
            <p>Maria was featured on <a href="https://www.tomshardware.com/news/raspberry-pi-anime-holographic-assistant" target="_blank">Tom's Hardware</a> and <a href="https://hackaday.com/2022/11/22/anime-inspired-holographic-virtual-assistant/" target="_blank">Hackaday</a>.</p>
          </Project>

          <Project 
          title= {"deepwork"}
          alt={"Illustration showing glowing hands reaching up to alter a girl's appearance."}
          images= {["./deepwork.jpeg", "./deepwork-slide-1.png", "./deepwork-preview.gif"]}
          years= {[2022]}
          link={
            {"display": "pudding.cool/2022/01/deepwork",
            "address": "https://pudding.cool/2022/01/deepwork/"}
          }>
            <p>I wrote and coded this satirical interactive essay about technology and corporate culture for The Pudding.</p>
            <p>It was featured on <a href="https://www.fastcompany.com/90715071/experience-the-hilariously-sad-dystopia-of-getting-hired-in-2030" target="_blank">Fast Company</a> and was selected for Columbia University School of the Arts' <a href="https://www.digitalstorytellinglab.io/awards" target="_blank">Breakthroughs in Storytelling Awards</a>.</p>
          </Project>

          <Project 
          title= {"Goodwill Hunting"}
          alt={"Chart showing fashion trends over time"}
          images= {["./goodwill-square.png"]}
          years= {[2020]}
          link={
            {"display": "goodwill.awardwinninghuman.com",
            "address": "https://goodwill.awardwinninghuman.com/"}
          }>
            <p>For Goodwill Hunting, I wanted to know what types of clothes are donated to Goodwill charity shops across the USA, and make some beautiful charts about my findings. This project made #1 on Hacker News. It's my nerdiest claim to fame.</p>
          </Project>

          <Project 
          title= {"11 Years of Top-Selling Book Covers"}
          alt={"A grid of book covers"}
          images= {["./covers.jpg"]}
          years= {[2019]}
          link={
            {"display": "pudding.cool/2019/07/book-covers",
            "address": "https://pudding.cool/2019/07/book-covers/"}
          }>
            <p>I created this interactive piece for The Pudding. On this site, you can explore the covers of more than a decade of New York Times best-sellers (approximately 5,000 books!) and judge your heart out. You can also filter by metadata from Goodreads and The New York Times, and by visual features detected by the Google Cloud Vision API.</p>
          </Project>

          <Project 
          title= {"Hack 1 Knit 2"}
          alt={"An assortment of small knitted objects"}
          images= {["./knit.jpg"]}
          years= {[2019]}
          last={true}
          link={
            {"display": "jessp.github.io/kcodeblog",
            "address": "https://jessp.github.io/kcodeblog/"}
          }>
            <p>For my Master's Thesis, I developed open-source code written in JavaScript that can be used to replicate many different knitting techniques that can be used by a wide range of makers for a wide range of projects on whole-garment knitting machines. This built off of work by the Carnegie Mellon Textiles Lab.</p>
          </Project>
        </div>
        )
    }

export default ProjectListPlay;