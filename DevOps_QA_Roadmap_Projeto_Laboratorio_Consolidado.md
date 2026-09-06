# DevOps — Plano de Estudos, Projeto-Laboratório e Transição a partir de QA

> Documento consolidado para preservação do conteúdo deste chat.
>
> Objetivo: registrar com alto nível de detalhe o contexto, decisões, recomendações, estrutura de aprendizagem e proposta de projeto prático para estudar DevOps a partir de um perfil de QA com experiência em automação de testes.

---

# 1. Contexto profissional atual

## 1.1 Perfil de origem

Profissional de **Quality Assurance (QA)** com atuação em:

- testes manuais;
- automação de testes;
- análise funcional;
- validação de aplicações;
- uso de Git/GitHub;
- contato com pipelines sob a perspectiva de QA.

## 1.2 Conhecimentos técnicos já informados

Conhecimentos atuais:

- JavaScript;
- HTML;
- CSS;
- automação de testes;
- testes manuais;
- GitHub em nível de uso para versionamento e envio de código;
- conceito geral de CI/CD.

## 1.3 Lacuna atual

O conhecimento de DevOps ainda é inicial.

O ponto conhecido é principalmente o conceito de:

- CI — Continuous Integration;
- CD — Continuous Delivery / Continuous Deployment.

Ainda não há domínio prático consolidado de:

- Linux;
- shell/Bash;
- redes;
- servidores;
- processos;
- serviços;
- Docker;
- Docker Compose;
- infraestrutura;
- cloud;
- Infrastructure as Code;
- Terraform;
- Kubernetes;
- observabilidade;
- monitoramento;
- segurança em infraestrutura;
- operação de aplicações.

---

# 2. Objetivo principal

O objetivo não é apenas "aprender ferramentas de DevOps".

O objetivo real é evoluir de um profissional de QA com automação para alguém capaz de compreender, construir, publicar, automatizar, operar e diagnosticar aplicações dentro de um fluxo DevOps.

A aprendizagem deve permitir entender a cadeia completa:

```text
Código
  ↓
Versionamento
  ↓
Integração contínua
  ↓
Testes
  ↓
Build
  ↓
Empacotamento
  ↓
Publicação
  ↓
Infraestrutura
  ↓
Deploy
  ↓
Operação
  ↓
Logs
  ↓
Métricas
  ↓
Monitoramento
  ↓
Troubleshooting
```

---

# 3. Pergunta central que originou o planejamento

A dúvida principal foi:

> Um projeto para aprender DevOps precisa de frontend, backend e banco de dados? Onde ele fica armazenado? GitHub é suficiente? Como montar algo simples que ilustre DevOps sem transformar o aprendizado em um curso inteiro de desenvolvimento?

A resposta consolidada é:

- frontend é opcional, mas útil;
- backend é recomendado;
- banco de dados deve entrar depois, não no primeiro passo;
- o código fica no GitHub;
- a aplicação inicialmente roda localmente;
- depois é executada em container;
- depois é publicada em servidor/cloud;
- depois a infraestrutura passa a ser automatizada;
- Kubernetes deve entrar somente bem mais tarde.

---

# 4. Avaliação do prompt de formação DevOps criado

O prompt apresentado é conceitualmente bom e possui vários elementos importantes.

Ele solicita:

- diagnóstico inicial;
- roadmap cronológico;
- pré-requisitos;
- fundamentos antes das ferramentas;
- exercícios;
- mini-projetos;
- projeto evolutivo;
- critérios objetivos para avançar;
- tecnologias atuais;
- mercado de trabalho;
- certificações;
- cronograma;
- priorização;
- documentação oficial;
- foco em prática.

Isso evita um dos erros mais comuns em estudos de DevOps:

```text
Docker
Kubernetes
Terraform
AWS
Jenkins
Grafana
Prometheus
```

serem apresentados apenas como uma lista de tecnologias desconectadas.

O prompt corretamente exige o raciocínio:

```text
Fundamento
    ↓
Conceito
    ↓
Tecnologia
    ↓
Prática
    ↓
Projeto
    ↓
Validação
    ↓
Próxima etapa
```

---

# 5. Principal risco identificado no prompt

Embora o prompt esteja bem montado, há um risco:

> ele pode produzir um roadmap gigantesco antes que exista uma compreensão prática mínima do que DevOps realmente representa.

Para um iniciante absoluto em infraestrutura, uma lista com dezenas de temas pode parecer mais complexa do que a prática realmente é.

Por isso, a estratégia recomendada é:

```text
Primeiro:
um pequeno projeto funcionando de ponta a ponta.

Depois:
aprofundar o roadmap profissional completo.
```

---

# 6. Princípio de aprendizagem recomendado

A formação deve utilizar **um único projeto simples e evolutivo**.

Esse projeto é propositalmente pequeno.

O objetivo principal não é desenvolver uma aplicação sofisticada.

O objetivo é possuir algo real que possa ser:

- executado;
- versionado;
- testado;
- containerizado;
- publicado;
- monitorado;
- quebrado;
- corrigido;
- automatizado.

A aplicação é apenas o objeto de estudo.

