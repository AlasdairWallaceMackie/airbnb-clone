import Picture from "../img/katie-zaferes.png"
import Star from "../img/star.png"

export default function Card(){
    return(
        <div className="card">
            <img src={Picture}></img>
            <br></br>
            <span><img src={Star}></img> 5.0 <span className="text-light align-middle">(6) - USA</span></span>
            <p>Life lessons with Katie Zaferes</p>
            <p><strong>From $138</strong> / person</p>
        </div>
    )
}