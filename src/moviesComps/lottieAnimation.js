import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

function LottieAnimation(props){
    // .box_Animation {
        //     height: 300px;
        //     width: 400px;
        //     margin: 0 auto;
        // }
        
    let animaRef = useRef(); // for lottie-web animation

    useEffect(() => {
        lottie.loadAnimation({
            container: animaRef.current,
            loop: true,
            autoplay: true,
            path: "/lottieAnimation/loading.json"
        })

    }, [])

    return(
        <div className='mt-4 box_Animation'>
            <div ref={animaRef}></div>
        </div>
    )
}

export default LottieAnimation