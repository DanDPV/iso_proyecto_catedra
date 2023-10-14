import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="m-4 rounded-lg bg-white">
      <div className="main-container py-4 md:flex md:items-center md:justify-between">
        <span className="text-sm sm:text-center">
          © 2023. All Rights Reserved.
        </span>
        <ul className="mt-3 flex flex-wrap items-center text-sm font-medium sm:mt-0">
          <li>
            <Link href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </Link>
          </li>
          <li>
            <Link href="#" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="#" className="mr-4 hover:underline md:mr-6">
              Licensing
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