A infraestrutura é o verdadeiro foco.

---

# 7. Regra importante para o projeto

Adicionar ao prompt de estudos a seguinte regra conceitual:

> O roadmap deve utilizar inicialmente uma única aplicação extremamente simples, desenvolvida em JavaScript/Node.js, apenas como objeto de estudo da infraestrutura. Não transformar o treinamento em um curso de desenvolvimento frontend/backend. A aplicação deve evoluir progressivamente conforme novos conceitos DevOps forem introduzidos.

Essa regra evita o desvio para:

- React;
- frameworks frontend complexos;
- arquitetura de software avançada;
- múltiplas linguagens;
- microsserviços precoces;
- desenvolvimento de produto.

---

# 8. Projeto recomendado

## 8.1 Nome sugerido

**DevOps Task Manager Lab**

Nome conceitual.

O nome pode ser alterado posteriormente.

## 8.2 Finalidade

Criar uma aplicação mínima de gerenciamento de tarefas apenas para sustentar a evolução da infraestrutura.

Exemplo visual:

```text
DEVOPS TASKS

[ Estudar Linux        ] [Concluído]
[ Estudar Docker       ] [Pendente]
[ Criar Pipeline       ] [Pendente]
```

---

# 9. Arquitetura inicial

## Versão inicial

```text
Browser
   ↓
Frontend
   ↓
Backend / API
```

Posteriormente:

```text
Browser
   ↓
Frontend
   ↓
Backend / API
   ↓
PostgreSQL
```

---

# 10. Frontend — precisa existir?

Não é tecnicamente obrigatório.

Um laboratório DevOps poderia possuir apenas:

```text
API Node.js
     ↓
Banco
```

Entretanto, para este contexto, um frontend mínimo é recomendado.

Motivos:

- já existe conhecimento de HTML;
- já existe conhecimento de CSS;
- já existe conhecimento de JavaScript;
- permite visualizar o sistema completo;
- torna HTTP e APIs mais intuitivos;
- permite entender a relação browser → frontend → backend;
- adiciona pouco esforço extra.

Não há necessidade inicial de:

- React;
- Angular;
- Vue;
- Next.js.

Essas tecnologias desviariam o foco.

---

# 11. Backend — precisa existir?

Recomendação: **sim**.

O backend cria uma base prática para aprender conceitos fundamentais de infraestrutura.

Através dele será possível entender:

- processos;
- portas;
- HTTP;
- APIs;
- dependências;
- logs;
- variáveis de ambiente;
- health checks;
- containers;
- comunicação entre serviços;
- banco de dados;
- secrets;
- deploy.

Tecnologia recomendada:

```text
JavaScript
+
Node.js
+
Express
```

Justificativa:

- JavaScript já é conhecido;
- reduz carga cognitiva;
- evita aprender uma nova linguagem enquanto se aprende infraestrutura;
- Node.js é simples para executar localmente e em containers.

Não há necessidade inicial de migrar para:

- Python;
- Java;
- C#;
- Go.

---

# 12. Banco de dados — precisa existir desde o início?

Não.

Recomendação:

## Versão 1

```text
Frontend
   ↓
Node.js API
```

## Versão 2

```text
Frontend
   ↓
Node.js API
   ↓
PostgreSQL
```

A inclusão posterior permite compreender claramente o que mudou.

Quando o banco entrar, ele servirá para estudar:

- persistência;
- conexão entre serviços;
- portas;
- credenciais;
- variáveis de ambiente;
- volumes;
- armazenamento persistente;
- Docker Compose;
- backup posteriormente.

---

# 13. API mínima

Endpoints suficientes:

```http
GET /tasks
POST /tasks
PUT /tasks/:id
DELETE /tasks/:id
```

Não é necessário criar regras de negócio complexas.

Exemplo de entidade:

```json
{
  "id": 1,
  "title": "Estudar Docker",
  "completed": false
}
```

---

# 14. Estrutura de repositório sugerida

```text
devops-lab/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── routes/
│
├── tests/
│   └── api.test.js
│
├── Dockerfile
├── docker-compose.yml
│
├── .github/
│   └── workflows/
│       └── pipeline.yml
│
└── README.md
```

Essa não precisa ser a estrutura definitiva.

Ela representa o estado esperado após algumas fases.

---

# 15. Onde cada parte ficará armazenada

## Código-fonte

```text
GitHub
```

Incluindo:

- frontend;
- backend;
- scripts;
- Dockerfile;
- Compose;
- pipeline;
- Terraform futuramente;
- arquivos Kubernetes futuramente;
- documentação.

## Aplicação — primeira fase

```text
Computador local
```

## Aplicação — segunda fase

```text
Docker local
```

## Aplicação — fase posterior

```text
Servidor
ou
Cloud
```

## Infraestrutura posterior

```text
Terraform
```

## Orquestração avançada

```text
Kubernetes
```

---

# 16. Diferença entre desenvolvimento e DevOps

Uma aplicação tradicional:

```text
Usuário
   ↓
Frontend
   ↓
Backend
   ↓
Banco de Dados
```

Essa visão explica o software.

DevOps adiciona:

