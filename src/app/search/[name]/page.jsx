import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Cards from '@/components/Cards';

const Page = async ({ params }) => {
    const decodedKeyword = decodeURI(params.name);
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedKeyword}`
    );
    const dataAnime = await response.json();
    return (
        <div>
            <Header
                headerTitle={`Hasil pencarian: ${decodedKeyword}`}
                hrefLink=""
                hrefTitle=""
            />
            <Cards data={dataAnime} />
        </div>
    );
};

export default Page;
