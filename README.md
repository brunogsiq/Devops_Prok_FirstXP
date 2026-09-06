# DevOps Task Manager Lab

Projeto de portfólio evolutivo para transição de carreira para DevOps. A aplicação em si é
propositalmente simples — uma lista de tarefas — porque o objeto de estudo real é a
**infraestrutura** ao redor dela: Git, Linux, Docker, CI/CD, Cloud, Terraform, Kubernetes e
observabilidade, adicionados progressivamente fase a fase.

Contexto completo da trilha em [`_Wiki/Prompt01.md`](_Wiki/Prompt01.md) e
[`_Wiki/Reestrutura do prompt01.md`](<_Wiki/Reestrutura do prompt01.md>).

## Estrutura

```
frontend/   # HTML/CSS/JS estático servido pelo backend
backend/    # API Node.js + Express (CRUD de tasks em memória)
tests/      # Testes de API (Jest + Supertest)
```

## Como rodar

```bash
npm install
npm start
```

Acesse http://localhost:3000

Para desenvolvimento com reload automático:

```bash
npm run dev
```

## Testes

```bash
npm test
```

## Progresso da trilha

- [x] **Fase 1** — Aplicação local: frontend + API Node.js (`GET/POST/PUT/DELETE /tasks`)
- [x] Fase 2 — Git/GitHub aprofundado - (concluída em 27/08/2026)
- [ ] Fase 3 — Linux
- [ ] Fase 4 — Docker
- [ ] Fase 5 — Docker Compose + PostgreSQL
- [ ] Fase 6 — CI (GitHub Actions)
- [ ] Fase 7 — CD
- [ ] Fase 8 — Cloud
- [ ] Fase 9 — Terraform
- [ ] Fase 10 — Segurança / Secrets
- [ ] Fase 11 — Observabilidade (Prometheus/Grafana)
- [ ] Fase 12 — Kubernetes / Helm
- [ ] Fase 13 — DevSecOps / SRE


Mensagem teste - Deverá ser apagada após documentação completa
