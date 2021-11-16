import {useState} from 'react'
import SearchCCategory from './Components/SearchCategory';
import GifCard from './Components/GifCard';
function GifExpertApp() {
 
    const [series, setSeries] = useState(["One Piece"])

   return (
    <div className="GifExpertApp">
      <h2 className="text-center mt-1">GifExpertApp</h2>
      <SearchCCategory setcategory={setSeries}/>
      <hr/>
  <ol>
      {
          series.map( (serie) =>{
              return (
                    <GifCard
                    key={serie}
                     category={serie}/>
                 
              )
          })
      }
  </ol>  
    </div>
  );
}

export default GifExpertApp;