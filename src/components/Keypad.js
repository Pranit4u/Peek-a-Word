import React, { useEffect, useState } from 'react'
import { LETTERS } from '../data/db'

export default function Keypad({ usedKeys, firstChar }) {
  const [letters, setLetters] = useState(null)
  console.log(firstChar)
  useEffect(() => {
    setLetters(LETTERS)
  }, [])

  return (
    <div className="keypad">
      {letters && letters.map(l => {
        const color = usedKeys[l.key]
        return (
          <div key={l.key} className={l.key === firstChar.toLowerCase() ? 'green' : color}>{l.key}</div>
        )
      })}
    </div>
  )
}
