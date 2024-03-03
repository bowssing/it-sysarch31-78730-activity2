import Pic from './assets/pic.png';
//import PropTypes from 'prop-types';
function Card(props){

//    const studentList = props.lists;

//    const listStudents = studentList.map(student => <li key={student.id} > {student.name} {student.email}</li>);

//   const students = [   {id: 1, name: "Bowen Suico", email: "bowenhsuico@gmail.com"},
  //                      {id: 2, name: "Krystal June Codeniera", email: "krystalization@gmail.com"},
    //                    {id: 3, name: "Jude Michael Dagatan", email: "bowenhsuico@gmail.com"},
      //                  {id: 4, name: "Bowssing", email: "bowenhsuico@gmail.com"},
        //               {id: 5, name: "Bowssing", email: "bowenhsuico@gmail.com"}];

    return(
        <div className="card">
            <img className='card-image' src={Pic} alt="profile picture"></img>
            <h2 className='card-title'>{props.name}</h2>
            <p className='card-text'>{props.email}</p>
        </div>
    );

}


export default Card