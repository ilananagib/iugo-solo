import React, { Component } from 'react';
var ReactDOM = require('react-dom');
var Carousel = require('react-responsive-carousel').Carousel;

// class Carousel extends Component {
//     constructor(props) {
//         super(props);
//     }

//     previousSlide = () => {
//         const lastIndex = imgUrls.length - 1;
//         const { currentImageIndex } = this.state;
//         const shouldResetIndex = currentImageIndex === 0;
//         const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

//         this.setState({
//             currentImageIndex: index
//         });
//     }

//     nextSlide = () => {
//         const lastIndex = imgUrls.length - 1;
//         const { currentImageIndex } = this.state;
//         const shouldResetIndex = currentImageIndex === lastIndex;
//         const index = shouldResetIndex ? 0 : currentImageIndex + 1;

//         this.setState({
//             currentImageIndex: index
//         });
//     }

//     render() {
//         return (
//             <Carousel showArrows={true} previousSlide={this.previousSlide}>
//                 <div>
//                     <img src="images/immigrants.jpg" />
//                     <p className="legend">We are all immigrants</p>
//                     <button onClick={this.previousSlide}>Previous</button>
//                 </div>
//                 <div>
//                     <img src="child.jpg" />
//                     <p className="legend"></p>
//                 </div>
//                 <div>
//                     <img src="hands.jpg" />
//                     <p className="legend"></p>
//                 </div>
//                 <div>
//                     <img src="Mother.jpg" />
//                     <p className="legend">Legend 4</p>
//                 </div>
//             </Carousel>
//         )
//     };
// }


export default (Carousel);