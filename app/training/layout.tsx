import '@/styles/dist.css';
import '@/styles/sideNav.css';
import React from 'react';
import Header from '../header';
import Footer from '../footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
