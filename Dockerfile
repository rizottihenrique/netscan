# Use uma imagem leve do Python
FROM python:3.11-slim

# Instala o nmap e dependências de rede necessárias para o scanner.py
# O g++ e python3-dev podem ser necessários para compilar extensões se houver
RUN apt-get update && apt-get install -y \
    nmap \
    iputils-ping \
    && rm -rf /var/lib/apt/lists/*

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de dependências primeiro (otimiza o cache do Docker)
COPY requirements.txt .

# Instala as dependências (certifique-se de que 'gunicorn' está no seu requirements.txt)
RUN pip install --no-cache-dir -r requirements.txt

# Copia o restante do código do projeto
COPY . .

# Expõe a porta que o Gunicorn vai usar
EXPOSE 5000

# Comando para rodar com Gunicorn (Produção)
# -w 4: define 4 workers para lidar com múltiplas requisições
# --bind 0.0.0.0:5000: expõe a aplicação na rede do container
CMD ["gunicorn", "--workers", "4", "--bind", "0.0.0.0:5000", "app:app"]