```text
Código
  ↓
Git / GitHub
  ↓
Pipeline CI
  ↓
Testes automatizados
  ↓
Build
  ↓
Docker
  ↓
Registry
  ↓
Servidor / Cloud
  ↓
Deploy
  ↓
Aplicação executando
  ↓
Logs
  ↓
Monitoramento
```

Posteriormente:

```text
Terraform
    ↓
Infraestrutura

Kubernetes
    ↓
Orquestração

Prometheus / Grafana
    ↓
Observabilidade
```

---

# 17. Roadmap recomendado

```text
0. Como aplicações funcionam
        ↓
1. Linux
        ↓
2. Redes + HTTP + DNS + SSH
        ↓
3. Git/GitHub aprofundado
        ↓
4. Shell/Bash
        ↓
5. Node.js como aplicação-laboratório
        ↓
6. Docker
        ↓
7. Docker Compose
        ↓
8. Bancos e persistência
        ↓
9. CI
        ↓
10. CD
        ↓
11. Cloud
        ↓
12. Terraform
        ↓
13. Segurança / Secrets / IAM
        ↓
14. Observabilidade
        ↓
15. Kubernetes
        ↓
16. Helm
        ↓
17. DevSecOps
        ↓
18. SRE / Troubleshooting
```

Observação:

A ordem pode ser refinada conforme o andamento.

A regra mais importante é respeitar pré-requisitos.

---

# 18. Fase 0 — Como aplicações funcionam

Antes de falar sobre cloud ou Kubernetes, compreender:

- cliente;
- servidor;
- aplicação;
- processo;
- porta;
- IP;
- localhost;
- request;
- response;
- HTTP;
- API;
- dependência;
- variável de ambiente.

Objetivo:

Conseguir explicar:

```text
Quando executo minha API, o que está realmente acontecendo?
```

Exemplo:

```bash
npm install
npm start
```

Acessando:

```text
http://localhost:3000
```

Conceitos envolvidos:

- Node executando como processo;
- aplicação ouvindo uma porta;
- sistema operacional gerenciando o processo;
- browser ou cliente enviando requisição HTTP;
- backend respondendo.

---

# 19. Fase 1 — Linux

Linux deve entrar cedo porque grande parte dos servidores e containers depende diretamente ou conceitualmente dele.

Comandos fundamentais:

```bash
pwd
ls
cd
mkdir
cp
mv
rm
cat
grep
chmod
ps
top
kill
curl
ssh
systemctl
```

Conceitos:

- filesystem;
- caminhos;
- usuários;
- grupos;
- permissões;
- processos;
- serviços;
- variáveis de ambiente;
- logs;
- portas.

Objetivo:

Executar e diagnosticar uma aplicação em Linux.

---

# 20. Fase 2 — Redes

Conteúdos:

- IP;
- IPv4;
- localhost;
- loopback;
- porta;
- TCP;
- HTTP;
- HTTPS;
- DNS;
- SSH;
- cliente;
- servidor;
- request;
- response;
- status HTTP;
- firewall;
- NAT em nível introdutório.

Objetivo:

Entender como uma requisição sai do cliente e chega à aplicação.

---

# 21. Fase 3 — Git e GitHub aprofundados

Como QA, Git provavelmente já está presente, mas deverá ser compreendido em maior profundidade.

Conteúdos:

- repository;
- working tree;
- staging;
- commit;
- branch;
- merge;
- rebase posteriormente;
- pull request;
- tags;
- releases;
- .gitignore;
- conflitos;
- branches de feature;
- branches de release quando aplicável.

Objetivo:

Usar Git como parte do processo de entrega, não apenas como local para guardar código.

---

# 22. Fase 4 — Shell e Bash

Aprender a automatizar tarefas pelo terminal.

Conteúdos:

- comandos;
- pipes;
- redirecionamento;
- variáveis;
- scripts;
- condicionais;
- loops;
- exit codes;
- execução de comandos;
- permissões.

Exemplo:

```bash
#!/bin/bash

npm install
npm test
npm start
```

A finalidade é compreender a automação antes de pipelines mais complexos.

---

# 23. Fase 5 — Aplicação-laboratório

Criar ou utilizar a aplicação mínima.

Tecnologia:

```text
Node.js + Express
```

Objetivo:

Ter um processo real para:

- executar;
- parar;
- testar;
- logar;
- configurar;
- containerizar;
- publicar.

---

# 24. Fase 6 — Docker

Situação anterior:

```text
Windows
   ↓
Node.js
   ↓
Aplicação
```

Nova situação:

```text
Docker
┌───────────────────┐
│ Linux             │
│ Node              │
│ Aplicação         │
└───────────────────┘
```

Conceitos:

- container;
- image;
- layer;
- Dockerfile;
- build;
- run;
- port mapping;
- filesystem;
- environment variable;
- logs.

Comandos:

```bash
docker build
docker run
docker ps
docker logs
docker stop
docker exec
```

Objetivo:

Conseguir executar a aplicação sem depender da instalação direta do Node no ambiente hospedeiro.

---

# 25. Fase 7 — Docker Compose

