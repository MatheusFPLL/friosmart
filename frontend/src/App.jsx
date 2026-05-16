import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

function App() {

  const temperaturaData = [
    { hora: "08h", temp: -15 },
    { hora: "10h", temp: -12 },
    { hora: "12h", temp: -10 },
    { hora: "14h", temp: -8 }
  ];

  const alarmesSetor = [
    { setor: "Açougue", alarmes: 10 },
    { setor: "Congelados", alarmes: 6 },
    { setor: "Laticínios", alarmes: 4 }
  ];

  const statusData = [
    { name: "Normal", value: 70 },
    { name: "Crítico", value: 30 }
  ];

  return (
    <div style={{display:"flex"}}>

      {/* Sidebar */}
      <div style={{
        width:"250px",
        background:"#0f172a",
        color:"white",
        minHeight:"100vh",
        padding:"20px"
      }}>
        <h2>FrioSmart IA</h2>
        <p>Dashboard</p>
        <p>Alarmes</p>
        <p>Telemetria</p>
        <p>Chamados</p>
        <p>IA Diagnóstico</p>
      </div>

      {/* Conteúdo */}
      <div style={{
        flex:1,
        background:"#f1f5f9",
        padding:"30px"
      }}>

        <h1>Monitoramento Inteligente</h1>

        {/* Cards */}
        <div style={{
          display:"flex",
          gap:"20px",
          marginBottom:"30px"
        }}>
          {[
            "Temperatura Média",
            "Alarmes Hoje",
            "Equipamentos Críticos",
            "Chamados"
          ].map((item) => (
            <div style={{
              background:"white",
              padding:"20px",
              width:"220px",
              borderRadius:"10px"
            }}>
              <h3>{item}</h3>
              <h2 style={{
  fontSize: "32px",
  fontWeight: "bold",
  color: "#0f172a"
}}>
  24
</h2>
            </div>
          ))}
        </div>

        {/* gráficos */}
        <div style={{
          display:"flex",
          gap:"20px"
        }}>
          
          <div style={{
            background:"white",
            padding:"20px",
            borderRadius:"10px"
          }}>
            <h3>Temperatura em Tempo Real</h3>

            <LineChart width={400} height={300} data={temperaturaData}>
              <XAxis dataKey="hora"/>
              <YAxis/>
              <Tooltip/>
              <Line dataKey="temp" stroke="#2563eb"/>
            </LineChart>
          </div>

          <div style={{
            background:"white",
            padding:"20px",
            borderRadius:"10px"
          }}>
            <h3>Alarmes por Setor</h3>

            <BarChart width={400} height={300} data={alarmesSetor}>
              <XAxis dataKey="setor"/>
              <YAxis/>
              <Tooltip/>
              <Bar dataKey="alarmes" fill="#ef4444"/>
            </BarChart>
          </div>
        </div>

        {/* Pizza */}
        <div style={{
          background:"white",
          marginTop:"30px",
          padding:"20px",
          borderRadius:"10px",
          width:"450px"
        }}>
          <h3>Status Equipamentos</h3>

          <PieChart width={400} height={300}>
            <Pie
              data={statusData}
              dataKey="value"
              outerRadius={100}
            >
              <Cell fill="#22c55e"/>
              <Cell fill="#ef4444"/>
            </Pie>
            <Tooltip/>
          </PieChart>
        </div>
      </div>
    </div>
  )
}

export default App;