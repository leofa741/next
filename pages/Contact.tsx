import { Mainlayouts } from '../components/layouts/Mainlayouts'

import Link from 'next/link'
export default function Contact() {
  return (
    <Mainlayouts>
 <h1 className={'title'}>
          Welcome to contacto <br></br>
          <Link  href="/about"  >ir a about!</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/index.js</code>
        </p>

        <div className={'grid'}>
          <a className={'card'}>
          <Link  href="/about"  >ir a about!</Link>

            <h2>Documentation about &rarr;</h2>
            <p>........</p>    </a>        
        </div>


    </Mainlayouts>
  )
}
