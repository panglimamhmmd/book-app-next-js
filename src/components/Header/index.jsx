import Link from 'next/link';

const Header = ({ headerTitle, hrefLink, hrefTitle }) => {
    return (
        <section className="body-font my-5">
            <div className="container px-5 mx-auto">
                <div className="flex flex-wrap w-full justify-between ">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2  text-gray-900">
                            {headerTitle}
                        </h1>
                        <div className="h-1 w-20 hover:w-40 bg-color-dark rounded"></div>
                    </div>
                    <div>
                        <Link href={hrefLink}>
                            <h1 className="text-xl font-bold">{hrefTitle}</h1>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;
