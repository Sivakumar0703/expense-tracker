
import './App.css'
import ExpenseTrackerUnOptimised from './components/ExpenseTrackerUnOptimised'
import ExpenseTracker from './components/ExpenseTracker'

function App() {

  return (
    <>
      {/* optimised */}
      <ExpenseTracker />

      {/* unoptimised */}
      {/* <ExpenseTrackerUnOptimised /> */}
    </>
  )
}

export default App
