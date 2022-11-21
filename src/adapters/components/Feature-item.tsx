
interface Feature {
    iconLink : string
    title : string
    content : string
}

export const FeatureItem = ({iconLink, title, content}:Feature) => {
    return (
        <div className="feature-item">
        <img
            src={iconLink}
            alt="Chat Icon" 
            className="feature-icon"
        />
        <h3 className="feature-item-title">{title}</h3>
        <p>{content}</p>
        </div>
    )
}