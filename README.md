# Portfolio · Matheus Pimentel

Personal portfolio built with Quasar (Vue 3 + Vite), TailwindCSS, and TypeScript, showcasing projects, skills, and a contact form powered by EmailJS.

## Highlights
- Responsive layout with header nav + mobile drawer, hero CTAs (CV / GitHub), featured projects with colored tech badges and optional image background colors, and skills grouped by category.
- Dark mode enabled by default, with a theme toggle and i18n switch (pt-BR / en-US).
- Contact form via EmailJS plus social links colored per brand.

## Stack
- Vue 3, TypeScript, Quasar 2, TailwindCSS 3, Vue Router, Pinia, Vue I18n.
- Tooling: Vite (via @quasar/app-vite), ESLint + Prettier, EmailJS browser SDK.

## Prerequisites
- Node >= 20 (recomendado).
- npm >= 6 (já vem com o Node).

## Setup
```bash
npm install
```

## Run (dev)
```bash
npm run dev
```

## Lint
```bash
npm run lint
```

## Format
```bash
npm run format
```

## Build
```bash
npm run build
```

---

## 🐳 Docker

> Não precisa ter Node, npm ou qualquer dependência instalada localmente.  
> Apenas o **Docker** (e o plugin **Compose**) são necessários.

### Pré-requisito

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) **ou** Docker Engine + Docker Compose plugin.

---

### Desenvolvimento — com Hot Reload

Monta o código-fonte como volume: qualquer alteração nos arquivos é refletida instantaneamente no navegador.

```bash
docker compose up portfolio-dev
```

Acesse em → **http://localhost:9000**

Para rodar em **background** (modo detached):

```bash
docker compose up portfolio-dev -d
```

Para acompanhar os logs depois:

```bash
docker compose logs -f portfolio-dev
```

---

### Produção — build otimizado + Nginx

Gera o build de produção e serve com Nginx (imagem final enxuta, sem código-fonte).

```bash
docker compose up portfolio --build
```

Acesse em → **http://localhost:8080**

> A flag `--build` reconstrói a imagem. Após o primeiro build, pode omiti-la se não houver mudanças.

Para rodar em **background**:

```bash
docker compose up portfolio --build -d
```

---

### Parar os containers

```bash
# Para todos os serviços
docker compose down

# Para um serviço específico
docker compose stop portfolio-dev
docker compose stop portfolio
```

---

### Rebuild completo (limpar cache)

Use quando quiser forçar uma reinstalação das dependências do zero:

```bash
docker compose build --no-cache portfolio-dev
docker compose build --no-cache portfolio
```

---

### Resumo rápido dos comandos

| Objetivo | Comando |
|---|---|
| Subir dev (hot reload) | `docker compose up portfolio-dev` |
| Subir produção | `docker compose up portfolio --build` |
| Subir em background | `docker compose up <serviço> -d` |
| Ver logs | `docker compose logs -f <serviço>` |
| Parar tudo | `docker compose down` |
| Rebuild sem cache | `docker compose build --no-cache <serviço>` |

---

## Environment

O arquivo `.env` **nunca deve ser commitado** — ele já está no `.gitignore`.

### Desenvolvimento local

Copie o arquivo de exemplo e preencha com suas credenciais:

```bash
cp .env.example .env
```

```dotenv
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

> As variáveis `VITE_*` são injetadas pelo Vite em **tempo de build** e ficam embutidas no bundle — não ficam expostas em um arquivo de configuração em runtime.

### Deploy via GitHub Actions (CI)

As variáveis são lidas via **GitHub Secrets**, configurados no repositório. O workflow `deploy.yml` já as injeta automaticamente no step de build.

**Como cadastrar os Secrets no GitHub:**

1. Acesse o repositório → **Settings → Secrets and variables → Actions**
2. Clique em **New repository secret** e cadastre cada uma:

| Nome do Secret | Valor |
|---|---|
| `VITE_EMAILJS_SERVICE_ID` | ID do seu serviço no EmailJS |
| `VITE_EMAILJS_TEMPLATE_ID` | ID do template no EmailJS |
| `VITE_EMAILJS_PUBLIC_KEY` | Chave pública do EmailJS |

Feito isso, a cada push na branch `main` o workflow faz o build com as variáveis corretas e realiza o deploy automaticamente.



## Project Map
- `src/layouts/MainLayout.vue`: layout shell, header/drawer nav, theme + locale toggles, footer.
- `src/components/HeroSection.vue`: intro text and CTA buttons.
- `src/components/AboutSection.vue`, `SkillsSection.vue`, `ProjectsSection.vue`, `ContactSection.vue`: main sections, including EmailJS submit logic and social links.
- `src/i18n/en-US`, `src/i18n/pt-BR`: translations, including tech/social colors.

## Customization Tips
- Update hero CTA links (CV/GitHub), project links, and social URLs to your own profiles.
- Adjust featured project tech badges or colors via the i18n project items.
- Tailor copy in `src/i18n` to your voice.
