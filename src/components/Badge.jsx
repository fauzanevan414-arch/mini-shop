function Badge({ text }) {
    return (
        <span className="self-start bg-red-500 text-white px-2 py-1 rounded">
            {text}
        </span>
    );
}

export default Badge;