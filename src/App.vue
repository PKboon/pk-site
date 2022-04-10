<template>
<div>
  <div class="nav-div d-flex position-fixed">
    <div>
      <a href="#home"><span class="logo font-bold font-size-48">PK</span></a>
      <div>
        <a href="https://github.com/PKboon" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16" style="margin-right:10px;">
            <path
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
        </a>
        <a href="https://www.linkedin.com/in/pkboon/" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
            <path
              d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg>
        </a>
      </div>
    </div>

    <div class="nav-menu-div font-regular font-size-18">
      <div>
        <a href="#about" class="nav-menu-item">About</a>
        <a href="#expr" class="nav-menu-item">Experience</a>
      </div>
      <div>
        <a href="#proj" class="nav-menu-item">Projects</a>
        <a href="#arts" class="nav-menu-item">Arts</a>
        <a href="#cont" class="nav-menu-item">Contact</a>
      </div>
    </div>
  </div>

  <div id="home" class="container section-div home-section-div text-end">
    <div id="homeTextDiv">
      <div id="homeTextLine1" class="font-bold font-size-72">Hi, I'm <span class="highlighted-text">PK</span>.</div>
      <div id="homeTextLine2" class="font-bold font-size-48">I design and code <span class="highlighted-text">pretty stuff</span>.</div>
    </div>
  </div>

  <div id="about" class="container section-div about-section-div">
    <div id="aboutContentWrapperId">
      <div id="aboutContentId">
        <div class="font-bold font-size-48">About</div>
        <div class="row info-row font-size-18">
          <div class="col-lg-4">
            <img class="about-img" src="./assets/pk.jpeg" />
          </div>
          <div class="col-lg-8">
            <p>I’m a Software Engineer Intern at <a href="https://www.plumvoice.com/" target="_blank" style="white-space:nowrap;">Plum Voice</a> in Boston, MA.</p>
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
                Software, Tools
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
        <div class="expr-content-div">
          <div class="company-list">
            <ul class="nav font-size-24">
              <li class="nav-link"><input type="radio" id="plumExprId" value="plum" v-model="exprRadio" /><label for="plumExprId">Plum Voice</label></li>
              <li class="nav-link"><input type="radio" id="chimExprId" value="chim" v-model="exprRadio" /><label for="chimExprId">Chim Media</label></li>
              <li class="nav-link"><input type="radio" id="frlnExprId" value="frln" v-model="exprRadio" /><label for="frlnExprId">Freelance</label></li>
            </ul>
          </div>
          <hr class="expr-line" />
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

  <div id="proj" class="container section-div proj-section-div">
    <div id="projContentWrapperId">
      <div id="projContentId">
        <div class="font-bold font-size-48">Projects</div>
        <div class="proj-content-div">
          <div class="row">
            <div class="col-lg-3 col-md-4 col-sm-6 col-6">
              <a type="button" class="btn" data-bs-toggle="modal" data-bs-target="#myaModal"><img src="./assets/projects/mya.png" /></a>

              <div class="modal fade" id="myaModal" tabindex="-1" aria-labelledby="myaModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h3 class="modal-title" id="myaModalLabel">MyArt Studio <span class="badge bg-warning">Ongoing</span></h3>
                    </div>
                    <div class="modal-body">
                      <h4>Printing Service eCommerce Website</h4>
                      <img class="screenshot-img" src="./assets/projects/mya-web.png" />
                      <callout title="Languages/Frameworks/Libraries" body="BootstrapVue, CSS, JS, HTML, Vue.js(, MySQL, PHP, Laravel)"></callout>
                      <callout title="Software/Tools" body="Atom, Figma"></callout>
                      <h5>About</h5>
                      I work with <a href="https://plita.myportfolio.com/" target="_blank" class="text-red">Palita Mattayomchan</a>, a UX/UI designer from Thailand.
                      The details about the UX/UI can be view <a href="https://plita.myportfolio.com/my-art-ecommerce-website" target="_blank" class="text-red">here</a>.
                      <br/><br/>
                      The current stage that I am working on is building the front-end of the website.
                      The next step is to create the authentication system by using PHP, Laravel, and MySQL.
                      <br/><br/>
                      Even though this is an "eCommerce" website, it will not allow the customer to make a payment.
                      The customer can place their orders on the website. After that, they will receive an email the the store got the order.
                      The email will also ask the customer to reply back with a picture of the payment of their orders.
                      As soon as the admin confirm the payment, they will update the order's status.
                      The customer can login to their account to track their orders.
                      <br/><br/>
                      The website will be hosted with <a href="https://www.hostatom.com/web-hosting/" target="_blank" class="text-red">hostatom</a>, a web hosting service in Thailand.
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-close-modal" data-bs-dismiss="modal">Close</button>
                      <button class="btn btn-next" data-bs-target="#rnfModal" data-bs-toggle="modal" data-bs-dismiss="modal">
                        Next:: Rice 'N FIRE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-6">
              <a type="button" class="btn" data-bs-toggle="modal" data-bs-target="#rnfModal"><img src="./assets/projects/rnf.png" /></a>

              <div class="modal fade" id="rnfModal" tabindex="-1" aria-labelledby="rnfModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h3 class="modal-title" id="rnfModalLabel">Rice 'N FIRE <span class="badge bg-success"><a href="https://ricenfire.com/" target="_blank">View Website</a></span></h3>
                    </div>
                    <div class="modal-body">
                      <h4>Restaurant Website</h4>
                      <img class="screenshot-img" src="./assets/projects/rnf-web.png" />
                      <callout title="Languages/Frameworks/Libraries" body="Bootstrap, CSS, JS, HTML, React.js"></callout>
                      <callout title="Software/Tools" body="Atom, Github"></callout>
                      <h5>About</h5>
                      I worked on the <a href="https://ricenfire.com/Menu" target="_blank" class="text-red">menu page</a>.
                      This website is my last website that I created when I interned with <a href="https://www.chimmedia.com/" target="_blank" class="text-red">Chim Media</a>.
                      The details about the UX/UI can be view <a href="https://plita.myportfolio.com/rice-n-fier" target="_blank" class="text-red">here</a>.
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-close-modal" data-bs-dismiss="modal">Close</button>
                      <button class="btn btn-next" data-bs-target="#tteModal" data-bs-toggle="modal" data-bs-dismiss="modal">
                        Next:: Thai Tai Eatery
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-6">
              <a type="button" class="btn" data-bs-toggle="modal" data-bs-target="#tteModal"><img src="./assets/projects/tte.png" /></a>

              <div class="modal fade" id="tteModal" tabindex="-1" aria-labelledby="tteModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h3 class="modal-title" id="tteModalLabel">Thai Tai Eatery <span class="badge bg-success"><a href="https://thaitaieatery.com/" target="_blank">View Website</a></span></h3>
                    </div>
                    <div class="modal-body">
                      <h4>Restaurant Website</h4>
                      <img class="screenshot-img" src="./assets/projects/tte-web.png" />
                      <callout title="Languages/Frameworks/Libraries" body="Bootstrap, CSS, JS, HTML, React.js"></callout>
                      <callout title="Software/Tools" body="Atom, Github"></callout>
                      <h5>About</h5>
                      I created when I interned with <a href="https://www.chimmedia.com/" target="_blank" class="text-red">Chim Media</a>.
                      The details about the UX/UI can be view <a href="https://plita.myportfolio.com/thai-tai-eatery-website-design" target="_blank" class="text-red">here</a>.
                      <br/><br/>
                      This website is my first React.js website. However, I did not work on React.js that much.
                      The components that I created were the navigation bar and the order-now button.
                      <br/><br/>
                      I was nervous about the button because it was designed to have colors changed. And that was when I knew how much I could make use of CSS.
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-close-modal" data-bs-dismiss="modal">Close</button>
                      <button class="btn btn-next" data-bs-target="#dvsModal" data-bs-toggle="modal" data-bs-dismiss="modal">
                        Next:: Diversion
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-6">
              <a type="button" class="btn" data-bs-toggle="modal" data-bs-target="#dvsModal"><img src="./assets/projects/dvs.png" /></a>

              <div class="modal fade" id="dvsModal" tabindex="-1" aria-labelledby="dvsModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h3 class="modal-title" id="dvsModalLabel">Diversion <span class="badge bg-success"><a href="https://drive.google.com/file/d/1jVba8BoZjsv0Xs7AapcNgPS0eCtpoJtW/view?usp=sharing" target="_blank">View Newsletter</a></span></h3>
                    </div>
                    <div class="modal-body">
                      <h4>Newsletter Template</h4>
                      <img class="screenshot-img" src="./assets/projects/dvs-web.png" />
                      <callout title="Languages/Frameworks/Libraries" body="CSS, HTML"></callout>
                      <callout title="Software/Tools" body="Atom, Illustrator, Photoshop"></callout>
                      <h5>About</h5>
                      A newsletter template for <a href="https://www.diversion-th.com/" target="_blank" class="text-red">Diversion</a>, a film production company in Thailand.
                      <br/><br/>
                      I made <a href="https://drive.google.com/drive/folders/10c6OTJjVD2NPgxyZ0RmNpL8IjLOUbeWY?usp=sharing" target="_blank" class="text-red">3 wireframes</a>
                      fisrt, to see which directions the client would like to go for. The client liked the option 3 the most, and also would like to add a movie poster
                      for each movie as well. It was pretty challenging to do that because they would like to keep the screenshot full-width.
                      However, I made it into <a href="https://drive.google.com/drive/folders/1izs1p2lGT0Yv21CRgSxj5GxtgDLYZM0z?usp=sharing" target="_blank" class="text-red">3 designs</a>.
                      And this is the <a href="https://drive.google.com/file/d/1jVba8BoZjsv0Xs7AapcNgPS0eCtpoJtW/view?usp=sharing" target="_blank" class="text-red">final design</a>.
                      <br/><br/>
                      The thing the I most worried about is inline CSS. The newsletter will be view mostly on phone, but the <code>@media</code> cannot be used.
                      I researched by inpecting websites, and found out the <code>float</code> was really useful.
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-close-modal" data-bs-dismiss="modal">Close</button>
                      <button class="btn btn-next" data-bs-target="#dtModal" data-bs-toggle="modal" data-bs-dismiss="modal">
                        Next:: Disney Tracker
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-6">
              <a type="button" class="btn" data-bs-toggle="modal" data-bs-target="#dtModal"><img src="./assets/projects/dt.png" /></a>

              <div class="modal fade" id="dtModal" tabindex="-1" aria-labelledby="dtModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h3 class="modal-title" id="dtModalLabel">Disney Tracker <span class="badge bg-success"><a href="https://drive.google.com/file/d/1PjsnMxqgxNOKZtK_r_eN0Wh48q1RqPQP/view?usp=sharing" target="_blank">Watch Video</a></span></h3>
                    </div>
                    <div class="modal-body">
                      <h4>Senior Project</h4>
                      <img class="screenshot-img" src="./assets/projects/dt-web.png" />
                      <callout title="Languages/Frameworks/Libraries" body="Bootstrap, CSS, HTML, JS, Vue.js, djangoRESTframework, Python, MongoDB, CronJobs"></callout>
                      <callout title="Software/Tools" body="Illustrator, MongoDBcompass, Photoshop, Postman, VScode"></callout>
                      <h5>About</h5>
                      This is an acedamic project that I was a apart of for Senior Project class at Wentworth Institute of Technology.
                      My teammates were <a href="https://www.linkedin.com/in/tania-sajjad/" target="_blank" class="text-red">Tania Sajjad</a> and <a href="https://www.linkedin.com/in/christina-cota/" target="_blank" class="text-red">Christina Cota</a>.
                      I worked on UI/UX, front-end, back-end, and presentation slides.
                      <br/><br/>
                      Please feel free to see our
                      <a href="https://docs.google.com/document/d/1bfIqvholsbZa6Dy9LRMsRKz-ACRw5Yna9cGUy_U46bA/edit?usp=sharing" target="_blank" class="text-red">Design Document</a>,
                      <a href="https://drive.google.com/file/d/1kzWZ_Ele_-pKoelPEAzbSaHt49SUsP9A/view?usp=sharing" target="_blank" class="text-red">Poster</a>,
                      <a href="https://docs.google.com/document/d/1lTU6UQ5akRZGiAfZceIQ489Ji-bibxGx/edit?usp=sharing&ouid=101756057652294133286&rtpof=true&sd=true" target="_blank" class="text-red">Report</a>,
                      and <a href="https://docs.google.com/presentation/d/1jKLCxpJN7QVGEYajOGM62GVDmUq1xkN2hcFDUTYhxoU/edit?usp=sharing" target="_blank" class="text-red">Final Slide</a>.
                      <br/><br/>
                      Below is a flowchart showing how front-end, back-end, and server work together on the project.
                      <br/>
                      <img class="screenshot-img" src="./assets/projects/dt-poster.png" />
                      <br/><br/>
                      Disney Tracker obtains ride information from <a href="https://github.com/scaratozzolo/MouseTools" class="text-red">MouseTools APIs</a> and <b>INSERT</b> it into the database.
                      The website then sends <b>GET</b> requests for the data and the users can now see the wait times and ride names.
                      <br/><br/>
                      After the users <b>INPUT</b> us their phone numbers, desired rides and notification time, and the date range that they will be in WDW and submit it,
                      the website will send a <b>POST</b> request to store the user's data in the database.
                      <br/><br/>
                      If the user's data is successfully go to the database, the app will <b>QUERY</b> the data from the database and send an <b>SMS</b> register confirmation to the users.
                      Then, with <b>CronJobs</b>, the users will receive notification text messages about their desired ride, and rides suggestion (if they opt-in)
                      every their selected-alert time.
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-close-modal" data-bs-dismiss="modal">Close</button>
                      <button class="btn btn-next" data-bs-target="#iwtModal" data-bs-toggle="modal" data-bs-dismiss="modal">
                        Next:: I Want To
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="arts" class="container section-div arts-section-div">
    <div id="artsContentWrapperId">
      <div id="artsContentId">
        <div class="font-bold font-size-48">Arts</div>
        <div class="arts-content-div">
          <div class="row">
            <div class="col-lg-3 col-md-4 col-sm-6 col-6">
              <a type="button" class="btn" data-bs-toggle="modal" data-bs-target="#iwtModal"><img src="./assets/projects/iwt.png" /></a>

              <div class="modal fade" id="iwtModal" tabindex="-1" aria-labelledby="iwtModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h3 class="modal-title" id="iwtModalLabel">I Want To... <span class="badge bg-success"><a href="https://www.viddsee.com/video/i-want-to/cli40" target="_blank">Watch Movie</a></span></h3>
                    </div>
                    <div class="modal-body">
                      <h4>Short Movie</h4>
                      <img class="screenshot-img" src="./assets/projects/iwt-poster.jpeg" />
                      <callout title="Synopsis" body="In a psychology interview, Pin and Pie, two girls that used to be friend, had revealed their complicated relationship."></callout>
                      <h5>About</h5>
                      This is my thesis movie when I was a film student at Silpakorn University, Thailand.
                      It was really fun to make this movie from the beginning to the end.
                      I am very grateful for my crew, actresses, actors, and advisors.
                      <br/><br/>
                      This is my last movie. Please feel free to enjot it. The link is in the <span class="text-success">green badge</span> above.
                      <br/><br/>
                      <img class="screenshot-img" src="./assets/projects/iwt-cap.png" />
                      <br/><br/>
                      <h5>Inspirations</h5>
                      <ul>
                        <li>
                          I went to an all-girls school and I knew people who got confused about their sexualities becuase they had feelings for girls.
                          Some people cannot accepted who they were and grappled with it.
                        </li>
                        <br/>
                        <li>
                          An <a href="https://www.nytimes.com/2015/01/09/style/no-37-big-wedding-or-small.html" class="text-red">article</a>
                          about two strangers falling in love with each other after asking/answering certains questions.
                          The article also report that if the two people know each other already, these questions will make them love each other even more.
                        </li>
                      </ul>
                      However, it is highly likely that the one who cannot accept who they are would want to do this interview with the girl that she is in love with.
                      So, I adapted it into a psychology interview, to make more sense of the situation.
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-close-modal" data-bs-dismiss="modal">Close</button>
                      <button class="btn btn-next" data-bs-target="#dr6Modal" data-bs-toggle="modal" data-bs-dismiss="modal">
                        Next:: Drawing6
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-6">
              <a type="button" class="btn" data-bs-toggle="modal" data-bs-target="#dr6Modal"><img src="./assets/projects/dr6.png" /></a>

              <div class="modal fade" id="dr6Modal" tabindex="-1" aria-labelledby="dr6ModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h3 class="modal-title" id="dr6ModalLabel">Drawing 6</h3>
                    </div>
                    <div class="modal-body">
                      <h4>Pencil Drawing</h4>
                      <img class="screenshot-img" src="./assets/projects/dr6-pic.png" />
                      <br/>
                      <callout body="Drawing class by Prof. Katie Wild at BHCC" />
                      <h5>About</h5>
                      This is my final project of a drawing class at BHCC. Tributes to
                      <a href="https://en.wikipedia.org/wiki/Hand_with_Reflecting_Sphere" class="text-red">M.C. Escher, 'Hand with Reflecting Sphere'</a>.
                      <br/><br/>
                      The professor would let us pick one of the provided marter piece arts.
                      Then, we had to interpret it and create a piece of art that tributes the one that we chose.
                      <br/><br/>
                      I interpret the M.C. Escher's that he is showing his room with the reflecting sphere. It is like he is representing his life.
                      That makes me think about how people represent themselves these day, through social media. So I change the sphere to a phone
                      that showing my instagram, that shows people my lifestyle and things that I like.
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-close-modal" data-bs-dismiss="modal">Close</button>
                      <button class="btn btn-next" data-bs-target="#dr5Modal" data-bs-toggle="modal" data-bs-dismiss="modal">
                        Next:: Drawing5
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-6">
              <a type="button" class="btn" data-bs-toggle="modal" data-bs-target="#dr5Modal"><img src="./assets/projects/dr5.png" /></a>

              <div class="modal fade" id="dr5Modal" tabindex="-1" aria-labelledby="dr5ModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h3 class="modal-title" id="dr5ModalLabel">Drawing 5</h3>
                    </div>
                    <div class="modal-body">
                      <h4>Prismacolor Pencil Drawing and Collage Artwork</h4>
                      <img class="screenshot-img" src="./assets/projects/dr5-pic.png" />
                      <br/>
                      <callout body="Drawing class by Prof. Katie Wild at BHCC" />
                      <h5>About</h5>
                      Value Studies of Hands in Prismacolor Pencils (Each hand is a letter. Left-to-right order; C A N D Y).
                      <br/><br/>
                      My first time drawing hands. It was pretty fun and challenging. The most challenging part was that
                      I finished drawing the hands and started filling the background. However, it did not go well because
                      the focal point was not the hands anymore. So, I decided I make it to a collage.
                      <br/><br/>
                      So glad that I went with CANDY. They were so yummy!
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-close-modal" data-bs-dismiss="modal">Close</button>
                      <button class="btn btn-next" data-bs-target="#dr4Modal" data-bs-toggle="modal" data-bs-dismiss="modal">
                        Next:: Drawing4
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-6">
              <a type="button" class="btn" data-bs-toggle="modal" data-bs-target="#dr4Modal"><img src="./assets/projects/dr4.png" /></a>

              <div class="modal fade" id="dr4Modal" tabindex="-1" aria-labelledby="dr4ModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h3 class="modal-title" id="dr4ModalLabel">Drawing 4</h3>
                    </div>
                    <div class="modal-body">
                      <h4>Pencil Drawing</h4>
                      <img class="screenshot-img" src="./assets/projects/dr4-pic.png" />
                      <br/>
                      <callout body="Drawing class by Prof. Katie Wild at BHCC" />
                      <h5>About</h5>
                      I like this one the most. It was really fun to draw. I Spent 10 hours on it.
                      <br/><br/>
                      The professor let us pick one of the stuff that she brought to the class.
                      I selected a game controller because it has a dark color, which has a high contrast with the background.
                      <br/><br/>
                      The part that I like the most is that I had to draw it into 9 chanels and chanels must not merge.
                      So, my plan was, the middle and conner chanels would be filled with the object (the controller),
                      and the rest channels will have more portion of background (white space).
                      <br/><br/>
                      However, that was a wrong move XD. I should have done it in the opposite way for the non-middle chanels
                      so that the corner chanels would be diagonal white space. Anyway, it came out good!
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-close-modal" data-bs-dismiss="modal">Close</button>
                      <button class="btn btn-next" data-bs-target="#dr3Modal" data-bs-toggle="modal" data-bs-dismiss="modal">
                        Next:: Drawing3
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-6">
              <a type="button" class="btn" data-bs-toggle="modal" data-bs-target="#dr3Modal"><img src="./assets/projects/dr3.png" /></a>

              <div class="modal fade" id="dr3Modal" tabindex="-1" aria-labelledby="dr3ModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h3 class="modal-title" id="dr3ModalLabel">Drawing 3</h3>
                    </div>
                    <div class="modal-body">
                      <h4>Pencil Drawing</h4>
                      <img class="screenshot-img" src="./assets/projects/dr3-pic.png" />
                      <br/>
                      <callout body="Drawing class by Prof. Katie Wild at BHCC" />
                      <h5>About</h5>
                      From the left: bananas, purple yams, apple, tomato, korean melon.
                      <br/><br/>
                      At first, there was no apple, but it looks so empty at the top. So, I just randomly drew an apple
                      from my imagination. That is why it looks a little odd.
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-close-modal" data-bs-dismiss="modal">Close</button>
                      <button class="btn btn-next" data-bs-target="#dr2Modal" data-bs-toggle="modal" data-bs-dismiss="modal">
                        Next:: Drawing2
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-6">
              <a type="button" class="btn" data-bs-toggle="modal" data-bs-target="#dr2Modal"><img src="./assets/projects/dr2.png" /></a>

              <div class="modal fade" id="dr2Modal" tabindex="-1" aria-labelledby="dr2ModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h3 class="modal-title" id="dr2ModalLabel">Drawing 2</h3>
                    </div>
                    <div class="modal-body">
                      <h4>Pencil Drawing</h4>
                      <img class="screenshot-img" src="./assets/projects/dr2-pic.png" />
                      <br/>
                      <callout body="Drawing class by Prof. Katie Wild at BHCC" />
                      <h5>About</h5>
                      Bill drawing, first assignment in the class. Drawing bills is the last thing that I would do, because
                      there are too many details on any bills. That is why I folded it in the way that would show
                      as less details as possible XD.
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-close-modal" data-bs-dismiss="modal">Close</button>
                      <button class="btn btn-next" data-bs-target="#dr1Modal" data-bs-toggle="modal" data-bs-dismiss="modal">
                        Next:: Drawing1
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-6">
              <a type="button" class="btn" data-bs-toggle="modal" data-bs-target="#dr1Modal"><img src="./assets/projects/dr1.png" /></a>

              <div class="modal fade" id="dr1Modal" tabindex="-1" aria-labelledby="dr1ModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h3 class="modal-title" id="dr1ModalLabel">Drawing 1</h3>
                    </div>
                    <div class="modal-body">
                      <h4>Pencil Drawing</h4>
                      <img class="screenshot-img" src="./assets/projects/dr1-pic-1.png" />
                      <br/>
                      <callout body="Drawing class by Prof. Chaicharn Thavaravej at Silpakorn University" />
                      <h5>About</h5>
                      This is the final project of the class. The professor would let us choose a movie and draw
                      a poster. Before starting the work, we had to draw four drafts of different compositions as shown below.
                      <br/><br/>
                      <img class="screenshot-img" src="./assets/projects/dr1-pic-2.png" />
                      <br/><br/>
                      <ul>
                        <li>Top left: l position</li>
                        <li>Top right: upside down T position</li>
                        <li>Bottom left: S position</li>
                        <li>Bottom right: window position</li>
                      </ul>
                      I decided to go with the <b>l position</b> because it is simple but speaks the most.
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-close-modal" data-bs-dismiss="modal">Close</button>
                      <button class="btn btn-next" data-bs-target="#iwtModal" data-bs-toggle="modal" data-bs-dismiss="modal">
                        First:: I Want To...
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="cont" class="container section-div cont-section-div">
    <div id="contContentWrapperId">
      <div id="contContentId">
        <div class="font-bold font-size-48">Contact</div>
        <div class="cont-content-div">
          <div class="sub-cont-content-div">
            <span class="font-size-24">Have questions or want to say hi</span>
            <span class="cont-arrows-span"><img src="./assets/bullet.png" /> <img src="./assets/bullet.png" /> <img src="./assets/bullet.png" /></span>
          </div>
          <div class="input-cont-div">
            <form action="https://formspree.io/f/xzbklkjg" method="POST">
              <div class="form-floating">
                <input type="text" class="form-control" id="floatingName" placeholder="Name" v-model="nameCont">
                <label for="floatingName">Name</label>
              </div>
              <div class="form-floating">
                <input type="email" class="form-control" id="floatingEmail" placeholder="Email" v-model="emailCont">
                <label for="floatingEmail">Email</label>
              </div>
              <div class="form-floating">
                <textarea class="form-control" placeholder="Message" id="floatingMessage" style="height:240px" v-model="msgCont"></textarea>
                <label for="floatingMessage">Message</label>
              </div>
              <button class="btn font-size-24" @click="send($event)">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="footer-div text-center font-size-14">Designed & built by <a href="https://www.linkedin.com/in/pkboon/" target="_blank" style="color:var(--red);">Pk Boonpeng</a></div>

