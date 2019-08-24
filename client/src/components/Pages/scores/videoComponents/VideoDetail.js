import React from "react";

const VideoDetail = ({ selectedVideo }) => {
    if (!selectedVideo) return <div>
        <h3>go to client/src/components/Pages/scores/utils/API.js...
            to paste the valid API key that is
            commented out in that file</h3>
        <h2>NOTE!!!: Remember to pull the API key out of "const apiKey" after confirming the
            VideoGrid component works... otherwise, EVERY SINGLE CODE KEYSTROKE
            afterwards will generate an API call, and the daily quota will be
            EXCEEDED with about 40 keystrokes!!!
            (and, the VideoGrid will show what you are now reading... and NOT FUNCTION...)

    </h2>
    </div>



    const videoId = selectedVideo.id.videoId;
    const videoUrl = `https://www.youtube.com/embed/${videoId}?rel=0`;



    return (
        <section>
            <iframe className="main-video" title={selectedVideo.snippet.title} src={videoUrl}
                allowFullScreen></iframe>
            <h3> {selectedVideo.snippet.title}</h3>
            <p>{selectedVideo.snippet.description}</p>
        </section>
    )
}

export default VideoDetail;