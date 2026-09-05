# Checkpoint — DevOps Task Manager Lab

> Documento de retomada. Escrito para que qualquer sessão nova (ou você, relendo depois)
> consiga continuar exatamente de onde parou, sem depender do histórico de chat.

Última atualização: 2026-09-05

## 1. O que é este projeto

Projeto de portfólio evolutivo para transição de carreira QA → DevOps. A aplicação (lista de
tarefas) é propositalmente simples — o objeto de estudo real é a infraestrutura ao redor dela,
adicionada progressivamente fase a fase.

Contexto/roadmap completo:
- [`_Wiki/Prompt01.md`](../Prompt01.md)
- [`_Wiki/Reestrutura do prompt01.md`](<../Reestrutura do prompt01.md>)

Estrutura do repositório:
```
frontend/   # HTML/CSS/JS estático servido pelo backend
backend/    # API Node.js + Express (CRUD de tasks em memória), rota /health
tests/      # Testes de API (Jest + Supertest) — 8 testes passando
```

Como rodar localmente:
```bash
npm install
npm start
```
Acesse http://localhost:3000. Testes: `npm test`.

## 2. Progresso das fases do roadmap

- [x] **Fase 1 — Aplicação local**: frontend + API Node.js/Express (`GET/POST/PUT/DELETE /tasks`),
      testes com Jest+Supertest. Concluída e testada rodando.
- [~] **Fase 2 — Git/GitHub aprofundado**: EM ANDAMENTO (falta só o último item — ver seção 3).
      Já feitos: commits atômicos, branch `fase-2/git-pratica`, Pull Request #1 aberto e
      mergeado no GitHub (campo `priority` em `POST /tasks`).
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

Importante: em algum momento foi mencionado "até a fase 7 concluído", mas isso foi **verificado
e não confirmado** no repositório (sem Dockerfile, sem docker-compose.yml, sem
`.github/workflows/`, sem branches ou tags dessas fases). Decisão tomada: tratar como se ainda
estivéssemos na Fase 2, e avançar fase a fase de verdade a partir daí. Ao retomar, não presumir
que fases 3-7 estão feitas sem checar o repositório primeiro.

## 3. Onde exatamente a Fase 2 parou (pendência ativa)

Objetivo do último item da Fase 2: provocar e resolver um **conflito de merge proposital**, para
praticar de verdade (critério de conclusão da fase = fazer isso sozinho).

Estado real do repositório neste momento:
- Branch atual: `main` (limpa, sincronizada com `origin/main`)
- Branches locais existentes: `fase-2/conflito-a` e `fase-2/conflito-b` — **já criadas, mas
  ainda SEM nenhum commit novo** (ambas apontam para o mesmo commit que `main`,
  `e2789da`). A tentativa de `git merge` deu "Already up to date" porque essas branches ainda
  não têm nenhuma edição de fato.
- O README ainda está com a linha original, não editada: `- [ ] Fase 2 — Git/GitHub aprofundado`
  (linha 43 do `README.md`).

### Próximo passo exato (retomar por aqui)

**1. Ir para a branch A e confirmar:**
```bash
git checkout fase-2/conflito-a
git branch --show-current
```
→ deve mostrar `fase-2/conflito-a`

**2. Editar `README.md`**, linha `- [ ] Fase 2 — Git/GitHub aprofundado` →
```
- [x] Fase 2 — Git/GitHub aprofundado (commits, branch, PR, merge)
```
Salvar o arquivo.

**3. Confirmar que o Git enxergou a mudança ANTES de commitar:**
```bash
git status
git diff
```
Se `git diff` não mostrar nada, o arquivo não foi salvo — salvar antes de continuar.

**4. Commitar:**
```bash
git add README.md
git commit -m "docs: mark Fase 2 as complete (commits, branch, PR, merge)"
git log -1
```
→ o commit novo deve aparecer no topo do `git log -1`.

