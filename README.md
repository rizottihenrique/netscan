# 🛡️ NetScan: Network Analytics Dashboard

NetScan é uma ferramenta de auditoria e monitoramento de infraestrutura desenvolvida para realizar varreduras de rede massivas e fornecer insights visuais em tempo real. O sistema utiliza o motor **Nmap** no backend para identificar hosts ativos, portas abertas e versões de serviços, apresentando os dados em um dashboard moderno e responsivo.

---

## 🚀 Funcionalidades principais

- **Varredura Multimodal:** Suporte para varreduras completas TCP (`-p-`), varreduras rápidas (TCP FAST) e varreduras UDP direcionadas.  
- **Identificação Exaustiva:** Detecção de protocolos, nomes de serviços, produtos e versões exatas de software.  
- **Gestão de Inventário:** Tabela técnica de alta legibilidade com status em tempo real.  
- **Exportação de Dados:** Geração instantânea de relatórios em formato CSV e suporte nativo para relatórios técnicos em PDF.  
- **Arquitetura em Containers:** Totalmente configurado com Docker e Docker Compose.

---

## 🛠️ Tecnologias Utilizadas

- **Backend:** Python 3.11 com Flask  
- **Motor de Scan:** Nmap (via wrapper `python-nmap`)  
- **Frontend:** HTML5, CSS3 (Bootstrap 5), JavaScript (ES6+)
- **Gráficos:** Chart.js  
- **Infraestrutura:** Docker & Docker Compose  

---

## 📦 Instalação e Execução

### Pré-requisitos

- Docker e Docker Compose instalados na máquina host  

### Instruções de Instalação

1. Clone este repositório:

```bash
git clone https://github.com/seu-usuario/netscan.git
cd netscan

2. Suba o ambiente com Docker:

docker-compose up -d --build

3. Acesse a aplicação:

O dashboard estará disponível em:
👉 http://localhost:5000
