import Link from 'next/link'

const HeaderComponent = () => {
  return (
    <header>
      <div>
        <div className="topNav">
          <nav>
            <ul>
              <li>
                <Link href="/" passHref>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/events" passHref>
                  Events
                </Link>
              </li>
              <li>
                <Link href="/about" passHref>
                  About us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <p className="title">Events Gallery</p>
      </div>
    </header>
  )
}

export default HeaderComponent
