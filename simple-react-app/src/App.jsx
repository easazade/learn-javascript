const Card = ({ title }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
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
