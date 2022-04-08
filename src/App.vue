<template>
<div>
  <div class="nav-div d-flex">
    <div>
      <a href="#home"><span class="logo font-bold font-size-48">PK</span></a>
      <div>
        <a>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16" style="margin-right:10px;"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
        </a>
        <a>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/></svg>
        </a>
      </div>
    </div>

    <div class="nav-menu-div font-regular font-size-18">
      <div>
        <a href="#about" class="nav-menu-item">About</a>
        <a href="#expr" class="nav-menu-item">Experience</a>
      </div>
      <div>
        <a class="nav-menu-item">Projects</a>
        <a class="nav-menu-item">Contact</a>
      </div>
    </div>
  </div>

  <div id="home" class="container section-div home-section-div text-end">
    <div id="homeTextDiv">
      <div id="homeTextLine1" class="font-bold font-size-72">Hi, I'm <span class="highlighted-text">PK</span>.</div>
      <div id="homeTextLine2" class="font-bold font-size-48">I design and make <span class="highlighted-text">pretty websites</span>.</div>
    </div>
  </div>

  <div id="about" class="container section-div about-section-div">
    <div id="aboutContentWrapperId">
      <div id="aboutContentId">
        <div class="font-bold font-size-48">About</div>
        <div class="row info-row font-size-18">
          <div class="col-lg-4">
            <img class="about-img" src="./assets/pk.jpeg"/>
          </div>
          <div class="col-lg-8">
            <p>I’m a Front-end Software Engineer Intern at <a href="https://www.plumvoice.com/" target="_blank">Plum Voice</a> in Boston, MA.</p>
             <ul>
              <li class="main-bullet">
                Languages, Frameworks, Libraries
                <ul>
                  <li>CSS, HTML, JavaScript, MySQL, Php</li>
                  <li>Laravel, Vue.js</li>
                  <li>Axios, Bootstrap</li>
                </ul>
              </li>
            </ul>
            <ul>
              <li>
                Software
                <ul>
                  <li>Atom, DBeaver, GitHub, PhpStorm, Postman, VSCode</li>
                  <li>Figma, Illustrator, Photoshop</li>
                  <li>Clickup, Slack, Google Meet</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

    <div id="expr" class="container section-div expr-section-div">
    <div id="exprContentWrapperId">
      <div id="exprContentId">
        <div class="font-bold font-size-48">Experience</div>
        <div class="expr-content">
          <div class="company-list">
            <ul class="nav font-size-24">
              <li class="nav-link"><input type="radio" id="plumExprId" value="plum" v-model="exprRadio" /><label for="plumExprId">Plum Voice</label></li>
              <li class="nav-link"><input type="radio" id="chimExprId" value="chim" v-model="exprRadio" /><label for="chimExprId">Chim Media</label></li>
              <li class="nav-link"><input type="radio" id="frlnExprId" value="frln" v-model="exprRadio" /><label for="frlnExprId">Freelance</label></li>
            </ul>
          </div>
          <hr class="expr-line"/>
          <div class="expr-detail-div">
            <div v-if="exprRadio === 'plum'">
              <experience :key="plumExprIndex" v-for="(expr, plumExprIndex) in plumExpr" :position=expr.position :company=expr.company :companyWeb=expr.companyWeb :location=expr.location :period=expr.period :tasks=expr.tasks />
            </div>
            <div v-else-if="exprRadio === 'chim'">
              <experience :position=chimExpr[0].position :company=chimExpr[0].company :companyWeb=chimExpr[0].companyWeb :location=chimExpr[0].location :period=chimExpr[0].period :tasks=chimExpr[0].tasks />
            </div>
            <div v-if="exprRadio === 'frln'">
              <experience :key="frlnExprIndex" v-for="(expr, frlnExprIndex) in frlnExpr" :position=expr.position :company=expr.company :companyWeb=expr.companyWeb :location=expr.location :period=expr.period :tasks=expr.tasks />
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>

</div>
</template>

<script>
import Experience from './components/Experience.vue'

