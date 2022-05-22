import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({children, to}) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
        <Link
            className={ ` text-white hover:text-primary uppercase ${match? 'text-primary border-b-2 border-primary pb-[]' : ""}`}
            to={to}
            >
            {children}
        </Link>
    </div>
  );

};

export default CustomLink;