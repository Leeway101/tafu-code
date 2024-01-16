import { Button } from "react-bootstrap"


import "./HomePage.css"

const Home = () => {
    return (
        <div>
        <section>
               <video className="background_vd" autoPlay muted loop >
                <source src="public/Toshkentda-amaliy.mp4" type="video/mp4" />
               </video>
            <div className="container">
               <div className="home_text">
               <h1>Toshkent amaliy fanlar Unversiteti muassasing maqolalari elektron axborot tizimi.</h1>
               <Button className="mt-2" href="/Asosiy" variant="primary">Maqolalarga o`tish</Button>
               </div>
              
            </div>
        </section>
    </div>
       
    )
}

export default Home