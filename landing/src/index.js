import ReactDOM from 'react-dom';
import React from 'react';


class LandingActions {
    _isLoaded = false;
      constructor() {
            const starter = document.getElementById('app-starter');
            starter.onclick = ()=> {
                if(this._isLoaded) return;
                this.render();
                this._isLoaded = true;
            }

      }

      _generateAppContainer(){
        const container = document.createElement('div');
        container.id = "app";
        document.getElementById('landing-container').appendChild(container);
        return container;
      }
     async _Loader() {
        try {
            const Application = await import("app/weather");
            return Application.default;
        } catch(e) {
            return Promise.reject(e);
        }
    };
    render() {
        this._Loader()
        .then(App => {
            ReactDOM.render(<App />, this._generateAppContainer());
        }).catch((error => {
            throw new Error(`Render App ${ error.message }`);
        }))
    }
}

new LandingActions();
