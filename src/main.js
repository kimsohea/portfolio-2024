(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const siteSec = document.querySelector(".site_sec");
    const introTop = siteSec.offsetHeight;
    const siteIcons = document.querySelectorAll(".site_sec .site_icons li");
    const siteDeploy = document.querySelector(
      ".site_sec .site_intro .site_deploy"
    );
    const siteInfo = document.querySelectorAll(
      ".site_sec .site_intro .site_info *"
    );
    const scrollArr = [];
    const winHeight = this.innerHeight;
    const scrollState = 200;
    for (let num = 0; num < 10; num++) {
      scrollArr.push(scrollState * num + winHeight);
    }

    window.addEventListener("scroll", function () {
      let scroll = this.scrollY;

      if (winHeight < scroll && scroll > introTop && scroll < scrollArr[9]) {
        let cssTop = scroll - introTop + 20;
        siteSec.style.transform = "translateY(" + cssTop + "px)";
        siteSec.classList.add("active");
      } else if (scroll < scrollArr[0]) {
        siteSec.classList.remove("active");
      }

      scrollArr.forEach((state, idx) => {
        if (scroll > state && idx < siteIcons.length) {
          siteIcons[idx].classList.add("active");

          // idx 범위 내에서 양쪽의 active 클래스 제거
          if (siteIcons[idx - 1]) siteIcons[idx - 1].classList.remove("active");
          if (siteIcons[idx + 1]) siteIcons[idx + 1].classList.remove("active");
        }
      });
      console.log(scrollArr, scroll);
      // console.log(siteIcons, siteDeploy, siteInfo);
    });
  });
})();
