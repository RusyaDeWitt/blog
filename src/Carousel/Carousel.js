import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

class Carousels extends React.Component{

    render(){
        return(
            <Carousel interval={1000}>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./1.jpg"
                    alt="First slide"
                />
                </Carousel.Item>

                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./2.jpg"
                    alt="Third slide"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./3.jpg"
                    alt="Third slide"
                />
                </Carousel.Item>
            </Carousel>
        )
    }

}

export default Carousels;
