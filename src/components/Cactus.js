import { Sprite } from 'pixi.js';
import gsap from 'gsap';

/**
 * @summary Create an instance of PIXI.Sprite
 * @extends {PIXI.SPrite}
 * @param {Number} x Sprite X coordinate
 * @param {Number} y Sprite Y coortinate
 * @param {String} texture Sprite texture
 * @param {String} name Sprite name
 
 */

export default class Cactus extends Sprite {
  constructor(x, y, texture, name) {
    super(texture);

    this.name = name;
    this.anchor.set(0.5, 1);

    this.x = x;
    this.y = y;
  }

  /**
   * @summary Animate sprite movement
   */
  dance() {
    gsap.to(this, {
      rotation: 1,
      repeat: -1,
      yoyo: true,
      ease: 'Power2.easeInOut',
    });
  }
}
