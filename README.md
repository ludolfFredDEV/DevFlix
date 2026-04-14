# DevFlix 🎬

O **DevFlix** é uma aplicação web moderna para consulta de filmes, utilizando a API oficial do TMDB (The Movie Database). O projeto permite aos utilizadores explorar os filmes mais bem avaliados, pesquisar por títulos específicos e visualizar detalhes completos, incluindo trailers oficiais diretamente do YouTube.

## 🚀 Funcionalidades

- **Home Dinâmica:** Lista os filmes "Top Rated" consumindo dados em tempo real.
- **Pesquisa Inteligente:** Encontre qualquer filme disponível na base de dados do TMDB.
- **Página de Detalhes:** - Visualização de orçamento, receita e duração.
  - Sinopse completa.
  - **Backdrop dinâmico:** O fundo da página muda de acordo com a arte do filme.
  - **Trailer oficial:** Incorporação de vídeo do YouTube ao lado do póster.
- **Layout Responsivo:** Experiência otimizada para Desktop e Mobile.

## 🛠️ Tecnologias Utilizadas

- **React.js** (Vite)
- **React Router Dom** (Navegação SPA)
- **React Icons** (Ícones profissionais)
- **TMDB API** (Fonte de dados)
- **CSS3** (Variáveis, Flexbox e Grid)

## 📦 Como Instalar e Rodar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone 

2. **Entre na pasta do projeto:**
    cd DevFlix

3. **Instale as dependências:**
    npm install

4. **Configure as variáveis de ambiente:**
    Crie um ficheiro .env na raiz do projeto e adicione as suas chaves da API do TMDB:
    VITE_API_KEY=sua_chave_aqui
    VITE_API_BASE_URL=[https://api.themoviedb.org/3/movie/](https://api.themoviedb.org/3/movie/)
    VITE_API_SEARCH_URL=[https://api.themoviedb.org/3/search/movie/](https://api.themoviedb.org/3/search/movie/)
    VITE_API_IMG_URL=[https://image.tmdb.org/t/p/w500/](https://image.tmdb.org/t/p/w500/)
    VITE_API_BACKDROP_URL=[https://image.tmdb.org/t/p/original/](https://image.tmdb.org/t/p/original/)

5. **Inicie o servidor de desenvolvimento:**
    npm run dev

✒️ Autor
Desenvolvido por João Frederico Fernandes Ludolf – Seu LinkedIn

## 🆕 Próximas Implementações (Roadmap)
- [ ] Implementar **Lista de Favoritos** usando LocalStorage.
- [ ] Adicionar **Skeleton Screen** para estados de carregamento.
- [ ] Criar filtro de filmes por **Gênero** (Ação, Drama, etc).
- [ ] Exibir o **Elenco Principal** na página de detalhes.
- [ ] Adicionar **Paginação** na Home e nos resultados de busca.