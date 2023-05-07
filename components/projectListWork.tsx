
import Project from '../components/project'

const ProjectListWork= () => {
      return (
      	<div>
          <Project 
          title= {"Senior Product Designer at SuperAwesome"}
          alt={"A photo showing a small holographic anime character hovering in a plastic-looking case. An illustration of a character has a speech bubble saying \"I run on Raspberry Pi.\""}
          images= {["./maria.jpg"]}
          years= {[2022, "Present"]}
          link={
            {"display": "www.superawesome.com/kids-web-services",
            "address": "https://www.superawesome.com/kids-web-services/"}
          }>
            <p>The Kids Web Services department at SuperAwesome offers APIs and tools to help product developers create kid-safe online experiences.</p>
            <p>I lead design on a few products within Kids Web Services, including the Verifiable Parental Consent service. This service is used by companies such as Epic Games (SuperAwesome’s parent company) to help parents opt in or out of certain features on behalf of their children.</p>
            <p>In my role, I create visuals, perform user research, and collaborate with the design, development, and legal teams.</p>
          </Project>
          <Project 
          title= {"Senior Designer/Front-end Developer at Thomson Reuters Labs"}
          alt={"A photo showing a small holographic anime character hovering in a plastic-looking case. An illustration of a character has a speech bubble saying \"I run on Raspberry Pi.\""}
          images= {["./maria.jpg"]}
          years= {[2019, 2021]}
          link={
            {"display": "innovation.thomsonreuters.com",
            "address": "https://innovation.thomsonreuters.com/en.html"}
          }>
            <p>Thomson Reuters Labs is the applied research division. They explore how data science and technology can be used to innovate in the legal, tax, news, and other industries.</p>
            <p>As a designer and front-end designer, I designed and built interfaces, performed visual analytics and data visualisation, and facilitated user research.</p>
          </Project>
          <Project 
          title= {"Designer/Front-end Developer at The Globe and Mail (Sophi)"}
          alt={"A photo showing a small holographic anime character hovering in a plastic-looking case. An illustration of a character has a speech bubble saying \"I run on Raspberry Pi.\""}
          images= {["./maria.jpg"]}
          years= {[2016, 2017]}
          link={
            {"display": "sophi.io",
            "address": "https://www.sophi.io/"}
          }>
            <p>Sophi is a data analytics products created primarily for news publications.</p>
            <p>As the designer and front-end developer, I created a dashboard UI and browser plug-in, and continually collected user feedback.</p>
          </Project>
        </div>
        )
    }

export default ProjectListWork;