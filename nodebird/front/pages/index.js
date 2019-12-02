import React from 'react';
import Link from 'next/link';
// 메인화면 루트 파일 next는 import react를 하지 않아도 된다.  
const Home = () => {
    return (
        <>
            <Link href="/about" ><a>about</a></Link>
            <div>Hello, Next!</div>
        </>
    );
}

export default Home;
