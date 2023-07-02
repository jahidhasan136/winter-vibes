import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="grid justify-center mt-80 text-center">
            <h1 className="text-9xl font-bold mb-8 text-red-600">404 Error</h1>
            <h2 className="text-2xl font-semibold mb-3">Oops! The Lybell is not around</h2>
            <p className="text-lg mb-2">We tried but we couldn&#39;t find the page you&#39;re looking for.</p>
            <p className="text-lg mb-6">We want to help you the best we can. You&#39;re invited to our homepage.</p>
            <Link to='/'><button className="btn_custom">Back to Home</button></Link>
        </div>
    );
};

export default ErrorPage;