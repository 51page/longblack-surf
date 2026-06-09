import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Bell,
  Bookmark,
  CalendarClock,
  Check,
  ChevronRight,
  Compass,
  Menu,
  Quote,
  Search,
  Sparkles,
  Ticket,
} from "lucide-react";
import "./styles.css";

const notes = [
  {
    id: 1,
    tag: "BRANDING",
    title: "작은 브랜드는 어떻게 오래 기억되는가",
    desc: "유행보다 태도를 쌓아, 고객의 일상에 자리를 만든 브랜드들의 공통점",
    author: "롱블랙",
    time: "12분",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85",
    tone: "lime",
  },
  {
    id: 2,
    tag: "F&B",
    title: "커피 한 잔의 경험을 다시 설계한 사람들",
    desc: "좋은 맛을 넘어 머물고 싶은 시간을 파는 서울의 작은 카페 이야기",
    author: "김지수",
    time: "9분",
    image:
      "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=900&q=85",
    tone: "cream",
  },
  {
    id: 3,
    tag: "WORK",
    title: "하루 1000분을 지배할 때 기회가 열린다",
    desc: "바쁜 사람에게 필요한 것은 더 많은 시간이 아니라 선명한 우선순위다",
    author: "롱블랙",
    time: "11분",
    image:
      "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=900&q=85",
    tone: "blue",
  },
  {
    id: 4,
    tag: "DESIGN",
    title: "좋은 취향은 관찰에서 시작된다",
    desc: "보고, 고르고, 남기는 습관이 자신만의 기준이 되기까지",
    author: "박소영",
    time: "8분",
    image:
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=900&q=85",
    tone: "pink",
  },
  {
    id: 5,
    tag: "PEOPLE",
    title: "내향적인 리더가 팀을 움직이는 방식",
    desc: "말을 줄이고 질문을 늘렸을 때, 조직의 속도가 달라졌다",
    author: "이현주",
    time: "10분",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85",
    tone: "orange",
  },
];

const quotes = [
  {
    text: "취향은 무엇을 좋아하는지가 아니라, 무엇을 반복해서 바라보는지에 가깝다.",
    source: "좋은 취향은 관찰에서 시작된다",
    likes: "2,184",
    tone: "cream",
  },
  {
    text: "브랜드는 설명으로 기억되지 않는다. 매번 같은 태도를 보여줄 때 비로소 기억된다.",
    source: "작은 브랜드는 어떻게 오래 기억되는가",
    likes: "1,706",
    tone: "lime",
  },
  {
    text: "시간이 없다는 말은 때로, 아직 무엇을 포기할지 정하지 못했다는 뜻이다.",
    source: "하루 1000분을 지배할 때 기회가 열린다",
    likes: "3,021",
    tone: "blue",
  },
  {
    text: "좋은 공간은 눈에 띄기보다, 나도 모르게 오래 머물게 한다.",
    source: "커피 한 잔의 경험을 다시 설계한 사람들",
    likes: "1,489",
    tone: "coral",
  },
];

const benefits = [
  {
    brand: "TIM HORTONS",
    brandKo: "팀홀튼",
    title: "캐나다의 커피 타임을 가볍게",
    place: "팀홀튼 코리아 · 전 매장",
    detail: "시그니처 음료 1잔 20% 혜택",
    tone: "timhortons",
    image: "/brands/tim-hortons.jpg",
  },
  {
    brand: "HINOK",
    brandKo: "희녹",
    title: "제주 편백의 맑은 감각을 일상에",
    place: "희녹 · 온라인 스토어",
    detail: "더 스프레이 & 핸드워시 15% 혜택",
    tone: "hinok",
    image: "/brands/hinok.jpg",
  },
  {
    brand: "BALMUDA",
    brandKo: "발뮤다",
    title: "매일 쓰는 도구가 기분을 바꾸는 순간",
    place: "발뮤다 코리아 · 온라인",
    detail: "더 토스터 구매 고객 특별 혜택",
    tone: "balmuda",
    image: "/brands/balmuda-toaster.jpg",
  },
  {
    brand: "RON MUECK",
    brandKo: "론 뮤익",
    title: "현실보다 더 현실적인 조각 앞에서",
    place: "국립현대미술관 서울",
    detail: "전시 관람권 멤버 특별 혜택",
    tone: "ronmueck",
    image:
      "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1000&q=90",
  },
  {
    brand: "SUPER MATCHA",
    brandKo: "슈퍼말차",
    title: "말차를 오늘의 방식으로 즐기는 법",
    place: "슈퍼말차 · 성수 플래그십",
    detail: "시그니처 말차 메뉴 20% 혜택",
    tone: "supermatcha",
    image: "/brands/super-matcha.jpg",
  },
];

