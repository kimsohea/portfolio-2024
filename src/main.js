(() => {
	document.addEventListener("DOMContentLoaded", () => {
		const siteSec = document.querySelector(".site_sec");
		const introTop = siteSec.offsetHeight;
		const siteIcons = document.querySelectorAll(".site_sec .site_icons li");
		const siteDeploy = document.querySelector(".site_sec .site_intro .site_mockup");
		const siteInfo = document.querySelectorAll(".site_sec .site_intro .site_info>*");
		const scrollArr = [];
		const winHeight = this.innerHeight;
		const scrollState = 200;
		let imgFlg = false;

		for (let num = 0; num < 10; num++) {
			if (window.innerWidth > 900) {
				scrollArr.push(scrollState * num + winHeight);
			} else {
				scrollArr.push(scrollState * num + siteSec.offsetTop);
			}
		}

		let dummyHeight = 150;

		if (window.innerWidth > 900) dummyHeight -= 200;

		document.querySelector(".dummy").style.height = scrollArr[9] - introTop + dummyHeight + "px";

		window.addEventListener("scroll", function () {
			let scroll = this.scrollY;

			if (window.innerWidth > 900) {
				if (winHeight < scroll && scroll > introTop && scroll < scrollArr[9]) {
					let cssTop = scroll - introTop;
					if (this.window.innerWidth > 1500) cssTop -= 50;
					siteSec.style.transform = "translateY(" + cssTop + "px)";
					siteSec.classList.add("active");
				} else if (scroll < scrollArr[0]) {
					siteSec.classList.remove("active");
					siteSec.style.transform = "translateY(0px)";
				}
			} else {
				if (siteSec.offsetTop < scroll && scroll < scrollArr[9]) {
					let cssTop = scroll - siteSec.offsetTop;
					siteSec.style.transform = "translateY(" + cssTop + "px)";
					siteSec.classList.add("active");
				} else if (scroll < scrollArr[0]) {
					siteSec.classList.remove("active");
					siteSec.style.transform = "translateY(0px)";
				}
			}

			scrollArr.forEach((state, idx) => {
				if (scroll > state && idx < siteIcons.length) {
					siteIcons[idx].classList.add("active");

					siteInfo[0].innerText = textArr[idx].tit;
					siteInfo[1].innerText = textArr[idx].skill;
					siteInfo[2].innerText = textArr[idx].subTit;
					siteInfo[3].innerHTML = textArr[idx].paragraph;
					siteInfo[4].setAttribute("href", textArr[idx].sitePc);
					siteInfo[5].setAttribute("href", textArr[idx].siteMo);

					siteDeploy.setAttribute("src", textArr[idx].imgSrc);
					imgFlg = true;

					if (idx > 5) {
						siteInfo[4].innerText = "사이트 바로가기";
						siteInfo[5].style.display = "none";
					} else {
						siteInfo[4].innerText = "PC 사이트 바로가기";
						siteInfo[5].style.display = "block";
					}

					// idx 범위 내에서 양쪽의 active 클래스 제거
					if (siteIcons[idx - 1]) siteIcons[idx - 1].classList.remove("active");
					if (siteIcons[idx + 1]) siteIcons[idx + 1].classList.remove("active");
				}

				if (imgFlg) siteDeploy.classList.add("active");
				else siteDeploy.classList.remove("active");
			});
		});

		siteIcons.forEach((item, idx) => {
			item.addEventListener("click", () => {
				console.log(item.querySelector("button img").attributes[0]);
				window.scrollTo({ top: scrollArr[idx + 1], behavior: "smooth" });
			});
		});
	});
})();
