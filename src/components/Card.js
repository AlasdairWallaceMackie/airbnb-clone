import Star from "../img/star.png"

export default function Card(props){
    return(
        <div className="card">
            <img src={require(`../img/${props.img}`)} alt="" className="experience-cover-img"></img>
            <br></br>
            <div className="card-body">
                <span><img src={Star} alt="Star Rating"></img> {props.rating} <span className="text-light align-middle">({props.reviewCount}) - {props.location}</span></span>
                <p>{props.title}</p>
                <p><strong>From ${props.price}</strong> / person</p>
            </div>
        </div> 
    )
}