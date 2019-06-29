./list-jupyter-notebooks.sh | tail -n1 | awk -F['&= '] '{print $2}'
