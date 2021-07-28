import React from 'react'
import LottieAnimation from '../../animation/LoadingA'
import PulsingHeart from '../../animation/66879-pulsing-heart.json'

export default function Loader(){

    return(
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1>kakaka</h1>
            <LottieAnimation lottie={PulsingHeart} height={1000} width={1000}/>
        </div>
    )
}
