import React, { useState, useEffect } from 'react'
import matchHistory from '../services/MatchHistory.js'
import axios from 'axios'

// const matches = getMatchHistory()
// console.log('q', typeof (matches), matches)
// console.log(matchHistory)
// let [matchOne, getMatches] = useState()

function MatchHistory () {
  const [data, setData] = useState([])
  const [matchOne, setMatch] = useState([])
  const todaysKey = 'RGAPI-1c4c79f7-c60d-4209-b8f5-fe5332213cdf'
  useEffect(() => {
    axios.get(`https://americas.api.riotgames.com/tft/match/v1/matches/by-puuid/4tFF6inlqX5x4fN2KoBPtWXvbAVV-b6C09jqoX9wDc9NIeE_rTtcYhtwDmryRxMKCDEp6hN9qTgzrQ/ids?api_key=${todaysKey}`)
      .then(response => response.data)
      .then(data => setData(data))
  }, [])
  console.log('welp', data)
  data.map(joey => console.log(joey))

  useEffect(() => {
    if (data[0] !== undefined) {
      const empty = data[0]

      axios.get(`https://americas.api.riotgames.com/tft/match/v1/matches/${empty}?api_key=${todaysKey}`)
        .then(response => response.data)
        .then(data => setMatch(data))
    }
  }, [])
  console.log(matchOne)

  return <div>

    <h1>Matches</h1>
    {matchOne.map((match, id) => {
      return <p key={id}>{match}</p>
    })}
  </div>
}

export default MatchHistory
