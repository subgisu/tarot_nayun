/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  DraftingCompass,
  ArrowRight,
  Lightbulb,
  Gauge,
  Network,
  Headset,
  Quote,
  Check,
  ChevronRight,
  Globe,
  Mail,
  Share2,
} from "lucide-react";

export default function App() {
  return (
    <div className="bg-background text-on-background antialiased selection:bg-primary-container selection:text-on-primary-container">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-[#faf9f6]/80 dark:bg-[#1a1c1a]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-2">
            <DraftingCompass className="text-[#173124] w-6 h-6" />
            <h1 className="font-notoSerif font-bold text-[#173124] text-lg tracking-tight">
              Architectural Insight
            </h1>
          </div>
        <button className="bg-primary px-5 py-2 rounded-md font-medium text-sm transition-transform active:scale-95" style={{ color: '#ffffff' }}>
  상담 신청하기
</button>
        </div>
      </header>

      <main className="pt-16">
        {/* Section 1: Hero */}
        <section className="relative min-h-[795px] flex items-center overflow-hidden bg-surface">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-8">
              <div className="inline-block px-4 py-1 bg-primary/5 border-l-2 border-primary">
                <span className="text-primary font-bold tracking-widest text-xs uppercase">
                  Professional Coaching
                </span>
              </div>
              <h2 className="font-notoSerif text-5xl md:text-7xl font-black text-primary leading-[1.2] break-keep">
                타로, 점술이 아닌
                <br />
                <span className="text-primary/70">심리 디자인</span>입니다
              </h2>
           <p className="font-manrope text-lg text-on-surface-variant max-w-lg leading-relaxed">
            카드 뜻은 아는데 리딩이 막힌다면
            기본 이론은 배웠지만 실제 상담에 들어가면 자꾸 흔들리는 분들을 위한
            <span className="relative inline-block">
              <span className="relative z-10 font-bold text-primary">1:1 실전 타로 코칭</span>
             <svg className="absolute -inset-x-4 -inset-y-3 w-[calc(100%+32px)] h-[calc(100%+24px)] z-0" viewBox="0 0 220 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 35C35 15, 80 8, 130 10C180 12, 210 20, 205 32C200 44, 160 52, 110 50C60 48, 20 45, 25 35C28 28, 70 18, 120 16C170 14, 200 22, 195 30" stroke="#7B5EA7" strokeWidth="2.5" strokeLinecap="round" fill="none" style={{opacity: 0.65}} />
              </svg>
            </span>
              </p>
              <div className="flex gap-4 pt-4">
              <button className="bg-primary px-5 py-2 rounded-md font-medium text-sm transition-transform active:scale-95" style={{ color: '#ffffff' }}>
                 신청서 작성하기
                </button>
                <button className="border-b border-outline text-primary px-4 py-4 font-bold flex items-center gap-2 hover:gap-4 transition-all">
                  1:1 문의하기 <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="aspect-[4/5] bg-surface-container-highest rounded-2xl overflow-hidden shadow-2xl">
                <img
                  alt="architectural interior"
                  className="w-full h-full object-cover grayscale contrast-125 mix-blend-multiply opacity-80"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnF4L2gUZWG79FeVF7G1hXJLjluLxCZMY5LXzoIMlcWHuDPjPUBmZZRIZyRh9Y8EdqKMScBNlu6KQaL-3c6CA9gbPwviejlTynLt5UvkOHn5Zt1i0I0aTZ3kw6JQJZLmj8iDQiCL8QgO82xMXN7zBw3SqYGMXGnq0fyl2rDtDmeU162NVzezfN6N2y4buItXFw3D_ZxezDULDlFe6p21OP4YjTLxvSHwNkXm4OarNlf-JsPCxQz4q2Bs6-h5BK1JfGnOP4wrPotDM"
                  referrerPolicy="no-referrer"
                />
              </div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#E8E0F0] rounded-2xl p-8 flex flex-col justify-end shadow-xl">
                <span className="text-4xl font-notoSerif font-bold text-[#5B4A6E] italic">
                  Insight.
                </span>
                <p className="text-sm text-on-secondary-container/80 mt-2">
                  데이터로 읽는 타로의 질서: <br /> AI와 구조적 사고의 결합
                </p>
              </div>
            </div>
          </div>
          {/* Decorative Background Element */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-surface-container-low -z-0"></div>
        </section>

        {/* Section 2: Visual Break */}
        <section className="py-24 bg-primary overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-2 group relative h-[500px] overflow-hidden rounded-xl">
              <img
                alt="professional discussion"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src=" /tarot_nayun/images/img_counsel.jpg"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
              <div className="absolute bottom-10 left-10 text-on-primary">
                <h3 className="text-3xl font-notoSerif font-bold">
                 왜 배웠는데도 리딩은 막힐까요?
                </h3>
                <p className="opacity-70 mt-2">
                 카드 의미를 아는 것과 실제 상담에서 자연스럽게 리딩하는 것은 다릅니다.
                </p>
              </div>
            </div>
            <div className="bg-primary-container p-12 rounded-xl flex flex-col justify-center text-on-primary-container">
            <svg className="w-12 h-12 mb-6" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="512" height="512" rx="96" fill="#2a5c45"/>
  <path d="M281.003 278.046C285.762 284.142 291.202 289.22 297.324 293.258C289.822 303.739 281.918 313.708 273.613 323.167C264.666 333.116 255.387 341.741 245.776 349.053C236.178 356.356 226.378 362.103 216.378 366.315C206.469 370.49 196.489 372.56 186.419 372.56C173.453 372.56 164.297 368.698 158.346 361.437C152.241 353.748 148.994 342.743 148.994 328.04C148.994 311.648 152.25 294.729 158.815 277.267C165.657 259.463 174.268 242.367 184.652 225.979C195.29 209.566 206.985 194.47 219.735 180.688C232.747 166.881 245.481 155.498 257.934 146.513L260.424 144.717L258.571 142.269L247.123 127.149L245.668 125.228L243.479 126.234C232.311 131.364 221.173 137.947 210.063 145.968C198.973 153.973 188.253 162.944 177.903 172.875C167.539 182.82 157.9 193.61 148.988 205.243C140.069 216.646 132.23 228.539 125.473 240.923L125.462 240.943L125.452 240.963C118.93 253.359 113.729 265.893 109.855 278.563C105.96 291.302 104 303.838 104 316.16C104 328.458 105.833 339.62 109.555 349.608C113.258 359.544 118.464 368.168 125.189 375.437C131.924 382.716 139.915 388.246 149.135 392.01C158.587 396.012 168.76 398 179.622 398C190.218 398 201.594 396.142 213.732 392.48C225.967 389.03 238.265 383.381 250.626 375.577C263.018 367.752 275.123 357.755 286.948 345.613L286.958 345.602L286.968 345.592C298.411 333.607 309.142 319.281 319.173 302.64C322.727 303.341 326.658 303.68 330.947 303.68C345.04 303.68 358.403 300.316 370.994 293.608C383.717 286.829 395.85 275.029 407.456 258.483L409.091 256.152L406.849 254.398L393.97 244.318L391.303 242.23L389.553 245.13C385.583 251.71 381.526 257.302 377.39 261.931C373.269 266.304 368.955 269.835 364.455 272.552L364.426 272.57L364.397 272.588C360.158 275.282 355.458 277.317 350.279 278.683C345.055 279.82 339.212 280.4 332.736 280.4H331.761C335.092 274.602 338.02 268.273 340.551 261.42C343.926 252.684 346.702 243.941 348.877 235.191C351.289 226.206 353.101 217.332 354.31 208.57C355.518 199.822 356.127 191.762 356.127 184.4C356.127 174.602 355.154 165.377 353.191 156.736C351.231 148.107 348.392 140.607 344.627 134.286C340.858 127.718 336.147 122.552 330.458 118.899C324.696 114.957 318.149 113 310.914 113C302.932 113 295.562 115.213 288.873 119.614C282.283 123.95 276.523 129.9 271.565 137.383L271.558 137.393L271.552 137.403C266.829 144.657 263.137 153.106 260.445 162.71C257.742 172.356 256.399 182.59 256.399 193.4C256.399 204.119 257.246 214.603 258.943 224.85L258.949 224.884L258.955 224.918C260.897 235.177 263.692 244.847 267.348 253.921L267.354 253.934L267.359 253.948C271.027 262.805 275.561 270.829 280.972 278.006L280.987 278.026L281.003 278.046ZM318.456 250.371L318.448 250.394L318.44 250.417C315.977 257.852 312.973 265.203 309.426 272.469C305.054 269.145 301.273 264.956 298.087 259.87C294.152 253.345 290.907 246.347 288.353 238.87C285.79 231.367 283.925 223.627 282.758 215.646C281.583 207.604 281.001 200.191 281.001 193.4C281.001 185.92 281.697 178.816 283.079 172.081C284.7 165.101 286.879 159.137 289.582 154.15L289.595 154.125L289.608 154.101C292.311 148.888 295.508 144.939 299.149 142.138L299.192 142.104L299.234 142.07C302.81 139.106 306.559 137.72 310.556 137.72C313.31 137.72 315.82 138.707 318.181 140.885L318.276 140.973L318.379 141.052C320.975 143.062 323.201 146.074 324.96 150.278L324.998 150.368L325.041 150.455C327.043 154.484 328.64 159.379 329.793 165.185C330.942 170.962 331.525 177.363 331.525 184.4C331.525 189.51 331.062 195.612 330.12 202.726L330.114 202.77L330.109 202.813C329.413 209.592 328.014 216.997 325.899 225.037L325.889 225.077L325.88 225.117C323.998 233.162 321.525 241.579 318.456 250.371Z" fill="white" stroke="white" strokeWidth="6"/>
</svg>
              <h3 className="text-2xl font-notoSerif font-bold mb-4">
              내 기준을 만드는 코칭
              </h3>
              <p className="leading-relaxed opacity-80">
                메타로마인드 실전 타로 코칭은 막연하게 배워온 리딩을 정리해
                실제 상담에서 바로 쓰이는 나만의 방식으로 연결하도록 돕습니다.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Brand Intro */}
        <section className="py-32 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-20 items-center">
              <div className="md:w-1/2 relative">
                <div className="relative z-10 w-full h-[600px] rounded-full overflow-hidden border-8 border-surface-container">
                  <img
                   alt="modern office"
                      src="/tarot_nayun/images/img_tarot.png"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary rounded-full flex items-center justify-center text-on-secondary font-notoSerif text-xl z-20">
                실제 상담형 리딩
                </div>
              </div>
              <div className="md:w-1/2 space-y-8">
                <h2 className="text-primary text-sm font-bold tracking-[0.3em] uppercase">
                  Brand Philosophy
                </h2>
                <h3 className="text-4xl md:text-5xl font-notoSerif font-black text-on-surface leading-tight break-keep">
                카드 뜻을 더 배우는 것에서 멈추지 않고
내 상담 방식과 리딩 기준을 세우고 싶다면,
                </h3>
                <p className="text-on-surface-variant text-lg leading-relaxed">
              메타로마인드는
기본 이론 이후에 막히는 분들이
실제 상담과 리딩으로 연결될 수 있도록
현실적인 기준과 방향을 함께 정리합니다.
                </p>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <span className="bg-primary text-on-primary w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                      01
                    </span>
                    <div>
                      <h4 className="font-bold text-primary">
                        보편적 상징의 현대적 해석
                      </h4>
                      <p className="text-sm text-on-surface-variant">
                        고전적 의미를 현대 비즈니스와 심리학적 관점으로
                        재정의합니다.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="bg-primary text-on-primary w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                      02
                    </span>
                    <div>
                      <h4 className="font-bold text-primary">
                        구조적 코칭 프레임워크
                      </h4>
                      <p className="text-sm text-on-surface-variant">
                        단순 대화가 아닌, 결과가 도출되는 논리적 프로세스를
                        학습합니다.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Why Choose Us */}
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="font-notoSerif text-4xl font-black text-primary mb-4">
                왜 Architectural Insight인가?
              </h2>
              <p className="text-on-surface-variant">
                차별화된 시스템이 차별화된 코치를 만듭니다
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="bg-background p-10 rounded-xl hover:translate-y-[-8px] transition-transform duration-300">
                <Gauge className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-2xl font-notoSerif font-bold mb-4">
                  효율적 운영
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  핵심만을 꿰뚫는 커리큘럼으로 단기간 내 전문성을 확보합니다.
                  불필요한 미신적 요소는 배제했습니다.
                </p>
              </div>
              <div className="bg-primary text-on-primary p-10 rounded-xl shadow-2xl scale-105 z-10">
                <Network className="w-10 h-10 mb-6" />
                <h3 className="text-2xl font-notoSerif font-bold mb-4">
                  체계적 시스템
                </h3>
                <p className="opacity-80 leading-relaxed">
                  기초 이론부터 실전 상담 시뮬레이션까지, <br />검증된 12단계 학습
                  로드맵을 제공합니다.
                </p>
              </div>
              <div className="bg-background p-10 rounded-xl hover:translate-y-[-8px] transition-transform duration-300">
                <Headset className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-2xl font-notoSerif font-bold mb-4">
                  무한한 지원
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  수료 후에도 지속적인 케이스 스터디 모임과 마케팅 멘토링을 통해
                  프로로 성장하도록 돕습니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Statistics */}
        <section className="py-20 bg-surface">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center p-8 border-r border-outline-variant last:border-0">
                <div className="text-4xl font-notoSerif font-black text-primary mb-2">
                  3,200+
                </div>
                <p className="text-sm text-on-surface-variant font-medium">
                  배출된 전문 코치
                </p>
              </div>
              <div className="text-center p-8 border-r border-outline-variant last:border-0">
                <div className="text-4xl font-notoSerif font-black text-primary mb-2">
                  98%
                </div>
                <p className="text-sm text-on-surface-variant font-medium">
                  강의 만족도
                </p>
              </div>
              <div className="text-center p-8 border-r border-outline-variant last:border-0">
                <div className="text-4xl font-notoSerif font-black text-primary mb-2">
                  85%
                </div>
                <p className="text-sm text-on-surface-variant font-medium">
                  수료 후 창업 성공률
                </p>
              </div>
              <div className="text-center p-8 border-r border-outline-variant last:border-0">
                <div className="text-4xl font-notoSerif font-black text-primary mb-2">
                  17년
                </div>
                <p className="text-sm text-on-surface-variant font-medium">
                  교육 노하우
                </p>
              </div>
            </div>
          </div>
        </section>
{/* Section 5.5: How it works */}
        <section className="py-32 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="font-notoSerif text-4xl font-black text-primary mb-6">이렇게 진행됩니다</h2>
              <p className="text-on-surface-variant text-lg max-w-2xl mx-auto leading-relaxed">
                듣고 끝나는 수업이 아니라 직접 해보고 바로 교정받는 실전형 코칭입니다.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Column 1: Odd steps */}
              <div className="space-y-8">
                {/* Step 1 */}
                <div className="bg-surface-container-lowest p-10 rounded-2xl shadow-xl shadow-primary/5 relative overflow-hidden group">
                  <span className="text-8xl font-notoSerif font-black text-surface-variant absolute -top-4 -right-2 transition-transform group-hover:scale-110">01</span>
                  <h4 className="text-2xl font-bold text-primary mb-4 relative z-10">신청서 작성</h4>
                  <p className="text-on-surface-variant leading-relaxed relative z-10">신청하기 버튼을 누르면<br/>구글 폼 신청서로 연결됩니다.</p>
                </div>
                {/* Step 3 */}
                <div className="bg-surface-container-lowest p-10 rounded-2xl shadow-xl shadow-primary/5 relative overflow-hidden group">
                  <span className="text-8xl font-notoSerif font-black text-surface-variant absolute -top-4 -right-2 transition-transform group-hover:scale-110">03</span>
                  <h4 className="text-2xl font-bold text-primary mb-4 relative z-10">결제 확인 후 자료 제공</h4>
                  <p className="text-on-surface-variant leading-relaxed relative z-10">안내에 따라 결제가 확인되면<br/>사전 워크북과 필요한 자료를 전달드립니다.</p>
                </div>
                {/* Step 5 */}
                <div className="bg-surface-container-lowest p-10 rounded-2xl shadow-xl shadow-primary/5 relative overflow-hidden group">
                  <span className="text-8xl font-notoSerif font-black text-surface-variant absolute -top-4 -right-2 transition-transform group-hover:scale-110">05</span>
                  <h4 className="text-2xl font-bold text-primary mb-4 relative z-10">전화 통화로 직접 리딩 진행</h4>
                  <p className="text-on-surface-variant leading-relaxed relative z-10">작성한 내용을 바탕으로<br/>실제 리딩을 직접 진행합니다.</p>
                </div>
              </div>

              {/* Column 2: Even steps (Staggered) */}
              <div className="space-y-8 md:mt-10">
                {/* Step 2 */}
                <div className="bg-surface-container-lowest p-10 rounded-2xl shadow-xl shadow-primary/5 relative overflow-hidden group">
                  <span className="text-8xl font-notoSerif font-black text-surface-variant absolute -top-4 -right-2 transition-transform group-hover:scale-110">02</span>
                  <h4 className="text-2xl font-bold text-primary mb-4 relative z-10">신청 내용 확인 후 개별 안내</h4>
                  <p className="text-on-surface-variant leading-relaxed relative z-10">신청 내용을 확인한 뒤<br/>진행 방식과 일정을 개별 안내해드립니다.</p>
                </div>
                {/* Step 4 */}
                <div className="bg-surface-container-lowest p-10 rounded-2xl shadow-xl shadow-primary/5 relative overflow-hidden group">
                  <span className="text-8xl font-notoSerif font-black text-surface-variant absolute -top-4 -right-2 transition-transform group-hover:scale-110">04</span>
                  <h4 className="text-2xl font-bold text-primary mb-4 relative z-10">워크북 작성</h4>
                  <p className="text-on-surface-variant leading-relaxed relative z-10">내 상담 스타일, 리딩 흐름, 해석 기준을<br/>먼저 정리합니다.</p>
                </div>
                {/* Step 6 */}
                <div className="bg-surface-container-lowest p-10 rounded-2xl shadow-xl shadow-primary/5 relative overflow-hidden group">
                  <span className="text-8xl font-notoSerif font-black text-surface-variant absolute -top-4 -right-2 transition-transform group-hover:scale-110">06</span>
                  <h4 className="text-2xl font-bold text-primary mb-4 relative z-10">실시간 피드백</h4>
                  <p className="text-on-surface-variant leading-relaxed relative z-10">리딩하는 흐름을 들으면서<br/>해석 방식, 질문 수용, 상담 언어, 전달 방식까지<br/>바로 피드백해드립니다.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Student Reviews */}
        <section className="py-32 bg-background overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-notoSerif text-4xl font-black text-primary mb-16 text-center">
              선배 수강생들의 리얼 보이스
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-8 bg-surface-container-low rounded-xl relative">
                <Quote className="text-primary/20 w-16 h-16 absolute top-6 right-6" />
                <p className="text-on-surface font-medium leading-relaxed mb-8 relative z-10">
                  "막막했던 은퇴 후 삶이 타로 코칭을 통해 명확해졌습니다. 단순한
                  기술이 아닌 '사람을 이해하는 법'을 배웠어요."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      alt="Reviewer"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTHc6IGowjnXiajXzmyveQamJO7PTp_zOKJlAKnuvngFPOXli042JmIBc2JmQMS7FgOxg3mHUo2MKgEbHfuam4wEu0yE_2PhUEeNoy3zZu7y4tqf3-qQA3r4VJANFZ40aj2yu99bT-2chDMeRP6C7XzTEyk9BlVaOjrNGT7ttVZYD-s59jUqganQdHYtoZa-j4H3-S1wIe155r4liqKNwCbmIf04y7dbLB8m-kmvnDdTjD1Iuw02elSai9tlTewoDNwmUmWYTIvGk"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">김지은 님</h4>
                    <p className="text-xs text-on-surface-variant">
                      프로페셔널 코스 수료
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-8 bg-surface-container-low rounded-xl relative">
                <Quote className="text-primary/20 w-16 h-16 absolute top-6 right-6" />
                <p className="text-on-surface font-medium leading-relaxed mb-8 relative z-10">
                  "현직 심리상담사로서 제 한계를 보완해줄 강력한 도구를
                  얻었습니다. 상담의 깊이가 예전과는 확실히 달라요."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      alt="Reviewer"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuC71zRjVj7nfh3ud1iQEJgXOUmQ1Z4KyV_KYEDCsSyBGYM1uI0n5IiJmVv7mTq5o0IF9YHerXBKzr6dO-R01ih4o6l-yLzE2hDuicfmZ_j95Od_tJ9KE5weWgDMcm_SJSQHXEimT8SmyDURU9S6Sk3RwL0Wgy8RWVEGTp8lv8-Z_1Ytq2sP_mbq-DrdIje-vL8e4L5KhZm0sIgV6S0bDoYYT0g3rEawozXbSIWJpXwKO5CVBqz2RW16YmEnqQMvV0UjckNHQy-3NSg"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">이서준 님</h4>
                    <p className="text-xs text-on-surface-variant">
                      현직 심리상담사
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-8 bg-surface-container-low rounded-xl relative">
                <Quote className="text-primary/20 w-16 h-16 absolute top-6 right-6" />
                <p className="text-on-surface font-medium leading-relaxed mb-8 relative z-10">
                  "취미로 시작했지만 지금은 프리랜서 코치로 제2의 인생을 살고
                  있습니다. 체계적인 마케팅 지원이 큰 도움이 되었죠."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      alt="Reviewer"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgXLpcL6iXbDS7lXQMefc_BuOrcpSnjZvAlkV5s6gPfPk1jvi8vB3qtqN9b3qd2gEVKObYFcOI7cWt93PDUSliyDKRVncphyxf1e5bAUJoKwZexQBFCutFZ_GomfvALW6TXNLzJ9liwiVZLCdWINKBsyoZykY0Rd4sM6gl1CqEUCCJoT24WCc8dazEuN6sIiCgBG4Jyl8czBbLv3TdS8gcB0OL3jf9dm1B92pcwOOHTTGoxIxNiINX0Q3e9VCeBKFtmW6XpdLPWFM"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">박하영 님</h4>
                    <p className="text-xs text-on-surface-variant">
                      프리랜서 코치
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

 {/* Section 7: Instructor Intro */}
        <section className="py-32 bg-primary-container text-on-primary-container">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-20 text-center flex flex-col items-center">
              <h2 className="text-sm font-bold tracking-[0.3em] uppercase opacity-70 mb-2">Masters of Insight</h2>
              <h3 className="text-4xl font-notoSerif font-black">교육 전문가 그룹</h3>
            </div>
            <div className="flex flex-col items-center max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-12 items-center text-center md:text-left">
                <div className="w-90 h-110 rounded-xl overflow-hidden shrink-0 shadow-2xl">
                  <img alt="Master Instructor" className="w-full h-full object-cover" src="/tarot_nayun/images/profile.png" />
                </div>
                <div className="space-y-6 max-w-lg">
                  <h4 className="text-3xl font-notoSerif font-bold">왜 이나윤의 코칭인가 <span className="text-xl opacity-60 ml-2">메타로마인드 대표</span></h4>
                  <p className="text-base opacity-80 leading-relaxed">
                    현 오프라인 타로 아카데미 고문마스터 및 강사로 활동하며, 교육기획·운영 17년의 경험을 바탕으로 대학, 기업, 공공기관 강의와 상담, 온·오프라인 코칭을 꾸준히 이어오고 있습니다. 타로를 단순한 카드 해석이 아니라 사람의 심리와 관계의 흐름을 읽는 도구로 활용해왔고, 기본 이론은 배웠지만 실제 상담과 리딩에서 막히는 분들이 자기만의 해석 기준과 상담 언어를 세울 수 있도록 돕는 데 강점을 가지고 있습니다.
                  </p>
                  <ul className="text-sm space-y-3 opacity-70">
                    <li className="flex items-center gap-2 justify-center md:justify-start"><span className="w-1 h-1 bg-on-primary-container rounded-full"></span> 오프라인 타로 아카데미 고문마스터 및 강사</li>
                    <li className="flex items-center gap-2 justify-center md:justify-start"><span className="w-1 h-1 bg-on-primary-container rounded-full"></span> 타로 아카데미 고문마스터 및 강사</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section 8: Registration Process */}
        <section className="py-32 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="font-notoSerif text-4xl font-black text-primary mb-4">
                입학 및 교육 프로세스
              </h2>
              <p className="text-on-surface-variant">
                전문 코치로 거듭나기 위한 체계적인 여정
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="relative group">
                <div className="bg-surface-container-high p-8 rounded-xl aspect-square flex flex-col items-center justify-center text-center transition-all group-hover:bg-primary group-hover:text-on-primary">
                  <span className="text-5xl font-notoSerif font-black mb-4 opacity-10 group-hover:opacity-30">
                    01
                  </span>
                  <h4 className="font-bold mb-2">상담 스타일 정립</h4>
                  <p className="text-sm opacity-70">나에게 맞는 상담 톤과 진행 방식을 정리합니다.</p>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-4 translate-y-[-50%] z-20">
                  <ChevronRight className="text-outline-variant w-8 h-8" />
                </div>
              </div>
              <div className="relative group">
                <div className="bg-surface-container-high p-8 rounded-xl aspect-square flex flex-col items-center justify-center text-center transition-all group-hover:bg-primary group-hover:text-on-primary">
                  <span className="text-5xl font-notoSerif font-black mb-4 opacity-10 group-hover:opacity-30">
                    02
                  </span>
                  <h4 className="font-bold mb-2">리딩 스타일 점검</h4>
                  <p className="text-sm opacity-70">내가 카드를 어떤 흐름과 기준으로 읽는지 점검하고 정리합니다.</p>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-4 translate-y-[-50%] z-20">
                  <ChevronRight className="text-outline-variant w-8 h-8" />
                </div>
              </div>
              <div className="relative group">
                <div className="bg-surface-container-high p-8 rounded-xl aspect-square flex flex-col items-center justify-center text-center transition-all group-hover:bg-primary group-hover:text-on-primary">
                  <span className="text-5xl font-notoSerif font-black mb-4 opacity-10 group-hover:opacity-30">
                    03
                  </span>
                  <h4 className="font-bold mb-2">4원소 성향 체크</h4>
                  <p className="text-sm opacity-70">내 해석의 강점과 편향을 확인하고 리딩의 균형을 잡습니다.</p>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-4 translate-y-[-50%] z-20">
                  <ChevronRight className="text-outline-variant w-8 h-8" />
                </div>
              </div>
              <div className="relative group">
                <div className="bg-surface-container-high p-8 rounded-xl aspect-square flex flex-col items-center justify-center text-center transition-all group-hover:bg-primary group-hover:text-on-primary">
                  <span className="text-5xl font-notoSerif font-black mb-4 opacity-10 group-hover:opacity-30">
                    04
                  </span>
                  <h4 className="font-bold mb-2">자격 취득 및 데뷔</h4>
                  <p className="text-sm opacity-70">창업 지원 및 지속 성장 관리</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 9: Course Options */}
        <section className="py-32 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="font-notoSerif text-4xl font-black text-primary mb-4">
                교육 프로그램 안내
              </h2>
              <p className="text-on-surface-variant">
                당신의 수준에 맞춘 최적의 선택지
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Tier 1 */}
              <div className="bg-surface-container-lowest p-10 rounded-2xl flex flex-col">
                <h4 className="text-xl font-bold text-primary mb-2">Basic</h4>
                <p className="text-sm text-on-surface-variant mb-8">
                  타로의 기본 상징과 심리 구조의 기초를 다집니다.
                </p>
                <div className="text-4xl font-notoSerif font-bold mb-8 text-on-surface">
                  ₩450,000
                </div>
                <ul className="space-y-4 mb-10 flex-grow">
                  <li className="flex items-center gap-2 text-sm text-on-surface-variant">
                    <Check className="text-primary w-4 h-4" /> 8주 정규 교육 과정
                  </li>
                  <li className="flex items-center gap-2 text-sm text-on-surface-variant">
                    <Check className="text-primary w-4 h-4" /> 기본 78종 상징 가이드
                  </li>
                  <li className="flex items-center gap-2 text-sm text-on-surface-variant">
                    <Check className="text-primary w-4 h-4" /> 온라인 다시보기 3개월
                  </li>
                </ul>
                <button className="w-full py-4 border border-primary text-primary font-bold hover:bg-primary hover:text-on-primary transition-all rounded-md">
                  과정 신청
                </button>
              </div>
              {/* Tier 2 */}
              <div className="bg-primary text-on-primary p-10 rounded-2xl flex flex-col transform scale-105 shadow-2xl relative">
                <div className="absolute top-0 right-10 translate-y-[-50%] bg-secondary text-on-secondary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Best Choice
                </div>
                <h4 className="text-xl font-bold mb-2">Advanced</h4>
                <p className="text-sm opacity-70 mb-8">
                  심층 코칭 기법과 케이스 스터디를 통한 전문 역량 강화 과정입니다.
                </p>
                <div className="text-4xl font-notoSerif font-bold mb-8">
                  ₩1,200,000
                </div>
                <ul className="space-y-4 mb-10 flex-grow">
                  <li className="flex items-center gap-2 text-sm opacity-80">
                    <Check className="w-4 h-4" /> 12주 정규 교육 과정
                  </li>
                  <li className="flex items-center gap-2 text-sm opacity-80">
                    <Check className="w-4 h-4" /> 비즈니스 특화 코칭 시트
                  </li>
                  <li className="flex items-center gap-2 text-sm opacity-80">
                    <Check className="w-4 h-4" /> 대표 마스터 1:1 피드백
                  </li>
                  <li className="flex items-center gap-2 text-sm opacity-80">
                    <Check className="w-4 h-4" /> 수료증 발급
                  </li>
                </ul>
                <button className="w-full py-4 bg-on-primary text-primary font-bold hover:bg-secondary-fixed transition-all rounded-md">
                  과정 신청
                </button>
              </div>
              {/* Tier 3 */}
              <div className="bg-surface-container-lowest p-10 rounded-2xl flex flex-col">
                <h4 className="text-xl font-bold text-primary mb-2">
                  Professional
                </h4>
                <p className="text-sm text-on-surface-variant mb-8">
                  전문 코치 데뷔와 창업을 위한 마케팅 실무 통합 과정입니다.
                </p>
                <div className="text-4xl font-notoSerif font-bold mb-8 text-on-surface">
                  ₩2,800,000
                </div>
                <ul className="space-y-4 mb-10 flex-grow">
                  <li className="flex items-center gap-2 text-sm text-on-surface-variant">
                    <Check className="text-primary w-4 h-4" /> 16주 집중 교육 과정
                  </li>
                  <li className="flex items-center gap-2 text-sm text-on-surface-variant">
                    <Check className="text-primary w-4 h-4" /> 창업 마케팅 및 로고
                    디자인 지원
                  </li>
                  <li className="flex items-center gap-2 text-sm text-on-surface-variant">
                    <Check className="text-primary w-4 h-4" /> 독점적 인턴쉽 기회 제공
                  </li>
                </ul>
                <button className="w-full py-4 border border-primary text-primary font-bold hover:bg-primary hover:text-on-primary transition-all rounded-md">
                  과정 신청
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 10: Contact Form */}
        <section className="py-32 bg-background">
          <div className="max-w-4xl mx-auto px-6 bg-surface-container-lowest p-12 md:p-20 rounded-3xl shadow-xl shadow-primary/5">
            <div className="text-center mb-16">
              <h2 className="font-notoSerif text-4xl font-black text-primary mb-4">
                상담 신청하기
              </h2>
              <p className="text-on-surface-variant">
                당신의 비전을 현실로 만드는 첫걸음을 함께합니다
              </p>
            </div>
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant">
                    성함
                  </label>
                  <input
                    className="w-full bg-transparent border-0 border-b border-outline/30 focus:ring-0 focus:border-primary px-0 py-3 text-lg transition-all outline-none"
                    placeholder="홍길동"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant">
                    연락처
                  </label>
                  <input
                    className="w-full bg-transparent border-0 border-b border-outline/30 focus:ring-0 focus:border-primary px-0 py-3 text-lg transition-all outline-none"
                    placeholder="010-0000-0000"
                    type="tel"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface-variant">
                  관심 과정
                </label>
                <select className="w-full bg-transparent border-0 border-b border-outline/30 focus:ring-0 focus:border-primary px-0 py-3 text-lg transition-all outline-none appearance-none">
                  <option>선택해주세요</option>
                  <option>Basic Course</option>
                  <option>Advanced Course</option>
                  <option>Professional Course</option>
                  <option>1:1 Private Mentoring</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface-variant">
                  문의 내용 (선택)
                </label>
                <textarea
                  className="w-full bg-transparent border-0 border-b border-outline/30 focus:ring-0 focus:border-primary px-0 py-3 text-lg transition-all resize-none outline-none"
                  placeholder="궁금한 사항을 남겨주세요."
                  rows={3}
                ></textarea>
              </div>
              <div className="flex items-center gap-3 py-4">
                <input
                  className="rounded-sm border-outline text-primary focus:ring-primary"
                  id="privacy"
                  type="checkbox"
                />
                <label
                  className="text-sm text-on-surface-variant"
                  htmlFor="privacy"
                >
                  개인정보처리방침에 동의합니다.
                </label>
              </div>
              <button
                type="button"
                className="w-full bg-primary py-5 rounded-md text-xl font-bold shadow-2xl shadow-primary/20 hover:bg-primary-container transition-all active:scale-[0.98]"
              >
                무료 상담 신청 완료
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#173124] dark:bg-[#1a1c1a] w-full py-12 px-8 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="max-w-md">
            <div className="font-notoSerif text-xl text-[#ffffff] mb-4">
              Architectural Insight
            </div>
            <p className="text-[#f4f4f0]/70 font-manrope text-sm leading-relaxed mb-6">
              우리는 당신의 삶과 비즈니스를 상징의 언어로 재설계하는 프리미엄
              코칭 아카데미입니다. 보이지 않는 가치를 구조화하여 명확한 해답을
              제시합니다.
            </p>
            <div className="flex gap-4">
              <Globe className="text-[#f4f4f0]/50 hover:text-[#ffffff] transition-all cursor-pointer w-6 h-6" />
              <Mail className="text-[#f4f4f0]/50 hover:text-[#ffffff] transition-all cursor-pointer w-6 h-6" />
              <Share2 className="text-[#f4f4f0]/50 hover:text-[#ffffff] transition-all cursor-pointer w-6 h-6" />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h5 className="text-[#ffffff] font-bold text-sm">Company</h5>
              <ul className="space-y-2">
                <li>
                  <a
                    className="text-[#f4f4f0]/70 text-sm hover:text-[#ffffff] transition-all"
                    href="#"
                  >
                    이용약관
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#f4f4f0]/70 text-sm hover:text-[#ffffff] transition-all"
                    href="#"
                  >
                    개인정보처리방침
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#f4f4f0]/70 text-sm hover:text-[#ffffff] transition-all"
                    href="#"
                  >
                    인재채용
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="text-[#ffffff] font-bold text-sm">Programs</h5>
              <ul className="space-y-2">
                <li>
                  <a
                    className="text-[#f4f4f0]/70 text-sm hover:text-[#ffffff] transition-all"
                    href="#"
                  >
                    베이직 코스
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#f4f4f0]/70 text-sm hover:text-[#ffffff] transition-all"
                    href="#"
                  >
                    어드밴스드
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#f4f4f0]/70 text-sm hover:text-[#ffffff] transition-all"
                    href="#"
                  >
                    창업 지원
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="text-[#ffffff] font-bold text-sm">Contact</h5>
              <ul className="space-y-2">
                <li>
                  <a
                    className="text-[#f4f4f0]/70 text-sm hover:text-[#ffffff] transition-all"
                    href="#"
                  >
                    교육 문의
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#f4f4f0]/70 text-sm hover:text-[#ffffff] transition-all"
                    href="#"
                  >
                    기업 교육
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-[#ffffff]/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#f4f4f0]/40 text-xs font-manrope">
            © 2024 Architectural Insight Tarot Coaching. All rights reserved.
          </p>
          <p className="text-[#f4f4f0]/40 text-xs font-manrope">
            서울특별시 강남구 테헤란로 123 인사이트 타워 18층
          </p>
        </div>
      </footer>
    </div>
  );
}
