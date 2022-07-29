import React, { useEffect } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({children, to}) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <Link
      onClick={window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}
      className={`text-sm text-white hover:text-primary focus:bg-zinc-800 uppercase 
                  ${match ? 'text-primary border-b-2 border-primary ' : ""}`}
      to={to}
      >
      {children}
    </Link>
);

};

export default CustomLink;