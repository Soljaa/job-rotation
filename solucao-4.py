dados = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
  }

def percentualRegiao(dados):
    total = sum(dados.values())
    for regiao in dados.keys():
        perc = dados[regiao] / total * 100       
        print(f'{regiao} -> {perc:.2f} %')


percentualRegiao(dados)
