import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { useOutsideClick } from '@/hooks';

export const Modal = ({ isOpen, setClose, children, childRef }) => {
  const [isTouched, setIsTouched] = useState(false);

  useOutsideClick(childRef, () => {
    if (isTouched) {
      setClose();
    }
  });

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') setClose();
  };

  useEffect(() => {
    if (isOpen) {
      setIsTouched(true);
      document.body.style.overflow = 'hidden';
      document.body.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      setIsTouched(false);
      document.body.removeAttribute('style');
      document.body.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="absolute top-0 left-0 w-full h-screen transition-all duration-500 bg-overlay backdrop-blur-sm">
      {children}
    </div>,
    document.body,
  );
};
