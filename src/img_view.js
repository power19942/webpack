//import big from '../asseets/big.jpg';
//import small from '../asseets/small.jpg';
import '../styles/img_view.css';

export default ()=> {
    const img = document.createElement('img');
    img.src = "http://lorempixel.com/400/400";
    document.body.appendChild(img);
}