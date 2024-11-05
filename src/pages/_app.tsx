import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Globe, Lightbulb, Users, Phone, MapPin, Instagram, Cpu, ChevronDown } from 'lucide-react'
import '../style/globals.css';
import Image from 'next/image'
import Link from 'next/link'
import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  html, body {
    scroll-behavior: smooth;
  }
`
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const overviewContent = {
  ko: {
    title: "개요",
    content: [
      "사단법인 '대전청년을세계로'는 AI 시대에 청년들이 미래를 주도적으로 이끌 수 있는 역량을 기를 수 있도록 다양한 기회를 제공하는 비영리 단체입니다. 청년들이 AI 기술을 단순한 도구로 활용하는 것을 넘어, 사회와 산업의 변화를 주도할 수 있도록 돕고 있습니다. 이를 위해 교육 프로그램과 네트워킹 기회를 마련하여 청년들이 성장할 수 있는 환경을 조성하고 있습니다.",
      "특히, 미래 전략 포럼과 같은 프로그램을 통해 청년들이 AI 기술과 미래 사회에 대해 심도 있는 논의를 하며 비판적 사고와 문제 해결 능력을 키울 수 있습니다. 또한, 청년들이 협력하고 소통하며 서로의 아이디어를 나누고 발전시킬 수 있는 장을 제공합니다.",
      "'대전청년을세계로'는 청년들이 모여 함께 배우고 성장할 수 있는 공간을 제공합니다. 청년들이 AI와 미래 사회에 대해 주체적으로 사고하고 실천할 수 있도록 지원하며, 그들이 꿈꾸는 미래를 함께 만들어가는 동반자로서의 역할을 다하고 있습니다."
    ]
  },
  en: {
    title: "Overview",
    content: [
      "'Daejeon Youth to the World' is a nonprofit organization that provides various opportunities for young people to develop the skills needed to lead the future in the AI era. We help youth not only use AI technology as a tool but also drive social and industrial changes. To this end, we offer educational programs and networking opportunities to create an environment where young people can grow and thrive.",
      "In particular, through programs like the Future Strategy Forum, young people engage in deep discussions on AI technology and future society, building critical thinking and problem-solving abilities. We also provide a platform for youth to collaborate, communicate, and exchange and develop their ideas.",
      "'Daejeon Youth to the World' provides a space where young people can come together to learn and grow. We support youth in thinking critically and acting independently about AI and future society, positioning ourselves as partners in shaping the future they envision."
    ]
  }
}

const greetingContent = {
  ko: {
    title: "인사말",
    content: [
      "안녕하세요, 사단법인 '대전청년을세계로'의 이사장입니다.",
      "우리는 지금 AI 기술이 주도하는 새로운 혁신의 시대를 맞이하고 있습니다. 이 시대는 청년들에게 무한한 기회와 동시에 도전을 제시하고 있습니다. '대전청년을세계로'는 이러한 시대적 요구에 부응하여, 청년들이 AI 시대의 주역으로 성장할 수 있도록 돕고자 설립되었습니다.",
      "우리 단체는 AI와 미래 기술을 배우고, 이를 통해 미래 사회를 이끄는 리더로서 자리매김할 수 있는 다양한 기회와 프로그램을 제공합니다. 글로벌 네트워킹, 혁신적 사고 및 문제 해결 능력을 배양하며, 청년들이 다가오는 AI 시대에 능동적이고 선제적으로 대응할 수 있도록 돕고 있습니다.",
      "저희 '대전청년을세계로'는 미래를 준비하는 청년들이 함께 성장하고 도전하는 공간입니다. 앞으로도 청년들이 AI 시대의 선도적인 리더로 성장할 수 있도록 아낌없이 지원하며, 그들의 가능성을 최대한 발휘할 수 있도록 최선을 다할 것입니다.",
      "감사합니다.",
      "(사)대전청년을세계로 이사장"
    ]
  },
  en: {
    title: "Greeting",
    content: [
      "Hello, I am the chairman of 'Daejeon Youth to the World'.",
      "We are now entering a new era of innovation led by AI technology. This era presents both infinite opportunities and challenges for young people. 'Daejeon Youth to the World' was established to meet these demands of the times and help young people grow as leaders in the AI era.",
      "Our organization provides various opportunities and programs for learning AI and future technologies, enabling young people to establish themselves as leaders in future society. We cultivate global networking, innovative thinking, and problem-solving skills, helping young people to respond proactively and preemptively to the coming AI era.",
      "'Daejeon Youth to the World' is a space where young people preparing for the future can grow and challenge themselves together. We will continue to support young people to grow as leading leaders in the AI era and do our best to help them realize their full potential.",
      "Thank you.",
      "Chairman, Daejeon Youth to the World"
    ]
  }
}

const LanguageToggle = ({ isEnglish, toggleLanguage }) => (
  <div className="inline-flex items-center bg-blue-800/30 rounded-full p-1">
    <button
      onClick={() => toggleLanguage()}
      className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
        !isEnglish
          ? 'bg-blue-500 text-white shadow-inner'
          : 'text-blue-200 hover:text-white'
      }`}
    >
      한국어
    </button>
    <button
      onClick={() => toggleLanguage()}
      className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
        isEnglish
          ? 'bg-blue-500 text-white shadow-inner'
          : 'text-blue-200 hover:text-white'
      }`}
    >
      English
    </button>
  </div>
)

export default function Component() {
  const [isEnglish, setIsEnglish] = useState(false)
  const [isOverviewOpen, setIsOverviewOpen] = useState(false)

  const toggleLanguage = () => setIsEnglish(!isEnglish)

  return (
    <>
      <GlobalStyle />
      <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-950 via-blue-900 via-30% via-blue-800 via-60% to-blue-950 text-white font-sans">
        {/* Dynamic AI Background */}
        <div className="absolute inset-0 overflow-hidden opacity-30" style={{ zIndex: 0 }}>
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path
              d="M0,50 Q25,30 50,50 T100,50"
              stroke="hsl(220, 100%, 80%)"
              strokeWidth="0.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
            />
            <motion.path
              d="M0,70 Q35,50 70,70 T100,70"
              stroke="hsl(220, 100%, 85%)"
              strokeWidth="0.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3.5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
            />
            <motion.path
              d="M0,30 Q65,50 30,70 T100,30"
              stroke="hsl(220, 100%, 90%)"
              strokeWidth="0.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-40 h-40 bg-blue-500 rounded-full opacity-20 filter blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          </div>
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-blue-300 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top:  `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  repeatType: 'loop',
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-4 sm:px-6 lg:px-8" style={{ zIndex: 1 }}>
          {/* Header with navigation */}
          <header className="mb-16 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <Link href="/" className="flex items-center mb-4 md:mb-0 md:mr-auto">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%EC%A0%9C%EB%AA%A9%EC%9D%84-%EC%9E%85%EB%A0%A5%ED%95%B4%EC%A3%BC%EC%84%B8%EC%9A%94_-001%20(4)-ZiSxrYwV2QL1LKRVfKGQMgc8gzTDGE.png"
                  alt="대전청년을세계로 로고"
                  width={600}
                  height={150}
                  className="max-h-36 w-auto"
                />
              </Link>
              <nav className="flex flex-wrap justify-center md:justify-end items-center space-x-4 md:space-x-8 md:ml-auto">
                <div className="relative group">
                  <button
                    className="text-lg font-medium text-blue-200 hover:text-blue-300 transition-colors flex items-center"
                    onClick={() => setIsOverviewOpen(!isOverviewOpen)}
                  >
                    {isEnglish ? "Overview" : "개요"}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {isOverviewOpen && (
                    <div
                      className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-blue-900 ring-1 ring-black ring-opacity-5 divide-y divide-blue-800"
                    >
                      <div className="py-1">
                        <a
                          href="#개요"
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('개요');
                            setIsOverviewOpen(false);
                          }}
                          className="block px-4 py-2 text-sm text-blue-200 hover:bg-blue-800"
                        >
                          {isEnglish ? "Overview" : "개요"}
                        </a>
                      </div>
                      <div className="py-1">
                        <a
                          href="#인사말"
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('인사말');
                            setIsOverviewOpen(false);
                          }}
                          className="block px-4 py-2  text-sm text-blue-200 hover:bg-blue-800"
                        >
                          {isEnglish ? "Greeting" : "인사말"}
                        </a>
                      </div>
                      <div className="py-1">
                        <a
                          href="#조직도"
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('조직도');
                            setIsOverviewOpen(false);
                          }}
                          className="block px-4 py-2 text-sm text-blue-200 hover:bg-blue-800"
                        >
                          {isEnglish ? "Organization Chart" : "조직도"}
                        </a>
                      </div>
                    </div>
                  )}
                </div>
                {['목표와 비전', '주요 프로그램', '갤러리'].map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item);
                    }}
                    className="text-lg font-medium text-blue-200 hover:text-blue-300 transition-colors"
                  >
                    {isEnglish ? (item === '목표와 비전' ? 'Goals and Vision' : item === '주요 프로그램' ? 'Key Programs' : 'Gallery') : item}
                  </a>
                ))}
              </nav>
            </div>
          </header>

          {/* Hero Section */}
          <motion.section 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-indigo-300">
              {isEnglish ? "Leading Next-Generation Youth Leaders in the AI Era" : "AI 시대를 이끄는 차세대 청년 리더들의 플랫폼"}
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-2">
              {isEnglish ? "Providing Global Leadership and AI Capacity Building Programs for the Future" : "미래를 준비하는 글로벌 리더십과 AI 역량 강화 프로그램 제공"}
            </p>
          </motion.section>

          {/* Overview (including Greeting and Organization) */}
          <motion.section 
            id="개요"
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex flex-col items-center justify-between mb-8">
              <h2 className="text-3xl font-semibold text-blue-200 mb-4 text-center">{isEnglish ? overviewContent.en.title : overviewContent.ko.title}</h2>
              <LanguageToggle isEnglish={isEnglish} toggleLanguage={toggleLanguage} />
            </div>
            <div className="bg-blue-950/30 backdrop-blur-sm rounded-lg p-8 shadow-lg border border-blue-800/30 flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2 flex-shrink-0 flex items-center justify-center order-1 md:order-none">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%EB%8C%80%EC%A7%80%201%20%EC%82%AC%EB%B3%B8%205@3x-100-9JZUFofoiG5swoLY9taC65G8MvX1Rp.jpg"
                  alt="대전청년을세계로 로고"
                  width={400}
                  height={300}
                  className="rounded-lg object-contain w-full h-full"
                />
              </div>
              <div className="md:w-1/2 md:pl-8">
                {(isEnglish ? overviewContent.en.content : overviewContent.ko.content).map((paragraph, index) => (
                  <p key={index} className="text-lg text-blue-100 mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Greeting */}
            <div id="인사말" className="mt-16">
              <h3 className="text-3xl font-semibold text-blue-200 mb-4 text-center">{isEnglish ? greetingContent.en.title : greetingContent.ko.title}</h3>
              <div className="bg-blue-950/30 backdrop-blur-sm rounded-lg p-8 shadow-lg border border-blue-800/30 flex flex-col md:flex-row md:items-stretch">
                <div className="md:w-2/3 flex flex-col justify-between">
                  <div className="space-y-4">
                    {(isEnglish ? greetingContent.en.content : greetingContent.ko.content).slice(0, -1).map((paragraph, index) => (
                      <p key={index} className="text-lg text-blue-100">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <p className="text-lg text-blue-100 mt-8 text-right">
                    {(isEnglish ? greetingContent.en.content : greetingContent.ko.content).slice(-1)[0]}
                  </p>
                </div>
                <div className="md:w-1/3 mt-8 md:mt-0 md:ml-8 flex items-center justify-center">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KakaoTalk_20241019_164220124-removebg%20(1)-Af417T959sNzNtQDszR5pnF6KjNEeB.png"
                    alt="정민기 이사장"
                    width={300}
                    height={400}
                    className="rounded-lg object-cover w-full h-auto md:h-full"
                  />
                </div>
              </div>
            </div>

            {/* Goals and Vision */}
            <motion.section 
              id="목표와 비전"
              className="mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-3xl font-semibold mb-8 text-center text-blue-200">{isEnglish ? "Goals and Vision" : "목표와 비전"}</h2>
              <div className="bg-blue-950/30 backdrop-blur-sm rounded-lg p-8 shadow-lg border border-blue-800/30">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-blue-200">{isEnglish ? "Goals" : "목표"}</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <ChevronRight className="w-6 h-6 text-blue-300 mr-2 flex-shrink-0" />
                        <p className="text-lg text-blue-100">{isEnglish ? "Cultivating young leaders to spearhead the AI era" : "AI 시대를 선도할 청년 리더 양성"}</p>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="w-6 h-6 text-blue-300 mr-2 flex-shrink-0" />
                        <p className="text-lg text-blue-100">{isEnglish ? "Developing globally competitive talent" : "글로벌 경쟁력을 갖춘 인재 육성"}</p>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="w-6 h-6 text-blue-300 mr-2 flex-shrink-0" />
                        <p className="text-lg text-blue-100">{isEnglish ? "Developing AI utilization skills and ethical insights" : "AI 기술 활용 능력과 윤리적 통찰력 개발"}</p>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-blue-200">{isEnglish ? "Vision" : "비전"}</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <ChevronRight className="w-6 h-6 text-blue-300 mr-2 flex-shrink-0" />
                        <p className="text-lg text-blue-100">{isEnglish ? "Building an innovative educational platform for the AI era" : "AI 시대에 대비한 혁신적 교육 플랫폼 구축"}</p>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="w-6 h-6 text-blue-300 mr-2 flex-shrink-0" />
                        <p className="text-lg text-blue-100">{isEnglish ? "Strengthening international cooperation through a global network" : "글로벌 네트워크를 통한 국제 협력 강화"}</p>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="w-6 h-6 text-blue-300 mr-2 flex-shrink-0" />
                        <p className="text-lg text-blue-100">{isEnglish ? "Creating an AI-based innovation ecosystem linked to the local community" : "지역사회와 연계한 AI 기반 혁신 생태계 조성"}</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Organization Chart */}
            <div id="조직도" className="mt-16">
              <h3 className="text-3xl font-semibold mb-4 text-center text-blue-200">
                {isEnglish ? "Organization Chart" : "조직도"}
              </h3>
              <div className="bg-blue-950/30 backdrop-blur-sm rounded-lg p-8 shadow-lg border border-blue-800/30">
                <p className="text-xl text-blue-100 text-center">
                  {isEnglish 
                    ? "Our organization chart is currently being updated. Please check back soon for the latest structure." 
                    : "현재 조직도를 업데이트하고 있습니다. 곧 최신 구조를 확인하실 수 있습니다."}
                </p>
              </div>
            </div>
          </motion.section>

          {/* Key Programs */}
          <section id="주요 프로그램" className="mb-16">
            <h2 className="text-3xl font-semibold mb-8 text-center text-blue-200">{isEnglish ? "Key Programs" : "주요 프로그램"}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: isEnglish ? 'Future Strategy Forum' : '미래 전략 포럼', icon: Lightbulb, description: isEnglish ? 'A platform for young people to share insights on AI technology, ethics, and the future society, fostering growth through discussions and presentations.' : '청년들이 AI 기술과 윤리, 미래 사회에 대한 통찰을 나누고 성장할 수 있는 토론과 발표의 장을 제공.' },
                { title: isEnglish ? 'Youth Networking' : '청년 네트워킹', icon: Users, description: isEnglish ? 'Provides opportunities for local youth to actively interact and grow through ESG activities, volunteer work, and clubs.' : 'ESG 활동, 봉사활동, 그리고 소모임 등을 통해 지역 청년들이 활발하게 교류하고 성장할 수 있는 기회를 제공.' },
                { title: isEnglish ? 'AI Innovation Committee' : 'AI 혁신위원회', icon: Cpu, description: isEnglish ? 'Young people from various industries gather with businesspeople, students, and experts to discuss future preparations on the topic of AI innovation.' : '각 산업 분야의 청년들이 AI 혁신을 주제로 기업인, 학생, 전문가들이 함께 모여 미래를 대비하는 논의를 진행.' },
                { title: isEnglish ? 'Global Networking' : '글로벌 네트워킹', icon: Globe, description: isEnglish ? 'Provides a platform for young people to actively interact with young people from various countries.' : '청년들이 여러 나라의 외국인 청년들과 활발하게 교류할 수 있는 글로벌 네트워킹의 장을 제공.' },
              ].map((program, index) => (
                <motion.div 
                  key={program.title}
                  className="bg-blue-950/30 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-blue-800/30 hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className="relative w-full aspect-square mb-4 rounded-lg overflow-hidden bg-blue-900">
                    {program.title === 'Future Strategy Forum' || program.title === '미래 전략 포럼' ? (
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KakaoTalk_20240929_211504374_05%20-%20%EB%B3%B5%EC%82%AC%EB%B3%B8-PWjt2R03seQ8DDT6YfsUlOWIII8hOX.jpg"
                        alt="2024 Future Strategy Forum 이미지"
                        layout="fill"
                        objectFit="contain"
                      />
                    ) : (
                      program.title === 'Youth Networking' || program.title === '청년 네트워킹' ? (
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1mEtLXCZ8HMs37igxWZCH4F9pzTflo.png"
                          alt="청년 네트워킹 이미지"
                          layout="fill"
                          objectFit="cover"
                        />
                      ) : (
                        program.title === 'Global Networking' || program.title === '글로벌 네트워킹' ? (
                          <Image
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-z6amBCKFXgg59Yhwf8o9vJxFPdDXKB.png"
                            alt="글로벌 네트워킹 이미지"
                            layout="fill"
                            objectFit="cover"
                          />
                        ) : (
                          program.title === 'AI Innovation Committee' || program.title === 'AI 혁신위원회' ? (
                            <Image
                              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oXbsHwPHpVHO8hoYk50tBnLDj4SPr6.png"
                              alt="AI 혁신위원회 이미지"
                              layout="fill"
                              objectFit="cover"
                            />
                          ) : (
                            <Image
                              src={`/placeholder.svg?height=300&width=400`}
                              alt={`${program.title} 이미지`}
                              layout="fill"
                              objectFit="contain"
                            />
                          )
                        )
                      )
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center text-blue-200">{program.title}</h3>
                  <p className="text-lg text-blue-100 text-center">{program.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Gallery */}
          <section id="갤러리" className="mb-16">
            <h2 className="text-3xl font-semibold mb-8 text-center text-blue-200">{isEnglish ? "Gallery" : "갤러리"}</h2>
            <div className="bg-blue-950/30 backdrop-blur-sm rounded-lg p-8 shadow-lg border border-blue-800/30 text-center">
              <p className="text-xl text-blue-100">
                {isEnglish 
                  ? "We're currently preparing our gallery. Please check back soon for updates!" 
                  : "현재 갤러리를 준비 중입니다. 곧 업데이트될 예정이니 기대해 주세요!"}
              </p>
            </div>
          </section>

          {/*  Call to Action */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-blue-200">{isEnglish ? "Ready to build the future together?" : "함께 미래를 만들어갈 준비가 되셨나요?"}</h2>
         
          </motion.div>
        </div>

        {/* Footer */}
        <footer className="relative z-10 border-t border-blue-800/30 bg-blue-950/70 backdrop-blur-sm py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center text-center">
              {/* Contact Information */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-blue-200">{isEnglish ? "Contact Us" : "연락처"}</h3>
                <ul className="space-y-2">
                  <li className="flex items-center justify-center">
                    <Phone className="w-5 h-5 mr-2 text-blue-300" />
                    <span className="text-lg text-blue-100">042-710-2177</span>
                  </li>
                  <li className="flex items-start justify-center">
                    <MapPin className="w-5 h-5 mr-2 text-blue-300 mt-1" />
                    <span className="text-lg text-blue-100">대전 서구 둔산로 63 403-225</span>
                  </li>
                </ul>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-blue-200">{isEnglish ? "Quick Links" : "바로가기"}</h3>
                <ul className="space-y-2">
                  <li><a href="#개요" className="text-lg text-blue-100 hover:text-blue-300 transition-colors">{isEnglish ? "Overview" : "개요"}</a></li>
                  <li><a href="#목표와 비전" className="text-lg text-blue-100 hover:text-blue-300 transition-colors">{isEnglish ? "Goals and Vision" : "목표와 비전"}</a></li>
                  <li><a href="#주요 프로그램" className="text-lg text-blue-100 hover:text-blue-300 transition-colors">{isEnglish ? "Programs" : "프로그램"}</a></li>
                  <li><a href="#갤러리" className="text-lg text-blue-100 hover:text-blue-300 transition-colors">{isEnglish ? "Gallery" : "갤러리"}</a></li>
                </ul>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-blue-200">{isEnglish ? "Social Media" : "소셜 미디어"}</h3>
                <div className="flex justify-center">
                  <a href="#" className="text-blue-300 hover:text-blue-100 transition-colors">
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-blue-800 text-center text-sm text-blue-300">
              <p>&copy; 2023 (사)대전청년을세계로. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}