$(document).ready(function () {
  $("#porfile").waypoint(() => {
    $(".quick-wrap").toggleClass("active");
    $(".go-top").toggleClass("active");
  });
  $("#mbti").waypoint(function () {
    $(".quick-wrap").toggleClass("active");
  });

  // side - menu
  $(".side-menu").click((event) => {
    event.preventDefault();
    $(".side-menu-dim").css({ left: 0, display: "block" });
  });
  $(".close").click((event) => {
    event.preventDefault();
    $(".side-menu-dim").css({ left: 100, display: "none" });
  });

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

  // portfolio all swiper
  let allPFthum = new Swiper(".sw-portfolio-thum", {
    effect: "cube",
    grabCursor: true,
    touchRatio: 0,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },

    loop: true,
  });
  let allPFLink = new Swiper(".sw-portfolio-txt", {
    loop: true,
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 0,
      shadowScale: 0,
    },
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

  // portfolio team swiper
  let swTeam = new Swiper(".sw-team-thum", {
    loop: true,
    slidesPerView: 1,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
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

  // mbti & possible chart
  const labels = ["책임감", "팀워크", "끈기", "전문성", "친화력"];
  const data = {
    labels: labels,
    datasets: [
      {
        backgroundColor: ["rgb(180, 180, 180,0.7)"],
        borderColor: "rgb(0, 0, 0,0.5)",
        title: {
          display: false,
        },
        data: [95, 100, 100, 95, 90],
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
        max: 100,
        suggestedMin: 0,
        suggestedMax: 100,
        stepSize: 4,
        maxTicksLimit: 10,
        ticks: {
          font: {
            size: 16,
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
};
