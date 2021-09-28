import { useRouteMatch } from 'react-router-dom';
import './Users.css';

function Users() {
    let match = useRouteMatch();

    return (
        <div className="users">
            <h1>Users</h1>
            <ul>
                <li><a href={`${match.url}/ivanov`}>Ivanov</a></li>
                <li><a href={`${match.url}/petrov`}>Petrov</a></li>
            </ul>
        </div>
    )
}

export default Users;