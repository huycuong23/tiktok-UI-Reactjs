import {useState, forwardRef } from "react";
import images from "~/assets/images";


const Image = forwardRef(({src, alt="ảnh", ...props}, ref) => {
    const [fallback, setFallback] = useState("")
    const handleError = () => {
        setFallback(images.images)
    }
    return ( <img ref={ref} {...props} src={fallback || src} alt={alt} onError={handleError} />);
})

export default Image;