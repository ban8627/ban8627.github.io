const featuredProjects = [
  {
    title: "vue-ghibli",
    category: "API Practice",
    description:
      "지브리 API 활용 프로젝트입니다. API 데이터를 화면에 정리하고 Vue 기반 인터페이스로 표현하는 흐름을 학습했습니다.",
    stack: ["Vue", "API", "JavaScript"],
    image: "images/ghibli.png",
    github: "https://github.com/ban8627/vue-ghibli",
    demo: "https://ban8627.github.io/page-ghibli/",
  },
  {
    title: "ban8627.github.io",
    category: "Portfolio",
    description:
      "개인 포트폴리오 사이트입니다. 정적 HTML, CSS, JavaScript 기반으로 프로젝트와 경력 정보를 구성했습니다.",
    stack: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    image: "images/Color logo - no background.png",
    github: "https://github.com/ban8627/ban8627.github.io",
    demo: "https://ban8627.github.io/",
  },
  {
    title: "vue-noelohills",
    category: "Vue Clone",
    description:
      "노엘로힐스 페이지를 Vue로 재구성한 학습 프로젝트입니다. 기존 퍼블리싱 경험을 컴포넌트 기반 구조로 확장했습니다.",
    stack: ["Vue", "JavaScript", "HTML", "CSS"],
    image: "images/noelo.png",
    github: "https://github.com/ban8627/vue-noelohills",
    demo: "https://ban8627.github.io/page-noelo/",
  },
];

const otherProjects = [
  {
    title: "STX Const",
    category: "Publishing Clone",
    description: "STX 건설 웹사이트 클론 코딩 및 퍼블리싱 프로젝트입니다.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: "images/stxconst.png",
    github: "https://github.com/ban8627/stxconst",
    demo: "https://ban8627.github.io/stxconst/",
  },
  {
    title: "K-water",
    category: "Publishing Clone",
    description: "K-water 웹사이트 클론 코딩 프로젝트입니다.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: "images/kwater.png",
    github: "https://github.com/ban8627/k-warter",
    demo: "https://ban8627.github.io/k-warter/",
  },
  {
    title: "정육각",
    category: "Personal Clone",
    description: "정육각 웹사이트 클론 코딩 및 Vue 학습으로 확장한 프로젝트입니다.",
    stack: ["HTML", "CSS", "JavaScript", "Vue"],
    image: "images/jeongyookgak.png",
    github: "https://github.com/ban8627/jeongyookgak",
    demo: "https://ban8627.github.io/jeongyookgak/",
  },
  {
    title: "우성사료",
    category: "Publishing Clone",
    description: "우성사료 웹사이트 클론 코딩 프로젝트입니다.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: "images/Woosungfeed.png",
    github: "https://github.com/ban8627/WoosungFeed",
    demo: "https://ban8627.github.io/WoosungFeed/",
  },
  {
    title: "거제청년센터 이룸",
    category: "Study Clone",
    description: "거제청년센터 이룸 웹사이트 클론 코딩 및 Vue 페이지 학습 프로젝트입니다.",
    stack: ["HTML", "CSS", "JavaScript", "Vue"],
    image: "images/geoje.png",
    github: "https://github.com/ban8627/geojeyouth",
    demo: "https://ban8627.github.io/geojeyouth/",
  },
  {
    title: "코레일",
    category: "Team Clone",
    description: "한국철도공사 웹사이트를 기반으로 진행한 팀 클론 코딩 프로젝트입니다.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: "images/korail.png",
    github: "https://github.com/ban8627/korail",
    demo: "https://qwertymi.github.io/korail/",
  },
];

const createProjectCard = (project, featured = false) => {
  const stack = project.stack.map((item) => `<span>${item}</span>`).join("");
  const demoLink = project.demo
    ? `<a href="${project.demo}" target="_blank" rel="noreferrer">Live Demo</a>`
    : "";

  return `
    <article class="project-card${featured ? " featured" : ""}">
      <img src="${project.image}" alt="${project.title} 프로젝트 썸네일" loading="lazy" />
      <div class="project-body">
        <div class="card-meta"><span>${project.category}</span></div>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-stack">${stack}</div>
        <div class="project-links">
          <a href="${project.github}" target="_blank" rel="noreferrer">GitHub</a>
          ${demoLink}
        </div>
      </div>
    </article>
  `;
};

const renderProjects = () => {
  const featuredRoot = document.querySelector("#featured-projects");
  const otherRoot = document.querySelector("#other-projects");

  if (featuredRoot) {
    featuredRoot.innerHTML = featuredProjects
      .map((project) => createProjectCard(project, true))
      .join("");
  }

  if (otherRoot) {
    otherRoot.innerHTML = otherProjects.map((project) => createProjectCard(project)).join("");
  }
};

const initNavigation = () => {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector("#mobile-menu");

  if (!toggle || !menu) {
    return;
  }

  const closeMenu = () => {
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "메뉴 열기");
    menu.setAttribute("aria-hidden", "true");
    menu.classList.remove("active");
  };

  const openMenu = () => {
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "메뉴 닫기");
    menu.setAttribute("aria-hidden", "false");
    menu.classList.add("active");
  };

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
};

const setCurrentYear = () => {
  const year = document.querySelector("#current-year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }
};

const initEmailCopy = () => {
  const copyButton = document.querySelector("#copy-email");
  const feedback = document.querySelector("#copy-feedback");
  const email = "ban8627@gmail.com";

  if (!copyButton || !feedback) {
    return;
  }

  const setFeedback = (message) => {
    feedback.textContent = message;
    window.setTimeout(() => {
      if (feedback.textContent === message) {
        feedback.textContent = "";
      }
    }, 3000);
  };

  const copyWithTextarea = () => {
    const textarea = document.createElement("textarea");
    textarea.value = email;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.left = "0";
    textarea.style.top = "0";
    textarea.style.opacity = "0";
    document.body.append(textarea);
    textarea.focus({ preventScroll: true });
    textarea.select();
    textarea.setSelectionRange(0, email.length);
    document.execCommand("copy");
    textarea.remove();
  };

  copyButton.addEventListener("click", async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        try {
          await navigator.clipboard.writeText(email);
        } catch (error) {
          copyWithTextarea();
        }
      } else {
        copyWithTextarea();
      }

      setFeedback("이메일 주소가 복사되었습니다.");
    } catch (error) {
      setFeedback("복사하지 못했습니다. 이메일 주소를 직접 선택해 주세요.");
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  initNavigation();
  initEmailCopy();
  setCurrentYear();
});
