import { Container, Sprite } from 'pixi.js';
import gsap from 'gsap';

/**
 * @summary Create an instance of PIXI.Container
 * @extends {PIXI.Container}
 *
 */
export default class Pinata extends Container {
  constructor() {
    super();

    this.name = 'pinata';

    this._body = new Sprite.from('pinata');
    this._elements = new Container();
    this.addChild(this._elements);

    this._init();
    this._addListeners();
  }

  /**
   * @summary Animate sprite movement
   */
  dance() {
    gsap.to(this._body, {
      rotation: -0.3,
      repeat: -1,
      yoyo: true,
      ease: 'Power2.easeInOut',
    });
  }

  createParticle() {
    const particle = new Sprite.from('particle');
    particle.name = 'particle';
    particle.y = 300;
    particle.x = -150 + Math.floor(Math.random() * (50 - 1) + 1);
    particle.scale.set(2);
    this._elements.addChild(particle);

    gsap.to(particle, {
      y: 600,
      alpha: 0,
      duration: 3,
    });

    this._removeChild();
  }

  createChilli() {
    const chili = new Sprite.from('chili');
    chili.name = 'chili';
    chili.y = 200;
    chili.x = -100;
    chili.scale.set(Math.random() + 1);
    this._elements.addChild(chili);

    gsap.to(chili, {
      y: 600,
      alpha: 0,
      duration: 2,
    });

    this._removeChild();
  }

  /**
   * @private
   */
  _removeChild() {
    this._elements.removeChild();
  }

  /**
   * @private
   */
  _addListeners() {
    this._body.on('click', () => this.createChilli());
  }

  /**
   * @private
   */
  _init() {
    this._body.anchor.set(1, 0);
    this._body.interactive = true;
    this._body.buttonMode = true;
    this.addChild(this._body);
    this.y = -400;
  }
}
