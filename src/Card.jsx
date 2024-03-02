import Pic from './assets/pic.png'

function Card(){
    return(
        <div className="card">
            <img className='card-image' src={Pic} alt="profile picture"></img>
            <h2 className='card-title'>Bowssing</h2>
            <p className='card-text'>DJ pag may time</p>
        </div>

    );

}

export default Card