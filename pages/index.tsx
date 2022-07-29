import type { NextPage } from 'next'
import Head from 'next/head'
import {Card} from '../components/'

// import components
import {Navbar, Footer,Hero}  from '../containers'

const Home: NextPage = () => {
  return (
    <div className='font-nunito px-6 py-9 md:px-12 lg:px-36
    ' >
      <Head>
        <title>Vioni</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

{/* Website Sections */}
<Navbar/>
<Hero/>
<Footer/>
    </div>
  )
}

export default Home