Quando o banco for introduzido:

```text
Docker Compose

┌────────────────┐
│ API Node.js    │
└───────┬────────┘
        │
        ↓
┌────────────────┐
│ PostgreSQL     │
└────────────────┘
```

Conceitos:

- múltiplos containers;
- serviços;
- networks;
- volumes;
- environment variables;
- dependências entre serviços.

Objetivo:

Subir aplicação e banco como ambiente reproduzível.

---

# 26. Fase 8 — Banco de dados e persistência

Tecnologia recomendada:

```text
PostgreSQL
```

Objetivo:

Compreender o que ocorre quando a aplicação precisa guardar dados permanentemente.

Conceitos:

- banco relacional;
- conexão;
- host;
- porta;
- usuário;
- senha;
- database;
- volume;
- persistência.

---

# 27. Fase 9 — Continuous Integration

Aqui ocorre uma interseção muito importante entre QA Automation e DevOps.

Fluxo esperado:

```text
Developer
    ↓
Push
    ↓
GitHub Actions
    ↓
Checkout
    ↓
Instala dependências
    ↓
Lint
    ↓
Unit Tests
    ↓
API Tests
    ↓
E2E Tests
    ↓
Build
```

Possível pipeline:

```text
git push
   ↓
npm install
   ↓
npm test
   ↓
API tests
   ↓
E2E
   ↓
docker build
```

Objetivo:

Entender CI na prática.

---

# 28. Vantagem do conhecimento em QA

O conhecimento prévio de QA pode ser aproveitado diretamente.

Exemplos:

- testes automatizados no pipeline;
- testes de API;
- testes E2E;
- quality gates;
- critérios de aprovação;
- análise de falhas;
- logs de execução;
- regressão automatizada.

A ponte natural é:

```text
QA Automation
      ↓
Pipeline
      ↓
CI
      ↓
CD
      ↓
Infraestrutura
      ↓
DevOps
```

Não é necessário abandonar QA para estudar DevOps.

---

# 29. Fase 10 — Continuous Delivery / Deployment

Fluxo:

```text
Push
 ↓
Tests
 ↓
Build
 ↓
Docker Image
 ↓
Registry
 ↓
Deploy
```

Aqui o conceito abstrato de CI/CD se torna concreto.

Objetivo:

Uma alteração no repositório poder chegar de maneira automatizada até um ambiente executável.

---

# 30. Container Registry

Em algum momento a imagem Docker precisará ser armazenada.

Conceito:

```text
Código
   ↓
docker build
   ↓
Imagem
   ↓
Registry
   ↓
Servidor
```

Possíveis registries:

- GitHub Container Registry;
- Docker Hub;
- registry da cloud escolhida.

A ferramenta específica pode ser escolhida posteriormente.

---

# 31. Fase 11 — Cloud

A aplicação sai de:

```text
localhost
```

e vai para:

```text
Internet
    ↓
Cloud
    ↓
Servidor
    ↓
Docker
    ↓
Aplicação
```

Conceitos:

- cloud provider;
- região;
- zona;
- máquina virtual;
- IP público;
- IP privado;
- VPC/VNet;
- firewall/security groups;
- storage;
- IAM;
- DNS;
- HTTPS.

Importante:

Não começar cloud antes de compreender minimamente servidor, rede, porta e processo.

---

# 32. Escolha de cloud

Não é necessário aprender AWS, Azure e GCP simultaneamente.

Recomendação geral:

Escolher **uma** para a primeira trilha.

Critérios:

- mercado alvo;
- uso na empresa;
- disponibilidade de free tier;
- integração com ferramentas já conhecidas;
- preferência profissional.

Depois de compreender uma cloud, aprender outra fica mais fácil porque muitos conceitos se repetem.

---

# 33. Fase 12 — Infrastructure as Code

Tecnologia recomendada:

```text
Terraform
```

Antes:

```text
Console Cloud
→ criar VM
→ criar rede
→ configurar firewall
```

Depois:

```text
Terraform
    ↓
Network
    ↓
Server
    ↓
Firewall
    ↓
Infrastructure
```

Conceito principal:

> infraestrutura definida de forma declarativa e versionável.

Objetivos:

- criar infraestrutura por código;
- versionar infraestrutura;
- reproduzir ambientes;
- destruir e recriar recursos;
- compreender estado.

---

# 34. Fase 13 — Segurança, Secrets e IAM

Temas:

- credentials;
- secrets;
- tokens;
- API keys;
- environment variables;
- permissões;
- princípio do menor privilégio;
- IAM;
- roles;
- service accounts;
- segurança de pipeline.

Regra:

Nunca versionar credenciais reais no GitHub.

---

# 35. Fase 14 — Observabilidade

Depois da aplicação estar publicada, surge uma nova pergunta:

```text
Ela está funcionando corretamente?
```

E outras:

- está lenta?
- está consumindo muita CPU?
- há memory leak?
- está retornando HTTP 500?
- quantas requisições recebe?
- qual container caiu?
- por que caiu?
- quando começou a falhar?

Arquitetura conceitual:

