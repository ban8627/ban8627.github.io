$(document).ready(function () {
  let showLoading = () => {
    $("#loading").fadeIn(800);
    $("html").css("overflowY", "hidden");
  };
  showLoading();

  $(window).load(function () {
    let hideLoading = () => {
      $("#loading").fadeOut(800);
      $("html").css("overflowY", "auto");
    };
    setTimeout(function () {
      hideLoading();
    }, 500);
  });

  const codeData = JSON.parse(JSON.stringify(CodeData));
  const allCode = codeData.all;
  const studyCode = codeData.study;
  const vueCode = codeData.vue;
  const personCode = codeData.personal;
  const workCode = codeData.work;

  // header show & hide

  // side - menu
  $(".side-menu").click((event) => {
    event.preventDefault();
    $(".side-menu-dim").css({
      left: 0,
      display: "block",
    });
  });
  $(".close").click((event) => {
    event.preventDefault();
    $(".side-menu-dim").css({
      left: 100,
      display: "none",
    });
  });
  // waypoint
  $("#porfile").waypoint(() => {
    $(".quick-wrap").toggleClass("active");
    $(".go-top").toggleClass("active");
  });
  $("#mbti").waypoint(function () {
    $(".quick-wrap").toggleClass("active");
  });

  // swiper-code-list-all
  let thumlist = "";
  let txtlist = "";
  let allSwiperThum = $(".sw-portfolio-thum > .swiper-wrapper");
  let allSwiperTxt = $(".sw-portfolio-txt > .swiper-wrapper");
  allCode.forEach((obj) => {
    let thumTemp = `<div class="swiper-slide">
                    <a href="${obj.work}" target="_blank"><img src="${obj.thum}" alt="" /></a>
                  </div>`;
    thumlist += thumTemp;
    allSwiperThum.html(thumlist);
    let txtTemp = `<li class="swiper-slide">
                    <span class="pf-category study vue">${obj.category}</span>
                    <div class="txt-wrap">
                      <h3 class="sub-title">${obj.title}</h3>
                      <p class="sub-desc">${obj.desc}</p>
                      <h4 class="fix-el"></h4>
                      <p class="fix-desc"></p>
                      <ul class="pf-quick">
                        <li><a href="${obj.origin}" target="_blank">Origin</a></li>
                        <li><a href="${obj.work}" target="_blank">Work</a></li>
                        <li><a href="${obj.github}" target="_blank">GitHub</a></li>
                        <li><a href="${obj.vuegit}" target="_blank">Vue-GitHub</a></li>
                        <li><a href="${obj.vuepage}" target="_blank">Vue-Page</a></li>
                      </ul>
                    </div>
                  </li>`;
    txtlist += txtTemp;
    allSwiperTxt.html(txtlist);
  });
  let allPFthum = new Swiper(".sw-portfolio-thum", {
    touchRatio: 0,
    loop: true,
  });
  let allPFLink = new Swiper(".sw-portfolio-txt", {
    loop: true,
    pagination: {
      el: ".sw-porfol-pagi",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".sw-port-next",
      prevEl: ".sw-port-prev",
    },
  });

  allPFLink.controller.control = allPFthum;
  $(".sw-portfolio-txt").mouseenter(() => {
    allPFLink.autoplay.stop();
  });
  $(".sw-portfolio-txt").mouseleave(() => {
    allPFLink.autoplay.start();
  });

  // study-code-list
  let studytxt = "";
  let studythum = "";
  let studySwiperTxt = $(".sw-study > .swiper-wrapper");
  let studySwiperthum = $(".sw-study-thum > .swiper-wrapper");
  studyCode.forEach((obj) => {
    let thumTemp = `<li class="swiper-slide">
                    <a href="${obj.work}">
                      <img src="${obj.thum}" alt="" />
                    </a>
                  </li>`;
    let txtTemp = `<div class="swiper-slide">
                    <ul class="pf-quick">
                      <li><a href="${obj.origin}">Origin</a></li>
                      <li><a href="${obj.work}">Work</a></li>
                      <li><a href="${obj.github}">GitHub</a></li>
                      <li><a href="${obj.vuegit}">Vue-GitHub</a></li>
                      <li><a href="${obj.vuepage}">Vue-Page</a></li>
                    </ul>
                  </div>`;
    studythum += thumTemp;
    studytxt += txtTemp;
    studySwiperthum.html(studythum);
    studySwiperTxt.html(studytxt);
  });
  // portfolio study swiper
  let swStudy = new Swiper(".sw-study-thum", {
    loop: true,
    slidesPerView: 1,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
  let swStudyLink = new Swiper(".sw-study", {
    loop: true,
    touchRatio: 0,
  });
  swStudy.controller.control = swStudyLink;
  $(".sw-study-thum").mouseenter(() => {
    swStudy.autoplay.stop();
  });
  $(".sw-study-thum").mouseleave(() => {
    swStudy.autoplay.start();
  });

  // vue-code-list
  let vuethum = "";
  let vuetxt = "";
  let vueSwiperthum = $(".sw-vue-thum > .swiper-wrapper");
  let vueSwiperTxt = $(".sw-vueclone > .swiper-wrapper");
  vueCode.forEach((obj) => {
    let txtTemp = `<div class="swiper-slide">
                    <ul class="pf-quick">
                      <li><a href="${obj.origin}">Origin</a></li>
                      <li><a href="${obj.work}">Work</a></li>
                      <li><a href="${obj.github}">GitHub</a></li>
                      <li><a href="${obj.vuegit}">Vue-GitHub</a></li>
                      <li><a href="${obj.vuepage}">Vue-Page</a></li>
                    </ul>
                  </div>`;
    let thumTemp = `<li class="swiper-slide">
                    <a href="${obj.work}">
                      <img src="${obj.thum}" alt="" />
                    </a>
                  </li>`;
    vuethum += thumTemp;
    vuetxt += txtTemp;
    vueSwiperTxt.html(vuetxt);
    vueSwiperthum.html(vuethum);
  });
  // portfolio vue.js swiper
  let swVue = new Swiper(".sw-vue-thum", {
    loop: true,
    slidesPerView: 1,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
  let swVueLink = new Swiper(".sw-vueclone", {
    loop: true,
    touchRatio: 0,
  });
  swVue.controller.control = swVueLink;
  $(".sw-vue-thum").mouseenter(() => {
    swVue.autoplay.stop();
  });
  $(".sw-vue-thum").mouseleave(() => {
    swVue.autoplay.start();
  });

  // team & personal-code-list
  let perSwiperthum = $(".sw-team-thum > .swiper-wrapper");
  let perthum = "";
  for (let i = 0; i < personCode.length; i++) {
    let txtList = personCode[i];
    let itemTemp = `<li class="swiper-slide">
                    <a href="${txtList.work}">
                      <img src="${txtList.thum}" alt="" />
                    </a>
                  </li>`;
    perthum += itemTemp;
  }
  perSwiperthum.html(perthum);
  let pertxt = "";
  let perSwiperTxt = $(".sw-team-clone > .swiper-wrapper");
  for (let i = 0; i < personCode.length; i++) {
    let txtList = personCode[i];
    let itemTemp = `<div class="swiper-slide">
                    <ul class="pf-quick">
                      <li>
                        <a href="${txtList.origin}">Origin</a>
                      </li>
                      <li>
                        <a href="${txtList.work}">Work</a>
                      </li>
                      <li>
                        <a href="${txtList.github}">GitHub</a>
                      </li>
                      <li>
                        <a href="${txtList.vuegit}">Vue-GitHub</a>
                      </li>
                      <li>
                        <a href="${txtList.vuepage}">Vue-Page</a>
                      </li>
                    </ul>
                  </div>`;
    pertxt += itemTemp;
  }
  perSwiperTxt.html(pertxt);
  // portfolio team&person swiper
  let swTeam = new Swiper(".sw-team-thum", {
    loop: true,
    slidesPerView: 1,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
  let swTeamLink = new Swiper(".sw-team-clone", {
    loop: true,
    touchRatio: 0,
  });
  swTeam.controller.control = swTeamLink;
  $(".sw-team-thum").mouseenter(() => {
    swTeam.autoplay.stop();
  });
  $(".sw-team-thum").mouseleave(() => {
    swTeam.autoplay.start();
  });

  // work-code-list
  let workSwiperthum = $(".sw-work-thum > .swiper-wrapper");
  let workthum = "";
  for (let i = 0; i < workCode.length; i++) {
    let txtList = workCode[i];
    let itemTemp = `<li class="swiper-slide">
                    <a href="${txtList.work}">
                      <img src="${txtList.thum}" alt="" />
                      <div class="work-desc-thum">
                        <span>?????? ?????? : ${txtList.role}</span>
                        <span>?????? ?????? : ${txtList.date}</span>
                        <span>?????? : ${txtList.desc}</span>
                      </div>
                    </a>
                  </li>`;
    workthum += itemTemp;
  }
  workSwiperthum.html(workthum);
  let worktxt = "";
  let workSwiperTxt = $(".sw-work-clone > .swiper-wrapper");
  for (let i = 0; i < workCode.length; i++) {
    let txtList = workCode[i];
    let itemTemp = `<div class="swiper-slide">
                    <ul class="work-desc">
                      <li class="work-list-title">${txtList.title}</li>
                      <li class="work-list-company">${txtList.company}</li>
                    </ul>
                  </div>`;
    worktxt += itemTemp;
  }
  workSwiperTxt.html(worktxt);
  // portfolio work swiper
  let swWork = new Swiper(".sw-work-thum", {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".sw-work-pagination",
      type: "progressbar",
    },
  });
  let swWorkLink = new Swiper(".sw-work-clone", {
    loop: true,
    touchRatio: 0,
  });
  swWork.controller.control = swWorkLink;
  $(".sw-work-thum").mouseenter(() => {
    swWork.autoplay.stop();
  });
  $(".sw-work-thum").mouseleave(() => {
    swWork.autoplay.start();
  });

  // mbti & possible chart
  const labels = ["?????????", "?????????", "????????????", "??????", "?????????", "?????????"];
  const data = {
    labels: labels,
    datasets: [
      {
        backgroundColor: ["rgb(30 , 30, 30,0.3)"],
        borderColor: "rgb(0, 0, 0,0.05)",
        title: {
          display: false,
        },
        data: [9.5, 10.0, 10.0, 10.0, 9.5, 9.0],
      },
    ],
  };
  const config = {
    type: "radar",
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      elements: {
        pointBorderWidth: 1,
      },
      scale: {
        min: 0,
        max: 10,
        suggestedMin: 0,
        suggestedMax: 10,
        stepSize: 3,
        maxTicksLimit: 5,
        backgroundColor: "#fff",
        ticks: {
          font: {
            size: 16,
            color: "#fff",
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  };
  const myChart = new Chart(document.getElementById("myChart"), config);
});

window.onload = function () {
  AOS.init();

  // go-top
  document.querySelector(".go-top > button").addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      left: 0,
      // behavior: "smooth",
    });
  });

  // contact-quick
  let quickContact = document.querySelector(".quick-contact > a");
  let conList = document.querySelector(".con-list");
  quickContact.addEventListener("click", (event) => {
    event.preventDefault();
    conList.classList.toggle("active");
  });
};
