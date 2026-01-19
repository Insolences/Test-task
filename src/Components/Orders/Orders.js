import React from "react";
import s from "./Orders.moddule.css";

export default class Orders extends React.Component {
  render() {
    return (
      <section className={s.orders}>
        <header>
          <p className={s.kicker}>Realtime & PvP</p>
          <h1>Сетевой слой и синхронизация</h1>
          <p className={s.subtitle}>
            Приоритизируем взаимодействия игроков, используем интерес-менеджмент,
            интерполяцию и серверный контроль, чтобы минимизировать рассинхрон в
            массовых боях.
          </p>
        </header>
        <div className={s.grid}>
          <article className={s.card}>
            <h2>Сетевой протокол</h2>
            <ul>
              <li>Бинарные пакеты, сжатие и дельта-обновления.</li>
              <li>QoS: отдельные каналы для позиций и событий.</li>
              <li>Низкая латентность через edge-ноды.</li>
            </ul>
          </article>
          <article className={s.card}>
            <h2>Интерес-менеджмент</h2>
            <ul>
              <li>Сетка/квадратуры + приоритизация по дистанции.</li>
              <li>Ограничение частоты на периферии.</li>
              <li>Групповая агрегация для рейдов.</li>
            </ul>
          </article>
          <article className={s.card}>
            <h2>Оптимизация тик-цикла</h2>
            <ul>
              <li>Fixed update 20–30 Гц + async I/O.</li>
              <li>Предсказание движения клиента.</li>
              <li>Валидация урона и позиций на сервере.</li>
            </ul>
          </article>
        </div>
      </section>
    );
  }
}
