import {useRouter} from "next/router";

// domain.com/news/dynamic-path
//[somethjngelse] 를 이름에 추가하면 next.js 가 해당 파일이름이 뭔지에 관계없이 어떤게 와도 그 페이지로 가도록 설정함

const DetailPage = () => {
    const router = useRouter();

    //쿼리값 가져오기
    const newsId = router.query.newsId;

    //send a request to the backend API 할때도 사용이 가능함
    return (
        <h1>The News Detail Page</h1>
    )
};

export default DetailPage;
