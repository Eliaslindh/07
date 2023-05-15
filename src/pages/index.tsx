import { useState, useEffect } from 'react'


export default function Home() {
  const [timer, setTimer] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((t) => t + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [timer])

  return (
    <div></div>
  )
}
