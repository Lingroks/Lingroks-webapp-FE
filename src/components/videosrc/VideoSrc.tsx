interface VideoSrcProps {
    src: string;
}


const VideoSrc: React.FC<VideoSrcProps> = ({src}) => {
    return (
        <>
        <iframe 
        src={src}
        title="Video"
        width="100%"
        height="100%"
        allow="autoplay"
        allowFullScreen
        />
        </>
    )
}

export default VideoSrc;