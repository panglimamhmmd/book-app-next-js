import Link from 'next/link';

export default function Cards({ data }) {
    return (
        <section className="">
            <div className="container mx-auto">
                <div className="flex flex-wrap -m-4">
                    {data.data?.map((list, i) => {
                        return (
                            <div
                                key={i}
                                className="p-4 lg:w-1/3 hover:bg-color-secondary duration-1000"
                            >
                                <div className="h-full  px-8 py-5 rounded-lg overflow-hidden text-center relative">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                        {list.genres.length > 0
                                            ? list.genres[0].name
                                            : list.genres}
                                    </h2>
                                    <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                                        {list.title}
                                    </h1>
                                    <p className="leading-relaxed mb-3">
                                        {list.synopsis &&
                                        list.synopsis.length > 150
                                            ? `${list.synopsis.slice(
                                                  0,
                                                  150
                                              )}...`
                                            : list.synopsis}
                                    </p>
                                    <Link
                                        href={`anime/${list.mal_id}`}
                                        className="text-indigo-500 inline-flex items-center"
                                    >
                                        Read More
                                        <svg
                                            className="w-4 h-4 ml-2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M5 12h14" />
                                            <path d="M12 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
