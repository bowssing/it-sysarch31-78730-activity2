import Pic from './assets/pic.png'

function Card(){
    return(
        <div className="card">
            <img className='card-image' src={Pic} alt="profile picture"></img>
            <h2>Bowssing</h2>
            <p>DJ pag may time</p>
        </div>

    );

}

export default Card