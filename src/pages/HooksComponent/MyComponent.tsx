import React, { useRef, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import useLocalStorage from '../../hooks/useLocaleStorage';
import useDebounce from '../../hooks/useDebounce';
import useWindowSize from '../../hooks/useWindowSize';
import useToggle from '../../hooks/useToggle';
import useOutsideClick from '../../hooks/useOutsideHook';

const MyComponent: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => setIsOpen(prev => !prev);
    const closeDropdown = () => setIsOpen(false);

    // Use the custom hook to detect clicks outside the dropdown
    useOutsideClick(dropdownRef, closeDropdown);

    const { data, loading, error } = useFetch<{ id: number; name: string }[]>('https://jsonplaceholder.typicode.com/users');
    const [storedValue, setStoredValue] = useLocalStorage<string>('myKey', 'defaultValue');
    const [inputValue, setInputValue] = useState('');
    const debouncedValue = useDebounce(inputValue, 500);
    const windowSize = useWindowSize();
    const [isToggled, toggle] = useToggle();

    return (
        <div style={{ padding: '20px' }}>
            <h1>Window Size: {windowSize.width} x {windowSize.height}</h1>
            <button onClick={toggle}>{isToggled ? 'ON' : 'OFF'}</button>
            <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type something..."
            />
            <p>Debounced Value: {debouncedValue}</p>
            <p>Stored Value: {storedValue}</p>
            <button onClick={() => setStoredValue('newValue')}>Set Local Storage Value</button>

            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {data && (
                <ul>
                    {data.map(user => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            )}

            <div ref={dropdownRef} style={{ display: "flex", width: "100px", height: "100px", border: "2px solid #000", cursor: "pointer", justifyContent: "center", alignItems: "center" }} onClick={toggleDropdown}>
                {isOpen ? <p>In</p> : <p>Out</p>}
            </div>
        </div>
    );
};

export default MyComponent;
