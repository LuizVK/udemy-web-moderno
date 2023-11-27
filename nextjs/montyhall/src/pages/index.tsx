import React, { useState } from 'react'
import Door from '../components/Door'

export default function Home() {
  const [started, setStarted] = useState<boolean>(false)
  const [portsAmount, setPortsAmount] = useState<number>(3)
  const [selectedPort, setSelectedPort] = useState<number>(1)

  // let doors = new Array()

  function changePortsAmount(e: any) {
    setPortsAmount(e.target.value)
  }

  function changeSelectedPort(e: any) {
    setSelectedPort(e.target.value)
  }

  function renderDoors() {
    const doors = []

    for(let i = 1; i <= portsAmount; i++)
      doors.push(<Door number={i} hasGift={selectedPort == i}></Door>)

    return doors
  }

  function iniciarClick() {
    setStarted(true)
  }

  function reiniciarClick() {
    setStarted(false)
  }

  return (
    <div className="mt-5 flex flex-col items-center">
      <h1 className="border border-black rounded bg-black bg-opacity-40 p-5 mb-10">Problema de Monty Hall</h1>
      <div className="flex flex-col justify-center items-center mb-10">
        {!started ?
          (
            <>
              <div className="mb-2.5 text-3xl text-black">
                <label htmlFor="portsAmount">Quantas portas? </label>
                <input type="text" id="portsAmount" value={portsAmount} onChange={changePortsAmount} />
              </div>
              <div className="mb-2.5 text-3xl text-black">
                <label htmlFor="selectedPort">Qual porta é premiada? </label>
                <input type="text" id="selectedPort" value={selectedPort} onChange={changeSelectedPort} />
              </div>
            </>
          ) : false
        }
        {!started ?
          (
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={iniciarClick}>Iniciar</button>
          ) : false
        }
        {started ?
          (
            <button className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded" onClick={reiniciarClick}>Reiniciar</button>
          ) : false
        }
      </div>
      { started ?
        (
          <div className="self-stretch flex justify-around flex-wrap">
              {renderDoors()}
          </div>
        ) : false
      }
    </div>
  )
}