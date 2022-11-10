import '@/styles/dist.css';
import React from 'react';
import AddressBar from '@/ui/AddressBar';
import Header from './header';
import Footer from './footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <Header /> */}
      {children}
      <Footer />
    </>
  );
}
