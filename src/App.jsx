import React, { useState, useEffect } from 'react'
import classes from './app.module.css'

function App() {
  const [prepare, setPrepare] = useState(0)
  const [work, setWork] = useState(30)
  const [rest, setRest] = useState(20)
  const [cycles, setCycles] = useState(1)
  const [rounds, setRounds] = useState(1)
  const [playing, setPlaying] = useState(false)
  const [duration, setDuration] = useState(0)

  const resetAll = () => {
    setPrepare(0)
    setWork(0)
    setRest(0)
    setCycles(1)
    setRounds(1)
  }

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    setLength();
  });

  const setLength = () => {
    setDuration((prepare * rounds) + (work * (cycles * rounds)) + (rest * (cycles * rounds)))
    document.title = `Workout time: ${TimeDisplay({seconds: duration})}`;
  }

  const TimeDisplay = (props) => {
    var hours = Math.floor(props.seconds / 60 / 60)
    var minutes = Math.floor(props.seconds / 60) - hours * 60
    var seconds = props.seconds % 60

    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  }

  const startStop = () => {
    setPlaying(!playing)
  }

  return (
    <div className={classes.app}>
      <h1>Intervall Timer</h1>
      <main className={classes.wrapper}>
        <article>
          <div>
            time
            <br />
            <TimeDisplay seconds={duration} />
          </div>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}
          >
            <div>
              cycles
              <br />
              {cycles}
            </div>
            <div>
              rounds
              <br />
              {rounds}
            </div>
          </div>
        </article>
        <aside>
          <button
            className={classes.button}
            onClick={() => setPrepare((prepare) => prepare + 10)}
          >
            prepare <TimeDisplay seconds={prepare} />
          </button>
          <button
            className={classes.button}
            onClick={() => setWork((work) => work + 10)}
          >
            work <TimeDisplay seconds={work} />
          </button>
          <button
            className={classes.button}
            onClick={() => setRest((rest) => rest + 10)}
          >
            rest <TimeDisplay seconds={rest} />
          </button>
          <button
            className={classes.button}
            onClick={() => setCycles((cycles) => cycles + 1)}
          >
            cycles {cycles}
          </button>
          <button
            className={classes.button}
            onClick={() => setRounds((rounds) => rounds + 1)}
          >
            rounds {rounds}
          </button>
          <div style={{ marginTop: 32 }}>
            <button className={classes.button} onClick={resetAll}>
              reset all
            </button>
            <button
              className={classes.button}
              onClick={startStop}
            >
              {playing ? "⏸" : "▶️"}
            </button>
          </div>
        </aside>
      </main>
    </div>
  )
}

export default App
