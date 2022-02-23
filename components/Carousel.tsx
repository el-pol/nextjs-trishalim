import {CarouselProvider, Slider, Slide, CarouselContext} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

const Carousel = (props: {
    title: string
    images: Array<string>
    className?: string
}) => {
    const { images, className = '' } = props

    return (
        <CarouselProvider
            className={className}
            naturalSlideWidth={100}
            naturalSlideHeight={0}
            totalSlides={images.length}
            isIntrinsicHeight={true}
        >
            <Slider className='mb-5'>
                {images.map((image, index) => (
                    <Slide key={index} index={index}>
                        <img src={image} alt=''/>
                    </Slide>
                ))}
            </Slider>

            <CarouselContext.Consumer>
                {({ state, setStoreState }) => {
                    const { currentSlide } = state

                    return (
                        <div className='flex space-x-3'>
                            {images.map((image, index) => (
                                <button
                                    className={`border rounded-md h-12 w-12 bg-cover bg-center hover:opacity-100 transition-opacity ${currentSlide === index ? '' : 'opacity-75'}`}
                                    key={index}
                                    style={{
                                        backgroundImage: `url(${images[index]})`
                                    }}
                                    onClick={() => setStoreState({ currentSlide: index })}
                                />
                            ))}
                        </div>
                    )
                }}
            </CarouselContext.Consumer>
        </CarouselProvider>
    )
}

export default Carousel