export default {
  name: 'App',
  components: {
    Experience
  },
  data(){
    return{
      exprRadio: 'plum',
      plumExpr:[
        {
          position: 'Software Engineer Intern',
          company: 'Plum Voice',
          companyWeb: 'https://www.plumvoice.com/',
          location: 'Boston, MA (Hybrid)',
          period: 'Jan 2022 - Present',
          tasks: ['Design web apps with Figma.','Develop web apps’ front-end with Laravel, Vue,js, Vue Router and Bootstrap.','Integrate MySQL to PHP and JS by using Axios to create authentication system.','Work with developer team to run QA tests.','Performed as a team member of an Agile team.']
        },
        {
          period: 'May - Aug 2021',
          tasks: ['Completed beta version of a web app product by using PHP, MySQL, HTML, CSS and Bootstrap.','Created an SMS Application with Plum SMS APIs and PHP.','Implemented a real-time web app with developer team, by using Vue.js, CSS, and Bootstrap.','Generated VXML applications using Stripe APIs and PHP.','Performed as a team member of an Agile team.']
        }
      ],
      chimExpr:[
        {
          position: 'Web Developer Intern',
          company: 'Chim Media',
          companyWeb: 'https://www.chimmedia.com/',
          location: 'New York, NY (Remote)',
          period: 'Aug 2020 - Jan 2021',
          tasks: ['Led a group of 7 developers and UX/UI designers to create static restaurant websites.','Adopted Agile to the team.','Collaborated with Marketing and Media teams to create the websites.','Implemented 7 responsive websites using Bootstrap and React.js with the team.']
        }
      ],
      frlnExpr:[
        {
          position: 'Web Developer',
          company: 'MyArt Studio',
          companyWeb: 'https://twitter.com/myart_my',
          location: 'Chiang Mai, Thailand (Remote)',
          period: 'Dec 2021 - Present',
          tasks: ['Develop a printing service website using Vue.js and Vue Router.', 'Work with a UI/UX designer on the website design.']
        },
        {
          position: 'Newsletter Designer/Developer',
          company: 'Diversion',
          companyWeb: 'https://www.diversion-th.com/',
          location: 'Bangkok, Thailand (Remote)',
          period: 'Dec 2021 - Jan 2022',
          tasks: ['Designed wireframes and newsletters in Illustrator and Photoshop.','Developed the newsletter in HTML and CSS using Atom.','Recorded a video on how to use it as a template in Gmail for the client.']
        }
      ],
    }
  },
  methods: {
    setPaddingTopHomeSection() {
      let homeContentHeight = parseInt(document.getElementById("homeTextLine1").offsetHeight) + parseInt(document.getElementById("homeTextLine2").offsetHeight)
      if(window.innerHeight > 450){
        document.getElementById("homeTextDiv").style.paddingTop = 'calc((100vh - ' + homeContentHeight + 'px) / 2)'
      } else {
        document.getElementById("homeTextDiv").style.paddingTop = '90px'
      }
    },
    setPaddingTopAboutSection() {
      let aboutContentHeight = document.getElementById("aboutContentId").offsetHeight
      if(window.innerHeight > 450){
        document.getElementById("aboutContentWrapperId").style.paddingTop = 'calc((100vh - ' + aboutContentHeight + 'px) / 2)'
      } else {
        document.getElementById("aboutContentWrapperId").style.paddingTop = '90px'
      }
    },
    setPaddingTopExprSection() {
      let exprContentHeight = document.getElementById("exprContentId").offsetHeight
      if(window.innerHeight > 450){
        document.getElementById("exprContentWrapperId").style.paddingTop = 'calc((100vh - ' + exprContentHeight + 'px) / 2)'
      } else {
        document.getElementById("exprContentWrapperId").style.paddingTop = '90px'
      }
    },
    //compute padding left expr nav
    setPaddingTopAll() {
      this.setPaddingTopHomeSection()
      this.setPaddingTopAboutSection()
      this.setPaddingTopExprSection()
    }
  },
  mounted() {
    this.setPaddingTopAll()
    window.onresize = this.setPaddingTopAll
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Tomorrow:wght@400;700&display=swap');
:root {--red: #F04949;}
p{margin-bottom:0;}
body{font-family: 'Tomorrow', sans-serif;background-color:rgba(255,187,187,.1);}
.nav-link, a{color:black;text-decoration:none;}
.nav-link:hover, a:hover, .nav-link:focus, a:focus{color:var(--red);}
.font-bold{font-weight:700;}
.font-regular{font-weight:400;}
.font-size-14{font-size:14px;}
.font-size-18{font-size:18px;}
.font-size-24{font-size:24px;}
.font-size-48{font-size:48px;}
.font-size-72{font-size:72px;}
.section-div{height:100vh;align-items:center;}
.container{padding-left:8%;padding-right:8%;}
.icon-img{width:30px;margin-right:5px;}
ul{padding-left:2rem;list-style-type:none;}
ul li{padding-left:2rem;background-image:url(./assets/bullet.png);background-position:0 2px;background-repeat:no-repeat;}
ul li ul{padding-left: 0;}
ul li ul li{padding-left:1.5rem;background-image:url(./assets/subBullet.png);background-position:0 6px;background-repeat:no-repeat;background-size:13px;}
input[type="radio"]{display:none;}
input[type="radio"]:checked+label{color: var(--red);}

.nav-div{width:100%;padding:10px 0 30px 25px;align-items:center;background-color:rgba(0,0,0,.5);}
.nav-menu-div{align-items:center;display: flex;margin-top: -25px;}
.logo{color:var(--red);text-shadow:2px 2px black;margin-right:50px;}
.nav-menu-item{margin-right:50px;margin-top:-25px;}

.home-section-div .highlighted-text{color:var(--red);text-shadow:2px 2px black;}

.about-section-div .info-row{margin-top:15px;}
.about-section-div .info-row a{color:var(--red);}
.about-section-div .info-row a:hover{text-decoration:underline;}
.about-img{border:3px solid black;box-shadow:12px 12px var(--red);}
.about-section-div .info-row .col-lg-8{padding-left:50px;}

.nav{display:grid;}
.expr-section-div .nav-link{background-size:0;}
.expr-section-div hr{width: 1px;height:450px;opacity:1;border-top:1px;margin-right: 40px;}
.expr-section-div .col-lg-8{margin-right:0;}
.expr-content{display: flex;}
.company-list{margin-right: 40px;}
.company-list li{white-space: nowrap;}
.company-list label:hover{cursor: pointer;}

@media(max-width: 991px) {
.section-div{height:auto;margin: 0 0 60px;}
.home-section-div{margin-bottom: 90px;}
.container{padding-left:6%;padding-right:6%;}

.about-section-div, .about-section-div .info-row .col-lg-8 p{text-align:center;}
.about-section-div .info-row .col-lg-8{padding:30px 10px;text-align:left;}

.expr-section-div{text-align:center;}
.expr-content{display: block;}
.company-list{text-align:center; margin-right: 0;}
.company-list ul{display:flex;}
.company-list ul li{margin: auto;}
.expr-section-div hr{width: 100%; height: 1px;}
.expr-detail-div{text-align: left;}
}

@media(max-width: 600px) {
.nav-menu-div{display: block;padding-top: 47px;}
.nav-menu-div div:nth-child(2){margin-top: 20px;}
}
</style>
