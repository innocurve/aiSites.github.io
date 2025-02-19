import Home from './_app'; // home.tsx를 import
import Head from 'next/head'

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>AIGF 2025: 모두를 위한 AI와 디지털 미래</title>
        <meta name="description" content="디지털 미래 세미나에 귀하를 초대합니다." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="AIGF 2025: 모두를 위한 AI와 디지털 미래" />
        <meta property="og:description" content="디지털 미래 세미나에 귀하를 초대합니다." />
        <meta property="og:image" content="https://daecheongse.co.kr/dcsLogo.jpg" /> {/* 대표 이미지가 있다면 경로 지정 */}
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AIGF 2025: 모두를 위한 AI와 디지털 미래" />
        <meta name="twitter:description" content="디지털 미래 세미나에 귀하를 초대합니다." />
        <meta name="twitter:image" content="https://daecheongse.co.kr/dcsLogo.jpg" /> {/* 대표 이미지가 있다면 경로 지정 */}
      </Head>
      
      <Home />
    </>
  );
};

export default IndexPage;