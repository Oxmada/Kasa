function Tag({ tags }) {
    return (
        <div className="tag-list">
            {tags.map((tag, index) => (
                <div className="tag" key={index}>
                    {tag}
                </div>
            ))}
        </div>
    );
}

export default Tag;