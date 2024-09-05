import { useState } from "react"

export const BoxCard = ({result, children}) => {

  const [show, setShow] = useState(true)

  return (
    <div>
      <div className={`box ${result} ${show ? "hidden" : ""}`}>
        {children}
      </div>
      <button onClick={() => setShow(!show)} className="trigger">Hide</button>
    </div>
  )
}
