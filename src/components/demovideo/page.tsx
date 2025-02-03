// components/VideoEmbed.js

const VideoEmbed = ({ src, title, width = "100%", height = "500px" }) => {
    return (
      <div style={{ position: "relative", paddingBottom: "56.25%", height: "100%", overflow: "hidden" }}>
        <iframe
          src={src}
          title={title}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: 0,
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  };
  
export default VideoEmbed;
  