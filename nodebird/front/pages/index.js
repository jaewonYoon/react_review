import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
// 메인화면 루트 파일 next는 import react를 하지 않아도 된다.  
const Home = () => {
    return (
        <>
            <Head>
                <title>NodeBird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.6/antd.min.css"/>
            </Head>
            <AppLayout>

            </AppLayout>
        </>
    );
}

export default Home;
