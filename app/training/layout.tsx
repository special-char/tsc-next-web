import '@/styles/dist.css';
import React from 'react';
import AddressBar from '@/ui/AddressBar';
import Header from './header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <Header /> */}
      {children}
      <footer></footer>
    </>
  );
}
