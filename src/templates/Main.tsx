import type { ReactNode } from 'react';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

type IMainProps = {
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="flex min-h-screen w-full flex-col text-gray-700 antialiased">
    <div className="grow">
      <Navbar />

      <main className="main-container">{props.children}</main>
    </div>
    <Footer />
  </div>
);

export { Main };
