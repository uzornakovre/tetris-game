# :small_orange_diamond: Игра "Тетрис"

_PET-проект_

---

[![Скриншот страницы](https://github.com/uzornakovre/tetris-game/blob/main/src/assets/img/preview.jpg?raw=true)](https://uzornakovre.github.io/tetris-game/)

Классическая игра **"Тетрис"**

**Особенности:**

1. При разработке проекта не используются сторонние библиотеки, только чистый JavaScript (исключение - сборщик WebPack и препроцессор SCSS).
2. Применяется **Объектно-ориентированное программирование**.
3. Игровое поле отрисовывается с помощью холста **canvas**.
4. Игра начинается после нажатия клавиши "Enter", тем же способом можно поставить на паузу и начать заново после окончания.
5. Когда фигурки тетромино полностью заполняют линию, он исчезает. Если фигурке некуда упасть, игра завершается.
6. Каждые 10 уничтоженных линий повышает уровень, с каждым новым уровнем тетромино падают быстрее.
7. Идет подсчет очков и линий, чем больше линий уничтожить одновременно, тем больше можно получить очков.

_Помощь в разработке данного проекта оказали видеозаписи из [:link: этого плейлиста](https://www.youtube.com/watch?v=r-pyoBqQqNU&list=PLqHlAwsJRxAMa9HHLRZcHFZyM7SBHqJgt)_.

**Для локального запуска проекта выполните поочередно следующие команды**

```sh
git clone git@github.com:uzornakovre/tetris-game.git
```

```sh
cd tetris-game
```

```sh
npm install
```

```sh
npm run dev
```

Используемые языки:

- :heavy_check_mark: HTML5
- :heavy_check_mark: CSS3 (SCSS)
- :heavy_check_mark: JavaScript

---

## [:link: Просмотреть страницу в GitHub Pages](https://uzornakovre.github.io/tetris-game/)

![GitHub repo size](https://img.shields.io/github/repo-size/uzornakovre/tetris-game?color=yellow&style=flat-square) ![GitHub last commit](https://img.shields.io/github/last-commit/uzornakovre/tetris-game?color=blue&style=flat-square) ![GitHub Repo stars](https://img.shields.io/github/stars/uzornakovre/tetris-game?color=pink&style=flat-square)
