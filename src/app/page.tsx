import Header from '@/components/header/page';
import Hero from '@/components/hero/index';
import FeaturesTabbedPanel from '@/components/tabbed-panel/FeaturesTabbedPanel';
import Link from 'next/link';
import FeatureCard from '@/components/card/FeatureCard';
import PriceCard from '@/components/card/PriceCard';
import Image from 'next/image';
import style from './page.module.scss';
import MainFooter from '@/components/footer/MainFooter'; 

export default function Home() {
  return (
    <>
      <Header />
      <Hero 
      title='Transform texts or URLs into summaries, translations, and insights—effortlessly and instantly.'
      />
      <div className="h-[140px] w-full"></div>
      <section className='w-full'>
        <div className='max-w-[900px] m-auto flex items-center justify-center gap-4 flex-col px-4'>
          <h2 className={style.features__title}>
            Powerful Tools for Your Content
          </h2>
          <FeaturesTabbedPanel />
        </div>
      </section>
      <div className="h-[140px] w-full"></div>
      <section className='w-full'>
          <div className='max-w-[900px] m-auto flex items-center justify-center gap-4 flex-col px-4'>
            <h2 className={style.usecase__title}>
              How Lingroks Can Work For You
            </h2>
            <div className='w-full mt-4'>
              <div className={style.usecase__grid}>
                <FeatureCard 
                  alt='student'
                  imgSrc='https://images.pexels.com/photos/5965857/pexels-photo-5965857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                  title='Students'
                  subtitle='Summarize research papers and textbooks to save time.'
                />
                <FeatureCard 
                  alt='researcher'
                  imgSrc='https://images.pexels.com/photos/24126006/pexels-photo-24126006/free-photo-of-a-woman-sitting-in-an-office.png?auto=compress&cs=tinysrgb&w=600&lazy=load'
                  title='Professionals'
                  subtitle='Translate reports and presentations for global teams.'
                />
                <FeatureCard 
                  alt='Content Creator'
                  imgSrc='https://images.pexels.com/photos/6953827/pexels-photo-6953827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                  title='Content Creators'
                  subtitle='Create audio versions of text for podcasts or accessibility.'
                />
                <FeatureCard 
                  alt="Marketer"
                  imgSrc='https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                  title='Marketers'
                  subtitle='From URLs get concise and actionable insights.'
                />
                <FeatureCard 
                  alt='Legal Professional'
                  imgSrc='https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                  title='Legal Professionals'
                  subtitle='Summarize contracts and legal docs for faster review'
                />
                <FeatureCard 
                  alt="journalist"
                  imgSrc='https://images.pexels.com/photos/4458554/pexels-photo-4458554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                  title='Journalists'
                  subtitle='Extract key insights to simplify research and reporting'
                />
              </div>
            </div>
          </div>
      </section>
      <div className="h-[140px] w-full"></div>
      <section className='w-full'>
        <div className="max-w-[900px] m-auto flex items-center justify-center gap-4 flex-col px-4">
           <h2 className={style.pricing__title}>
             Choose a plan that works for you
           </h2>
           <div className={style.pricing__card_container}>
            <PriceCard 
              title='For Individuals'
              priceType='Basic'
              price='FREE'
              priceTag  
              variant='basic'
            />
            <PriceCard 
              title='For professionals'
              priceType='Pro'
              priceTag={true}
              price='$15/month'
              priceTagText='Most Popular'
              variant='pro'
            />
           </div>
        </div>
      </section>
      <div className="h-[140px] w-full"></div>
      <section className='w-full'>
        <div className='max-w-[900px] m-auto flex items-center justify-center gap-4 flex-col px-4'>
          <h3 className='text-center max-w-[650px] text-[#323232] text-3xl'>
            Get started with our free plan today and see the difference.
          </h3>
          <Link href="/auth/signup">
            <button type="button" className='cursor-pointer inline-block m-0 relative text-center w-auto touch-manipulation text-base font-inter-regular rounded-[60px] outline-none py-[8px] px-6 transition-all border-none bg-mainBlue text-white'>
              Sign Up
            </button>
          </Link>
        </div>
      </section>
      <MainFooter />
    </>
  );
}
