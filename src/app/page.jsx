import Cards from '@/components/Cards';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';

const Page = async () => {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=9`
    );
    const dataAnime = await response.json();
    return (
        <div>
            <Header
                headerTitle="Best Anime"
                hrefLink="/popular"
                hrefTitle="More >>"
            />
            <Cards data={dataAnime} />
        </div>
    );
};

export default Page;