const previews = [
  {
    tag: "TODAY'S DEEP DIVE",
    category: "BRANDING",
    title: "작은 브랜드는 어떻게 오래 기억되는가",
    author: "롱블랙",
    date: "2026.06.09",
    readTime: "12분",
    lead:
      "브랜드를 오래 기억하게 만드는 건 화려한 캠페인이 아닙니다. 매일 같은 태도로 건네는 작은 경험들이죠.",
    paragraphs: [
      "서울의 한 골목에 간판도 작은 카페가 있습니다. 메뉴는 자주 바뀌지 않고, 새로운 굿즈를 쏟아내지도 않아요. 대신 매일 같은 음악과 같은 인사, 같은 온도의 커피를 건넵니다.",
      "사람들은 그곳을 설명할 때 맛보다 먼저 기분을 이야기합니다. 브랜드가 제품의 이름을 넘어 하나의 감각으로 기억되기 시작한 겁니다.",
    ],
    quote:
      "오래가는 브랜드는 더 크게 말하지 않는다. 같은 목소리로 오래 말한다.",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1100&q=90",
    caption: "매일 반복되는 작은 경험이 브랜드의 표정을 만든다.",
    afterImage: [
      "일관성은 모든 것을 똑같이 만드는 일이 아닙니다. 무엇이 달라져도 지켜야 할 한 가지를 정하는 일에 가깝습니다.",
      "고객은 브랜드의 전략을 읽지 않습니다. 오늘 받은 한 잔, 포장을 열 때의 감촉, 문제가 생겼을 때 들은 한마디를 기억합니다. 그 장면들이 쌓여 결국 브랜드가 됩니다.",
    ],
  },
];

const carousels = [
  {
    eyebrow: "CURATED FOR YOU",
    title: "오늘의 발견을 옆으로 넘겨보세요",
    items: [
      {
        tag: "SPACE",
        title: "좋은 공간은 왜 자꾸 다시 찾게 될까",
        meta: "서울의 작은 공간 5곳",
        image:
          "https://images.unsplash.com/photo-1493857671505-72967e2e2760?auto=format&fit=crop&w=900&q=85",
      },
      {
        tag: "BRAND",
        title: "오래 쓰고 싶은 물건을 만드는 태도",
        meta: "생활 브랜드 큐레이션",
        image:
          "https://images.unsplash.com/photo-1528459105426-b9548367069b?auto=format&fit=crop&w=900&q=85",
      },
      {
        tag: "COFFEE",
        title: "한 잔의 시간을 다르게 만드는 카페",
        meta: "롱블랙 셀렉션",
        image:
          "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=900&q=85",
      },
      {
        tag: "BOOKS",
        title: "지금 곁에 두고 싶은 세 권의 책",
        meta: "에디터의 책상",
        image:
          "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=900&q=85",
      },
    ],
  },
];

const upcomingContents = [
  {
    name: "송길영",
    role: "마인드 마이너",
    title: "가벼운 문명이 온다",
    desc: "AI 시대, 작고 빠른 개인은 어떻게 일하고 살아갈까",
    date: "6월 12일 공개",
    image: "/teasers/song-gilyoung.jpg",
    tone: "cobalt",
  },
  {
    name: "봉준호",
    role: "영화감독",
    title: "상상력은 어디에서 시작되는가",
    desc: "세계가 기다리는 이야기꾼의 관찰과 창작",
    date: "6월 16일 공개",
    image: "/teasers/bong-joonho.png",
    tone: "olive",
  },
  {
    name: "박찬욱",
    role: "영화감독",
    title: "아름다움과 잔혹함 사이",
    desc: "한 장면을 완성하는 집요한 질문들",
    date: "6월 20일 공개",
    image: "/teasers/park-chanwook.jpg",
    tone: "burgundy",
  },
  {
    name: "전지현",
    role: "배우",
    title: "오래 사랑받는 사람의 리듬",
    desc: "자신만의 속도로 커리어를 이어가는 법",
    date: "6월 24일 공개",
    image: "/teasers/jun-jihyun.png",
    tone: "aqua",
  },
];

