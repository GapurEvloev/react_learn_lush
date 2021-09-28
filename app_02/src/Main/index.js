import './Main.css';

import articles from '../data/articles.json';
console.log(articles);

function Main() {
    return (
        <main className="main">
            {
                articles.map((item, index) => 
                    <section key={index}>
                        <h2>{item.title}</h2>
                        <div>
                            {item.body}
                        </div>
                        <a href={item.href}>ссылка</a>
                    </section>
                )
            }
        </main>
    )
}

export default Main;