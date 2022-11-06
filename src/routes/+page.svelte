<script>
  import { FloatingMenu } from "@codesoup/floating-menu";
  import { ChatClient } from "@codesoup/chat-client";
  import Icon from '@iconify/svelte';

  const { MODE, VITE_ENDPOINT_DEV, VITE_ENDPOINT_PROD } = import.meta.env;
  const options = { github: {}, heroku: { handheld: false }, },
        endpoint = (MODE === 'development') ? VITE_ENDPOINT_DEV : VITE_ENDPOINT_PROD,
        auth = "";

  console.log('mode: ', MODE);

</script>

<main id="main">
  <span class="noprint"><FloatingMenu options={options} /></span>
  <span class="noprint"><ChatClient auth={auth} endpoint={endpoint} /></span>
<!-- grid start -->
  <div class="grid-container outer-container">
<!-- sidebar begin -->
<!-- flex container begin -->
    <div class="flex-container">
      <div class="item col1 sidebar" id="details">
        <h3>Details</h3>
        <p class="left">
          <Icon icon="fa6-solid:tree-city" inline={true}/>
          Charlotte, NC
        </p>
        <p class="left">
          <span class="print">
            <Icon icon="bi:phone-vibrate" inline={true} />
            214 843 0032
          </span>
        </p>
        <p class="left">
          <a class="detail" href="mailto:s0t8ug@m.hackerx.org">
            <Icon icon="ci:mail" inline={true}/>
            Send me an email!
          </a>
          <span class="print">
            <Icon icon="ci:mail" inline={true}/>
            alnig441@gmail.com
          </span>
        </p>
        <p class="left">
          <a class="detail" href="https://cleland-nielsen.net">
            <Icon icon="gg:website" inline={true} />
            Go to my website!
          </a>
          <span class="print">
            <Icon icon="gg:website" inline={true} />
            cleland-nielsen.net
          </span>
        </p>
      </div>
      <div class="item col1 sidebar" id="resources">
        <h3>Resources</h3>
        <p class="right" id="linkedin">
          <a class="resource" href="https://linkedin.com/in/nielsenallan" >
            <Icon icon="logos:linkedin" inline={true} />
          </a>
          <span class="print"><Icon icon="bxl:linkedin-square" inline={true} />linkedin.com/in/nielsenallan</span>
        </p>
        <p class="right" id="github">
          <a class="resource" href="https://github.com/alnig441" >
          <Icon icon="octicon:logo-github-16" inline={true} />
          </a>
          <span class="print"><Icon icon="bxl:github" inline={true} />github.com/alnig441</span>
        </p>
        <p class="right" id="npm">
          <a class="resource" href="https://www.npmjs.com/search?q=codesoup" >
            <Icon icon="logos:npm" inline={true} />
          </a>
          <span class="print"><Icon icon="eva:npm-outline" inline={true} />npmjs.com/search?q=codesoup</span>
        </p>
      </div>
    </div>
<!-- flex contatiner end -->
    <div class="item col1 sidebar" id="skills">
      <h3>Skills</h3>
      <p>HTML5, CSS3, JavaScript, TypeScript, Node, Express, Bootstrap, Angular, AngularJS, Svelte, SvelteKit, jQuery, React, Mongo, Postgres, mySql, Docker, Craft CMS, PHP, Bitbucket, Git, Heroku, NPM, Homebrew</p>
      <h3>Apps</h3>
      <p class="right" id="scrambler">
        <a class="github menu-item" href="https://github.com/alnig441/word-guessing-game" >Word Scrambler<Icon icon="ci:external-link" inline={true} /></a>
        <a class="heroku menu-item" href="https://allan-nielsen-word-scrambler.herokuapp.com" >Word Scrambler<Icon icon="ci:external-link" inline={true} /></a>
        <span class="print"><Icon icon="bxl:heroku" inline={true} />https://allan-nielsen-word-scrambler.herokuapp.com</span>
      </p>
      <p class="right" id="profiles">
        <a class="github menu-item" href="https://github.com/alnig441/student-profiles-react" >Student Profiles<Icon icon="ci:external-link" inline={true} /></a>
        <a class="heroku menu-item" href="https://allan-nielsen-student-profiles.herokuapp.com" >Student Profiles<Icon icon="ci:external-link" inline={true} /></a>
        <span class="print"><Icon icon="bxl:heroku" inline={true} />https://allan-nielsen-student-profiles.herokuapp.com</span>
      </p>
      <p class="right" id="chat">
        <a class="github menu-item" href="https://github.com/alnig441/svelte-chat-app" >Chat App<Icon icon="ci:external-link" inline={true} /></a>
        <a class="heroku menu-item" href="https://allan-nielsen-chat-app.herokuapp.com/" >Chat App<Icon icon="ci:external-link" inline={true} /></a>
        <span class="print"><Icon icon="bxl:heroku" inline={true} />https://allan-nielsen-chat-app.herokuapp.com/</span>
      </p>
    </div>
