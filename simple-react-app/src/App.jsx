import { useEffect, useState } from 'react'

const Card = ({ title }) => {
  const [likeCount, setLikeCount] = useState(0)
  const [hasLiked, setHasLiked] = useState(false)

  // the deps arguments will make useEffect to apply/call the effect only when given deps change.
  useEffect(() => {
    console.log(`${title} like status: ${hasLiked}`)
  }, [hasLiked, title])

  // one of the most common use cases of useEffects hook is to define a useEffect with empty array as deps arg
  // that makes its effect callback to only run once when component is mounted.

  useEffect(() => {
    console.log(`${title} CARD RENDERED`)
  }, [])

  return (
    // with useState effect it is recommended to update the state using a
    // callback like: prev => prev +1 instead of just prev + 1
    // This recommendation exists because state updates in React are asynchronous and may be batched.
    // If you read count directly when updating state, you might read a stale value.
    <div className="card" onClick={() => setLikeCount((prev) => prev + 1)}>
      <h2>{title}</h2>
      {/* {count || null} is the same as {count ? count : null} */}
      <button onClick={() => setHasLiked(!hasLiked)}>
        <span style={{ fontSize: 12, color: 'white' }}>
          {likeCount || null}
        </span>{' '}
        {hasLiked ? '❤️' : '🤍'}
      </button>
    </div>
  )
}

function App() {
  return (
    <div className="card-container">
      <Card title={'Start Wars'} />
      <Card title={'Lion King'} />
      <Card title={'Avatar 2'} />
    </div>
  )
}

export default App
