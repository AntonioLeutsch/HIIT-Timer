import React, { useState } from 'react'
import classes from './app.module.css'

function App() {
  const [prepare, setPrepare] = useState(10);
  const [work, setWork] = useState(30);
  const [rest, setRest] = useState(20);
  const [cycles, setCycles] = useState(1);
  const [rounds, setRounds] = useState(2);
  const [playing, setPlaying] = useState(false);

  const resetAll = () => {
    setPrepare(0)
    setWork(0);
    setRest(0);
    setCycles(0);
    setRounds(0);
  }

  const Length = () => {
    const length = (prepare * rounds) + (work * (cycles * rounds)) + (rest * (cycles * rounds))
   return length
  }

  const TimeDisplay = (props) => {
    var hours = Math.floor(props.seconds / 60 / 60);
    var minutes = Math.floor(props.seconds / 60) - hours * 60;
    var seconds = props.seconds % 60;

    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;

  }

  return (
    <div className={classes.app}>
      <h1>Intervall Timer</h1>
      <main className={classes.wrapper}>
        <article>
          <div>
            Zeit
            <br />
            <TimeDisplay seconds={Length} />
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
              onClick={() => setPlaying(!playing)}
            >
                {playing ? "⏸" : "▶️"}
            </button>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default App
