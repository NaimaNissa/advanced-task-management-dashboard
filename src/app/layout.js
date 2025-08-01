import Link from 'next/link';
import { Inter } from 'next/font/google';
import './globals.css';
import ReduxProvider from '../components/providers/ReduxProvider';
import AuthProvider from '../components/providers/AuthProvider';
import UserProfile from '@/components/profile/UserProfile';

<UserProfile />

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Advanced Task Management Dashboard',
  description: 'A comprehensive task management dashboard built with Next.js and Firebase',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </ReduxProvider>
        <Link href="/dashboard/profile" className="text-sm text-gray-700 hover:underline">
  Profile
</Link>
      </body>
    </html>
  );
}

