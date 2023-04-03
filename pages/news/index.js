//해당 폴더 자체가 도메인이 된다
//굳이 페이지를 따로 만들지 않아도 이 자체가 페이지임!!
import Link from "next/link";

const NewsPage = () => {
    return (
        <>
            <h1>The News Page</h1>
            <ul>
                <li>
                    {/*spa 유지가 가능하도록 해준다*/}
                    <Link href={'/news/hello'}>
                        hello
                    </Link>
                </li>
                <li>
                    <Link href={'/news/22'}>
                        22
                    </Link>
                </li>
            </ul>
        </>
    )
};

export default NewsPage;
