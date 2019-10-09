import React from 'react';
import './footer.scss';

export default props => {
    const year = new Date().getFullYear();

    return (
        <div className="footer teal">
            <p className="center copyright">Copyright &copy; {year} Sweet Corner. All rights reserved.</p>
            <div className="phone">800 264 2099</div>
        </div>
    );
}