
import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppMessenger from './WhatsAppMessenger';
import LinkedInButton from './LinkedInButton';
import InstagramButton from './InstagramButton';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        {children}
      </main>
      <Footer />
      <LinkedInButton />
      <InstagramButton />
      <WhatsAppMessenger />
    </div>
  );
};

export default Layout;
