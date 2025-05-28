
const ExpandableButton = ({ icon: Icon, label, isActive, onClick }) => {
    return (
        <div className={`
        expandable-button ${isActive ? 'active' : ''}`}
        onClick={onClick}
        >
            <Icon className="expandable-icon" />
            <span className={`label ${isActive ? 'active' : ''}`}>
                <span className="text-white">{label}</span>
            </span>
        </div>
    )
}

export default ExpandableButton