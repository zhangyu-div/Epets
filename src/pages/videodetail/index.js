import React from "react";
import Headbar from "common/headbar";
import {Container,Videobox} from "./styled";
class Videodetail extends React.Component{
    render(){
        return(
            <Container>
                <Headbar></Headbar>
                <Videobox>
                <div className="video">
                    <video
                    webkit-playsinline="" 
                    playsinlineid="my-player video" 
                    controls="controls" 
                    poster="https://img1.epetbar.com/2019-04/09/11/91c4d3121c25ebb479d8fd2f0c73694d.png?x-oss-process=style/waterfall&amp;$1=400" 
                    x5-video-player-type="h5"
                    className="video-js" 
                    src="https://v.epetbar.com/18badec5da024dfa9d0660847f5b17e1/0f99d217eea0466f82f1f8aa470d6301-5287d2089db37e62345123a1be272f8b.mp4"
                    >
                    </video>
                    </div>
                </Videobox>

            </Container>
        )
    }
}
export default Videodetail;