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


const SelfIntroduction: NextPage = () => {

    return (<div>

        <Head>
            <title>人生ｵﾜﾀ＼(^o^)／のクローン with next.js</title>
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
                    <li>経歴</li>
                    <li>趣味</li>
                </ol>
            </div>

            <div className="max-w-2xl">
                <h2 className="text-2xl mt-5 font-bold ml-3.5">経歴</h2>
                <ul className=" mt-3 ml-10 list-inside list-disc leading-8 whitespace-normal tracking-wide break-words">
                    <li>2012年~ 京都の旅館で中番として、調理補助・会場設営・寝具準備等を担当</li>
                    <li>2014年~ システムエンジニアとして、社内システムの運用保守業務を担当</li>
                    <li>2019年~ インストラクター・トレーナーとして、スポーツクラブでお客様のトレーニングや食事を指導</li>
                </ul>
            </div>

            <div className="max-w-2xl mt-5">
                <h2 className="text-2xl font-bold ml-3.5">趣味</h2>
                <p className=" mt-3 ml-10"> 筋トレ、ランニング、料理、洋楽が好きです💓</p>

                {/* video */}
                <Video src={'/video/videos_Roast-beef.webm'} desc="ローストビーフも作ります🍖" />

            </div>

            <div className="ml-3 mt-2 pb-10">
                <BackToTop />
            </div>




        </MainLayout>

    </div>)
}

export default SelfIntroduction