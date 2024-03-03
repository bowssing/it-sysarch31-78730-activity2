import Pic from './assets/pic.png'

function Student(){
    
    return(
        <div className="card">
            <img className='card-image' src={Pic} alt="profile picture"></img>
            <h2 className='card-title'>Bowssing</h2>
            <p className='card-text'>wew</p>
        </div>
    );

}

export default Student