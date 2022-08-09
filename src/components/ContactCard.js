export default function ContactCard({name, img, phone, email}){
    return(
        <div className="contact-card">
            <img/>
            <h3>{name}</h3>
            <div className="info-group">
                <p>Phone Icon: {phone}</p>
                <p>Email: {email}</p>
            </div>
        </div>
    )
}