<script>
  import { FloatingMenu } from "@codesoup/floating-menu";
  import { ChatClient } from "@codesoup/chat-client";
  import { ScrollButton } from "@codesoup/scroll-to-top";
  import Icon from '@iconify/svelte';

  const { MODE, VITE_ENDPOINT_DEV, VITE_ENDPOINT_PROD } = import.meta.env;
  const menu = { portfolio: { icon: "zondicons:portfolio" }, heroku: { handheld: false }, },
        endpoint = (MODE === 'development') ? VITE_ENDPOINT_DEV : VITE_ENDPOINT_PROD,
        auth = "";
  const scroll = { device: 'handheld', icon: "fluent-emoji-flat:top-arrow" };

</script>

<main id="main">
  <span class="noprint"><FloatingMenu options={menu} /></span>
  <span class="noprint"><ChatClient auth={auth} endpoint={endpoint} /></span>
  <span class="noprint"><ScrollButton options={scroll} /></span>
<!-- grid start -->
  <div class="grid-container outer-container">
<!-- sidebar for larger devices begin -->
    <span id="desktop-view-row2" class="desktop-view">
      <div class="item col0 sidebar" id="details-desktop">
        <h3>Details</h3>

        <p class="left detail">
          <Icon icon="fa6-solid:tree-city" inline={true}/>
          Charlotte, NC
        </p>

        <p class="left noprint detail">
          <a href="mailto:s0t8ug@m.hackerx.org">
            <Icon icon="ci:mail" inline={true}/>
            Write to me!
          </a>
        </p>

        <p class="print detail">
          <Icon icon="ci:mail" inline={true}/>
          alnig441@gmail.com
        </p>

        <p class="print detail">
          <Icon icon="bi:phone-vibrate" inline={true}/>
          214 843 0032
        </p>

        <p class="left noprint detail">
          <a href="https://linkedin.com/in/nielsenallan">
          <Icon icon="logos:linkedin-icon" inline={true} />
          Connect with me!
          </a>
        </p>

        <p class="print detail">
          <Icon icon="bxl:linkedin-square" inline={true} />
          linkedin.com/in/nielsenallan
        </p>

      </div>
    </span>

    <span id="desktop-view-row3" class="desktop-view">
      <div class="item col0 sidebar" id="portfolios-desktop">
        <h3>Portfolios</h3>
        <p class="right" id="github">
          <a class="portfolio menu-item noprint" href="https://github.com/alnig441" title="GitHub" >
          <Icon icon="octicon:logo-github-16" inline={true} />
          </a>
          <span class="print"><Icon icon="bxl:github" inline={true} /> github.com/alnig441</span>
        </p>
        <p class="right" id="npm">
          <a class="portfolio menu-item noprint" href="https://www.npmjs.com/search?q=codesoup" title="npm">
            <Icon icon="logos:npm" inline={true} />
          </a>
          <span class="print"><Icon icon="eva:npm-outline" inline={true} /> npmjs.com/search?q=codesoup</span>
        </p>
      </div>
      <div class="item col0 sidebar" id="skills-desktop">
        <h3>Skills</h3>
        <p>HTML5, CSS3, JavaScript, TypeScript, Node, Express, Bootstrap, Angular/AngularJS, Svelte, jQuery, React, Mongo, Postgres, mySql, Docker, Craft CMS, PHP, Bitbucket, Git, Heroku, NPM, Homebrew</p>
      </div>
      <div class="item col0 sidebar" id="apps-desktop">
        <h3>Apps</h3>
        <p class="right" id="scrambler">
          <a class="heroku menu-item noprint" href="https://allan-nielsen-word-scrambler.herokuapp.com" >Word Scrambler<Icon icon="ci:external-link" inline={true} /></a>
          <span class="print">&bull; https://allan-nielsen-word-scrambler.herokuapp.com</span>
        </p>
        <p class="right" id="profiles">
          <a class="heroku menu-item noprint" href="https://allan-nielsen-student-profiles.herokuapp.com" >Student Profiles<Icon icon="ci:external-link" inline={true} /></a>
          <span class="print">&bull; https://allan-nielsen-student-profiles.herokuapp.com</span>
        </p>
        <p class="right" id="chat">
          <a class="heroku menu-item noprint" href="https://allan-nielsen-chat-app.herokuapp.com/" >Chat App<Icon icon="ci:external-link" inline={true} /></a>
          <span class="print">&bull; https://allan-nielsen-chat-app.herokuapp.com/</span>
        </p>
        <p class="right" id="webpage">
          <a class="menu-item noprint" href="https://cleland-nielsen.net">My Web Site<Icon icon="ci:external-link" inline={true} /></a>
          <span class="print">&bull; https://cleland-nielsen.net</span>
        </p>
      </div>
    </span>
