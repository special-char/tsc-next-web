// 'use client';
// import React, { useState, useEffect } from 'react';

// export function useScrollDirection() {
//   const [scrollDirection, setScrollDirection] = useState(null);

//   useEffect(() => {
//     let lastScrollY = window.pageYOffset;

//     const updateScrollDirection = () => {
//       const scrollY = window.pageYOffset;
//       const direction = scrollY > lastScrollY ? 'down' : 'up';
//       if (
//         direction !== scrollDirection &&
//         (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
//       ) {
//         setScrollDirection(direction);
//       }
//       lastScrollY = scrollY > 0 ? scrollY : 0;
//     };
//     window.addEventListener('scroll', updateScrollDirection); 
//     const header = document.getElementById('#header');
//     if (scrollDirection === 'down') {
//       header?.classList?.add('-top-24');
//     } else {
//       header.classList?.remove('-top-24');
//       header.classList?.add('top-0');
//     }

//     return () => {
//       window.removeEventListener('scroll', updateScrollDirection); 
//     };
//   }, [scrollDirection]);

//   return scrollDirection;
// }

// export const ScrollDiv = () => {
//   const scroll = useScrollDirection();
//   return null;
// };

'use client'
import React, { useState, useEffect } from 'react';

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener('scroll', updateScrollDirection);

    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, [scrollDirection]);

  return scrollDirection;
}

export const ScrollDiv = () => {
  const scroll = useScrollDirection();

  useEffect(() => {
    const header = document.getElementById('header');
    if (header) {
      if (scroll === 'down') {
        header.classList.add('-top-24');
        header.classList.remove('top-0');
      } else {
        header.classList.remove('-top-24');
        header.classList.add('top-0');
      }
    }
  }, [scroll]);

  return null;
};