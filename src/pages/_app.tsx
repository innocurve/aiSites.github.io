'use client'

import { useState, useEffect } from 'react'
import { Globe, ChevronDown, Menu, ChevronUp } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
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
const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-white">{question}</h3>
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      {isOpen && <p className="mt-2 text-gray-300">{answer}</p>}
    </div>
  );
};

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const canvas = document.getElementById('backgroundCanvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

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
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white relative overflow-hidden">
      <canvas id="backgroundCanvas" className="absolute top-0 left-0 w-full h-full pointer-events-none"></canvas>
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="py-24 text-center">
          <div className="mb-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%EB%8C%80%EC%A7%80%201%20%EC%82%AC%EB%B3%B8%2011@3x-8-4ukZhj9mEciuH1FSP3E7qyZPCE1Jff.png"
              alt="대한청년을세계로 로고"
              width={400}
              height={200}
              className="mx-auto w-full max-w-[400px] h-auto"
            />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Future Strategy Forum <span className="text-sky-300">2024</span></h2>
          <h3 className="text-xl md:text-2xl font-bold mb-4">미래전략포럼에 귀하를 초대합니다.</h3>
          <p className="text-xl text-gray-400">2024. 12. 03, 19:00</p>
        </div>

        {/* Introduction Section */}
        <section className="py-16 bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">"급변하는 기술혁신, 뒤처지는 인식의 간극"</h2>
            <p className="text-gray-300 text-center leading-relaxed">
              미래전략포럼은 급변하는 미래 시대의 기술 혁신 속에서 청년들이 뒤처지지 않도록 인식 격차를 해소하고, 더 나아가 혁신적 변화를 주도하는 것을 목표로 합니다.
            </p>
          </div>
        </section>

        {/* Keynote Speakers Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">기조연설</h2>
            <Card className="bg-gray-800 bg-opacity-50 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                    <h4 className="text-xl font-semibold mb-2">문형남</h4>
                    <p className="text-gray-300">숙명여대 글로벌융합대학 학장</p>
                    <p className="text-gray-300">AI 교육협회 회장</p>
                  </div>
                  <div className="text-center">
                    <div className="w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Rk2LLjx80iqzXOVNuie7XuIz7ELGet.png"
                        alt="장능인 상임이사"
                        width={192}
                        height={192}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">장능인</h4>
                    <p className="text-gray-300">미담장학회 상임이사</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Sessions Section */}
        <section className="py-16 bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">세션</h2>
            <h3 className="text-xl font-semibold mb-8 text-center">청년의 시선으로 본 AI와 산업의 미래</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-gray-800 bg-opacity-50 border-gray-700 backdrop-blur-sm">
                <CardContent className="p-4">
                  <h4 className="text-lg font-semibold mb-2 text-white">최정현</h4>
                  <p className="text-sky-300 mb-2">AI취창업혁신위원회 의장</p>
                  <p className="text-gray-300">"AI와 취·창업의 미래: 기회와 도전의 접점"</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 bg-opacity-50 border-gray-700 backdrop-blur-sm">
                <CardContent className="p-4">
                  <h4 className="text-lg font-semibold mb-2 text-white">이재권</h4>
                  <p className="text-sky-300 mb-2">AI홍보혁신위원회 의장</p>
                  <p className="text-gray-300">"초개인화의 시대: AI가 이끄는 맞춤형 미래"</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 bg-opacity-50 border-gray-700 backdrop-blur-sm">
                <CardContent className="p-4">
                  <h4 className="text-lg font-semibold mb-2 text-white">전성욱</h4>
                  <p className="text-sky-300 mb-2">사외이사</p>
                  <p className="text-gray-300">"AI와 보험 산업의 융합: 미래 리스크 관리의 혁신"</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 bg-opacity-50 border-gray-700 backdrop-blur-sm">
                <CardContent className="p-4">
                  <h4 className="text-lg font-semibold mb-2 text-white">채승민</h4>
                  <p className="text-sky-300 mb-2">글로벌위원회 의장</p>
                  <p className="text-gray-300">"AI 시대의 진화: 기술 혁신이 가져올 새로운 지평"</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Venue Information */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">행사 장소</h2>
            <Card className="bg-gray-800 bg-opacity-50 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <h3 className="text-xl font-semibold text-white">대전 크리스탈 컨벤션 4층 연회장</h3>
                  <p className="text-sky-300">대전광역시 서구 둔산대로 117번길 127</p>
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3214.5536430127!2d127.37760661526996!3d36.35389980004405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35654a8a1a8d0c1d%3A0x8d0d8f6d8f9b8b8b!2z64yA7KCE7YGs66as7Iqk7YOA7Lu07ISc7Jq4!5e0!3m2!1sko!2skr!4v1625123456789!5m2!1sko!2skr" 
                      width="600" 
                      height="450" 
                      style={{border:0}} 
                      //allowFullScreen="" 
                      loading="lazy"
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-16 bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">우리의 비전과 가치</h2>
            <p className="text-gray-300 leading-relaxed">
              우리 사단법인은 기술 혁신과 청년들의 인식 사이의 간극을 해소하고, 이를 통해 미래를 선도할 인재를 양성하는 데에 중점을 두고 있습니다. 청년들이 시대에 맞는 통찰과 역량을 갖추어 변화의 주역이 될 수 있도록 돕고, 혁신적 성장을 이끌어낼 수 있는 기반을 마련하겠습니다.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">자주 묻는 질문</h2>
            <Card className="bg-gray-800 bg-opacity-50 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-6">
                <FAQItem 
                  question="무슨 행사인가요?" 
                  answer="본 행사는 급변하는 AI 시대 속에서 기술과 청년 인식의 격차를 해소하기 위해 전문가들과 함께하는 교육 및 토론의 장입니다. 전문가들이 기조연설과 강의를 통해 청년들에게 기술 혁신의 흐름과 미래 사회에 필요한 통찰을 제공합니다."
                />
                <FAQItem 
                  question="참가 대상은 누구인가요?" 
                  answer="AI와 미래 기술에 관심 있는 모든 청년을 대상으로 하며, 특히 대학생, 취업 준비생, 관련 분야 종사자들의 참여를 환영합니다."
                />
                <FAQItem 
                  question="행사 일정은 어떻게 되나요?" 
                  answer="행사는 2024년 12월 3일 오후 7시부터 약 3시간 동안 진행될 예정입니다. 세부 일정은 추후 공지될 예정입니다."
                />
                <FAQItem 
                  question="비용이 얼마인가요?" 
                  answer="본 행사는 무료로 진행됩니다. 다만, 사전 등록이 필요하며 좌석이 한정되어 있어 조기 마감될 수 있습니다."
                />
                <FAQItem 
                  question="주차 가능한가요?" 
                  answer="네, 행사장 내 주차장을 이용하실 수 있습니다. 다만, 주차 공간이 제한적이므로 가능한 대중교통 이용을 권장드립니다."
                />
                <FAQItem 
                  question="식사는 제공되나요?" 
                  answer="네, 행사 중 간단한 식사가 제공됩니다. 참석자들이 네트워킹하며 편안한 분위기 속에서 식사를 즐기실 수 있도록 준비될 예정입니다."
                />
                <div className="mt-6 text-center">
                  <p className="text-white">기타 문의사항은 사무처로 연락 주시기 바랍니다.</p>
                  <p className="text-sky-300 font-semibold">TEL: 042-710-2177</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}