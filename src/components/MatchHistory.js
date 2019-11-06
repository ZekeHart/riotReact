import React from 'react'
import matchHistory from '../services/MatchHistory.js'
import axios from 'axios'

const matches = getMatchHistory()
console.log('q', typeof (matches), matches)
console.log(matchHistory)

function MatchHistory () {
  return <h1>ABC</h1>
}

async function getMatchHistory () {
  //   const dailyApi = 'RGAPI-6c402bb1-7fc0-42be-87ad-ab97f90369f6'
  // const mH = await axios.get(`https://americas.api.riotgames.com/tft/match/v1/matches/by-puuid/4tFF6inlqX5x4fN2KoBPtWXvbAVV-b6C09jqoX9wDc9NIeE_rTtcYhtwDmryRxMKCDEp6hN9qTgzrQ/ids?api_key=RGAPI-6c402bb1-7fc0-42be-87ad-ab97f90369f6`)
  let joey = await axios.get('https://americas.api.riotgames.com/tft/match/v1/matches/by-puuid/4tFF6inlqX5x4fN2KoBPtWXvbAVV-b6C09jqoX9wDc9NIeE_rTtcYhtwDmryRxMKCDEp6hN9qTgzrQ/ids?api_key=RGAPI-6c402bb1-7fc0-42be-87ad-ab97f90369f6').then(res => { return res.data })
  // return mH.data[0]
  joey = await Array.from(joey)
  console.log('joey', typeof (joey[0]), joey[0])

  return joey[0]
}

export default MatchHistory
