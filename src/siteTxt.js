const textArr = [
  {
    tit: "가방팝",
    skill: "Vue.js, REST API, vuex",
    subTit:
      "진행요소: 메인 페이지  Vue 버전 업그레이드(Vue3), 이벤트페이지 진행, 마이페이지 구축, shop by api 연동",
    paragraph: `가방, 명품, 신발, 패션, 우먼, 아웃도어, 여행, 모바일테크, 캠핑 등 스타일의 모든 것을 팔고 있는 사이트입니다.<br /><br />메인페이지 내의 요소들을 Vue2 에서 Vue3로 업그레이드하는 작업을 진행하였으며, 기존 코드에서 javascript  animate 함수로 구현했던 단락을 setInterval 과 css 애니메이션으로 내부 코드를 바꾸기도 했었고 이전의 퍼플리셔가 구현해 둔 jquery를 최대한 제거해서 javascript로 동작할 수 있도록 리뉴얼 작업을 진행했었습니다. <br /><br />Vue3로 업그레이드 중에 상태 관리 라이브러리 vuex를 mapGetter이 아닌 mapState로 변경하는 작업도 같이 진행했었습니다.`,
    imgSrc: "./img/gabangpop_mockup.png",
    sitePc: "https://gabangpop.co.kr/",
    siteMo: "https://m.gabangpop.co.kr/",
  },
  {
    tit: "깔세몰",
    skill: "Vue.js, REST API, vuex",
    subTit: "진행요소: 메인 페이지  Vue 버전 업그레이드(Vue3)",
    paragraph: `글로벌 브랜드 파격세일, 본사 창고 대방출, 원가이하 쇼핑몰 깔세몰 리퍼상품들을 팔고 있는 사이트입니다.<br /><br />메인페이지 내의 요소들을 Vue2 에서 Vue3로 업그레이드하는 작업을 진행하였으며, 기존 코드에서 이전의 퍼플리셔가 구현해 둔 jquery를 제거해서 javascript로 동작할 수 있도록 리뉴얼 작업을 진행했었습니다. <br /><br />Vue3로 업그레이드 중에 상태 관리 라이브러리 vuex를 mapGetter이 아닌 mapState로 변경하는 작업도 같이 진행했었습니다.`,
    imgSrc: "./img/ggalse_mockup.png",

    sitePc: "https://gabangpop.co.kr/",
    siteMo: "https://m.gabangpop.co.kr/",
  },
  {
    tit: "오보즈 코리아",
    skill: "Vue.js, REST API, vuex, Figma",
    subTit:
      "진행요소: 메인 페이지 퍼블리싱 및 Vue 버전 업그레이드(Vue3), 이벤트페이지 진행, shop by api 연동",
    paragraph: `하이킹, 트레일 러닝 전문 브랜드 오보즈 풋웨어 코리아 공식 온라인 스토어 True to the trail 사이트입니다.<br /><br />메인페이지 요소들을 퍼블리싱 후 shop by api를 이용해 데이터 연동작업을 진행했습니다. 운영을 지속하는 중에도 추가 단락이 생기면 추가 단락을 만들어서 넣기도 하는 보수 작업도 같이 진행했었습니다. <br /><br />기존 운영하던 사이트들에서 메인페이지와 일부 페이지를 제외한 상품 전시 페이지라던지 공지사항같은 페이지 내 아이콘 요소들을 빠르게 렌더링할 수 있도록 figma로 구현해서 사이트 구축시 더 시간이 덜 소요되도록 작업을 했었습니다.`,
    imgSrc: "./img/oboz_mockup.png",

    sitePc: "https://gabangpop.co.kr/",
    siteMo: "https://m.gabangpop.co.kr/",
  },
  {
    tit: "마모트 코리아",
    skill: "Vue.js, REST API, vuex, Figma",
    subTit:
      "진행요소: 메인 페이지 퍼블리싱 및 Vue 버전 업그레이드(Vue3), 이벤트페이지 진행, shop by api 연동",
    paragraph: `고어텍스 근본 브랜드 마모트코리아, 아웃도어 액티비티에 최적화된 의류, 가방, 모자 등 자유롭고 독창적이며 비일상을 체험할 수 있는 스타일을 제공하는 사이트입니다.<br /><br />메인페이지 요소들을 퍼블리싱 후 shop by api를 이용해 데이터 연동작업을 진행했습니다. 운영을 지속하는 중에도 추가 단락이 생기면 추가 단락을 만들어서 넣기도 하는 보수 작업도 같이 진행했었습니다. <br /><br />사이트 내의 Find A Store 페이지  리뉴얼을 하면서 shop by api를 사용했습니다.`,
    imgSrc: "./img/marmot_mockup.png",

    sitePc: "https://gabangpop.co.kr/",
    siteMo: "https://m.gabangpop.co.kr/",
  },
  {
    tit: "웨어라운지",
    skill: "Vue.js, REST API, vuex, Figma",
    subTit: "진행요소: 메인 페이지 퍼블리싱, shop by api 연동",
    paragraph: `브랜드 큐레이션 편집샵 웨어라운지 사이트 입니다.<br /><br />메인페이지 요소들을 퍼블리싱 후 shop by api를 이용해 데이터 연동작업을 진행했습니다. pc 사이트가 가로값이 애매해서 css 작업 중 %로 계산해서 구현한 사이트입니다.`,
    imgSrc: "./img/wearlounge_mockup.png",

    sitePc: "https://gabangpop.co.kr/",
    siteMo: "https://m.gabangpop.co.kr/",
  },
  {
    tit: "WLAB",
    skill: "Vue.js, REST API, vuex, Figma",
    subTit: "진행요소: 메인 페이지 퍼블리싱, shop by api 연동, 마이페이지 구현",
    paragraph: `No1. 고커버/고발색 페이스메이크업과 메이크업핏을 살리는 하이브리드 스킨케어 전문 브랜드 사이트 입니다.<br /><br />메인페이지 요소들을 퍼블리싱 후 shop by api를 이용해 데이터 연동작업을 진행했습니다. 이 사이트 내의 회원등급페이지를 구현했으며 `,
    imgSrc: "./img/wlab_mockup.png",

    sitePc: "https://gabangpop.co.kr/",
    siteMo: "https://m.gabangpop.co.kr/",
  },
  {
    tit: "알라딘",
    skill: "React, REST API, PhotoShop",
    subTit: "진행요소: 프로젝트 구현",
    paragraph: `No1. 고커버/고발색 페이스메이크업과 메이크업핏을 살리는 하이브리드 스킨케어 전문 브랜드 사이트 입니다.<br /><br />메인페이지 요소들을 퍼블리싱 후 shop by api를 이용해 데이터 연동작업을 진행했습니다. 이 사이트 내의 회원등급페이지를 구현했으며 `,
    imgSrc: "./img/aladin_mockup.png",

    sitePc: "https://gabangpop.co.kr/",
  },
];
