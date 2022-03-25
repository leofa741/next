import Link from 'next/link'

import { Darklayouts } from '../components/layouts/Darklayouts'
import { Mainlayouts } from '../components/layouts/Mainlayouts'


export default function AboutPage() {
  return (
    <>
        <h1>About Page</h1>
        
        <h1 className={'title'}>
          Ir a <Link href="/">Home</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/about.jsx</code>
        </p>
    </>
  )
}


AboutPage.getLayout = function getLayout( page:JSX.Element ) {
  return (
    <Mainlayouts>
      <Darklayouts>
       { page }
      </Darklayouts>
    </Mainlayouts>
  )
}