import React from 'react';
import CarouselData from './data/CarouselData';

const Carousel = () => {
	return (
		<div className='carousel-container'>
			<div className='fading-container'>
				<div className='fading-wrapper'>
					{CarouselData.map((el) => {
						return (
							<>
								<div> </div>
								<img src={el.image} alt='blog' />
							</>
						);
					})}
				</div>
			</div>
			<div className='slider-container'>
				<div className='slider-container-child'>
					{CarouselData.map((el) => {
						return (
							<div>
								<img src={el.image} alt='blog' />
								<h5>{el.title}</h5>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Carousel;
