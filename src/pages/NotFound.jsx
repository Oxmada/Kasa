import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className='NotFound-container'>
            <h1 className='h1-NotFound'>404</h1>
            <h2 className="h2-NotFound">Oups! La page que vous demandez n'existe pas.</h2>
            <Link to="/" className="link-NotFound">Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default NotFound