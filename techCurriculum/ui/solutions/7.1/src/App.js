/**
* Copyright 2019 Goldman Sachs.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
**/

import React from 'react';
import Title from './components/Title';
import Card from './components/Card';
import CardForm from './components/CardForm';
import LineChart from './components/LineChart';
import JohnData from './data/john_posts.json';
import JaneData from './data/jane_posts.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          author: 'John Smith',
          text: 'React is so cool!',
          tags: []
        },
        {
          author: 'Jane Doe',
          text: 'I use React for all my projects!',
          tags: []
        }
      ]
    };
  }

  handleSubmit = (author, message, tags, dateStamp) => {
    const newCard = {author, text: message, tags, dateStamp};
    const cards = [...this.state.cards, newCard];
    this.setState({cards: cards});
  }
  
  render() {
    const cards = this.state.cards.map((card, index) => (
      <Card author={card.author}
        text={card.text}
        key={index}
        tags={card.tags}
        dateStamp={card.dateStamp} />
    ));

    return (
      <div>
        <div id='app-body'>
          <div id='left-panel'>
            <Title />
            { cards }
          </div>
          <CardForm onSubmit={this.handleSubmit} />
        </div>
        <LineChart dataOne={JohnData.data} dataTwo={JaneData.data} />
      </div>
    );
  }
}

export default App;
