import { Link } from 'react-router-dom';

export default function NotFoundPage() {
    return (
        <>
            <p>Opps! Page not found! Sorry!</p>
            <p>
                Please visit out <Link to='/'>Home page</Link>
            </p>
        </>
    );
}