```text
Aplicação
   ↓
Logs
   ↓
Métricas
   ↓
Prometheus
   ↓
Grafana
```

Conceitos:

- logs;
- metrics;
- monitoring;
- alerting;
- observability;
- dashboard;
- latency;
- error rate;
- throughput;
- CPU;
- memory.

---

# 36. Fase 15 — Kubernetes

Kubernetes deve entrar somente depois de:

- Linux;
- redes;
- aplicação;
- processos;
- Docker;
- containers;
- CI/CD;
- cloud;
- infraestrutura.

Caso contrário, vários conceitos ficam abstratos.

Conceitos futuros:

- cluster;
- node;
- pod;
- deployment;
- service;
- ingress;
- config map;
- secret;
- namespace;
- replicas;
- rolling update;
- health check;
- readiness;
- liveness.

---

# 37. Fase 16 — Helm

Somente após compreender Kubernetes.

Objetivo:

Gerenciar templates e empacotamento de recursos Kubernetes.

Conceitos:

- chart;
- values;
- templates;
- release.

---

# 38. Fase 17 — DevSecOps

A segurança passa a integrar o fluxo de entrega.

Possíveis áreas:

- dependency scanning;
- image scanning;
- secrets scanning;
- SAST;
- DAST;
- supply chain;
- policy;
- segurança de containers;
- segurança de pipeline.

---

# 39. Fase 18 — SRE e Troubleshooting

Mais importante do que "saber instalar ferramentas" é saber investigar problemas.

Perguntas típicas:

```text
A aplicação caiu.
Por quê?
```

```text
O deploy falhou.
Onde?
```

```text
A aplicação responde localmente, mas não pela internet.
Qual camada está quebrada?
```

```text
O container sobe e encerra.
Qual erro ocorreu?
```

```text
O banco não conecta.
É host, porta, credencial, rede ou serviço?
```

```text
O pipeline funcionava ontem e falhou hoje.
O que mudou?
```

Essa capacidade diferencia conhecimento superficial de conhecimento operacional.

---

# 40. Evolução completa do laboratório

## Etapa 1

```text
Frontend
   ↓
Node API
```

## Etapa 2

```text
GitHub
   ↓
Frontend + API
```

## Etapa 3

```text
Linux
   ↓
Node API
```

## Etapa 4

```text
Docker
   ↓
Node API
```

## Etapa 5

```text
Docker Compose
   ↓
API
   ↓
PostgreSQL
```

## Etapa 6

```text
GitHub Actions
   ↓
Testes
   ↓
Build
```

## Etapa 7

```text
CI/CD
   ↓
Docker Registry
   ↓
Deploy
```

## Etapa 8

```text
Cloud
   ↓
Servidor
   ↓
Docker
   ↓
Aplicação
```

## Etapa 9

```text
Terraform
   ↓
Cloud Infrastructure
```

## Etapa 10

```text
Prometheus
+
Grafana
```

## Etapa 11

```text
Kubernetes
```

## Etapa 12

```text
DevSecOps
+
Troubleshooting
```

---

# 41. Visão final da arquitetura

```text
Usuário
    ↓
Internet
    ↓
DNS / HTTPS
    ↓
Load Balancer / Ingress
    ↓
Kubernetes
    ↓
Containers
    ↓
Node API
    ↓
PostgreSQL

       ↑
       │
Terraform → Cloud Infrastructure

GitHub
   ↓
CI/CD
   ↓
Tests
   ↓
Security Scan
   ↓
Docker Build
   ↓
Container Registry
   ↓
Deploy

Aplicação
   ↓
Logs
   ↓
Metrics
   ↓
Prometheus
   ↓
Grafana
```

---

# 42. Objetivo de maturidade

O objetivo final não é decorar comandos.

O objetivo é conseguir olhar para uma arquitetura como a anterior e explicar:

- o que cada componente faz;
- por que existe;
- como se comunica;
- como é configurado;
- onde está armazenado;
- como é publicado;
- como é monitorado;
- como investigar falhas.

Quando isso acontece, o estudante começa a raciocinar como alguém de DevOps e não apenas como alguém que conhece nomes de ferramentas.

---

# 43. O que NÃO fazer no início

Evitar começar simultaneamente com:

```text
AWS
Terraform
Docker
Kubernetes
Jenkins
Prometheus
Grafana
Ansible
Helm
Argo CD
```

Isso produz sobrecarga sem contexto.

Também evitar:

- React sem necessidade;
- microsserviços;
- múltiplos bancos;
- várias clouds;
- várias linguagens;
- vários CI servers;
- Kubernetes antes de Docker;
- Terraform sem entender manualmente os recursos de cloud.

---

# 44. Filosofia de profundidade

Para cada tecnologia, responder:

1. Para que serve?
2. Qual problema resolve?
3. O que existia antes dela?
4. O que muda ao introduzi-la?
5. Qual conceito é mais importante que o comando?
6. Como testar que está funcionando?
7. Como diagnosticar quando falha?

Essa abordagem é melhor do que decorar comandos.

---

# 45. Critério de avanço entre fases

Não avançar apenas porque:

- assistiu uma aula;
- leu documentação;
- copiou um tutorial;
- executou um comando uma vez.

