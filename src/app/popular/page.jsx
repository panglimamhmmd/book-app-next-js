'use client';

import Cards from '@/components/Cards';
import Header from '@/components/Header';
import { useEffect, useState } from 'react';

const Page = () => {
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`
        );
        const dataAnime = await response.json();
        setData(dataAnime);
    };

    useEffect(() => {
        fetchData();
    }, [page]);
    return (
        <div>
            <Header
                headerTitle="Best Anime"
                hrefLink="https://myanimelist.net/"
                hrefTitle="Kunjungi MyAnimeList"
            />
            <Cards data={data} />
        </div>
    );
};

export default Page;
