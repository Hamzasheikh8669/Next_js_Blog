import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto px-4 py-6">
        <ul className="flex justify-between items-center">
          <li>
            <Link href="/" className="text-1xl font-bold">
              Tech Blog
            </Link>
          </li>
          <li>
            <ul className="flex space-x-4">
              <li>
                <Link href="/category/ai" className="hover:text-gray-300">
                  AI
                </Link>
              </li>
              <li>
                <Link
                  href="/category/full-stack"
                  className="hover:text-gray-300"
                >
                  Full Stack
                </Link>
              </li>
              <li>
                <Link
                  href="/category/blockchain"
                  className="hover:text-gray-300"
                >
                  Blockchain
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
