import { useEffect } from 'react';

function useOutsideClick(ref: React.RefObject<HTMLElement>, callback: () => void) {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [ref, callback]);
}

export default useOutsideClick;


// import React, { useRef, useState } from 'react';
// import useOutsideClick from './useOutsideClick';

// const Dropdown: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   const toggleDropdown = () => setIsOpen((prev) => !prev);
//   const closeDropdown = () => setIsOpen(false);

//   // Use the custom hook to detect clicks outside the dropdown
//   useOutsideClick(dropdownRef, closeDropdown);

//   return (
//     <div>
//       <button onClick={toggleDropdown}>Toggle Dropdown</button>
//       {isOpen && (
//         <div ref={dropdownRef} style={{ border: '1px solid #ccc', padding: '10px' }}>
//           <p>Dropdown Content</p>
//           <p>Click outside to close me!</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dropdown;
