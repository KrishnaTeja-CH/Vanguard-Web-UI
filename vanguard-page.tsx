import { Component, h } from '@stencil/core';

@Component({
  tag: 'vanguard-page',
  styleUrl: 'vanguard-page.css',
  shadow: true,
})

export class VanguardPage {
  render() {
    return (
      <div>
        <h1>Welcome to Vanguard Insurance</h1>
        <p>Do you have an account with us?</p>
        <div class ="options">
          <button class= "yes" > Yes </button>
          <button class= "no" > No </button>
        </div>
      </div>
    );
  }
}