</div>
</template>

<script>
import Experience from './components/Experience.vue'
import Callout from './components/Callout.vue'

export default {
  name: 'App',
  components: {
    Experience,
    Callout
  },
  data() {
    return {
      nameCont: '',
      emailCont: '',
      msgCont: '',

      exprRadio: 'plum',
      plumExpr: [{
          position: 'Software Engineer Intern',
          company: 'Plum Voice',
          companyWeb: 'https://www.plumvoice.com/',
          location: 'Boston, MA (Hybrid)',
          period: 'Jan 2022 - Present',
          tasks: ['Design web apps with Figma.', 'Develop web apps’ front-end with Laravel, Vue,js, Vue Router and Bootstrap.', 'Integrate MySQL to PHP and JS by using Axios to create authentication system.',
            'Work with developer team to run QA tests.', 'Performed as a team member of an Agile team.'
          ]
        },
        {
          period: 'May - Aug 2021',
          tasks: ['Completed beta version of a web app product by using PHP, MySQL, HTML, CSS and Bootstrap.', 'Created an SMS Application with Plum SMS APIs and PHP.',
            'Implemented a real-time web app with developer team, by using Vue.js, CSS, and Bootstrap.', 'Generated VXML applications using Stripe APIs and PHP.', 'Performed as a team member of an Agile team.'
          ]
        }
      ],
      chimExpr: [{
        position: 'Web Developer Intern',
        company: 'Chim Media',
        companyWeb: 'https://www.chimmedia.com/',
        location: 'New York, NY (Remote)',
        period: 'Aug 2020 - Jan 2021',
        tasks: ['Led a group of 7 developers and UX/UI designers to create static restaurant websites.', 'Adopted Agile to the team.', 'Collaborated with Marketing and Media teams to create the websites.',
          'Implemented 7 responsive websites using Bootstrap and React.js with the team.'
        ]
      }],
      frlnExpr: [{
          position: 'Web Developer',
          company: 'MyArt Studio',
          companyWeb: 'https://twitter.com/myart_my',
          location: 'Chiang Mai, Thailand (Remote)',
          period: 'Dec 2021 - Present',
          tasks: ['Develop a printing service website using Vue.js and Vue Router.', 'Work with a UI/UX designer on the website design.']
        },
        {
          position: 'Newsletter Designer & Developer',
          company: 'Diversion',
          companyWeb: 'https://www.diversion-th.com/',
          location: 'Bangkok, Thailand (Remote)',
          period: 'Dec 2021 - Jan 2022',
          tasks: ['Designed wireframes and newsletters in Illustrator and Photoshop.', 'Developed the newsletter in HTML and CSS using Atom.', 'Recorded a video on how to use it as a template in Gmail for the client.']
        }
      ],

      projectPics: ['rnf.png', 'tte.png', 'dvs.png', 'dt.png']
    }
  },
  methods: {
    send(event) {
      let sent = false
      if (this.nameCont.length <= 0) {
        event.preventDefault()
        alert('No name? :(')
        sent = false
      } else {
        sent = true
      }

      if (this.emailCont.length <= 0 || !this.emailCont.includes('@') || !this.emailCont.includes('.')) {
        event.preventDefault()
        alert('No email? :(')
        sent = false
      } else {
        sent = true
      }

      if (this.msgCont.length <= 0) {
        event.preventDefault()
        alert("Aw. Empty message? :'(")
        sent = false
      } else {
        sent = true
      }

      if (sent) {
        this.nameCont = ''
        this.emailCont = ''
        this.msgCont = ''
      }
    },
    setPaddingTopHomeSection() {
      let homeContentHeight = parseInt(document.getElementById("homeTextLine1").offsetHeight) + parseInt(document.getElementById("homeTextLine2").offsetHeight)
      if (window.innerWidth > 500) {
        document.getElementById("homeTextDiv").style.paddingTop = 'calc((100vh - ' + homeContentHeight + 'px) / 2)'
      } else {
        document.getElementById("homeTextDiv").style.paddingTop = '150px'
      }
    },
    setPaddingTopAboutSection() {
      let aboutContentHeight = document.getElementById("aboutContentId").offsetHeight
      if (window.innerWidth > 500) {
        document.getElementById("aboutContentWrapperId").style.paddingTop = 'calc((100vh - ' + aboutContentHeight + 'px) / 2)'
      } else {
        document.getElementById("aboutContentWrapperId").style.marginTop = '70px'
      }
    },
    setPaddingTopExprSection() {
      let exprContentHeight = document.getElementById("exprContentId").offsetHeight-50
      if (window.innerWidth > 500) {
        document.getElementById("exprContentWrapperId").style.paddingTop = 'calc((100vh - ' + exprContentHeight + 'px) / 2)'
      } else {
        document.getElementById("exprContentWrapperId").style.paddingTop = '70px'
      }
    },
    setPaddingTopProjSection() {
      if (window.innerWidth > 500) {
        document.getElementById("projContentWrapperId").style.paddingTop = 'calc((100vh - 550px) / 2)'
      } else {
        document.getElementById("projContentWrapperId").style.paddingTop = '70px'
      }
    },
    setPaddingTopArtsSection() {
      // let artsContentHeight = document.getElementById("artsContentId").offsetHeight
      if (window.innerWidth > 500) {
        document.getElementById("artsContentWrapperId").style.paddingTop = 'calc((100vh - 550px) / 2)'
      } else {
        document.getElementById("artsContentWrapperId").style.paddingTop = '70px'
      }
    },
    setPaddingTopContSection() {
      let contContentHeight = document.getElementById("contContentId").offsetHeight-40
      if (window.innerWidth > 500) {
        document.getElementById("contContentWrapperId").style.paddingTop = 'calc((100vh - ' + contContentHeight + 'px) / 2)'
      } else {
        document.getElementById("contContentWrapperId").style.paddingTop = '70px'
      }
    },
    //compute padding left expr nav
    setPaddingTopAll() {
      this.setPaddingTopHomeSection()
      this.setPaddingTopAboutSection()
      this.setPaddingTopExprSection()
      this.setPaddingTopProjSection()
      this.setPaddingTopContSection()
      this.setPaddingTopArtsSection()
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
:root {--red: #F04949; --bg-color: #fef6f6; --footer-color: #ffbbbb;}
p{margin-bottom:0;}
body{font-family: 'Tomorrow', sans-serif;background-color:var(--bg-color);}
.btn:focus{box-shadow:none;}
.nav-link, a{color:black;text-decoration:none;}
.nav-link:hover, a:hover, .nav-link:focus, a:focus{color:var(--red);}
.footer-div a:hover, .section-div a:hover{text-decoration:underline;}
.font-bold{font-weight:700;}
.font-regular{font-weight:400;}
.font-size-14{font-size:14px;}
.font-size-18{font-size:18px;}
.font-size-24{font-size:24px;}
.font-size-48{font-size:48px;}
.font-size-72{font-size:72px;}
.text-red{color: var(--red);}
.badge{font-weight:400;position:relative;top:-10px;font-size:12px;border-radius:0 20px 20px 0;padding:2px 10px 4px 5px;}
.badge.bg-success:hover{box-shadow:2px 3px #000;cursor:pointer;}
.badge.bg-success a{color:#fff;}
.badge.bg-success a:hover{text-decoration:none;}
.section-div{height:100vh;align-items:center;}
.container{padding-left:8%;padding-right:8%;}
.icon-img{width:30px;margin-right:5px;}
.modal-header, .modal-footer, .modal-content{border-radius:0;}
ul{padding-left:2rem;list-style-type:none;}
ul li{padding-left:2rem;background-image:url(./assets/bullet.png);background-position:0 2px;background-repeat:no-repeat;}
ul li ul{padding-left: 0;}
ul li ul li{padding-left:1.5rem;background-image:url(./assets/subBullet.png);background-position:0 6px;background-repeat:no-repeat;background-size:13px;}
input[type="radio"]{display:none;}
input[type="radio"]:checked+label{color: var(--red);}

.nav-div{width:100%;padding:10px 0 30px 25px;z-index:2;align-items:center;background: rgb(254,246,246);background: linear-gradient(180deg, rgba(254,246,246,1) 60%, rgba(254,246,246,0) 100%);}
.nav-menu-div{align-items:center;display: flex;margin-top: -25px;}
.logo{color:var(--red);text-shadow:2px 2px black;margin-right:30px;}
.logo:hover{color:#000;text-shadow:5px 5px var(--red);}
.nav-menu-item{margin-right:30px;margin-top:-25px;}

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
.expr-content-div{display: flex;}
.company-list{margin-right: 40px;}
.company-list li{white-space: nowrap;}
.company-list label:hover{cursor: pointer;}

.arts-content-div ul{padding-left:0;}
.arts-content-div .row>*, .proj-content-div .row>*{padding:0;}
.arts-content-div .row .col-6, .proj-content-div .row .col-6{margin-top:20px;}
.arts-content-div .row img, .proj-content-div .row img{border:3px #000 solid;width:100%;}
.arts-content-div .row img:hover, .proj-content-div .row img:hover{box-shadow:10px 10px var(--red);}
.arts-content-div .row .screenshot-img, .proj-content-div .row .screenshot-img{border:0;}
.arts-content-div .row .screenshot-img:hover, .proj-content-div .row .screenshot-img:hover{box-shadow:none;}
.arts-content-div .modal .btn-next, .proj-content-div .modal .btn-next{background-color:var(--red);border-radius:0;color:#fff;}
.arts-content-div .modal .btn-next:hover, .proj-content-div .modal .btn-next:hover{box-shadow:3px 3px #000;}
.arts-content-div .modal .btn-close-modal, .proj-content-div .modal .btn-close-modal{background-color:var(--footer-color);border-radius:0;color:#000;}
.arts-content-div .modal .btn-close-modal:hover, .proj-content-div .modal .btn-close-modal:hover{box-shadow:3px 3px #000;}

.cont-content-div{display:flex;margin-top:15px;}
.sub-cont-content-div{white-space:nowrap;padding-top:10px;}
.cont-arrows-span{position:relative;top:-3px;margin-left:10px;}
.input-cont-div{width:100%;padding-left:30px;}
.input-cont-div .form-floating .form-control{width:100%;border-radius:0;border:3px #000 solid;margin-bottom:20px;color:var(--red);}
.input-cont-div .form-floating .form-control:focus, .input-cont-div .form-floating .form-control:hover{box-shadow:5px 5px var(--red);}
.input-cont-div .btn{background-color:var(--red);width:100%;border-radius:0;padding:10px 0;color:#fff;}
.input-cont-div .btn:hover{box-shadow:5px 5px #000;}

.footer-div{padding:10px 0;background-color:var(--footer-color);margin-top:125px;}

@media(max-width: 991px) {
.section-div{height:auto;margin: 0 0 60px;}
.home-section-div{margin-bottom: 90px;}
.container{padding-left:6%;padding-right:6%;margin:auto;}

.about-section-div, .about-section-div .info-row .col-lg-8 p{text-align:center;}
.about-section-div .info-row .col-lg-8{padding:30px 10px;text-align:left;}

.expr-section-div{text-align:center;}
.expr-content-div{display: block;}
.company-list{text-align:center; margin-right: 0;}
.company-list ul{display:flex;}
.company-list ul li{margin: auto;}
.expr-section-div hr{width: 100%; height: 1px;}
.expr-detail-div{text-align: left;}

.proj-content-div .row img:hover{box-shadow:5px 5px var(--red);}

.cont-content-div{display:block;margin-top:0;}
.sub-cont-content-div{white-space:normal;margin-bottom:15px;}
.sub-cont-content-div span img{transform:rotate(270deg) scaleX(-100%) !important;}
.input-cont-div{padding:0;}
}

@media(max-width: 600px) {
.nav-menu-div{display: block;padding-top: 47px;}
.nav-menu-div div:nth-child(2){margin-top: 20px;}
}
</style>
