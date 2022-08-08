export default function ContactCard(props){
    return(
        <div className="contact-card">
            <img/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <p>Phone Icon: {props.phone}</p>
                <p>Email: {props.email}</p>
            </div>
        </div>
    )
}