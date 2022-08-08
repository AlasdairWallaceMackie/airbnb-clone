import PhotoGrid from "../img/photo-grid.png"

export default function Hero(){
    return(
        <section className="hero">
            <img src={PhotoGrid} alt="Experience Grid"></img>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts--all without leaving home.</p>
        </section>
    )
}