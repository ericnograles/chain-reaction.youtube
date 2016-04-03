import React from 'react';

export function MemeGridTemplate(component) {
  var memes = component.state.memes.map(memeUrl => {
    return (
      <div key={memeUrl} className="meme-image-container">
        <img src={memeUrl} />
      </div>
    );
  });

  return (
    <div className="meme-grid">
      {memes}
    </div>
  );
}