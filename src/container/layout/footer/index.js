// @flow
import React, {Component, useEffect, useRef} from 'react';

type Props = { /* ... */ };

export const Footer: Component<Props> = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const element = footerRef.current;
    if (!element) {
      return;
    }

    const updateHeight = () => {
      document.documentElement.style.setProperty('--footer-height', `${element.offsetHeight}px`);
    };

    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="footer navbar navbar-dark bg-dark mt-5 fixed-bottom" ref={footerRef}>
      <div className="m-auto navbar-text">
        &copy; {new Date().getFullYear()} Borter Labs &middot; Hosted on <a href="https://pages.github.com/"><span
        className="text-github">GitHub <span style={{fontWeight: 'normal'}}>Pages</span></span></a>
      </div>
    </footer>
  );
};

export default Footer;
