import GifCardItem from './GifCardItem'
import { useFetchGifs } from "../hooks/useFetchGifs"
import Spinner from 'react-bootstrap/Spinner'

export default function GifCard({category}) {
  
   const {data:images,loading}= useFetchGifs(category);
    return (
        <div>
            <h1 className= "animate__animated animate__flash">{category}</h1>

{loading && <Spinner animation="border" variant="primary" /> }

            
                {
                    images.map(img => (
                      <GifCardItem
                      key={img.id}
                      {...img}

                       />
                    ))  // images.map
                }
        
        </div>
    )
}
