import Star from "../img/star.png"

export default function Card(props){
    return(
        <div className="card">
            <img src={require(`../img/${props.img}`)}></img>
            {/* <img src={Picture}></img> */}
            <br></br>
            <span><img src={Star}></img> {props.rating} <span className="text-light align-middle">({props.reviewCount}) - {props.country}</span></span>
            <p>{props.title}</p>
            <p><strong>From ${props.price}</strong> / person</p>
        </div> 
    )
}