const regularFeedPattern = [
  "note",
  "quote",
  "note",
  "note",
  "benefit",
  "quote",
  "note",
  "quote",
  "note",
];

// One immersive preview in each 30-item cycle keeps its share near 3%.
const feedPattern = Array.from({ length: 30 }, (_, index) =>
  index === 8
    ? "preview"
    : index === 13
      ? "mypage"
    : index === 19
      ? "carousel"
      : index === 25
        ? "upcoming"
    : regularFeedPattern[index % regularFeedPattern.length],
);

function App() {
  const [items, setItems] = useState(() => buildBatch(0));
  const [batch, setBatch] = useState(1);
  const [saved, setSaved] = useState(new Set());
  const [activeFilter, setActiveFilter] = useState("For You");
  const loader = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setItems((current) => [...current, ...buildBatch(batch)]);
        setBatch((value) => value + 1);
      },
      { rootMargin: "500px" },
    );
    if (loader.current) observer.observe(loader.current);
    return () => observer.disconnect();
  }, [batch]);

  const toggleSaved = (key) => {
    setSaved((current) => {
      const next = new Set(current);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  return (
    <main>
      <div className="campaign">
        오늘의 노트가 도착했어요
        <ChevronRight size={17} />
      </div>
      <header>
        <span className="wordmark">LongBlack</span>
        <div className="header-actions">
          <Search size={25} strokeWidth={1.8} />
          <Menu size={29} strokeWidth={1.8} />
        </div>
      </header>

      <section className="intro">
        <div className="intro-top">
          <div>
            <p className="kicker">DISCOVER SOMETHING NEW</p>
            <h1>
              생각이 흐르는 대로,
              <br />
              오늘의 롱블랙을 서핑하세요.
            </h1>
          </div>
          <Compass size={33} strokeWidth={1.4} />
        </div>
        <div className="shot-card">
          <div>
            <p>김롱블랙 님의 남은 샷</p>
            <strong>7</strong>
            <span> shots</span>
          </div>
          <button>멤버십 보기 <ArrowUpRight size={14} /></button>
        </div>
      </section>

      <nav className="filters" aria-label="콘텐츠 필터">
        {["For You", "인기 문장", "브랜딩", "커리어", "F&B"].map((filter) => (
          <button
            key={filter}
            className={activeFilter === filter ? "active" : ""}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </nav>

      <section className="feed">
        <div className="feed-label">
          <span>ENDLESS SURF</span>
          <span>계속 발견하는 중</span>
        </div>
        {items.map((item) => {
          const key = `${item.type}-${item.uid}`;
          if (item.type === "quote") {
            return (
              <QuoteCard
                key={key}
                item={item.data}
                saved={saved.has(key)}
                onSave={() => toggleSaved(key)}
              />
            );
          }
          if (item.type === "benefit") {
            return <BenefitCard key={key} item={item.data} />;
          }
          if (item.type === "preview") {
            return (
              <ArticlePreview
                key={key}
                item={item.data}
                saved={saved.has(key)}
                onSave={() => toggleSaved(key)}
              />
            );
          }
          if (item.type === "carousel") {
            return <DiscoveryCarousel key={key} item={item.data} />;
          }
          if (item.type === "mypage") {
            return <MyPageSnapshot key={key} />;
          }
          if (item.type === "upcoming") {
            return <UpcomingCarousel key={key} items={item.data} />;
          }
          return (
            <NoteCard
              key={key}
              item={item.data}
              featured={item.uid % 4 === 0}
              saved={saved.has(key)}
              onSave={() => toggleSaved(key)}
            />
          );
        })}
        <div className="loading" ref={loader}>
          <span />
          새로운 이야기를 찾고 있어요
        </div>
      </section>
    </main>
  );
}

function NoteCard({ item, featured, saved, onSave }) {
  if (featured) {
    return (
      <article className={`note-card featured ${item.tone}`}>
        <div className="note-image">
          <img src={item.image} alt="" />
          <button
            className={`save ${saved ? "saved" : ""}`}
            aria-label="북마크"
            onClick={onSave}
          >
            <Bookmark size={20} fill={saved ? "currentColor" : "none"} />
          </button>
        </div>
        <div className="note-copy">
          <span className="tag">{item.tag}</span>
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
          <div className="meta">
            <span>{item.author}</span>
            <span>{item.time} 읽기</span>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="note-card compact">
      <img src={item.image} alt="" />
      <div className="compact-copy">
        <span className="tag">{item.tag}</span>
        <h2>{item.title}</h2>
        <div className="meta">
          <span>{item.author}</span>
          <span>{item.time}</span>
        </div>
      </div>
      <button
        className={`save compact-save ${saved ? "saved" : ""}`}
        aria-label="북마크"
        onClick={onSave}
      >
        <Bookmark size={19} fill={saved ? "currentColor" : "none"} />
      </button>
    </article>
  );
}

function QuoteCard({ item, saved, onSave }) {
  return (
    <article className={`quote-card quote-${item.tone}`}>
      <div className="quote-top">
        <span><Quote size={15} fill="currentColor" /> 지금 많이 저장하는 문장</span>
        <button
          className={saved ? "saved" : ""}
          aria-label="문장 저장"
          onClick={onSave}
        >
          <Bookmark size={20} fill={saved ? "currentColor" : "none"} />
        </button>
      </div>
      <blockquote>“{item.text}”</blockquote>
      <p>{item.source}</p>
      <span className="likes">{item.likes}명이 저장했어요</span>
    </article>
  );
}

function BenefitCard({ item }) {
  return (
    <article className={`benefit-card benefit-${item.tone}`}>
      <div className="benefit-visual">
        <img src={item.image} alt={`${item.brandKo} 브랜드 비주얼`} />
        <div className="benefit-overlay" />
        <div className="benefit-label">
          <span><Sparkles size={13} /> LONGBLACK SELECTION</span>
          <strong>{item.brand}</strong>
        </div>
        <span className="benefit-number">MEMBERS ONLY</span>
      </div>
      <div className="benefit-copy">
        <div className="benefit-brand-line">
          <span>{item.brandKo}</span>
          <span>BRAND BENEFIT</span>
        </div>
        <h2>{item.title}</h2>
        <p>{item.place}</p>
        <button>
          <span>{item.detail}</span>
          <ArrowUpRight size={16} />
        </button>
      </div>
    </article>
  );
}

function ArticlePreview({ item, saved, onSave }) {
  return (
    <article className="article-preview">
      <div className="preview-transition">
        <span />
        <p>잠시, 한 편을 깊이 읽어볼까요?</p>
        <span />
      </div>

      <div className="preview-header">
        <div className="preview-eyebrow">
          <span>{item.tag}</span>
          <button
            className={saved ? "saved" : ""}
            aria-label="프리뷰 북마크"
            onClick={onSave}
          >
            <Bookmark size={20} fill={saved ? "currentColor" : "none"} />
          </button>
        </div>
        <div className="preview-rule" />
        <span className="preview-category">{item.category}</span>
        <h2>{item.title}</h2>
        <div className="preview-meta">
          <span>{item.author}</span>
          <span>{item.date}</span>
          <span>{item.readTime} 읽기</span>
        </div>
      </div>

      <div className="preview-body">
        <p className="preview-lead">{item.lead}</p>
        {item.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <blockquote className="preview-quote">“{item.quote}”</blockquote>
      </div>

      <figure className="preview-figure">
        <img src={item.image} alt="" />
        <figcaption>{item.caption}</figcaption>
      </figure>

      <div className="preview-body preview-body-last">
        {item.afterImage.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <div className="preview-fade" />
        <div className="continue-reading">
          <span>여기까지 미리보기</span>
          <h3>이 이야기의 다음 장면이 궁금한가요?</h3>
          <button>
            노트 전체 읽기
            <ArrowUpRight size={17} />
          </button>
        </div>
      </div>

      <div className="preview-return">
        <Compass size={17} />
        다시 발견의 흐름으로
      </div>
    </article>
  );
}

function DiscoveryCarousel({ item }) {
  const [active, setActive] = useState(0);

  const updateActive = (event) => {
    const track = event.currentTarget;
    const card = track.querySelector(".carousel-card");
    if (!card) return;
    const stride = card.getBoundingClientRect().width + 12;
    setActive(Math.round(track.scrollLeft / stride));
  };

  return (
    <article className="discovery-carousel">
      <div className="carousel-heading">
        <div>
          <span>{item.eyebrow}</span>
          <h2>{item.title}</h2>
        </div>
        <span className="carousel-count">
          {String(active + 1).padStart(2, "0")} / {String(item.items.length).padStart(2, "0")}
        </span>
      </div>
      <div className="carousel-track" onScroll={updateActive}>
        {item.items.map((card) => (
          <div className="carousel-card" key={card.title}>
            <img src={card.image} alt="" />
            <div className="carousel-shade" />
            <div className="carousel-copy">
              <span>{card.tag}</span>
              <h3>{card.title}</h3>
              <p>{card.meta}</p>
            </div>
            <span className="carousel-arrow"><ArrowUpRight size={17} /></span>
          </div>
        ))}
      </div>
      <div className="carousel-progress">
        {item.items.map((card, index) => (
          <span className={active === index ? "active" : ""} key={card.title} />
        ))}
      </div>
    </article>
  );
}

function MyPageSnapshot() {
  return (
    <article className="mypage-snapshot">
      <div className="mypage-head">
        <div>
          <span>MY LONGBLACK</span>
          <h2>오늘의 나의 롱블랙</h2>
        </div>
        <button aria-label="마이페이지 열기">
          <ArrowUpRight size={18} />
        </button>
      </div>

      <div className="shot-summary">
        <div>
          <span>사용 가능한 샷</span>
          <strong>7</strong>
          <small>SHOTS</small>
        </div>
        <div className="expiry-note">
          <CalendarClock size={18} />
          <p>
            <strong>2개의 샷</strong>이<br />
            6월 15일 만료돼요
          </p>
        </div>
      </div>

      <div className="stamp-summary">
        <div className="stamp-title">
          <div>
            <span>JUNE ATTENDANCE</span>
            <h3>출석 스탬프 7 / 10</h3>
          </div>
          <Ticket size={22} strokeWidth={1.5} />
        </div>
        <div className="stamp-grid" aria-label="출석 스탬프 10개 중 7개 완료">
          {Array.from({ length: 10 }, (_, index) => (
            <span className={index < 7 ? "checked" : ""} key={index}>
              {index < 7 && <Check size={13} strokeWidth={3} />}
            </span>
          ))}
        </div>
        <p>3번 더 출석하면 보너스 샷을 받을 수 있어요.</p>
      </div>
    </article>
  );
}

function UpcomingCarousel({ items }) {
  const [active, setActive] = useState(0);

  const updateActive = (event) => {
    const track = event.currentTarget;
    const card = track.querySelector(".upcoming-card");
    if (!card) return;
    setActive(Math.round(track.scrollLeft / (card.getBoundingClientRect().width + 12)));
  };

  return (
    <article className="upcoming-carousel">
      <div className="upcoming-head">
        <div>
          <span><Bell size={13} /> COMING SOON</span>
          <h2>곧, 이 사람들의 이야기가 도착합니다</h2>
        </div>
        <strong>{String(active + 1).padStart(2, "0")} / 04</strong>
      </div>
      <div className="upcoming-track" onScroll={updateActive}>
        {items.map((item) => (
          <div className={`upcoming-card upcoming-${item.tone}`} key={item.name}>
            <img src={item.image} alt={`${item.name} 공개 사진`} />
            <div className="upcoming-gradient" />
            <div className="upcoming-person">
              <span>{item.role}</span>
              <strong>{item.name}</strong>
            </div>
            <div className="upcoming-copy">
              <span>{item.date}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="upcoming-footer">
        <div>
          {items.map((item, index) => (
            <span className={active === index ? "active" : ""} key={item.name} />
          ))}
        </div>
        <button>공개 알림 받기 <Bell size={14} /></button>
      </div>
    </article>
  );
}

function buildBatch(batch) {
  let benefitIndex = 0;
  return feedPattern.map((type, index) => {
    const cursor = batch * feedPattern.length + index;
    const source =
      type === "note"
        ? notes[cursor % notes.length]
        : type === "quote"
          ? quotes[cursor % quotes.length]
          : type === "benefit"
            ? benefits[(batch * 3 + benefitIndex++) % benefits.length]
            : type === "preview"
              ? previews[cursor % previews.length]
              : type === "carousel"
                ? carousels[cursor % carousels.length]
                : type === "upcoming"
                  ? upcomingContents
                  : null;
    return { type, data: source, uid: cursor };
  });
}

createRoot(document.getElementById("root")).render(<App />);
