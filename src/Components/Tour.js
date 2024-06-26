import Card from './Card';
import './Tour.css'

function Tour({tour, removeTour}){
    return(
        <div className='container'>
            
            <div>
                <h2 className='title'>Plan With Love</h2>
            </div>
            <div className='cards'>
                {
                    tour.map((tour)=>{
                        return(<Card {...tour} removeTour={removeTour}></Card>)
                    })
                }
            </div>
        </div>
        
    )
}

export default Tour;