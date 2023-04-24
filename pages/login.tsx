import Link from 'next/link'
import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';

//import the useUser hook, this will give access to properties of logged in user
import { useUser } from '@auth0/nextjs-auth0/client';


//TO DO: Create 

const IndexPage = ({ Component, pageProps}) => {
  return (
  <>
    <Link href="/">
      Home
    </Link>
    <a href="/api/auth/login">Login</a>
    <a href="/api/auth/logout">Logout</a>
  </>
)
  }
export default IndexPage
