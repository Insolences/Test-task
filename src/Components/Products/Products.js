import React from "react";
import s from "./Products.moddule.css";

export default class Products extends React.Component {
  render() {
    return (
      <section className={s.products}>
        <header>
          <p className={s.kicker}>Backend & Data</p>
          <h1>Сервисы, экономика и масштабирование</h1>
          <p className={s.subtitle}>
            Разделяем realtime-ядро и долговременные данные, чтобы обеспечить
            стабильность экономики и быстрые ответы игрокам.
          </p>
        </header>
        <div className={s.grid}>
          <article className={s.card}>
            <h2>PostgreSQL</h2>
            <ul>
              <li>Персонажи, предметы, инвентарь, экономика.</li>
              <li>Шардинг по регионам, реплики для чтения.</li>
              <li>Транзакции для торгов и аукциона.</li>
            </ul>
          </article>
          <article className={s.card}>
            <h2>Redis</h2>
            <ul>
              <li>Сессии, кэш профилей и rate limiting.</li>
              <li>Очереди событий и синхронизация кликов.</li>
              <li>Pub/Sub для межзонных сообщений.</li>
            </ul>
          </article>
          <article className={s.card}>
            <h2>NextJS API</h2>
            <ul>
              <li>Лобби, авторизация, платежи, контент.</li>
              <li>Контроль версий клиента и патчинг.</li>
              <li>Логи и аналитика воронок.</li>
            </ul>
          </article>
          <article className={s.card}>
            <h2>Инфраструктура</h2>
            <ul>
              <li>Docker-контуры для dev/stage/prod.</li>
              <li>VM-зоны с autoscaling, позже Kubernetes.</li>
              <li>Сборка мобильных клиентов для Store.</li>
            </ul>
          </article>
        </div>
      </section>
    );
  }
}
