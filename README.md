# Toolbox

Catalogo personale di siti web utili e curiosi, divisi per categoria. Si gestisce in locale: aggiungi, modifichi e pinni i siti, ogni modifica viene salvata nel catalogo, con backup e push automatico su GitHub.

La versione pubblica è in sola lettura, su GitHub Pages: https://trueshape.github.io/Toolbox/ (repo: https://github.com/Trueshape/Toolbox).

## Stack e requisiti

- Node.js 22 (LTS), usato anche dal workflow di GitHub Pages
- Vite 6, React 19, TypeScript 5.7
- Tailwind CSS v4 (`@tailwindcss/vite`), componenti shadcn su `@base-ui/react`
- `lucide-react` per le icone, font Geist (`@fontsource-variable/geist`)
- Git e GitHub: il catalogo viene salvato con commit e push automatici

## Come avviarlo

Dalla cartella del progetto:

```bash
npm install
npm run dev
```

Il server parte su http://localhost:3100. Su Windows basta fare doppio clic su `Avvia Toolbox.bat`: installa le dipendenze la prima volta e apre il browser.

Chiudendo la pagina, il server si spegne da solo dopo circa 20 secondi.

Altri comandi:

```bash
npm run typecheck
npm run build:pages
```

- `npm run typecheck` controlla i tipi TypeScript.
- `npm run build:pages` crea la versione pubblica in `dist/`, con percorso `/Toolbox/`.

Il progetto non ha test automatici: il controllo è `typecheck` più `build:pages`.

## Struttura

- `src/components/`: homepage, card dei siti, finestre per siti e categorie, pagina impostazioni
- `src/components/ui/`: componenti shadcn (pulsanti, finestre, campi, menu)
- `src/lib/`: lettura e scrittura del catalogo, favicon, miniature, impostazioni, modalità sola lettura
- `server/`: API locali usate solo con `npm run dev` (`api.ts`)
- `data/`: `catalog.json` (siti, categorie, impostazioni); `backups/` contiene le copie di sicurezza, non in git
- `public/`: file statici
- `.github/workflows/`: pubblicazione su GitHub Pages a ogni push su `main`
- `overview.md`, `decisions.md`, `DESIGN.md`: documentazione del progetto

## Decisioni prese

| Decisione | Alternative scartate | Motivo | Data |
|---|---|---|---|
| Passaggio da Next.js a Vite + React | Next.js (stack iniziale) | Avvio locale molto più rapido: circa 1 secondo contro circa 6 | 2026-10-15 |
| Catalogo in `data/catalog.json`, senza database | Supabase (avviato e poi rimosso) | Tutto in locale, nessun account da gestire | 2026-10-14 |
| Miniature e favicon salvate nel catalogo come data URI | File in `public/thumbnails/` | La versione pubblica le mostra senza server | 2026-10-14 |
| Versione pubblica in sola lettura su GitHub Pages | Da verificare | Gli amici consultano, solo il proprietario modifica | 2026-10-15 |
| Commit e push automatici a ogni modifica del catalogo | Da verificare | Il repo è la copia di sicurezza e la fonte per le altre sessioni | 2026-10-15 |
| Backup locali del catalogo, ultimi 50 | Da verificare | Protezione da modifiche sbagliate senza usare git | 2026-10-15 |
| Repo pubblico | Repo privato, come indicato in `REQUIREMENTS.md` | GitHub Pages su account gratuito. Scelta dell'utente | 2026-10-15 |
| Server locale che si chiude da solo | Da verificare | Evita finestre nere rimaste aperte | 2026-10-15 |
| Componenti shadcn su `@base-ui/react` | Da verificare | Motivo: da verificare | 2026-10-15 |

## Decisioni da confermare

1. Componenti shadcn su `@base-ui/react`: perché questa libreria e non Radix? Motivo: da verificare.
2. Versione pubblica su GitHub Pages: quali alternative avevi in mente?
3. Commit e push automatici: quali alternative avevi in mente?
4. Backup locali: il backup serve anche senza git, o basta la cronologia git?
5. Server che si chiude da solo: preferisci anche un'alternativa, come la chiusura manuale?
