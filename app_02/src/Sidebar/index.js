import articles from '../data/articles.json';
import './Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <nav>
                <ul>
                    {
                        articles.map((item, index) => (
                            <li key={index}>
                                <a href={item.href} target="_blank" rel="noreferrer">{item.title}</a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar;