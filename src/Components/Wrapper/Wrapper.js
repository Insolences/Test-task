import React from "react";
import s from "./Wrapper.module.css";
import { NavigationMenu } from "../NavigationMenu";

export function Wrapper() {
  return (
    <main className={s.wrapper}>
      <NavigationMenu />
      <section className={s.content}>
        <header className={s.hero}>
          <p className={s.kicker}>MMORPG Blueprint</p>
          <h1>Кодовая база для MMO с упором на производительность</h1>
          <p className={s.subtitle}>
            Архитектура рассчитана на плотные PvP-сцены, большие скопления игроков
            и минимальный рассинхрон между клиентами.
          </p>
        </header>

        <div className={s.grid}>
          <article className={s.card}>
            <h2>Клиент</h2>
            <ul>
              <li>NextJS (React) — лобби, аккаунт, UI, платежи.</li>
              <li>PixiJS + TypeScript — рендер, логика, эффекты.</li>
              <li>Zustand/Redux — состояние UI и сессий.</li>
              <li>WebSocket + бинарные пакеты (Protobuf/msgpack).</li>
            </ul>
          </article>

          <article className={s.card}>
            <h2>Realtime-сервер</h2>
            <ul>
              <li>Go realtime (зоны/шарды) для PvP и социальных хабов.</li>
              <li>Authority logic: античит, валидирование урона, позиция.</li>
              <li>Tick 20–30 Гц + приоритизация пакетов.</li>
            </ul>
          </article>

          <article className={s.card}>
            <h2>Backend и данные</h2>
            <ul>
              <li>PostgreSQL — персонажи, предметы, экономика.</li>
              <li>Redis — сессии, rate limit, быстрый кэш.</li>
              <li>NextJS API — мета-операции, авторизация, контент.</li>
            </ul>
          </article>

          <article className={s.card}>
            <h2>Инфраструктура</h2>
            <ul>
              <li>Docker окружения для локальной разработки.</li>
              <li>Зоны в отдельных VM, позже Kubernetes.</li>
              <li>Observability: метрики, трассировка, алерты.</li>
            </ul>
          </article>
        </div>

        <section className={s.milestones} id="milestones">
          <h2>План запуска</h2>
          <ol>
            <li>Вертикальный срез: авторизация, 1 зона, базовый бой.</li>
            <li>Сетка интереса и компрессия пакетов.</li>
            <li>Масштабирование зон + реплеи боёв.</li>
            <li>Мобильные клиенты и оптимизация батареи.</li>
          </ol>
        </section>
      </section>
    </main>
  );
}
