import React, { Component } from 'react'
import axios from 'axios'

import { ShowPlayers } from './show'

class GetPlayers extends Component {
  constructor() {
    super();
    this.state = { players:[] }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      .then(response => this.setState({ players: response.data }))
      .catch(error => console.log(error))
  }
  
  render() {
      const { players } = this.state

    return <><ShowPlayers players={players} /></>
  }
}

export default GetPlayers