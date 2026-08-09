# Evidence-first portfolio

Branch isolada para reconstrução do portfólio profissional sem tocar em nenhum repositório, branch, workflow ou infraestrutura do Troquim.

## Conceito

Em vez de um portfólio genérico de cards com listas de tecnologias, este site usa **claims → evidence**:

- cada competência importante aponta para código/commit público verificável;
- existe uma visão curta para recrutamento e outra para leitura de engenharia;
- uso de agentes de IA é declarado, não escondido;
- trabalho futuro é marcado como planejado, nunca apresentado como concluído;
- `evidence.json` oferece uma versão estruturada/machine-readable das evidências.

## Arquivos

- `index.html` — conteúdo e duas camadas de leitura;
- `styles.css` — visual próprio, responsivo e sem framework externo;
- `app.js` — alternância Recrutador / Engenharia;
- `evidence.json` — mapa estruturado de competência → problema → evidência;
- `RESEARCH.md` — base de pesquisa que orientou o posicionamento.

## Segurança / isolamento

Este branch pertence exclusivamente a `guilhermerichaard/guilhermerichaard.github.io`.

Nenhuma alteração foi feita em:

- `guilhermerichaard/troquim`
- `guilhermerichaard/troquim-bot`
- `guilhermerichaard/troquim-hq`
- servidores, DNS, banco de dados, CI/CD ou produção

Os links para o `troquim-bot` são somente referências de leitura para evidências públicas já existentes.

## Rodar localmente

Por ser HTML/CSS/JS estático, pode ser aberto diretamente ou servido com qualquer servidor HTTP local.

Exemplo:

```bash
python -m http.server 8080
```

Depois acesse `http://localhost:8080`.

## Status

**Draft isolado. Não fazer merge até revisão visual, revisão das afirmações e definição do perfil final do LinkedIn.**
