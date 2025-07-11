export default function Main ({img, countryName, link, placeName, date, info}) {
    return (
        <main>
            <section>
                <img id="place" src={img} alt="name"></img>
                <div className="info">
                    <img id="mark" src="./img/marker.png" alt="location"></img>
                    <span>{countryName}</span>
                     <a href={link}>
                        View on Google Maps
                     </a>
                </div>
                <div className="info-m-f">
                    <h1>{placeName}</h1>
                  <big><p>{date}</p></big>
                  <span>{info}</span>
                </div>
            </section>
        </main>
    )
}
