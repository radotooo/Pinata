import { utils } from 'pixi.js';
import Assets from '../core/AssetManager';

export default class Music extends utils.EventEmitter {
  constructor() {
    super();

    Assets.sounds.mariachi.play();
    Assets.sounds.mariachi.loop(true);

    setInterval(() => this.emit(Music.events.BEAT), 312);
    setInterval(() => this.emit(Music.events.INTRO), 1350);
    setInterval(() => this.emit(Music.events.START), 2300);
  }

  /**
   * @readonly
   * @static
   * @returns {Object}
   * @memberof Music
   */
  static get events() {
    return {
      BEAT: 'beat', // Fired on each beat update
      INTRO: 'intro', // Fired when the guitar intro ends
      START: 'start', // Fired when the actual music starts
    };
  }
}