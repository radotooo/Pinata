import Scene from './Scene';
import gsap from 'gsap';
import Footer from '../components/Footer';
import Music from '../components/Music';
import Cactus from '../components/Cactus';
import Pinata from '../components/Pinata';

import { Texture } from 'pixi.js';

export default class Play extends Scene {
  async onCreated() {
    this._music = new Music();

    const footer = new Footer();
    footer.x = -window.innerWidth / 2;
    footer.y = window.innerHeight / 2 - footer.height;
    this.addChild(footer);

    this.background.alpha = 0;
    this.alpha = 0;

    const canctus1Texture = Texture.from('cactus1');
    const cactus2Texture = Texture.from('cactus2');

    const pinata = new Pinata();
    pinata.y = -400;

    const cactus1 = new Cactus(-800, 380, canctus1Texture, 'cactus-1');
    const cactus2 = new Cactus(500, 380, cactus2Texture, 'cactus-2');

    this.addChild(pinata, cactus1, cactus2);

    this._music.once(Music.events.START, () => {
      pinata.dance();
      cactus1.dance();
      cactus2.dance();
      this._music.on(Music.events.BEAT, () => pinata.createParticle());
    });

    this._music.once(Music.events.INTRO, () => {
      this.alpha = 1;
      this.background.alpha = 1;
      gsap.to(this.background.scale, {
        x: 0.8,
        y: 0.8,
        duration: 10,
        yoyo: true,
        repeat: -1,
        ease: 'linear.none',
      });
    });
  }

  /**
   * Hook called by the application when the browser window is resized.
   * Use this to re-arrange the game elements according to the window size
   *
   * @param  {Number} width  Window width
   * @param  {Number} height Window height
   */
  onResize(width, height) {
    // eslint-disable-line no-unused-vars
  }
}
