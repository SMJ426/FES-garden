import { useEffect, useState } from "react"

function useMouseLocation(initial){
    const [mouseLocation, setMouseLocation] = useState(
        initial  || { x: null, y: null }
    );

    // DOM을 이용해서 화면상의 마우스 좌표를 얻어내고 mouseLocation에 업데이트 해주세요.
    // mousemove 이벤트를 활용해서 만들기

    useEffect(() => {
        window.addEventListener("mousemove", (event) => {
            setMouseLocation({x: event.x, y: event.y })
        })
    }, [])

    return mouseLocation
}

export default useMouseLocation