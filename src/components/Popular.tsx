import {useEffect, useState} from 'react';

function Popular() {
    const [popular, setPopular] = useState([]);

    const getPopular = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
        const data = await api.json();
        setPopular(data.recipes);
    };

    useEffect(() => {
        getPopular();
    }, []);

    return (
        <div>
            {popular.map((r: any) => (
                <div key={r.id}>
                    <div>{r.title}</div>
                </div>
            ))}
        </div>
    );
}

export default Popular;
