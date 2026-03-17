import nmap

def scan(network, scan_mode="TCP"):
    nm = nmap.PortScanner()

    # Definição dos parâmetros baseada no modo escolhido
    if scan_mode.upper() == "UDP":
        params = "-sU -Pn -n --top-ports 200 --min-rate 1000"
    elif scan_mode.upper() == "TCP_FAST":
        # Modo TCP Fast: varre as 1000 portas principais com alta taxa
        params = "-sS -Pn -n --min-rate 5000 -T5 --open"
    else:  # Padrão TCP Completo
        params = "-sS -p- -Pn -n --min-rate 5000 -T5 --open"

    try:
        # Executa o scan com os parâmetros dinâmicos
        nm.scan(hosts=network, arguments=params)
        
        hosts = []
        for host in nm.all_hosts():
            host_data = {
                "ip": host,
                "state": nm[host].state(),
                "ports": []
            }

            for proto in nm[host].all_protocols():
                for port in nm[host][proto].keys():
                    port_info = nm[host][proto][port]
                    if port_info.get("state") != "open":
                        continue

                    host_data["ports"].append({
                        "port": port,
                        "protocol": proto,
                        "service": port_info.get("name", ""),
                        "product": port_info.get("product", ""),
                        "version": port_info.get("version", "")
                    })
            hosts.append(host_data)
        return {"hosts": hosts}
    except Exception as e:
        return {"error": str(e), "hosts": []}
