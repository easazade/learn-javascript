const Card = ({ title }) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  )
}

function App() {
  return (
    <>
      <Card title={'Start Wars'} />
      <Card title={'Lion King'} />
      <Card title={'Avatar 2'} />
    </>
  )
}

export default App
