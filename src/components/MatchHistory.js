import React, { useState, useEffect } from 'react'
import matchHistory from '../services/MatchHistory.js'
import axios from 'axios'

// const matches = getMatchHistory()
// console.log('q', typeof (matches), matches)
// console.log(matchHistory)
// let [matchOne, getMatches] = useState()

function MatchHistory () {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('https://americas.api.riotgames.com/tft/match/v1/matches/by-puuid/4tFF6inlqX5x4fN2KoBPtWXvbAVV-b6C09jqoX9wDc9NIeE_rTtcYhtwDmryRxMKCDEp6hN9qTgzrQ/ids?api_key=RGAPI-6c402bb1-7fc0-42be-87ad-ab97f90369f6')
      .then(response => response.data)
      .then(data => setData(data))
  }, [])

  return <div>

    <h1>Matches</h1>
    {data.map((match, id) => {
      return <p key={id}>{match}</p>
    })}
  </div>
}

export default MatchHistory
