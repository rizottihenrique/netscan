from flask import Flask, render_template, request, jsonify
import scanner

app = Flask(__name__)

@app.route("/")
def index():
    # Certifique-se de que o HTML está na pasta /templates
    return render_template("dashboard.html")

@app.route("/scan")
def scan():
    network = request.args.get("network", "192.168.1.0/24")
    mode = request.args.get("mode", "TCP") # Captura o modo de scan

    result = scanner.scan(network, mode)
    return jsonify(result)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=False)
