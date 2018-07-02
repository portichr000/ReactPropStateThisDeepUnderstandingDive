import React, { Component } from 'react';
import JournalList from "./journals/Journal_list.js"

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>React, Props, and State DeepDive</h1>
        <JournalList heading="List 1"/>
      </div>
    );
  }
}