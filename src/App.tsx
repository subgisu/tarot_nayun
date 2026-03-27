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
            1:1 실전 타로 코칭
              </p>
              <div className="flex gap-4 pt-4">
                <button className="bg-primary text-on-primary px-8 py-4 rounded-md font-bold text-lg hover:bg-primary-container transition-colors shadow-lg shadow-primary/10">
                  코스 둘러보기
                </button>
                <button className="border-b border-outline text-primary px-4 py-4 font-bold flex items-center gap-2 hover:gap-4 transition-all">
                  상담 예약 <ArrowRight className="w-5 h-5" />
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
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary-container rounded-2xl p-8 flex flex-col justify-end shadow-xl">
                <span className="text-4xl font-notoSerif font-bold text-on-secondary-container italic">
                  Insight.
                </span>
                <p className="text-sm text-on-secondary-container/80 mt-2">
                  구조적 사고를 통한 타로의 재해석
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
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZcXvhmE3YriN1YdIhFNxq6Xetxg6vCQPS4RTO3_R2C7VFpnyXUCnBImEQV_J1zBLGyaSFzHOYzeEHnDPwkNHtdfH7Lni31kV0megW5JiT6QI3pl5i4EupUQ0d20Y232YbNdtVinyr56-SDR5jB7ITrHZZBmVxt4YAGmKKrMdvsg7QKbdNv-vHyMzu-SlzPbkkKsfogQCRo1olG8nD6YcK3gQggOgz93nPzQoto3cpI4Ag6Xv0KXdp_oDIZCCEhL3DAU6jEwyi6eo"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
              <div className="absolute bottom-10 left-10 text-on-primary">
                <h3 className="text-3xl font-notoSerif font-bold">
                  깊이 있는 공감, 논리적인 분석
                </h3>
                <p className="opacity-70 mt-2">
                  당신의 이야기를 듣고, 함께 길을 디자인합니다.
                </p>
              </div>
            </div>
            <div className="bg-primary-container p-12 rounded-xl flex flex-col justify-center text-on-primary-container">
              <Lightbulb className="w-12 h-12 mb-6" />
              <h3 className="text-2xl font-notoSerif font-bold mb-4">
                비즈니스 수준의 전문 상담 역량
              </h3>
              <p className="leading-relaxed opacity-80">
                개인적인 상담을 넘어, 조직과 경영을 이해하는 인사이트 타로 코칭은
                오직 Architectural Insight에서만 가능합니다.
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
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDi3pybtMDcbXhaDRG3mnNgaahd3rslhU4CWwrMenNCvgGXEmCiu4TOBOkHcocu-CyFZqDYfbIoC5TsX-ffonsoOefnukgrSHjRZXz5hOZASd2viaLwdhJmPZkklMTSSKTx57rD1Pa3UoBPJPQklB2hP4tjDOaxEd99L1Sd1KQ4hAMY_oIjCZmE3g8E6KCoWVaDMsrnDGMwo3ZxSFGzjgALDY7VhLoEWkd1WTGtNkviwzZ00pIR130YmrxZxPzNCNI2X-B2N3xu3vc"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary rounded-full flex items-center justify-center text-on-secondary font-notoSerif text-xl z-20">
                  Since 2012
                </div>
              </div>
              <div className="md:w-1/2 space-y-8">
                <h2 className="text-primary text-sm font-bold tracking-[0.3em] uppercase">
                  Brand Philosophy
                </h2>
                <h3 className="text-4xl md:text-5xl font-notoSerif font-black text-on-surface leading-tight break-keep">
                  특별한 시작, 상징을 통해 세상을 재조립하다
                </h3>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  우리는 타로의 78가지 상징을 운명이 아닌 '심리적 건축 자재'로
                  정의합니다. Architectural Insight는 상담자가 피상담자의 삶을
                  견고하게 다시 세울 수 있도록 돕는 지혜의 도구를 전수합니다.
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
                  기초 이론부터 실전 상담 시뮬레이션까지, 검증된 12단계 학습
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
                  12년
                </div>
                <p className="text-sm text-on-surface-variant font-medium">
                  교육 노하우
                </p>
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
            <div className="mb-20">
              <h2 className="text-sm font-bold tracking-[0.3em] uppercase opacity-70 mb-2">
                Masters of Insight
              </h2>
              <h3 className="text-4xl font-notoSerif font-black">
                교육 전문가 그룹
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-16">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-64 h-80 rounded-xl overflow-hidden grayscale contrast-125 shrink-0">
                  <img
                    alt="Master Instructor"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmibScqkSxWVj-9TLxDIE_lPD2ALoFO-1J-SPSVCkLpTdDVixoyEnbRp_rreSBlkhxutUTL0TWPVTkPT48XVeZUprh_9mCNLr4m0ymFO-GyMQqkRFOTPEnRUFELD4DZmMrb4SOQMfHh8U6X0WWjmiFT9zKdOZEyHlr12gwyI-LUgl6lCG42tjKdc6uEj1WNk5WU4geXbckt6z1NFLTAkhnOOq-ASo2czr3y4oh8VGruQc680YmRfT2Zr0cxKIZul8FDttus7xnF9s"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-4">
                  <h4 className="text-2xl font-notoSerif font-bold">
                    Dr. 정우성{" "}
                    <span className="text-lg opacity-60 ml-2">대표 마스터</span>
                  </h4>
                  <p className="text-sm opacity-80 leading-relaxed">
                    전략 컨설팅 15년 경력과 심리학 박사 학위를 결합하여 '건축적
                    타로 코칭' 시스템을 정립하였습니다.
                  </p>
                  <ul className="text-xs space-y-2 opacity-70">
                    <li>• Architectural Insight 설립자</li>
                    <li>• 한국 코칭 심리학회 정회원</li>
                    <li>• 비즈니스 전략 인사이트 저자</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-64 h-80 rounded-xl overflow-hidden grayscale contrast-125 shrink-0">
                  <img
                    alt="Master Instructor"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDmQzjAHvy_djg-Fl94jP6A5Zx-3IyqtGIvnJBQJA8INBSvMVSxsvDiHpAjW3AFJK_GOu81D5ejpx3H6wBjv11mVl2STBVamYyULGkOmdhD3Te8aOgoyIOmRKgWKoxdV2z6vByeGBwkL6RytjYUctMd9W3xPOHcQooRchmsvbJMlQ9IBB7PRNZE1l9GLIRRKCEPUlcAercNJcPM8uZbfn5vxegOmA8hhkxx9mcudRIs_syVOABopovE0gKytSnr3_V0V0T5EeS8zI"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-4">
                  <h4 className="text-2xl font-notoSerif font-bold">
                    한소희 <span className="text-lg opacity-60 ml-2">수석 강사</span>
                  </h4>
                  <p className="text-sm opacity-80 leading-relaxed">
                    수많은 기업가들의 멘탈 코칭을 담당하며, 실전 상담에서 바로
                    적용 가능한 메커니즘을 교육합니다.
                  </p>
                  <ul className="text-xs space-y-2 opacity-70">
                    <li>• 기업체 임원 대상 전담 코치</li>
                    <li>• 상담 심리 전문가 1급</li>
                    <li>• 메이저 교육 플랫폼 최고 평점 강사</li>
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
                  <h4 className="font-bold mb-2">상담 및 신청</h4>
                  <p className="text-sm opacity-70">목표에 맞는 커리큘럼 설계</p>
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
                  <h4 className="font-bold mb-2">이론 마스터</h4>
                  <p className="text-sm opacity-70">상징과 구조의 핵심 학습</p>
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
                  <h4 className="font-bold mb-2">실전 시뮬레이션</h4>
                  <p className="text-sm opacity-70">1:1 코칭 및 피드백 수행</p>
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
                className="w-full bg-primary text-on-primary py-5 rounded-md text-xl font-bold shadow-2xl shadow-primary/20 hover:bg-primary-container transition-all active:scale-[0.98]"
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
