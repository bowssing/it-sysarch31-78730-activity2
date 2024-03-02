
function Food(){

    const food1 = "Siomai";
    const food2 = "Bacon";

    return(
        <ul>
            <li>Siomai</li>
            <li>{food1}</li>
            <li>{food2.toLocaleUpperCase()}</li>
        </ul>
    );
}

export default Food