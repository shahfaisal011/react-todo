import { Link } from 'react-router-dom'
import img3 from '../assets/To-do-list-rafiki.svg'

function Home(){
    return(
        <>
        <div className="container">
            <div className="row">
            <div className="col-md-6">
            <img src={img3} alt="HomeHeroSection" />
            </div>
            <div className="col-md-6 d-flex align-items-center">
                <div>
                <h2>Master ToDo</h2>
                <p>We are warmly welcome to you to come on our site</p>
                <div className="buttons d-flex justify-content-between">
                <Link to="/about"><button className='btn btn-outline-secondary'>About</button></Link>
                <Link to="/todo"><button className='btn btn-primary'>To Do List</button></Link>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="container">
                <div className="row justify-content-between mt-3 mb-4">
                    <div className="col-12 bg-primary text-white rounded shadow mt-5 mb-5 p-4">
                        <h4>- About Us</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quo rerum magni quidem aspernatur quia debitis illo, excepturi, id commodi eum deleniti et distinctio consequatur, quos atque? Suscipit, placeat repudiandae facere, mollitia minima officiis architecto dicta ducimus sunt quo sit soluta velit, accusantium voluptatum culpa quas sed blanditiis deleniti? Quod.
                        <a href="/about" className='text-white'>...Read More</a>
                        </p>
                        
                    </div>
                    <div className="col-md-5 shadow p-4">
                        <h4>Our Vision</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error quo ut provident maiores laudantium est, eveniet vitae cupiditate, odio delectus quaerat? Beatae libero nulla adipisci. Voluptatum a magni aliquam facere ullam, id praesentium quidem? Nam omnis laudantium commodi explicabo libero?</p>
                    </div>
                    <div className="col-md-5 shadow p-4">
                        <h4>Our Mission</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error quo ut provident maiores laudantium est, eveniet vitae cupiditate, odio delectus quaerat? Beatae libero nulla adipisci. Voluptatum a magni aliquam facere ullam, id praesentium quidem? Nam omnis laudantium commodi explicabo libero?</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Home