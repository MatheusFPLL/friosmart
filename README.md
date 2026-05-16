# ❄️ FrioSmart IA – Monitoramento Inteligente para Refrigeração Comercial

## Sobre o projeto

O **FrioSmart IA** é uma prova de conceito (PoC) desenvolvida para a empresa **Eletrofrio**, com foco no monitoramento inteligente de sistemas de refrigeração comercial utilizados em supermercados.

A solução foi criada para resolver problemas relacionados ao monitoramento contínuo de:

- Balcões frigoríficos
- Câmaras frigoríficas
- Casas de máquinas
- Sensores de temperatura
- Alarmes operacionais
- Possíveis falhas em equipamentos

O sistema consome dados reais da API disponibilizada pela Eletrofrio (Projeto Galileo) e transforma esses dados em informações visuais para auxiliar na tomada de decisão.

---

# Problema identificado

Supermercados dependem diretamente de sistemas de refrigeração para conservar produtos perecíveis.

Problemas comuns:

- Oscilação de temperatura
- Falhas em sensores
- Perda de produtos
- Alto consumo energético
- Falta de manutenção preventiva
- Abertura tardia de chamados técnicos

---

# Objetivo da solução

Criar uma plataforma inteligente capaz de:

- Monitorar equipamentos em tempo real
- Consumir dados dos sensores
- Detectar alarmes
- Exibir indicadores críticos
- Melhorar tomada de decisão
- Preparar estrutura para IA preditiva e RAG

---

# Tecnologias utilizadas

## Frontend
- React.js
- Vite
- Recharts
- CSS inline

## Backend
- Node.js
- Express
- Axios
- Cors

## API utilizada
API Galileo (Eletrofrio)

Endpoints utilizados:

### Alarmes
Lista alarmes dos últimos 30 dias

```bash
?route=alarmes
```

---

### Unidades
Lista de lojas cadastradas

```bash
?route=unidades
```

---

### Telemetria
Dados de temperatura por dispositivo

```bash
?route=telemetria&dispositivoId=ID
```

---

### Abrir chamado
Simulação de chamado técnico automático

```bash
?route=abrir-chamado
```

---

# Arquitetura atual da PoC

```bash
Frontend React Dashboard
        ↓
Backend Node.js
        ↓
API Galileo Eletrofrio
```

---

# Arquitetura futura do projeto

```bash
React Dashboard
      ↓
Node.js API
      ↓
PostgreSQL + pgvector
      ↓
n8n workflows
      ↓
OpenAI API
      ↓
RAG + IA Preditiva
```

---

# Funcionalidades implementadas

✅ Consumo do endpoint de alarmes

✅ Consumo do endpoint de unidades

✅ Consumo do endpoint de telemetria

✅ Dashboard visual

✅ Cards de indicadores

✅ Gráfico de alarmes por setor

✅ Gráfico de temperatura

✅ Status dos equipamentos

✅ Estrutura preparada para IA futura

---

# Dashboard atual

O dashboard apresenta:

- Temperatura média
- Alarmes do dia
- Equipamentos críticos
- Chamados abertos
- Gráfico de temperatura
- Gráfico de alarmes
- Status operacional

---

# Como a solução atende o que foi solicitado na atividade

## 1. Consumo funcional de endpoint
✔️ Implementado

O sistema consome endpoints reais da Eletrofrio.

---

## 2. Organização e tratamento dos dados
✔️ Implementado

Os dados da API são organizados pelo backend antes de serem enviados ao frontend.

---

## 3. Interface funcional
✔️ Implementado

Dashboard em React funcionando.

---

## 4. Visualização / painel / indicador
✔️ Implementado

Gráficos e cards informativos.

---

## 5. Funcionalidade relacionada ao problema
✔️ Implementado

Monitoramento de refrigeração.

---

# Futuras implementações

- IA para diagnóstico automático
- RAG para consulta técnica
- manutenção preditiva
- abertura automática de chamados
- previsão de falhas
- análise energética

---

# Como executar o projeto localmente

## Clonar repositório

```bash
git clone https://github.com/MatheusFPLL/friosmart.git
```

---

## Backend

```bash
cd backend
npm install
node server.js
```

Servidor roda em:

```bash
http://localhost:3001
```

---

## Frontend

```bash
cd frontend
npm install
npm run dev
```

Aplicação roda em:

```bash
http://localhost:5173
```

---


# Autor

Projeto acadêmico desenvolvido por:

**Tech Crew**
