// console.log();

//ローディング後背景色が開く
let leftDoor = document.getElementById("c_doorLeft");
let rightDoor = document.getElementById("c_doorRight");

function noScroll(e) {
  e.preventDefault();
}

window.addEventListener(
  "DOMContentLoaded",
  function () {
    this.document.addEventListener("touchmove", noScroll, { passive: false });
    this.document.addEventListener("wheel", noScroll, { passive: false });
    setTimeout(function () {
      leftDoor.classList.add("js_open");
      rightDoor.classList.add("js_open");
    }, 800);

    setTimeout(function () {
      document.removeEventListener("touchmove", noScroll);
      document.removeEventListener("wheel", noScroll);
    }, 1600);
  },
  false
);

//パンくずナビ
let breadcrumb = document.getElementById("js_breadcrumb");
let header = document.getElementById("js_header");

breadcrumb.addEventListener(
  "click",
  function () {
    if (breadcrumb.classList.contains("js_breadcrumbCross")) {
      breadcrumb.classList.remove("js_breadcrumbCross");
    } else {
      breadcrumb.classList.add("js_breadcrumbCross");
    }
  },
  false
);

//pageTopの挙動
//タイトルMenuの挙動
let pageTop = document.getElementById("pageTop");
pageTop.classList.remove("show");

let target = document.querySelectorAll(".e_title03,.e_title04");

const options = {
  root: null,
  rootMargin: "-150px 0px",
  threshold: 0,
};

const observer = new IntersectionObserver(intersect, options);

target.forEach((value) => {
  observer.observe(value);
});

function intersect(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      pageTop.classList.add("show");
      entry.target.classList.add("js_show");
    }
  });
}

pageTop.addEventListener(
  "click",
  function () {
    pageTop.classList.add("upMove");
    setTimeout(function () {
      pageTop.classList.remove("upMove");
      pageTop.classList.remove("show");
    }, 1800);
    header.scrollIntoView(true, { behavior: "smooth" });
    se;
  },
  false
);

// gridカードのホバー時に下からコンテンツが上がってくる挙動
// _gridファイル　.c_grid__link
let gridContent = document.querySelectorAll(".c_grid__inner");
let gridLink = document.querySelectorAll(".c_grid__link");
gridLink.forEach((elemnt) => {
  elemnt.addEventListener(
    "mouseenter",
    function () {
      elemnt.classList.add("js_hover");
    },
    false
  );
});

gridLink.forEach((elemnt) => {
  elemnt.addEventListener(
    "mouseleave",
    function () {
      elemnt.classList.remove("js_hover");
    },
    false
  );
});

gridLink.forEach((element) => {
  element.addEventListener(
    "touchstart",
    function () {
      element.classList.add("js_hover");
    },
    false
  );
});

gridLink.forEach((element) => {
  element.addEventListener(
    "touchend",
    function () {
      element.classList.remove("js_hover");
    },
    false
  );
});