Avançar quando conseguir:

- executar sozinho;
- explicar;
- modificar;
- quebrar;
- diagnosticar;
- corrigir;
- documentar.

Modelo:

> "Estou pronto para avançar quando consigo reproduzir a fase sem seguir mecanicamente um tutorial e consigo explicar por que cada elemento existe."

---

# 46. Papel dos testes no projeto

Como o ponto de partida é QA, os testes devem fazer parte do laboratório.

Tipos possíveis:

- unitários;
- API;
- integração;
- E2E.

Não é necessário exagerar na cobertura.

O objetivo é alimentar o pipeline.

Exemplo:

```text
Pull Request
    ↓
Lint
    ↓
Unit
    ↓
API
    ↓
E2E
    ↓
Build
```

---

# 47. GitHub como portfólio

O projeto deve ser organizado para posteriormente demonstrar competências.

README sugerido:

```text
# DevOps Task Manager Lab

## Objetivo

## Arquitetura

## Tecnologias

## Como executar localmente

## Como executar com Docker

## Docker Compose

## Pipeline CI/CD

## Infraestrutura

## Cloud

## Observabilidade

## Segurança

## Troubleshooting

## Evolução do projeto
```

---

# 48. Registro da evolução

Uma prática recomendada é registrar versões.

Exemplo:

```text
v0.1 — aplicação local
v0.2 — testes
v0.3 — Docker
v0.4 — PostgreSQL
v0.5 — Docker Compose
v0.6 — CI
v0.7 — CD
v0.8 — Cloud
v0.9 — Terraform
v1.0 — Observabilidade
v1.1 — Kubernetes
```

Isso cria uma narrativa excelente de aprendizado.

---

# 49. Roadmap profissional do prompt original

O prompt original deve continuar servindo como macroestrutura.

Ele contém os seguintes blocos:

## Diagnóstico

Levantar:

- profissão;
- programação;
- Linux;
- redes;
- cloud;
- Git;
- CI/CD;
- horas semanais;
- objetivo;
- prazo.

## Fundamentos

Exigir ordem por pré-requisitos.

## Conteúdo

Avaliar:

- computação;
- sistemas operacionais;
- Linux;
- terminal;
- Bash;
- redes;
- HTTP;
- DNS;
- SSH;
- Git;
- GitHub;
- programação;
- APIs;
- servidores;
- virtualização;
- containers;
- Docker;
- Compose;
- bancos;
- cloud;
- Terraform;
- CI/CD;
- GitHub Actions;
- Azure DevOps;
- Jenkins;
- Kubernetes;
- Helm;
- secrets;
- segurança;
- observabilidade;
- logs;
- métricas;
- Prometheus;
- Grafana;
- DevSecOps;
- SRE;
- troubleshooting;
- automação.

## Para cada fase

Exigir:

- objetivo;
- fundamentos;
- tecnologias;
- conteúdo;
- prática;
- mini-projeto;
- critério de conclusão;
- erros comuns.

## Projeto evolutivo

Manter um único projeto ao longo da trilha.

## Mercado

Trabalhar:

- GitHub;
- README;
- portfólio;
- troubleshooting;
- logs;
- entrevistas;
- problemas reais.

## Certificações

Tratar como complementares, não como objetivo central.

---

# 50. Ajuste sugerido ao prompt original

Adicionar uma seção como:

```markdown
# APLICAÇÃO-LABORATÓRIO

Durante toda a formação, utilize uma aplicação extremamente simples como laboratório técnico.

Como já possuo conhecimento em JavaScript, HTML e CSS, utilize preferencialmente:

- frontend simples em HTML/CSS/JavaScript;
- backend em Node.js;
- Express;
- PostgreSQL apenas quando persistência passar a ser necessária.

O objetivo da aplicação NÃO é estudar desenvolvimento de produto.

Não introduza frameworks frontend complexos, microsserviços ou novas linguagens sem necessidade.

A aplicação deverá existir apenas para permitir o estudo prático de:

- Linux;
- processos;
- redes;
- HTTP;
- Docker;
- Docker Compose;
- CI/CD;
- Cloud;
- Terraform;
- segurança;
- observabilidade;
- Kubernetes;
- troubleshooting.

Cada fase deverá modificar ou ampliar a mesma aplicação.

Antes de introduzir uma nova tecnologia, explique:

1. qual problema atual do laboratório ela resolve;
2. como o laboratório funciona antes dela;
3. como passará a funcionar depois dela;
4. quais arquivos serão adicionados ou modificados;
5. como validar a implementação;
6. como diagnosticar possíveis falhas.

Não transforme o laboratório em um curso de frontend ou backend.
```

---

# 51. Exemplo de raciocínio incremental

Antes de Docker:

```text
Tenho Node instalado.
Minha aplicação roda.
```

Problema:

```text
Outro computador precisa instalar tudo corretamente.
```

Solução introduzida:

```text
Docker
```

Antes de Compose:

```text
Tenho um container da aplicação.
```

Problema:

```text
Agora preciso de banco.
Preciso coordenar dois serviços.
```

Solução:

