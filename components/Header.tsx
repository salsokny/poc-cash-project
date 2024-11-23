import { useRouter } from 'next/router';

const Header = () => {
    const router = useRouter();

    // Function to handle navigation
    const navigateTo = (path:any) => {
        router.push(path);
    };

    return (
        <header className="bg-blue-600 text-white py-4">
            <nav className="container mx-auto flex justify-between items-center">
                <h1
                    className="text-2xl font-bold cursor-pointer"
                    onClick={() => navigateTo('/')} // Navigate to the home page
                >
                    MyWebsite
                </h1>
                <ul className="flex space-x-4">
                    <li>
                        <button
                            className="hover:underline"
                            onClick={() => navigateTo('/')} // Navigate to Home
                        >
                            Home
                        </button>
                    </li>
                    <li>
                        <button
                            className="hover:underline"
                            onClick={() => navigateTo('/about')} // Navigate to About
                        >
                            About
                        </button>
                    </li>
                    <li>
                        <button
                            className="hover:underline"
                            onClick={() => navigateTo('/contact')} // Navigate to Contact
                        >
                            Contact
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
