import { useEffect, useRef } from "react"

const CustomCursor = () => {
    const cursorRef = useRef(null)
    const cursorDotRef = useRef(null)
    const mousePos = useRef({ x: 0, y: 0 })
    const bgPos = useRef({ x: 0, y: 0 })

    useEffect(() => {
        const bg = cursorRef.current;
        const dot = cursorDotRef.current

        const handleMouseMove = (e) => {
            mousePos.current = { x: e.clientX, y: e.clientY }
        }

        const animateDot = () => {
            if(dot) {
                dot.style.transform = `translate3d(${mousePos.current.x - 5}px, ${mousePos.current.y - 5}px, 0)`
            }
            requestAnimationFrame(animateDot)
        }

        const animateBg = () => {
            if(bg){
                bgPos.current.x += (mousePos.current.x - bgPos.current.x) * .2;
                bgPos.current.y += (mousePos.current.y - bgPos.current.y) * .2;

                bg.style.transform = `translate3d(${bgPos.current.x - 20}px, ${bgPos.current.y - 20}px, 0)`
            }
            requestAnimationFrame(animateBg)
        }

        document.addEventListener('mousemove', handleMouseMove)
        animateDot();
        animateBg()

        return () => document.removeEventListener('mousemove', handleMouseMove)
    }, [])
    return (
        <>
            <div ref={cursorRef} className="custom-cursor"></div>
            <div ref={cursorDotRef} className="custom-cursor-dot"></div>
        </>
    )
}

export default CustomCursor