```text
Docker Compose
```

Antes de CI:

```text
Executo testes manualmente.
```

Problema:

```text
Uma alteração pode ser enviada sem os testes serem executados.
```

Solução:

```text
Continuous Integration
```

Antes de CD:

```text
Build está automatizado.
Deploy ainda é manual.
```

Problema:

```text
Entrega depende de ação humana.
```

Solução:

```text
Continuous Delivery / Deployment
```

Antes de Terraform:

```text
Infraestrutura criada manualmente pela interface da cloud.
```

Problema:

```text
Difícil reproduzir.
Difícil versionar.
Propenso a diferença entre ambientes.
```

Solução:

```text
Infrastructure as Code
```

Antes de observabilidade:

```text
Aplicação está publicada.
```

Problema:

```text
Não sei quando está lenta ou falhando.
```

Solução:

```text
Logs + Metrics + Monitoring
```

Antes de Kubernetes:

```text
Containers já são conhecidos.
```

Problemas que Kubernetes ajuda a tratar:

- múltiplas instâncias;
- escalabilidade;
- rolling updates;
- recuperação;
- configuração;
- descoberta de serviços;
- orquestração.

---

# 52. Diferença entre conhecer ferramenta e possuir competência

Conhecimento superficial:

```text
"Sei que Docker cria containers."
```

Conhecimento prático:

```text
"Consigo criar uma imagem, rodar o container, mapear portas,
injetar variáveis de ambiente, verificar logs, acessar o container
e diagnosticar por que ele encerrou."
```

Conhecimento superficial:

```text
"CI/CD automatiza deploy."
```

Conhecimento prático:

```text
"Consigo configurar um workflow acionado por push/PR,
executar testes, interromper a pipeline em caso de falha,
construir imagem e publicar artefatos."
```

Esse segundo nível deve ser o objetivo.

---

# 53. Resultado profissional esperado

Ao final da primeira grande trilha, espera-se conseguir:

- usar Linux com segurança;
- diagnosticar processos e portas;
- trabalhar com Git profissionalmente;
- escrever scripts simples;
- compreender HTTP, DNS e SSH;
- containerizar aplicações;
- usar Compose;
- integrar banco;
- criar pipeline CI;
- criar pipeline CD;
- publicar aplicação;
- compreender uma cloud;
- criar recursos com Terraform;
- usar secrets de forma correta;
- ler logs;
- analisar métricas;
- montar dashboards básicos;
- entender Kubernetes;
- fazer troubleshooting.

---

# 54. DevOps Júnior — percepção de prontidão

Um primeiro nível razoável de prontidão profissional não exige domínio sênior de Kubernetes.

Indicadores mais úteis:

- Linux básico/intermediário funcional;
- redes básicas;
- Git sólido;
- Docker funcional;
- CI/CD real;
- cloud básica;
- Terraform básico;
- troubleshooting;
- documentação;
- segurança básica;
- capacidade de explicar o próprio projeto.

O projeto de laboratório deve servir como evidência.

---

# 55. Relação entre QA e DevOps

A experiência em QA não é irrelevante para a transição.

Ela pode oferecer vantagens em:

- pipelines;
- testes;
- quality gates;
- automação;
- análise de logs;
- rastreamento de falhas;
- raciocínio de causa raiz;
- prevenção de regressões;
- integração de validações na entrega.

Possível trajetória:

```text
QA Manual
   ↓
QA Automation
   ↓
Test Automation in CI
   ↓
CI/CD
   ↓
Containers
   ↓
Cloud
   ↓
Infrastructure
   ↓
DevOps
```

---

# 56. Regra de foco

Não abandonar conhecimentos de QA.

O objetivo pode ser tornar-se um profissional com interseção forte entre:

```text
Quality Engineering
+
Automation
+
CI/CD
+
Infrastructure
+
Cloud
```

Isso pode gerar um perfil técnico particularmente útil em ambientes com forte cultura de engenharia.

---

# 57. Próximas etapas recomendadas para retomar este estudo

Quando este documento for utilizado para iniciar uma nova conversa, seguir preferencialmente:

## Etapa 1

Revisar o roadmap.

## Etapa 2

Definir:

- horas disponíveis por semana;
- nível real de Git;
- nível real de linha de comando;
- sistema operacional disponível;
- disponibilidade para usar WSL;
- cloud de interesse inicial.

## Etapa 3

Criar o repositório:

```text
devops-task-manager-lab
```

## Etapa 4

Criar aplicação mínima.

## Etapa 5

Iniciar Linux.

## Etapa 6

Seguir fase por fase sem antecipar ferramentas.

---

# 58. Prompt sugerido para retomada futura

