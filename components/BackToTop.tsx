import Link from 'next/link'

function BackToTop() {

    return (
        <Link href="/">
            <a className='underline text-blue-600 hover:text-blue-300'>トップへ戻る</a>
        </Link>
    )

}

export { BackToTop }