<!-- sidebar end -->
<!-- main column begin -->
    <div class="item col2">
      <h1>Allan Nielsen</h1>
    </div>
    <div class="item col2" id="objective">
      <p>Multi-faceted IT and Telecoms professional with critical infrastructure, client relationship management and web development programming skills, and successful track record of working across small to Fortune 100 corporations. Recently pivoted to focus on service creation as an independent contractor in parallel with increased family caregiving needs, now looking to return to full time employment and a career in software development. Brings calm demeanor strong communication skills, and a well-developed tenacity that results in solving any programming challenge</p>
    </div>
    <div class="item col2 section-header" id="dev-exp">
      <h2>DEVELOPMENT EXPERIENCE, 2016 -</h2>
    </div>
    <div class="item col2 experience" id="dev-exp-1">
      <h3>End-to-end Client Support</h3>
      <p>Independent contractor @ RawaySmith, responsible for providing end-to-end support for YMCA's corporate site</p>
      <ul>
        <li>Development of AngularJS based diabetes prevention quiz</li>
        <li>Implementation of site redesign with Bootstrap</li>
        <li>Integration of google location and map APIs on frontend</li>
        <li>Development of php based plugins integrating backend APIs in Craft CMS</li>
        <li>Ensuring site in compliance with WCAG accessiblity guidelines</li>
        <li>General maintenance, bug fixing, and quality assurance</li>
      </ul>
      <h3>Maker Space Booking Application</h3>
      <!-- <p>Student @ Prime Digital Academy</p> -->
      <ul>
        <li>Student @ Prime Digital Academy, collaboratively developed a AngularJS based <span class="print">booking application</span><a class="github" href="https://github.com/alnig441/nordeastmakers" >booking application</a> for a DIY maker space</li>
      </ul>
      <h3>Personal Project & Apps</h3>
      <ul>
        <li>
          <span class="print">cleland-nielsen.net</span><a class="detail" href="https://cleland-nielsen.net" >cleland-nielsen.net</a>, a searchable photo album catalogued by consuming google location APIs, running on an Angular4/Postgres
          <span class="print">front-end</span><a class="github" href="https://github.com/alnig441/cleland-nielsen-fe" >front-end</a> and a Node/Express/Mongo
          <span class="print">backend</span><a class="github" href="https://github.com/alnig441/cleland-nielsen-be" >backend</a></li>
        <li>Word Scrambler, a word game written in
          <span class="print">Angular13</span><a class="github" href="https://github.com/alnig441/word-guessing-game-angular" >Angular13</a>,
          <span class="print">React18</span><a class="github" href="https://github.com/alnig441/word-guessing-game-react"  >React18</a> and
          <span class="print">Svelte3</span><a class="github" href="https://github.com/alnig441/word-guessing-game"  >Svelte3</a></li>
        <li>Student Profiles, a database search interface application written in
          <span class="print">React18</span><a class="github" href="https://github.com/alnig441/student-profiles-react" >React18</a> and
          <span class="print">Svelte3</span><a class="github" href="https://github.com/alnig441/student-profiles-svelte"  >Svelte3</a></li>
        <li>Chat App, a socket.io based chat application written in
          <span class="print">SvelteKit</span><a class="github" href="https://github.com/alnig441/svelte-chat-app" >SvelteKit</a></li>
      </ul>
    </div>
    <div class="item col2 section-header" id="prior-exp">
      <h2>PRIOR EXPERIENCE, 1999 - 2015</h2>
    </div>
    <div class="item col2 experience" id="prior-exp-1">
      <h3>Client Account & Project Management</h3>
      <ul>
        <li>Client Program Manager @ Tektronix Communications, responsible for services management of installed base of telecoms monitoring equipment</li>
        <li>Sales Director Nordics @ ThinPrint, responsible for account sales and lead generation for hi-tech printing solution</li>
      </ul>
    </div>
    <div class="item col2 experience" id="prior-exp-2">
      <h3>Critical Services Support & Escalation Management</h3>
      <ul>
        <li>Situation Manager @ Maersk/IBM, responsible for end to end management of ciritical infrastructure outages</li>
        <li>Major Incident Manager @ Softcard, responsible for end to end management of critical infrastructure outages</li>
      </ul>
    </div>
    <div class="item col2 experience" id="prior-exp-3">
      <h3>Operations Services Support & Maintenance</h3>
      <ul>
        <li>IT Specialist @ Maersk/IBM, responsible for incident management and user administration for +65,000 global employees</li>
        <li>Technical Support Engineer @ Nokia, responsible for installation and support services for wire-line and wire-less installed base of equipment</li>
      </ul>
    </div>
    <div class="item col2 section-header" id="education">
      <h2>EDUCATION</h2>
    </div>
    <div class="item col2 education" id="edu-1">
      <h3>Prime Digital Academy, MEAN Stack Web Development Bootcamp</h3>
      <p>18 week accelerated learning program teaching foundational software engineering skills through a full-stack JavaScript curriculum</p>
    </div>
    <div class="item col2 education" id="edu-2">
      <h3>Engineering College of Copenhagen, Bachelor of Science</h3>
      <p>International marketing and business with and overlay of engineerng and technology</p>
    </div>
<!-- main  columns end -->
  </div>
</main>
