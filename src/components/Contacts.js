import ContactCard from "./ContactCard"

export default function Contacts(){
    return(
        <div>
            <ContactCard
                img=""
                name="Percy"
                phone="(111) 123 1111"
                email="a@a.com"
            />
            <ContactCard
                img=""
                name="Bugs"
                phone="(222) 222 2222"
                email="b@b.com"
            />
            <ContactCard
                img=""
                name="Ace"
                phone="(333) 333 4444"
                email="c@c.com"
            />
            <ContactCard
                img=""
                name="Mr. Ratster"
                phone="(111) 222 5555"
                email="d@d.com"
            />
        </div>
    )
}