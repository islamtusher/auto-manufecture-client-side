import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({children, to}) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

  return (
        <Link
            className={ ` text-white hover:text-primary focus:bg-zinc-600 uppercase ${match? 'text-primary border-b-2 border-primary' : ""}`}
            to={to}
            >
            {children}
        </Link>
  );

};

export default CustomLink;