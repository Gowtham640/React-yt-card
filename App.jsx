import React, { useEffect, useState } from 'react'; // Keep this
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import YtCard from './ytcomponents/YtCard'; // Ensure the path is correct
import data from './ytcomponents/data.json';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Load the JSON data into the state when the component mounts
    setVideos(data);
  }, []);

  return (
    <div>
      <div className="youtube-cards-container">
        {videos.map((video, index) => (
          <YtCard
            key={index}
            thumbnail={video.thumbnail}
            channelname={video.channelname}
            duration={video.duration}
            title={video.title}
            views={video.views}
            publishDate={video.publishDate}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
