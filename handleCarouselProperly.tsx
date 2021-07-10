  const [buttonPosition, setButtonPosition] = useState<boolean>(true)
  const mainCarouselRef = useRef<any>(null)

  const handleSwitchButtonPress = () => {
    setButtonPosition((prev) => !prev)
  }

  const handleSnapToItem = () => {
    if (mainCarouselRef && mainCarouselRef.current) {
      if (mainCarouselRef.current.currentIndex == buttonPosition) {
        mainCarouselRef.current.snapToItem(buttonPosition ? 0 : 1)
      }
    }
  }
  
  useEffect(() => {
    //other code
    handleSnapToItem()
  }, [buttonPosition])
  
 
  <Carousel
    data={carouselData}
    renderItem={renderItem}
    sliderWidth={deviceSizes.width}
    itemWidth={deviceSizes.width}
    ref={mainCarouselRef}
    scrollEnabled={false}
    onSnapToItem={handleSnapToItem}
  />
