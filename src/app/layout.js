import Providers from '@/lib/Providers';
import './globals.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import HomeLayout from '@/components/Layout/HomeLayout';

export default function RootLayout({ children }) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <HomeLayout>{children}</HomeLayout>
        </body>
      </html>
    </Providers>
  );
}
