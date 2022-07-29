import type { NextPage } from 'next'
import Head from 'next/head'
import {Card} from '../components/'

// import components
import {Navbar, Footer,Hero}  from '../containers'

const Home: NextPage = () => {
  return (
    <div className='font-nunito' >
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
