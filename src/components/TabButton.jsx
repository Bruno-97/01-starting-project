export default function TabButton({ children, isSelected, ...props }) {
    console.log('Tab button COMPONENT RENDERING');
    
    return (
        <li>
            <button className={isSelected ? 'active' : undefined} {...props}>
                {children}
            </button>
        </li>
    );
} 