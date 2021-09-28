import './Header.css';

function Header() {
    return (
        <header className="">
            <nav>
                <ul>
                    <li>
                        <a href="/">Main</a>
                    </li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/users">Users</a></li>
                </ul>            
            </nav>
        </header>
    )
}

export default Header;