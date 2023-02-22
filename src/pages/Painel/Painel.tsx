import React from 'react'

import ReactApexChart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'

import { PainelController,Graph } from './styles'

export function Painel() {
  const series: ApexOptions['series'] = [{
    name: 'series1',
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: 'series2',
    data: [11, 32, 45, 32, 34, 52, 41]
  },
]

  const options: ApexOptions = {
    chart: {
      height: 350,
      type: 'bar'
    },
    dataLabels: {
      enabled: true
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type: 'datetime',
      categories: [
        "2018-09-19T00:00:00.000Z", 
        "2018-09-19T01:30:00.000Z", 
        "2018-09-19T02:30:00.000Z", 
        "2018-09-19T03:30:00.000Z", 
        "2018-09-19T04:30:00.000Z", 
        "2018-09-19T05:30:00.000Z", 
        "2018-09-19T06:30:00.000Z"
      ]
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    }
  }

  return (
    <PainelController>
      <h1>
         Dashboard
      </h1>
      <Graph>
          <br />
          <h2>Usuários cadastrados</h2>
          <br />
          <ReactApexChart options={options} series={series} type="bar" height={350} />    
          <br /> 
      </Graph>
      <Graph>
          <br />
          <h2>Empresas Cadastradas</h2>
          <br />
          <ReactApexChart options={options} series={series} type="bar" height={350} />    
          <br />
      </Graph>
    </PainelController>
  )
}
