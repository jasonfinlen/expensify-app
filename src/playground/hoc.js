//console.log('Higher Order Component (HOC)')

import React from 'react';
import ReactDom from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>This info is : {props.info}</p>
    </div>
);



const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please dont share!</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props}/>
                ) : (
                <p>You have to be logged in to see this data...</p>
                )
        }
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);
ReactDom.render(<AuthInfo isAuthenticated={false} info="There are the details" />, document.getElementById('app'));
