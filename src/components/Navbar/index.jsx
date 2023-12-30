import Link from 'next/link';
import Userinput from '../UserInput';
const Navbar = () => {
    return (
        <header className="text-color-dark body-font ">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link
                    href="/"
                    className="flex title-font font-medium items-center  mb-4 md:mb-0"
                >
                    <span className="ml-3  hover:text-color-accent text-2xl font-bold">
                        Sample Library
                    </span>
                </Link>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center"></nav>
                <Userinput />
            </div>
        </header>
    );
};

export default Navbar;
