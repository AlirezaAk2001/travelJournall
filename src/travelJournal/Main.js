export default function Main (props) {
    return (
        <main>
            <section>
                <img id="place" src={props.img} alt="name"></img>
                <div className="info">
                    <img id="mark" src="./img/marker.png" alt="location"></img>
                    <span>{props.countryName}</span>
                    <a href={props.link}>
                        View on Google Maps
                    </a>
                </div>
                <div className="info-m-f">
                    <h1>{props.placeName}</h1>
                    <big><p>{props.date}</p></big>
                    <span>{props.info}</span>
                </div>
            </section>
        </main>
    )
}
