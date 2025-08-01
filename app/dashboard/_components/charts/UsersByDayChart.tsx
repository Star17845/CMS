"use client"
import {CartesianGrid, XAxis, YAxis, LineChart, Tooltip, Legend, Line} from "recharts"

const data = [
  {
    "name": "Jan",
    "Pengunjung": 100,
    "amt": 2400
  },
  {
    "name": "Feb",
    "Pengunjung": 25,
    "amt": 2210
  },
  {
    "name": "Mar",
    "Pengunjung": 50,
    "amt": 2290
  },
  {
    "name": "Apr",
    "Pengunjung": 33,
    "amt": 2000
  },
  {
    "name": "Mei",
    "Pengunjung": 23,
    "amt": 2181
  },
  {
    "name": "Jun",
    "Pengunjung": 43,
    "amt": 2500
  },
  {
    "name": "Jul",
    "Pengunjung": 21,
    "amt": 2100
  },

  {
    "name": "Agu",
    "Pengunjung": 10,
    "amt": 2100
  },

  {
    "name": "Sep",
    "Pengunjung": 3,
    "amt": 2100
  },

  {
    "name": "Okt",
    "Pengunjung": 32,
    "amt": 2100
  },

  {
    "name": "Nov",
    "Pengunjung": 28,
    "amt": 2100
  },

  {
    "name": "Des",
    "Pengunjung": 50,
    "amt": 2100
  }
]


export function UsersByDayChart (){
    return <LineChart width={730} height={300} data={data}
  margin={{ top: 0, right: 50, left: 0, bottom: 0 }}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="Pengunjung" stroke="#FF5BEF" />
</LineChart>
}