import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"

import data from "./data"

export default function App(){
    const experienceCards = data.map(function(data){
        return(
            <Card
                id = {data.id}
                title = {data.title}
                description = {data.description}
                price = {data.price}
                img = {data.coverImg}
                rating = {data.stats.rating}
                reviewCount = {data.stats.reviewCount}
                location = {data.location}
                openSpots = {data.openSpots}
            />
        )
    })
    return(
        <div>
            <Navbar/>
            <Hero/>
            <div className="experience-list">
                {experienceCards}
            </div>
        </div>
    )
}