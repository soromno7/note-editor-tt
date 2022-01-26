export default function Modal({active, setActive, title, description}) {
    return (
        <div className={active ? "modal" : "modal-hidden"} onClick={() => {setActive(false)}}>
            <div className="modal-content" onClick={(e) => {e.stopPropagation()}}>
                <h2>{title}</h2>
                <div className="modal-description">{description}</div>
            </div>
        </div>
    )
}