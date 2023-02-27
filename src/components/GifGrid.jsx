import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import PropTypes from "prop-types";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);
  
  return ( 
    <>
      <h2>{category}</h2>
      <div className='card-grid'>
        { isLoading && (<h3>Cargando...</h3>)}
        {
          images.map((image) => (
            <GifItem key={image.id} {...image} />
          ))
        }
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
}
