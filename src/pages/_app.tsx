'use client'

import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { Globe, ChevronDown, Menu, ChevronUp } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useRouter } from 'next/router'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Image from 'next/image'
import './globals.css'

// FAQ Item Component
const FAQItem = ({ questionKo, answerKo, questionEn, answerEn, questionJa, answerJa, language }: { questionKo: string; answerKo: string; questionEn: string; answerEn: string; questionJa: string; answerJa: string; language: 'ko' | 'en' | 'ja' }) => {
  const [isOpen, setIsOpen] = useState(false);
   
  return (
    
    <div className="border-b border-gray-700 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-white">{language === 'ko' ? questionKo : language === 'en' ? questionEn : questionJa}</h3>
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      {isOpen && <p className="mt-2 text-gray-300">{language === 'ko' ? answerKo : language === 'en' ? answerEn : answerJa}</p>}
    </div>
  );
};

const sponsors = [
  { src: "https://daecheongse.co.kr/sponsor05.png", alt: "마라톤" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sponsor07-YDEey6ZLPsEnuWdoT0ijklLKvv8NJP.png", alt: "청춘포털" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sponsor06.jpg-y0D6ex090RxvtzLa8g8vzCCk2pMAlm.jpeg", alt: "OREUM COMPANY" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sponsor08-UEGXZqAdNhmLcEfMQijaurCOmO1RAJ.png", alt: "INNOCURVE" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sponsor02.jpg-RgodgY4c7fTuIaOJ0y08aBlLPyc7gf.jpeg", alt: "메리츠화재 RCM" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sponsor04.png-wFOl1zvAEAx4HVRjAwdABS6cICXgXG.webp", alt: "JUDDANG" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sponsor03.jpg-xiyGd9fGSkxvQ02AaHpfeFWKEZpN2B.jpeg", alt: "청춘정거장" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sponsor01-YcHWx7T1PjzIdk68FliTh1iJYrIAZj.png", alt: "YA 청년기획" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PjCyYDBf9WyBaZiwdj0VuOWMknZZjz.png", alt: "이가원" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NeK3wv2lEZYjrg0kpgxHWVvNCF7QEU.png", alt: "가감승제" },
]

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [language, setLanguage] = useState<'ko' | 'en' | 'ja'>('ko')
  const [error, setError] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleSponsors, setVisibleSponsors] = useState(sponsors.slice(0, 5))

  useEffect(() => {    
    try {
      const canvas = document.getElementById('backgroundCanvas') as HTMLCanvasElement;
      if (!canvas) {
        throw new Error("Canvas element not found");
      }
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        throw new Error("Unable to get 2D context from canvas");
      }

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const particles: { x: number; y: number; size: number; speedX: number; speedY: number }[] = [];
      for (let i = 0; i < 100; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25
        });
      }

      function animate() {
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.fillStyle = 'rgba(0, 255, 204, 0.1)';
          particles.forEach(particle => {
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();

            particle.x += particle.speedX;
            particle.y += particle.speedY;

            if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
            if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
          });
        }
        requestAnimationFrame(animate);
      }

      animate();

      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred");
    }
  }, []);

  useEffect(() => {
    const sponsorsContainer = document.querySelector('.sponsors-container');
    if (sponsorsContainer) {
      const scrollWidth = sponsorsContainer.scrollWidth;
      const animationDuration = scrollWidth / 50; // Adjust speed as needed

      sponsorsContainer.classList.add('animate');
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleSponsors(prevSponsors => {
        const nextSponsors = [...prevSponsors]
        nextSponsors.shift()
        const nextIndex = (sponsors.indexOf(prevSponsors[prevSponsors.length - 1]) + 1) % sponsors.length
        nextSponsors.push(sponsors[nextIndex])
        return nextSponsors
      })
    }, 3000)

    return () => clearInterval(timer)
  }, [])


  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ko' ? 'en' : 'ko');
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
     <Head>
        <meta charSet="utf-8" />
        <title>Future Strategy Forum 2024</title>
        <meta name="description" content="미래전략포럼에 귀하를 초대합니다." />
        <meta property="og:title" content="Future Strategy Forum 2024" />
        <meta property="og:description" content="미래전략포럼에 귀하를 초대합니다." />
        <meta property="og:image" content="https://daecheongse.co.kr/dcsLogo.jpg" />
        <meta property="og:url" content="https://daecheongse.co.kr" />
        <meta property="og:type" content="website" />
      </Head>
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white relative overflow-hidden">
      <canvas id="backgroundCanvas" className="absolute top-0 left-0 w-full h-full pointer-events-none"></canvas>
      <div className="relative z-10">
        {/* Navigation Bar */}
        <nav className="bg-gray-800 bg-opacity-50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-end h-16">
              <div className="flex items-center">
                <Select onValueChange={(value) => setLanguage(value as 'ko' | 'en' | 'ja')} defaultValue={language}>
                  <SelectTrigger className="w-[180px] bg-gray-700 text-white border-gray-600">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-700 text-white border-gray-600">
                    <SelectItem value="ko" className="hover:bg-gray-600">한국어</SelectItem>
                    <SelectItem value="en" className="hover:bg-gray-600">English</SelectItem>
                    <SelectItem value="ja" className="hover:bg-gray-600">日本語</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </nav>
  
        {/* Hero Section */}
        <div className="py-24 text-center">
          <div className="mb-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%EB%8C%80%EC%A7%80%201%20%EC%82%AC%EB%B3%B8%209@3x-8-bQy8Fo0GeUn8I9hVfgZbYcpbOXzPFj.png"
              alt="대한청년을세계로 로고"
              width={400}
              height={200}
              className="mx-auto w-full max-w-[400px] h-auto"
            />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Future Strategy Forum <span className="text-sky-300">2024</span></h2>
          <h3 className="text-xl md:text-2xl font-bold mb-4">
          {language === 'ko' ? '미래전략포럼에 귀하를 초대합니다.' : language === 'en' ? 'We invite you to the Future Strategy Forum.' : 'フューチャー・ストラテジー・フォーラムにご招待します。'}
         </h3>
          <p className="text-xl text-gray-400 font-bold">2024. 12. 03, 19:00</p>
        </div>

     {/* Introduction Section */}
     <section className="py-16 bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {language === 'ko' 
                ? '"급변하는 기술 혁신, 뒤처지는 인식의 간극"' 
                : language === 'en'
                ? '"Rapidly Changing Technological Innovation, Lagging Perception Gap"'
                : '"急速に変化する技術革新、遅れをとる認識のギャップ"'}
            </h2>
            <p className="text-gray-300 text-center leading-relaxed">
              {language === 'ko'
                ? '미래전략포럼은 급변하는 미래 시대의 기술 혁신 속에서 청년들이 뒤처지지 않도록 인식 격차를 해소하고, 더 나아가 혁신적 변화를 주도하는 것을 목표로 합니다.'
                : language === 'en'
                ? 'The Future Strategy Forum aims to bridge the perception gap and lead innovative changes, ensuring that young people do not fall behind in the rapidly evolving technological innovations of the future era.'
                : '未来戦略フォーラムは、急速に変化する未来時代の技術革新の中で、若者が遅れを取らないように認識のギャップを解消し、さらに革新的な変化を主導することを目指しています。'}
            </p>
          </div>
        </section>
 {/* Keynote Speakers Section */}
 <section className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          {language === 'ko' ? '기조연설' : language === 'en' ? 'Keynote Speakers' : '基調講演'}
        </h2>
        <Card className="bg-gray-800 bg-opacity-50 border-gray-700 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-4">
              <div className="text-center">
                <div className="w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gdJgWbhjngLZRsgavDJhT5dSwFd3cu.png"
                    alt="문형남 교수"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-white">
                  {language === 'ko' ? '문형남' : language === 'en' ? 'Moon Hyung-nam' : 'ムン・ヒョンナム'}
                </h4>
                <div className="space-y-1">
                  <p className="text-sky-300">
                    {language === 'ko' 
                      ? '숙명여대 글로벌융합대학 학장' 
                      : language === 'en' 
                      ? 'Dean, College of Global Convergence, Sookmyung Women\'s University' 
                      : '淑明女子大学グローバル融合大学学長'}
                  </p>
                  <p className="text-sky-300">
                    {language === 'ko' 
                      ? '한국AI 교육협회 회장' 
                      : language === 'en' 
                      ? 'President, Korea AI Education Association' 
                      : '韓国AI教育協会会長'}
                  </p>
                  <div className="mt-4 text-sm text-gray-400 space-y-1">
                    <p>{language === 'ko' ? '성균관대학교 대학원 경영학 박사' : language === 'en' ? 'Ph.D. in Business Administration, Sungkyunkwan University' : '成均館大学大学院経営学博士'}</p>
                    <p>{language === 'ko' ? 'KAIST 공학 박사 수료' : language === 'en' ? 'Completed Ph.D. coursework in Engineering, KAIST' : 'KAIST工学博士課程修了'}</p>
                    <p>{language === 'ko' ? '고려대학교 대학원 경영학 석사' : language === 'en' ? 'M.B.A., Korea University' : '高麗大学大学院経営学修士'}</p>
                    <p>{language === 'ko' ? '성균관대학교 경영학 학사' : language === 'en' ? 'B.B.A., Sungkyunkwan University' : '成均館大学経営学学士'}</p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-iS5NfWwQKwlzWudaAJumQffmTLTxLP.png"
                    alt="장능인 상임이사"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-white">
                  {language === 'ko' ? '장능인' : language === 'en' ? 'Jang Neung-in' : 'チャン・ヌンイン'}
                </h4>
                <div className="space-y-1">
                  <p className="text-sky-300">
                    {language === 'ko' ? '미담장학회 상임이사' : language === 'en' ? 'Executive Director, Midam Scholarship Foundation' : '美談奨学会常任理事'}
                  </p>
                  <p className="text-sky-300">
                    {language === 'ko' ? '서울특별시 사회적경제지원센터장' : language === 'en' ? 'Director, Seoul Social Economy Support Center' : 'ソウル特別市社会的経済支援センター長'}
                  </p>
                  <p className="text-sky-300">
                    {language === 'ko' ? '충남대학교 겸임교수' : language === 'en' ? 'Adjunct Professor, Chungnam National University' : '忠南大学校兼任教授'}
                  </p>
                  <p className="text-sky-300">
                    {language === 'ko' ? '울산대학교 겸임교수' : language === 'en' ? 'Adjunct Professor, University of Ulsan' : '蔚山大学校兼任教授'}
                  </p>
                  <div className="mt-4 text-sm text-gray-400 space-y-1">
                    <p>{language === 'ko' ? 'KAIST 사회적기업가 MBA 졸업(경영학석사)' : language === 'en' ? 'M.B.A. in Social Entrepreneurship, KAIST' : 'KAIST社会的企業家MBA卒業（経営学修士）'}</p>
                    <p>{language === 'ko' ? 'KAIST 전기및전자공학과 졸업(공학사)' : language === 'en' ? 'B.S. in Electrical and Electronic Engineering, KAIST' : 'KAIST電気電子工学科卒業（工学士）'}</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>


      {/* Sessions Section */}
      <section className="py-16 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">
          {language === 'ko' ? '세션' : language === 'en' ? 'Sessions' : 'セッション'}
        </h2>
        <h3 className="text-xl font-semibold mb-8 text-center text-white">
          {language === 'ko' ? '청년의 시선으로 본 AI와 산업의 미래' : language === 'en' ? 'The Future of AI and Industry from Youth Perspective' : '若者の視点から見たAIと産業の未来'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-gray-800 bg-opacity-50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-4">
              <h4 className="text-lg font-semibold mb-2 text-white">
                {language === 'ko' ? '최정현' : language === 'en' ? 'Choi Jung-hyun' : 'チェ・ジョンヒョン'}
              </h4>
              <p className="text-sky-300 mb-2">
                {language === 'ko' ? 'AI취창업혁신위원회 의장' : language === 'en' ? 'Chair, AI Employment and Startup Innovation Committee' : 'AI就創業革新委員会委員長'}
              </p>
              <p className="text-gray-300">
                {language === 'ko' ? '"AI와 취·창업의 미래: 기회와 도전의 접점"' : language === 'en' ? '"The Future of AI in Employment and Startups: Intersection of Opportunities and Challenges"' : '"AIと就創業の未来：機会と挑戦の接点"'}
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 bg-opacity-50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-4">
              <h4 className="text-lg font-semibold mb-2 text-white">
                {language === 'ko' ? '이재권' : language === 'en' ? 'Lee Jae-kwon' : 'イ・ジェグォン'}
              </h4>
              <p className="text-sky-300 mb-2">
                {language === 'ko' ? 'AI 홍보전략위원회 의장' : language === 'en' ? 'Chair, AI PR Strategy Committee' : 'AI広報戦略委員会委員長'}
              </p>
              <p className="text-gray-300">
                {language === 'ko' ? '"초개인화의 시대: AI가 이끄는 맞춤형 미래"' : language === 'en' ? '"The Era of Hyper-personalization: AI-led Customized Future"' : '"超パーソナル化の時代：AIが導くカスタムメイドの未来"'}
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 bg-opacity-50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-4">
              <h4 className="text-lg font-semibold mb-2 text-white">
                {language === 'ko' ? '전성욱' : language === 'en' ? 'Jeon Seong-wook' : 'チョン・ソンウク'}
              </h4>
              <p className="text-sky-300 mb-2">
                {language === 'ko' ? '사외이사' : language === 'en' ? 'Non-Executive Director' : '社外取締役'}
              </p>
              <p className="text-gray-300">
                {language === 'ko' ? '"AI와 보험 산업의 융합: 미래 리스크 관리의 혁신"' : language === 'en' ? '"Convergence of AI and Insurance Industry: Innovation in Future Risk Management"' : '"AIと保険産業の融合：未来リスク管理の革新"'}
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 bg-opacity-50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-4">
              <h4 className="text-lg font-semibold mb-2 text-white">
                {language === 'ko' ? '채승민 (Shine)' : language === 'en' ? 'Chae Seung-min (Shine)' : 'チェ・スンミン (Shine)'}
              </h4>
              <p className="text-sky-300 mb-2">
                {language === 'ko' ? '글로벌위원회 의장' : language === 'en' ? 'Chair, Global Committee' : 'グローバル委員会委員長'}
              </p>
              <p className="text-gray-300">
                {language === 'ko' ? '"Future of Korea: Globalization"' : language === 'en' ? '"Future of Korea: Globalization"' : '"韓国の未来：グローバル化"'}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>


      {/* Event Schedule Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {language === 'ko' ? '행사 순서' : language === 'en' ? 'Event Schedule' : 'イベントスケジュール'}
          </h2>
          <Card className="bg-gray-800 bg-opacity-50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-4">
                  <div className="text-left md:w-1/2">
                    <h3 className="text-xl font-semibold text-white">
                      {language === 'ko' ? '전문가 기조연설' : language === 'en' ? 'Expert Keynote Speech' : '専門家基調講演'}
                    </h3>
                    <p className="text-sky-300 mt-1">
                      {language === 'ko' ? 'Expert Keynote Speech' : language === 'en' ? '전문가 기조연설' : '専門家基調講演'}
                    </p>
                  </div>
                  <p className="text-lg text-gray-300 mt-2 md:mt-0">19:00 - 20:00</p>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-4">
                  <div className="text-left md:w-1/2">
                    <h3 className="text-xl font-semibold text-white">
                      {language === 'ko' ? '청년들의 시선으로 본 AI 산업의 미래' : language === 'en' ? 'The Future of AI Industry from Youth\'s Perspective' : '若者の視点から見たAI産業の未来'}
                    </h3>
                    <p className="text-sky-300 mt-1">
                      {language === 'ko' ? 'The Future of AI Industry from Youth\'s Perspective' : language === 'en' ? '청년들의 시선으로 본 AI 산업의 미래' : '若者の視点から見たAI産業の未来'}
                    </p>
                  </div>
                  <p className="text-lg text-gray-300 mt-2 md:mt-0">20:00 - 21:00</p>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div className="text-left md:w-1/2">
                    <h3 className="text-xl font-semibold text-white">
                      {language === 'ko' ? '네트워킹' : language === 'en' ? 'Networking' : 'ネットワーキング'}
                    </h3>
                    <p className="text-sky-300 mt-1">
                      {language === 'ko' ? 'Networking' : language === 'en' ? '네트워킹' : 'ネットワーキング'}
                    </p>
                  </div>
                  <p className="text-lg text-gray-300 mt-2 md:mt-0">21:00 - 22:00</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>


            {/* Venue Information */}
            <section className="py-16 bg-black bg-opacity-50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {language === 'ko' ? '행사 장소' : language === 'en' ? 'Venue' : '会場'}
          </h2>
          <Card className="bg-gray-800 bg-opacity-50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="text-center space-y-4">
                <h3 className="text-xl font-semibold text-white">
                  {language === 'ko' ? '대전 크리스탈 컨벤션 4층 연회장 (대전 서구 만년동 KBS 정문 앞)' : language === 'en' ? 'Crystal Convention Daejeon, 4th Floor Banquet Hall (In front of KBS main gate, Mannyeon-dong, Seo-gu, Daejeon)' : '大田クリスタルコンベンション4階宴会場（大田西区万年洞KBS正門前）'}
                </h3>
                <p className="text-sky-300">
                  {language === 'ko' ? '대전광역시 서구 둔산대로 117번길 127' : language === 'en' ? '127, Dunsandaero 117beon-gil, Seo-gu, Daejeon, South Korea' : '大韓民国大田広域市西区遯山大路117番キル127'}
                </p>
                <div className="aspect-w-16 aspect-h-9 relative">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6hf1vPQNb4u8RxplzbJYya9gp1rGfj.png"
                    alt="대전 크리스탈 컨벤션 위치"
                    width = {1000}
                    height = {600}
                    className=""
                  />
                </div>
              </div>
            </CardContent>
            </Card>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">
              {language === 'ko' ? '우리의 비전과 가치' : language === 'en' ? 'Our Vision and Values' : '私たちのビジョンと価値'}
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {language === 'ko' 
                ? '우리 사단법인은 기술 혁신과 청년들의 인식 사이의 간극을 해소하고, 이를 통해 미래를 선도할 인재를 양성하는 데에 중점을 두고 있습니다. 청년들이 시대에 맞는 통찰과 역량을 갖추어 변화의 주역이 될 수 있도록 돕고, 혁신적 성장을 이끌어낼 수 있는 기반을 마련하겠습니다.'
                : language === 'en'
                ? 'Our organization focuses on bridging the gap between technological innovation and youth perception, aiming to nurture future leaders. We strive to help young people acquire the insights and capabilities needed for their era, enabling them to become agents of change and laying the foundation for innovative growth.'
                : '私たちの団体は、技術革新と若者の認識のギャップを解消し、未来をリードする人材育成に重点を置いています。若者が時代に応じた洞察力と能力を備え、変化の主役になれるよう支援し、革新的な成長を促す基盤を築きます。'}
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {language === 'ko' ? 'Q & A' : language === 'en' ? 'Frequently Asked Questions' : 'よくある質問'}
            </h2>
            <Card className="bg-gray-800 bg-opacity-50 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-6">
                <FAQItem 
                  questionKo="무슨 행사인가요?" 
                  answerKo="본 행사는 급변하는 AI 시대 속에서 기술과 청년 인식의 격차를 해소하기 위해 전문가들과 함께하는 교육 및 토론의 장입니다. 전문가들이 기조연설과 강의를 통해 청년들에게 기술 혁신의 흐름과 미래 사회에 필요한 통찰을 제공합니다."
                  questionEn="What kind of event is this?"
                  answerEn="This event is an educational and discussion forum with experts to bridge the gap between technology and youth perception in the rapidly changing AI era. Experts provide insights into technological innovation trends and the future society through keynote speeches and lectures."
                  questionJa="どのようなイベントですか？"
                  answerJa="このイベントは、急速に変化するAI時代において、技術と若者の認識のギャップを解消するために、専門家と共に教育と議論の場を提供します。専門家による基調講演や講義を通して、若者たちに技術革新の流れと未来社会に必要な洞察を提供します。"
                  language={language}
                />
                <FAQItem 
                  questionKo="참가 대상은 누구인가요?" 
                  answerKo="AI와 미래 기술에 관심 있는 모든 청년을 대상으로 하며, 특히 대학생, 취업 준비생, 관련 분야 종사자들의 참여를 환영합니다."
                  questionEn="Who can participate?"
                  answerEn="The event is open to all young people interested in AI and future technologies. We especially welcome university students, job seekers, and professionals in related fields."
                  questionJa="参加対象は誰ですか？"
                  answerJa="AIと未来技術に関心のあるすべての若者を対象としており、特に大学生、就職活動者、関連分野従事者の参加を歓迎します。"
                  language={language}
                />
                <FAQItem 
                  questionKo="행사 일정은 어떻게 되나요?" 
                  answerKo="행사는 2024년 12월 3일 오후 7시부터 약 3시간 동안 진행될 예정입니다. 세부 일정은 추후 공지될 예정입니다."
                  questionEn="What is the event schedule?"
                  answerEn="The event is scheduled to take place on December 3, 2024, from 7 PM for about 3 hours. Detailed schedule will be announced later."
                  questionJa="イベントスケジュールは？"
                  answerJa="イベントは2024年12月3日午後7時から約3時間開催予定です。詳細なスケジュールは後日発表します。"
                  language={language}
                />
                <FAQItem 
                  questionKo="비용이 얼마인가요?" 
                  answerKo="본 행사는 무료로 진행됩니다. 다만, 사전 등록이 필요하며 좌석이 한정되어 있어 조기 마감될 수 있습니다."
                  questionEn="How much does it cost?"
                  answerEn="This event is free of charge. However, pre-registration is required, and seats are limited, so registration may close early."
                  questionJa="費用はいくらですか？"
                  answerJa="このイベントは無料です。ただし、事前登録が必要であり、座席数に限りがあるため、早期締め切りとなる可能性があります。"
                  language={language}
                />
                <FAQItem 
                  questionKo="주차 가능한가요?" 
                  answerKo="네, 행사장 내 주차장을 이용하실 수 있습니다. 다만, 주차 공간이 제한적이므로 가능한 대중교통 이용을 권장드립니다."
                  questionEn="Is parking available?"
                  answerEn="Yes, parking is available at the venue. However, as parking spaces are limited, we recommend using public transportation if possible."
                  questionJa="駐車場はありますか？"
                  answerJa="はい、会場内に駐車場があります。ただし、駐車スペースに限りがあるため、可能な限り公共交通機関をご利用ください。"
                  language={language}
                />
                <FAQItem 
                  questionKo="식사는 제공되나요?" 
                  answerKo="네, 행사 중 간단한 식사가 제공됩니다. 참석자들이 네트워킹하며 편안한 분위기 속에서 식사를 즐기실 수 있도록 준비될 예정입니다."
                  questionEn="Will meals be provided?"
                  answerEn="Yes, light meals will be provided during the event. We will prepare for attendees to enjoy their meals in a comfortable atmosphere while networking."
                  questionJa="食事は提供されますか？"
                  answerJa="はい、イベント中に軽食を提供します。参加者の方々がネットワーキングを楽しみながら、快適な雰囲気の中で食事を楽しめるように準備します。"
                  language={language}
                />
                <div className="mt-6 text-center">
                  <p className="text-white">
                    {language === 'ko' ? '기타 문의사항은 사무처로 연락 주시기 바랍니다.' : language === 'en' ? 'For any other inquiries, please contact our office.' : 'その他のお問い合わせは事務局までご連絡ください。'}
                  </p>
                  <p className="text-sky-300 font-semibold">TEL: 042-710-2177</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

{/* Sponsors Section */}
<section className="py-16 bg-black bg-opacity-50 backdrop-blur-sm overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold mb-12 text-center text-white">
      {language === 'ko' ? '후원사' : language === 'en' ? 'Sponsors' : 'スポンサー'}
    </h2>
    <div className="relative">
      <div className="flex transition-all duration-1000 ease-in-out">
        {visibleSponsors.map((sponsor, index) => (
          <div key={index} className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 px-2">
            <div className="w-full h-[100px] sm:h-[120px] md:h-[150px] bg-white rounded-lg flex items-center justify-center">
              <Image 
                src={sponsor.src}
                alt={sponsor.alt}
                width={180}
                height={80}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
      {/* Footer */}
      <footer className="bg-gray-800 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center text-gray-300">
          <p className="mb-4">
            {language === 'ko' ? '© (사)대한청년을세계로 . 모든 권리 보유' : language === 'en' ? '© Korea Youth to the World Association. All rights reserved.' : '© 韓国青年を世界へ協会. 全著作権所有。'}
          </p>
        </div>
      </footer>
    </div>
  </div>
  </>
)
}