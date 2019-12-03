import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';

const Profile = () => {
    return (
        <>
            <Head>
                <title>NodeBird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.6/antd.min.css"/>
            </Head>
            <AppLayout>
                <div>내 프로필</div>
            </AppLayout>
        </>
    )
}

export default Profile;