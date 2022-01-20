import download from './videos/download.mp4'
import React from 'react';
import { forwardRef, useImperativeHandle,useRef } from 'react';

 function Video(props,ref) {
   const videoref= useRef()


   useImperativeHandle(ref,()=>({
     play(){
       videoref.current.play()

     },
     pause(){
       videoref.current.pause()
     }
   }))


  return (
    <video width={400} src={download} />
    )
}
export default forwardRef(Video)