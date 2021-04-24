import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

class Carousels extends React.Component{

    render(){
        return(
            <Carousel interval={1000}>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://kashayev.herokuapp.com/1.jpg"
                    alt="First slide"
                />
                </Carousel.Item>

                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://kashayev.herokuapp.com/2.jpg"
                    alt="Third slide"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://kashayev.herokuapp.com/4.jpg"
                    alt="Third slide"
                />
                </Carousel.Item>
            </Carousel>
        )
    }

}

export default Carousels;
