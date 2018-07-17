/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   lib/elements/dom-bind.js
 */

import {PropertyEffects} from '../mixins/property-effects.js';

import {OptionalMutableData} from '../mixins/mutable-data.js';

import {GestureEventListeners} from '../mixins/gesture-event-listeners.js';

export {DomBind};

/**
 * Custom element to allow using Polymer's template features (data binding,
 * declarative event listeners, etc.) in the main document without defining
 * a new custom element.
 *
 * `<template>` tags utilizing bindings may be wrapped with the `<dom-bind>`
 * element, which will immediately stamp the wrapped template into the main
 * document and bind elements to the `dom-bind` element itself as the
 * binding scope.
 */
declare class DomBind extends
  PropertyEffects(
  OptionalMutableData(
  GestureEventListeners(
  Polymer.Element))) {
  attributeChangedCallback(): void;
  connectedCallback(): void;
  disconnectedCallback(): void;

  /**
   * Forces the element to render its content. This is typically only
   * necessary to call if HTMLImports with the async attribute are used.
   */
  render(): void;
}

declare global {

  interface HTMLElementTagNameMap {
    "dom-bind": DomBind;
  }
}
