import '../styles/globals.css'
import { type } from 'os';
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';
import { AppProps } from 'next/app';

type NextPageWithLayout =NextPage & {getLayout?:(page:ReactElement)=>ReactNode}

type AppPropsWithLayout=AppProps &{ Component:NextPageWithLayout}

function MyApp({ Component, pageProps }:AppPropsWithLayout) {

const getLayout=Component.getLayout || ((page)=>page);

  //return <Component {...pageProps} />

  return getLayout(<Component {...pageProps} />)
}

export default MyApp
