import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <FooterContents />
        <Marks />
        <Bottom />
      </div>
    </footer>
  );
};

const FooterContents = () => {
  return (
    <div className="footerContents">
      <FooterCustomer />
      <FooterRight />
    </div>
  );
};

const FooterCustomer = () => {
  return (
    <div className="footerCustomer">
      <h2 className="footerCustomerTitle">
        고객행복센터 <span className="runTime">365일 오전 7시 - 오후 7시</span>
      </h2>
      <strong className="strong">1644-1107</strong>
      <div className="button-wrapper">
        <button className="footerButton">카카오톡 문의</button>
        <button className="footerButton">1:1 문의</button>
        <button className="footerButton">대량주문 문의</button>
      </div>
      <div className="mailto">
        비회원 문의: help@kurlycorp.com
        <br></br>
        비회원 대량주문 문의: kurlygift@kurlycorp.com
      </div>
    </div>
  );
};

const FooterRight = () => {
  return (
    <div className="right">
      <ul className="corpMenu">
        {FOOTER_DATA.map(el => {
          return (
            <li className="footerDataMap" key={el.id}>
              {el.content}
            </li>
          );
        })}
      </ul>
      <div className="corpInfo">
        법인명 (상호) : 주식회사 컬리 <span className="divide">|</span>{' '}
        사업자등록번호 : 261-81-23567 사업자정보 확인
        <br></br>
        통신판매업 : 제 2018-서울강남-01646 호 <span className="divide">|</span>
        개인정보보호책임자 : 이원준
        <br></br>
        주소 : 서울특별시 강남구 테헤란로 133, 18층(역삼동){' '}
        <span className="divide">|</span>
        대표이사 : 김슬아
        <br></br>
        입점문의 : 입점문의하기 <span className="divide">|</span> 제휴문의 :
        입점문의하기 <br></br>
        채용문의 : recruit@kurlycorp.com <br></br> 팩스 : 070 - 7500 - 6098
      </div>
      <ul className="corpLinks">
        {LINKS.map(link => {
          return (
            <li className="corpLinksMap" key={link.id}>
              <img
                className="corpLinksImage"
                src={link.img}
                alt={link.alt}
              ></img>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Marks = () => {
  return (
    <div className="footerMarks">
      {GUARANTEE.map(item => {
        return (
          <button className="markButton" key={item.id}>
            <img className="markImage" src={item.img} alt={item.alt}></img>
            <p className="itemText">{item.text}</p>
          </button>
        );
      })}
    </div>
  );
};

const Bottom = () => {
  return (
    <div className="footerBottom">
      마켓컬리에서 판매되는 상품 중에는 마켓컬리에 입점한 개별 판매자가 판매하는
      마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.
      <br></br>
      마켓플레이스(오픈마켓) 상품의 경우 컬리는 통신판매중개자로서 통신판매의
      당사자가 아닙니다. 컬리는 해당 상품의 주문, 품질, 교환/환불 등 의무와
      책임을 부담하지 않습니다.
      <em className="corpRights">© KURLY CORP. ALL RIGHTS RESERVED</em>
    </div>
  );
};

export default Footer;

const FOOTER_DATA = [
  {
    id: 1,
    content: '컬리소개',
  },
  {
    id: 2,
    content: '컬리소개영상',
  },
  {
    id: 3,
    content: '인재채용',
  },
  {
    id: 4,
    content: '이용약관',
  },
  {
    id: 5,
    content: '개인정보처리방침',
  },
  {
    id: 6,
    content: '이용안내',
  },
];

const LINKS = [
  {
    id: 1,
    alt: 'Kurly Account Instagram',
    link: 'https://www.instagram.com/marketkurly/',
    img: 'https://res.kurly.com/pc/ico/1810/ico_instagram.png',
  },
  {
    id: 2,
    alt: 'Kurly Account Facebook',
    link: 'https://www.facebook.com/marketkurly',
    img: 'https://res.kurly.com/pc/ico/1810/ico_fb.png',
  },
  {
    id: 3,
    alt: 'Kurly Naver Blog',
    link: 'https://blog.naver.com/marketkurly',
    img: 'https://res.kurly.com/pc/ico/1810/ico_blog.png',
  },
  {
    id: 4,
    alt: 'Kurly Naver Post',
    link: 'https://m.post.naver.com/marketkurly',
    img: 'https://res.kurly.com/pc/ico/1810/ico_naverpost.png',
  },
  {
    id: 5,
    alt: 'Kurly Youtube Video',
    link: 'https://www.youtube.com/channel/UCfpdjL5pl-1qKT7Xp4UQzQg',
    img: 'https://res.kurly.com/pc/ico/1810/ico_youtube.png',
  },
];

const GUARANTEE = [
  {
    id: 1,
    alt: '인증범위',
    text: '[인증범위] 마켓컬리 쇼핑몰 서비스 개발 운영  (심사받지 않은 물리적 인프라 제외) [유효기간] 2022.01.19 ~ 2025.01.18',
    img: 'https://res.kurly.com/pc/ico/2208/logo_isms.svg',
  },
  {
    id: 2,
    alt: '개인정보보호',
    text: '개인정보보호 우수 웹사이트 개인정보처리시스템 인증 (ePRIVACY PLUS)',
    img: 'https://res.kurly.com/pc/ico/2208/logo_privacy.svg',
  },
  {
    id: 3,
    alt: '토스페이먼츠',
    text: '토스페이먼츠 구매안전(에스크로) 서비스를 이용하실 수 있습니다.',
    img: 'https://res.kurly.com/pc/ico/2208/logo_tosspayments.svg',
  },
  {
    id: 4,
    alt: '우리은행',
    text: '고객님이 현금으로 결제한 금액에 대해 우리은행과 채무지급보증 계약을 체결하여 안전거래를 보장하고 있습니다.',
    img: 'https://res.kurly.com/pc/ico/2208/logo_wooriBank.svg',
  },
];
