function Button({ children, onClick }) {
    return (
        <button
            onClick={onClick}
            className="mt-3 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
            {children}
        </button>
    );
}

export default Button;