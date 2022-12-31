import React from 'react'

import Router from 'next/router'

import NProgress from 'nprogress';
import { ChakraProvider } from '@chakra-ui/react' 
import Layout from '../components/Layout';
import { Helmet } from 'react-helmet';

const MyApp = ({ Component, pageProps}) => {
  return (
    <>
    <Helmet>

    </Helmet>
    <ChakraProvider>
      <Layout>
        <Component{...pageProps}/>
      </Layout>
    </ChakraProvider>
    </>
  )
}

export default MyApp