import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { useState } from "react"

// components
import { MainLayout } from "../layouts/MainLayout"
import { Title } from '../components/Title'
import { Audio } from "../components/Audio"

// images
import FirstPic from '../public/img/First-Comment.png';
import Guaa from '../public/img/Guaaaaaa.png'

// lib
import { getAge } from "../libs/date"

// Masa's Info
enum Info {
  Birthday = '1993-4-10',
  Debt = 110
} // ! Info

type LinkProps = {
  name: string,
  url: string
} // ! LinkProps



// social link
const socialLinks: LinkProps[] = [
  {
    name: 'Niconico',
    url: "https://www.nicovideo.jp/user/97308510"
  },
  {
    name: 'Twitter',
    url: "https://twitter.com/finishedlife444"
  },
  {
    name: 'Github',
    url: "https://github.com/MASA20201203"
  },
]; // ! socialLinks


// page link
const pageLinks: LinkProps[] = [
  {
    name: '自己紹介',
    url: "/self-introduction"
  },
  {
    name: '学習履歴 (WIP)',
    url: "/" // /learning-history
  },
] // ! pageLinks


const Home: NextPage = () => {

  // iamge path
  const images = [FirstPic, Guaa];

  // image state
  const [img, setImage] = useState(0);

  const onClickImage = () => {
    img == 0 ? setImage(1) : setImage(0);
  } // ! onClickImage()


  return (
    <div>
      <Head>
        <title>{process.env.appName}</title>
        <meta name="description" content="まさ＠人生ｵﾜﾀ＼(^o^)／のホームページのクローンです" />

      </Head>

      <MainLayout>

        <div className="pt-5 px-60">
          <Title title={'人生オワタ'} />
        </div>

        <div className="text-center mt-10">
          <Image className="cursor-pointer" onClick={onClickImage} src={images[img]} alt="Picture of Masa" />
        </div>

        <div className="">
          <h2 className="text-2xl font-bold ml-3.5">このサイトの説明</h2>
          <p className="mt-3 ml-3 break-words leading-10">このサイトは、<a target="_blank" className="font-bold hover:text-blue-800" rel="noreferrer" href="https://masa20201203.github.io/finishedlife444/index.html">まさ＠人生ｵﾜﾀ＼(^o^)／</a>のサイトの<strong className="underline text-lg text-gray-800">クローン</strong>です。</p>
          <p className="ml-3 break-words leading-10">運営者は人生が終わった{getAge(Info.Birthday)}歳無職借金{Info.Debt}万のニコ生底辺配信者です。</p>

        </div>

        <div className="mt-4">

          <h2 className="text-2xl font-bold ml-3.5">私について</h2>

          {/* page links */}
          <ul className="mt-3 ml-10 list-inside list-disc">

            {pageLinks.map((item, k) =>
              <li key={k}>
                <Link href={item.url}>
                  <a className="link-blue">  {item.name}
                  </a>
                </Link>
              </li>
            )}
          </ul>


        </div>

        <div className="mt-4">
          <div className="flex">
            <div>
              <h2 className="text-2xl font-bold ml-3.5">外部リンク</h2>
            </div>
            <div className="text-sm font-bold mt-2 ml-0.5">(※別タブで開きます)</div>
          </div>

          {/* socail links */}
          <ul className="mt-3 ml-10 list-inside list-disc">

            {socialLinks.map((item, k) => <li key={k}>
              <a className="link-blue" target="_blank" rel="noreferrer" href={item.url}>
                {item.name}
              </a>
            </li>)}

          </ul>

        </div>

        <div className="my-4">
          <h2 className="text-2xl font-bold ml-3.5">メッセージ</h2>
          <p className="mt-3 ml-3 break-words leading-10">これからよろしくな！</p>

        </div>

        {/* audio */}
        <div className="my-4 pb-10 ml-2">

          <Audio path={'audio/audios_Yorosikune.mp3'} />

        </div>


      </MainLayout>


    </div>
  )
}

export default Home