```markdown
Sou QA com experiência em testes manuais e automação de testes.

Meus conhecimentos atuais incluem:

- JavaScript;
- HTML;
- CSS;
- Git/GitHub em nível operacional;
- conceito de CI/CD.

Meu conhecimento de DevOps é iniciante.

Quero continuar o plano de formação documentado no projeto "DevOps Task Manager Lab".

Regras:

1. Não transforme o estudo em curso de frontend/backend.
2. Utilize JavaScript/Node.js para reduzir carga de aprendizagem.
3. Use uma única aplicação simples e evolutiva.
4. Cada nova tecnologia deverá resolver um problema concreto da fase anterior.
5. Explique primeiro o conceito e depois a ferramenta.
6. Não introduza Kubernetes antes dos pré-requisitos.
7. Não introduza várias clouds simultaneamente.
8. Inclua exercícios práticos.
9. Inclua troubleshooting.
10. Defina critérios objetivos para concluir cada fase.
11. Aproveite minha experiência em QA e automação dentro dos pipelines.
12. Sempre mostre como a arquitetura fica antes e depois de cada nova tecnologia.

Quero continuar exatamente da próxima etapa ainda não concluída.
```

---

# 59. Resumo executivo

A estratégia consolidada é:

```text
Não estudar DevOps como lista de ferramentas.
```

Mas sim:

```text
Construir
    ↓
Executar
    ↓
Versionar
    ↓
Testar
    ↓
Containerizar
    ↓
Automatizar
    ↓
Publicar
    ↓
Provisionar
    ↓
Monitorar
    ↓
Diagnosticar
```

Utilizando um projeto único.

A aplicação será simples.

A infraestrutura será progressivamente mais sofisticada.

---

# 60. Visão final do aprendizado

A pergunta inicial:

```text
"Eu sei enviar para o GitHub e testar.
O que acontece depois?"
```

A trilha deve responder progressivamente:

```text
GitHub
   ↓
CI
   ↓
Testes
   ↓
Build
   ↓
Docker
   ↓
Registry
   ↓
Cloud
   ↓
Deploy
   ↓
Infrastructure as Code
   ↓
Monitoring
   ↓
Kubernetes
   ↓
Operations
```

O objetivo é transformar cada uma dessas palavras em uma competência prática, explicável e demonstrável.

---

# 61. Checkpoint consolidado

## Perfil

QA com testes manuais e automação.

## Linguagens conhecidas

- JavaScript;
- HTML;
- CSS.

## Conhecimento DevOps atual

Inicial.

## CI/CD

Conhecimento conceitual.

## Estratégia

Projeto evolutivo único.

## Projeto sugerido

**DevOps Task Manager Lab**

## Stack inicial

```text
HTML
CSS
JavaScript
Node.js
Express
```

## Banco posterior

```text
PostgreSQL
```

## Pipeline inicial

```text
GitHub Actions
```

## Containerização

```text
Docker
Docker Compose
```

## Infraestrutura posterior

```text
Cloud
Terraform
```

## Observabilidade posterior

```text
Prometheus
Grafana
```

## Orquestração posterior

```text
Kubernetes
Helm
```

## Foco permanente

```text
Conceito
→ prática
→ problema
→ ferramenta
→ validação
→ troubleshooting
```

---

# 62. Prompt-base original preservado em essência

O prompt originalmente criado tinha como proposta atuar com um **Mentor DevOps Sênior e Especialista em Transição de Carreira**, com experiência em infraestrutura, CI/CD, cloud e formação de iniciantes.

As diretrizes centrais eram:

- começar com diagnóstico;
- fazer perguntas uma por vez;
- não presumir conhecimentos;
- criar roadmap completo e cronológico;
- priorizar fundamentos antes de ferramentas;
- respeitar dependências técnicas;
- avaliar Linux, redes, Git, APIs, servidores, containers, cloud, IaC, CI/CD, Kubernetes, observabilidade, DevSecOps e SRE;
- classificar tecnologias entre obrigatórias, importantes, opcionais e especializações;
- criar exercícios e mini-projetos;
- manter projeto evolutivo de portfólio;
- priorizar laboratórios gratuitos e free tiers;
- incluir preparação para mercado;
- tratar certificações como complementares;
- definir cronograma realista;
- recomendar documentação oficial e treinamentos confiáveis;
- não entregar roadmap genérico sem diagnóstico.

Esse prompt permanece válido, com a recomendação de incorporar explicitamente o projeto-laboratório simples descrito neste documento.

---

# 63. Regra de preservação para uma futura conversa

Se este chat for excluído e o conteúdo for retomado posteriormente, este documento deve ser tratado como **fonte principal do checkpoint do plano DevOps**.

Não reconstruir a trilha do zero sem necessidade.

Manter as decisões já tomadas:

1. aprender DevOps de maneira progressiva;
2. não estudar ferramentas isoladas;
3. utilizar uma aplicação simples em JavaScript/Node.js;
4. usar frontend mínimo apenas como apoio visual;
5. inserir PostgreSQL posteriormente;
6. utilizar GitHub como repositório;
7. iniciar execução local;
8. evoluir para Linux e Docker;
9. depois Compose e persistência;
10. depois CI/CD;
11. depois cloud;
12. depois Terraform;
13. depois observabilidade;
14. Kubernetes somente após fundamentos;
15. incluir segurança e troubleshooting;
16. integrar a experiência de QA e automação ao pipeline.

---

# Fim do documento

Este arquivo foi criado para permitir a exclusão do chat sem perda do contexto, da lógica de aprendizagem e das decisões tomadas.
