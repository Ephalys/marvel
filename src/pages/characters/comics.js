import React, {useEffect} from 'react';
import useApi from "config/API";

function Comics() {

    let [comics, setComics] = React.useState([])
    const api = useApi();

    useEffect(() => {
        api.get("/v1/public/comics")
            .then((res) => {
                const response = res.data;
                setComics(response.data.results);
                console.log(response.data.results)
            })
    }, [])


    return (
        <div className="comics">
            Comics
            {
                comics.map((item,i) => <li key={i}>{item.title}</li>)
            }
        </div>
    );
}

export default Comics;
