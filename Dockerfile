FROM python:3.11

RUN apt update && apt install -y nmap

WORKDIR /app

COPY . .

RUN pip install -r requirements.txt

EXPOSE 5000

CMD ["python","app.py"]
