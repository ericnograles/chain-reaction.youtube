import React from 'react';

export function MemeGridTemplate(component) {
  var memes = component.state.memes.map(memeUrl => {
    return (
      <div key={memeUrl} className="demo-container mdl-grid">
        <div className="mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone"></div>
        <div className="demo-content mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--8-col">
          <div className="meme-image-container">
            <img src={memeUrl} />
          </div>
        </div>
      </div>
    );
  });

  return (
    <main className="demo-main mdl-layout__content">
      {memes}
    </main>
  );
}