import { useEffect, useRef } from "react"

const CustomCursor = () => {
    const cursorRef = useRef(null)
    const mousePos = useRef({ x: 0, y: 0 })

    useEffect(() => {
        const cursor = cursorRef.current;
        let animatedFrameId;
        const updateCursor = (e) => {
            if (cursor) {
                cursor.style.transform = `translate3d(${mousePos.current.x - 20}px, ${mousePos.current.y - 15}px, 0)`;
                // console.log("X: ", e.clientX);
                // console.log("Y: ", e.clientY);
            }
            animatedFrameId = requestAnimationFrame(updateCursor)
        }
        const handleMouseMove = (e) => {
            mousePos.current = { x: e.clientX, y: e.clientY }
        }

        document.addEventListener("mousemove", handleMouseMove)
        animatedFrameId = requestAnimationFrame(updateCursor)
        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
            cancelAnimationFrame(animatedFrameId)
        }
    }, [])
    return <div ref={cursorRef} className="custom-cursor"></div>
}

export default CustomCursor