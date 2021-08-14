function Video({ src, desc }: { src: string, desc: string }) {

    return (
        <>
            <figure className="mt-3 ml-12">
                <video controls width={200}>
                    <source src={src} type="video/webm" />
                    <track label="日本語" kind="subtitles" src="videos/Roast-beef.vtt" srcLang="ja" default />
                    <p>お使いのブラウザでは動画を視聴することはできません。</p>
                </video>
                <figcaption>{desc}</figcaption>
            </figure>
        </>
    )

}

export { Video }