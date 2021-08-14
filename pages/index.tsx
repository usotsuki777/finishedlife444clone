import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { useState } from "react"

// components
import { MainLayout } from "../layouts/MainLayout"
import { Title } from '../components/Title'

// images
import FirstPic from '../public/img/First-Comment.png';
import Guaa from '../public/img/Guaaaaaa.png'

type LinkProps = {
  name: string,
  url: string
}


// links
const links: LinkProps[] = [
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
];


const Home: NextPage = () => {

  // iamge path
  const image = [FirstPic, Guaa]

  // image state
  const [img, setImage] = useState(0)

  const onClickImage = () => {
    img == 0 ? setImage(1) : setImage(0);
  }


  return (
    <div>
      <Head>
        <title>人生ｵﾜﾀ＼(^o^)／のクローン with next.js</title>
        <meta name="description" content="まさ＠人生ｵﾜﾀ＼(^o^)／のホームページのクローンです" />

      </Head>

      <MainLayout>

        <div className="pt-5 px-60">
          <Title title={'人生オワタ'} />
        </div>

        <div className="text-center mt-10">
          <Image className="cursor-pointer" onClick={onClickImage} src={image[img]} alt="Picture of Masa" />
        </div>

        <div className="">
          <h2 className="text-2xl font-bold ml-3.5">このサイトの説明</h2>
          <p className="  mt-3 ml-3 break-words leading-10">このサイトは、まさ＠人生ｵﾜﾀ＼(^o^)／のサイトです。</p>
          <p className=" ml-3 break-words leading-10">運営者は人生が終わった29歳無職借金110万のニコ生底辺配信者です。</p>

        </div>

        <div className="mt-4">

          <h2 className="text-2xl font-bold ml-3.5">私について</h2>
          <ul className="mt-3 ml-10 list-inside list-disc">
            <li>自己紹介(WIP)</li>
            <li>学習履歴(WIP)</li>

          </ul>


        </div>

        <div className="mt-4">
          <div className="flex">
            <div>
              <h2 className="text-2xl font-bold ml-3.5">外部リンク</h2>
            </div>
            <div className="text-sm font-bold mt-2 ml-0.5">(※別タブで開きます)</div>
          </div>

          {/* external links */}
          <ul className="mt-3 ml-10 list-inside list-disc">

            {links.map((item, k) => <li key={k}>
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

        <div className="my-4 pb-10 ml-2">

          <audio controls>
            <source src={'/audio/audios_Yorosikune.mp3'} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>

        </div>


      </MainLayout>


    </div>
  )
}

export default Home
