import styles from './projectList.module.scss';

import Project from '../components/project'

const ProjectListPlay= () => {
      return (
      	<div className={styles.projList}>
          <Project 
          title= {"Maria: Holographic Virtual Assistant"}
          alt={["A short looping video of a dancing anime girl hologram.", "A close up of an anime girl hologram.", "A screenshot of the Maria website showing instructions for how she is made."]}
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
          alt={["Illustration showing glowing hands reaching up to alter a girl's appearance.", "Illustration saying \"The employment game is rigged. Win anyway.\"", "A looping video showing someone changing attributes of a young man's face."]}
          images= {["./deepwork.jpeg", "./deepwork-slide-1.png", "./deepwork-preview.gif"]}
          years= {[2022]}
          link={
            {"display": "pudding.cool/2022/01/deepwork",
            "address": "https://pudding.cool/2022/01/deepwork/"}
          }>
            <p>I wrote and coded this satirical interactive essay about technology and corporate culture for The Pudding.</p>
            <p>This piece incorporates content I generated using popular AI models, including styleGAN2 and GPT-2.</p>
            <p>It was featured on <a href="https://www.fastcompany.com/90715071/experience-the-hilariously-sad-dystopia-of-getting-hired-in-2030" target="_blank">Fast Company</a> and was selected for Columbia University School of the Arts' <a href="https://www.digitalstorytellinglab.io/awards" target="_blank">Breakthroughs in Storytelling Awards</a>.</p>
          </Project>

          <Project 
          title= {"Goodwill Hunting"}
          alt={["Chart showing cost of clothing items in different states", "Multiple charts showing information on used clothing", "Chart showing price distribution of different clothing brands"]}
          images= {["./goodwill-1.jpg", "./goodwill-2.jpg", "./goodwill-3.jpg",]}
          years= {[2020]}
          link={
            {"display": "goodwill.awardwinninghuman.com",
            "address": "https://goodwill.awardwinninghuman.com/"}
          }>
            <p>For Goodwill Hunting, I wanted to know what types of clothes are donated to Goodwill charity shops across the USA, and make some beautiful charts about my findings.</p>
            <p>I scraped years worth of data from the Goodwill website, and used D3 to visualize it.</p>
            <p>This project made #1 on Hacker News. It's my nerdiest claim to fame.</p>
          </Project>

          <Project 
          title= {"11 Years of Top-Selling Book Covers"}
          alt={["A zoomed out grid of book covers with a title reading '11 Yeard of Top-Selling Book Covers, Arranged by Visual Similarity'", "A grid of book covers", "A book cover among other book covers, with text describing the book", "A grid of different book covers with some darkened out"]}
          images= {["./books-1.jpg", "./books-2.jpg", "./books-3.jpg","./books-4.jpg"]}
          years= {[2019]}
          link={
            {"display": "pudding.cool/2019/07/book-covers",
            "address": "https://pudding.cool/2019/07/book-covers/"}
          }>
            <p>Explore the covers of more than a decade of New York Times best-sellers (approximately 5,000 books!) and judge your heart out.</p>
            <p>I created this project for The Pudding, using data from The New York Times. The grid of books uses Mario Klingemann’s <a href="https://github.com/Quasimondo/RasterFairy" target="_blank">RasterFairy</a> library to arrange, and <a href="https://openseadragon.github.io/" target="_blank">OpenSeadragon</a> to display.</p>
            <p>You can also filter by metadata from Goodreads and The New York Times, and by visual features detected by the Google Cloud Vision API.</p>
          </Project>

          <Project 
          title= {"Hack 1 Knit 2"}
          alt={["An assortment of small knitted objects", "A website with code showing how to make a little knit shirt"]}
          images= {["./knit-1.jpg", "./knit-2.jpg"]}
          years= {[2019]}
          last={true}
          link={
            {"display": "jessp.github.io/kcodeblog",
            "address": "https://jessp.github.io/kcodeblog/"}
          }>
            <p>For my Master's Thesis, I developed open-source code written in JavaScript that can be used to replicate many different knitting techniques on whole-garment knitting machines.</p>
            <p>This built off of work by the Carnegie Mellon Textiles Lab.</p>
          </Project>
        </div>
        )
    }

export default ProjectListPlay;