**5. Repetir o mesmo processo na branch B, mas com um texto diferente na MESMA linha:**
```bash
git checkout fase-2/conflito-b
git branch --show-current
```
→ deve mostrar `fase-2/conflito-b`

Editar a mesma linha original do README para:
```
- [x] Fase 2 — Git/GitHub aprofundado (concluída em 27/08/2026)
```
```bash
git status
git diff
git add README.md
git commit -m "docs: mark Fase 2 as complete with date"
git log -1
```

**6. Voltar para `main` e mesclar as duas:**
```bash
git checkout main
git branch --show-current
```
→ deve mostrar `main`
```bash
git merge fase-2/conflito-a
```
→ deve entrar limpo (sem conflito, pois `main` não mudou nesse meio tempo)
```bash
git merge fase-2/conflito-b
```
→ **aqui** deve aparecer `CONFLICT (content): Merge conflict in README.md`

**7. Resolver o conflito:** abrir `README.md`, vai aparecer algo como:
```
<<<<<<< HEAD
- [x] Fase 2 — Git/GitHub aprofundado (commits, branch, PR, merge)
=======
- [x] Fase 2 — Git/GitHub aprofundado (concluída em 27/08/2026)
>>>>>>> fase-2/conflito-b
```
Editar manualmente juntando as duas versões e apagar as 3 linhas de marcador
(`<<<<<<<`, `=======`, `>>>>>>>`), por exemplo:
```
- [x] Fase 2 — Git/GitHub aprofundado (commits, branch, PR, merge — concluída em 27/08/2026)
```
```bash
git add README.md
git commit -m "merge: resolve fase-2 checklist conflict"
git push
git branch -d fase-2/conflito-a fase-2/conflito-b
```

Depois disso a Fase 2 está oficialmente concluída → seguir para **Fase 3 (Linux)**.

## 4. Lições aprendidas nesta sessão (para não repetir)

- Sempre rodar `git branch --show-current` depois de qualquer `git checkout`/`git checkout -b`
  para confirmar em qual branch você está — já causou confusão duas vezes.
- Antes de `git commit`, sempre conferir com `git status` (o que está staged) e `git diff`
  (o conteúdo exato da mudança) — evita commitar vazio ou commitar a coisa errada.
- `git add pasta/` pega exatamente o que está na pasta no momento do comando — vale checar
  `git status` antes, pois pode arrastar arquivos de outra pasta se ela também estiver
  untracked (aconteceu: `git add tests/` acabou incluindo `frontend/` também).
- "Already up to date" ao dar merge normalmente significa que a branch de origem não tem
  nenhum commit novo em relação ao destino — não que o merge "não é necessário".

## 5. Depois da Fase 2 — visão geral do que vem

Cada fase seguinte deve evoluir o mesmo projeto (não trocar de projeto):

```
Fase 3  — Linux: rodar/depurar a aplicação em ambiente Linux (WSL ou VM), comandos básicos
Fase 4  — Docker: criar Dockerfile, empacotar a API, docker build/run/logs/exec
Fase 5  — Docker Compose: adicionar PostgreSQL, persistência real em vez de array em memória
Fase 6  — CI: workflow do GitHub Actions rodando os testes (Jest) a cada push
Fase 7  — CD: pipeline de deploy automático após os testes passarem
Fase 8  — Cloud: publicar a aplicação em um provedor (AWS/Azure/GCP free tier)
Fase 9  — Terraform: criar a infraestrutura de nuvem como código
Fase 10 — Segurança/Secrets: gerenciamento de credenciais, IAM
Fase 11 — Observabilidade: logs, métricas, Prometheus/Grafana
Fase 12 — Kubernetes/Helm
Fase 13 — DevSecOps/SRE
```

Modo de trabalho combinado: o usuário digita os comandos ele mesmo (não a IA), para fixar o
aprendizado — a IA orienta passo a passo com checkpoints de verificação entre cada etapa.
