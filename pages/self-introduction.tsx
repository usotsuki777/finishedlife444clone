import type { NextPage } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'

// components
import { MainLayout } from "../layouts/MainLayout"
import { Title } from '../components/Title'
import { BackToTop } from "../components/BackToTop"
import { Video } from "../components/Video"

// assets
import ThisIsMe from '../public/img/This-is-me.jpeg'
import link from 'next/link'


const SelfIntroduction: NextPage = () => {

    const toc: { title: string, id: string }[] = [
        {
            title: '経歴',
            id: '/'
        },
        {
            title: '趣味',
            id: '/'
        },
        {
            title: '好きな場所',
            id: '/'
        }
    ]

    const experiences: string[] = [
        '2012年~ 京都の旅館で中番として、調理補助・会場設営・寝具準備等を担当',
        '2014年~ システムエンジニアとして、社内システムの運用保守業務を担当',
        '2019年~ インストラクター・トレーナーとして、スポーツクラブでお客様のトレーニングや食事を指導'
    ]; // experiences

    return (<div>

        <Head>
            <title>自己紹介 - {process.env.appName}</title>
            <meta name="description" content="まさ＠人生ｵﾜﾀ＼(^o^)／のホームページのクローンです" />

        </Head>

        <MainLayout>

            <div className="pt-5 px-60">
                <Title title={'自己紹介'} />
            </div>

            <div className="text-center mt-10">
                <Image className="cursor-pointer" src={ThisIsMe} alt="Picture of Masa" />
            </div>

            <div className="max-w-2xl ">
                <h2 className="text-2xl font-bold ml-3.5">目次</h2>
                <ol className=" mt-3 ml-10 list-inside list-decimal">
                    {/* TOC */}
                    {toc.map((v, k) => <li key={k}>{v.title}</li>)}
                </ol>
            </div>

            <div className="max-w-2xl">
                <h2 className="text-2xl mt-5 font-bold ml-3.5">経歴</h2>
                <ul className=" mt-3 ml-10 list-inside list-disc leading-8 whitespace-normal tracking-wide break-words">
                    {/* experiences */}
                    {experiences.map((v, k) => <li key={k}>{v}</li>)}
                </ul>
            </div>

            <div className="max-w-2xl mt-5">
                <h2 className="text-2xl font-bold ml-3.5">趣味</h2>
                <p className=" mt-3 ml-10"> 筋トレ、ランニング、料理、洋楽が好きです💓</p>

                {/* video */}
                <Video src={'/video/videos_Roast-beef.webm'} desc="ローストビーフも作ります🍖" />

            </div>

            <div className="max-w-2xl mt-6">
                <h2 className="text-2xl font-bold ml-3.5">好きな場所</h2>

                <p className="ml-10 mt-3 leading-9">私の好きな場所は、京都の先斗町です。私は以前京都の旅館に勤めており、休みの日は同僚と一緒によく先斗町に行ったりしていました。先斗町は昔ながらの街並みを保持しており、その雰囲気がとても好きです。先斗町の隣には鴨川があり、夏に納涼床で食べる食事は格別です。京都に行く機会がある方は、是非立ち寄ってみてください。</p>

                <div className="ml-3.5 flex  justify-center">
                    {/* embedded Youtube */}
                    <div className="my-3 content-center">
                        <iframe width={560} height={315} src="https://www.youtube.com/embed/-GkFM4hHaNI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    </div>

                </div>

                <div className="ml-3.5 flex  justify-center">
                    {/* google map */}
                    <div className="my-3 content-center">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3059.776282059346!2d135.7697855559511!3d35.00566868397638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z5YWI5paX55S6!5e0!3m2!1sja!2sjp!4v1628982608602!5m2!1sja!2sjp" width={560} height={400} style={{ border: 0 }} allowFullScreen loading="lazy" />
                    </div>

                </div>


            </div>

            <div className="ml-3 mt-2 pb-10">
                <BackToTop />
            </div>




        </MainLayout>

    </div>)
}

export default SelfIntroduction