<!-- sidebar for larger devices end -->
<!-- sidebar for smaller/handheld devices begin -->
    <span id="handheld-view-row3" class="handheld-view">
      <div class="item col1 sidebar" id="details-handheld">
        <h3>Details</h3>
        <p class="left">
          <Icon icon="fa6-solid:tree-city" inline={true}/>
          Charlotte, NC
        </p>
        <p class="left">
          <a class="detail" href="mailto:s0t8ug@m.hackerx.org">
            <Icon icon="ci:mail" inline={true}/>
            Write to me!
          </a>
        </p>
        <p class="left">
          <a href="https://linkedin.com/in/nielsenallan">
            <Icon icon="logos:linkedin-icon" inline={true} />
            Connect with me!
          </a>
        </p>
      </div>
      <div class="item col1 sidebar" id="portfolios-handheld">
        <h3>Portfolios</h3>
        <p class="right" id="github">
          <a class="portfolio" href="https://github.com/alnig441" >
          <Icon icon="octicon:logo-github-16" inline={true} />
          </a>
        </p>
        <p class="right" id="npm">
          <a class="portfolio" href="https://www.npmjs.com/search?q=codesoup" >
            <Icon icon="logos:npm" inline={true} />
          </a>
        </p>
      </div>
    </span>

    <span id="handheld-view-row5" class="handheld-view">
      <div class="item col1 sidebar" id="skills-handheld">
        <h3>Skills</h3>
        <p>HTML5, CSS3, JavaScript, TypeScript, Node, Express, Bootstrap, Angular/AngularJS, Svelte, jQuery, React, Mongo, Postgres, mySql, Docker, Craft CMS, PHP, Bitbucket, Git, Heroku, NPM, Homebrew</p>
      </div>
      <div class="item col1 sidebar" id="apps-handheld">
        <h3>Apps</h3>
        <p class="right" id="scrambler">
          <a class="github menu-item" href="https://github.com/alnig441/word-guessing-game" >Word Scrambler<Icon icon="ci:external-link" inline={true} /></a>
        </p>
        <p class="right" id="profiles">
          <a class="github menu-item" href="https://github.com/alnig441/student-profiles-react" >Student Profiles<Icon icon="ci:external-link" inline={true} /></a>
        </p>
        <p class="right" id="chat">
          <a class="github menu-item" href="https://github.com/alnig441/svelte-chat-app" >Chat App<Icon icon="ci:external-link" inline={true} /></a>
        </p>
        <p class="right" id="webpage">
          <a class="portfolio" href="https://cleland-nielsen.net">My Web Site<Icon icon="ci:external-link" inline={true} /></a>
        </p>
      </div>
    </span>
<!-- sidebar for smaller/handheld devices end -->
<!-- main column begin -->
    <div class="item col2" id="header">
      <h1>Allan Nielsen</h1>
    </div>


    <div class="item col2" id="objective">
      <p>Multi-faceted IT and Telecoms professional with critical infrastructure, client relationship management and web development programming skills, and successful track record of working across small to Fortune 100 corporations. Recently pivoted to focus on service creation as an independent contractor in parallel with increased family caregiving needs, now looking to return to full time employment and a career in software development. Brings calm demeanor strong communication skills, and a well-developed tenacity that results in solving any programming challenge</p>
    </div>


    <div class="item col2 section-header" id="dev-exp">
      <h2>Development Experience: 2016 -</h2>
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
    </div>


    <div class="item col2 section-header" id="prior-exp">
      <h2>Prior Experience: 1999 - 2015</h2>
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
        <h2>Education</h2>
      </div>
      <div class="item col2 education" id="edu-1">
        <h3>Prime Digital Academy, MEAN Stack Web Development Bootcamp</h3>
        <p>18 week accelerated learning program teaching foundational software engineering skills through a full-stack JavaScript curriculum</p>
      </div>
      <div class="item col2 education" id="edu-2">
        <h3>Engineering College of Copenhagen, Bachelor of Science</h3>
        <p>International marketing and business with and overlay of engineerng and technology</p>
      </div>
    </div>

<!-- main  columns end -->
  </div>
<!-- grid end -->
</main>

<style>
  .grid-container {
    grid-template-areas:
      'header header'
      'details objective'
      'skills dev-exp'
      'sidebar prior-experience'
      'sidebar education'
      ;
  }

  #header {
    grid-area: header;
    grid-column: 2;
  }

  #desktop-view-row2 {
    grid-area: details;
  }
  #desktop-view-row3 {
    grid-area: skills;
  }

  #skills-desktop p {
    margin-top: 0px;
  }

  #objective {
    grid-area: objective;
  }

  #dev-exp {
    grid-area: dev-exp;
  }

  #education {
    grid-area: education;
  }

  .col1 {
    display: none;
  }

  .sidebar h3 {
    margin-bottom: 5px;
  }

  .item {
    padding: 0px 5px 0px 5px;
    text-align: left;
  }

  .section-header > h2 {
    margin: 5px 0px;
    padding-top: 0px;
    padding-bottom: 0px;
  }

  .left, .right {
    margin: 0 2px 2px 0;
    padding: none;
  }

  @media screen and (max-width: 700px) {
    .grid-container {
      grid-template-areas:
      'header'
      'objective'
      'handheld-view-1'
      'dev-exp'
      'handheld-view-2'
      'prior-exp'
      'education'
    }

    .col1.sidebar {
      display: initial;
    }

    .col0.sidebar {
      display: none;
    }

    #header {
      position: sticky;
      position: -webkit-sticky;
      top: 0;
      grid-column: 1;
      text-align: center;
      background-color: white;
      opacity: 0.9;
    }

    #objective {
      grid-area: objective;
    }

    #handheld-view-row3 {
      grid-area: handheld-view-1;
    }

    #details-handheld, #portfolios-handheld {
      display: inline-block;
      margin-bottom: 10px;
    }

    #portfolios-handheld {
      text-align: right;
      float: right;
    }

    #dev-exp {
      grid-area: dev-exp;
    }

    #handheld-view-row5 {
      grid-area: handheld-view-2;
      padding: 0 10px;
    }

    #handheld-view-row5 h3 {
      margin: 0 0 5px 0;
    }

    #handheld-view-row5 p {
      margin: 0px;
    }

    #prior-exp {
      grid-area: prior-exp;
    }

    #education {
      grid-area: education;
    }
  }

</style>
