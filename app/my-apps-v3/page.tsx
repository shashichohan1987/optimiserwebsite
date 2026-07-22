'use client';

import { useEffect, useRef, useState } from 'react';
import './styles.css';

type PopData = { i: string; c: string; b: string; s: string };
type Slide = {
  img: string;
  eyebrow: string;
  title: string;
  text: string;
  link: string;
  coop: boolean;
  pops: PopData[];
};

const ic: Record<string, React.ReactElement> = {
  bot: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 8V4H8" /><rect x="4" y="8" width="16" height="12" rx="2" /><path d="M2 14h2M20 14h2M15 13v2M9 13v2" /></svg>,
  chat: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>,
  send: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4z" /></svg>,
  check: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>,
  move: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 9l-3 3 3 3M9 5l3-3 3 3M15 19l-3 3-3-3M19 9l3 3-3 3M2 12h20M12 2v20" /></svg>,
  trend: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>,
  report: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18" /><path d="M7 15l4-6 4 3 5-8" /></svg>,
  users: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
  task: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>,
};

const tint: Record<string, [string, string]> = {
  cyan: ['rgba(0,161,223,.14)', '#00A1DF'],
  violet: ['rgba(123,92,250,.14)', '#7B5CFA'],
  green: ['rgba(25,190,119,.14)', '#19BE77'],
  amber: ['rgba(255,170,43,.16)', '#D98A0F'],
};

const slides: Slide[] = [
  {
    img: '/assets/kanban-view.webp',
    eyebrow: 'New in Optimiser',
    title: 'Cooper AI is here',
    text: 'Let Cooper draft follow-ups, summarise calls and surface your next best action — built right into every module of your workspace.',
    link: '/#cooper',
    coop: true,
    pops: [
      { i: 'bot', c: 'cyan', b: 'Cooper AI', s: '3 follow-ups drafted' },
      { i: 'chat', c: 'violet', b: 'Call summarised', s: 'Acme discovery · 32 min' },
      { i: 'send', c: 'green', b: 'Next best action', s: 'Send proposal to Riverside' },
    ],
  },
  {
    img: '/assets/list-view.webp',
    eyebrow: 'Pipeline update',
    title: 'A faster way to work deals',
    text: 'Bulk-edit, filter and move records in seconds. Your whole pipeline, reorganised around the way your team actually sells.',
    link: '/crm',
    coop: false,
    pops: [
      { i: 'check', c: 'green', b: 'Deal won', s: 'Riverside Group · £42,800' },
      { i: 'move', c: 'cyan', b: 'Stage moved', s: '12 deals → Negotiation' },
      { i: 'trend', c: 'violet', b: 'Pipeline up 18%', s: 'vs. last quarter' },
    ],
  },
  {
    img: '/assets/list-columns.webp',
    eyebrow: 'Reporting',
    title: 'Insights you can act on',
    text: 'Customisable views and live counts across contacts, accounts and tasks — so nothing slips between the cracks.',
    link: '/why-optimiser',
    coop: false,
    pops: [
      { i: 'report', c: 'violet', b: 'Report ready', s: 'Q3 revenue forecast' },
      { i: 'users', c: 'cyan', b: 'Live count', s: '4,287 contacts' },
      { i: 'task', c: 'green', b: 'Tasks on track', s: '92% completed' },
    ],
  },
];

const cooperMark = (
  <svg viewBox="0 0 284 284" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M255.822 135.797C255.815 142.101 253.308 148.144 248.85 152.601C244.393 157.059 238.349 159.566 232.046 159.573H171.607C166.928 159.594 162.298 160.536 157.983 162.347C153.668 164.157 149.752 166.799 146.458 170.123C143.164 173.446 140.557 177.386 138.785 181.718C137.014 186.049 136.113 190.686 136.134 195.366C136.155 200.045 137.098 204.675 138.908 208.99C140.718 213.305 143.36 217.222 146.684 220.516C150.007 223.81 153.947 226.417 158.278 228.188C162.61 229.959 167.247 230.86 171.927 230.839H203.451C206.012 230.839 208.468 229.822 210.279 228.011C212.089 226.2 213.107 223.744 213.107 221.183C213.107 218.622 212.089 216.166 210.279 214.355C208.468 212.545 206.012 211.527 203.451 211.527H171.607C169.43 211.562 167.267 211.161 165.247 210.348C163.227 209.536 161.39 208.327 159.843 206.795C158.296 205.262 157.07 203.436 156.239 201.424C155.407 199.411 154.986 197.253 155.001 195.075C155.015 192.897 155.464 190.745 156.322 188.743C157.179 186.742 158.428 184.932 159.995 183.419C161.562 181.907 163.415 180.723 165.445 179.937C167.476 179.15 169.643 178.778 171.82 178.841H232.046C243.471 178.831 254.425 174.289 262.503 166.21C270.582 158.132 275.125 147.177 275.134 135.752H255.822V135.797Z" fill="url(#paint0_linear_9269_85)"></path>
    <path d="M124.383 232.055V171.599C124.362 166.92 123.42 162.29 121.61 157.975C119.8 153.659 117.158 149.743 113.834 146.449C110.51 143.155 106.57 140.548 102.239 138.777C97.9078 137.005 93.2701 136.105 88.5907 136.125C83.9113 136.146 79.2817 137.089 74.9665 138.899C70.6513 140.709 66.735 143.351 63.441 146.675C60.147 149.999 57.5399 153.939 55.7686 158.27C53.9972 162.601 53.0963 167.239 53.1173 171.918V203.442C53.1173 206.003 54.1346 208.459 55.9454 210.27C57.7563 212.081 60.2122 213.098 62.7731 213.098C65.3341 213.098 67.7902 212.081 69.6011 210.27C71.4119 208.459 72.4292 206.003 72.4292 203.442V171.599C72.3947 169.422 72.7956 167.259 73.6082 165.239C74.4209 163.219 75.6288 161.381 77.1614 159.834C78.694 158.287 80.5202 157.062 82.5328 156.23C84.5454 155.399 86.7038 154.978 88.8813 154.992C91.0589 155.006 93.2118 155.455 95.2134 156.313C97.215 157.171 99.0251 158.42 100.537 159.987C102.05 161.553 103.234 163.407 104.02 165.437C104.806 167.468 105.179 169.635 105.116 171.812V232.038C105.125 243.462 109.668 254.416 117.746 262.495C125.825 270.574 136.779 275.116 148.204 275.125V255.822C141.895 255.825 135.843 253.323 131.376 248.867C126.91 244.411 124.395 238.364 124.383 232.055Z" fill="url(#paint1_linear_9269_85)"></path>
    <path d="M112.082 53.1178H80.5581C77.9972 53.1178 75.5413 54.1351 73.7304 55.9459C71.9196 57.7568 70.9023 60.2127 70.9023 62.7736C70.9023 65.3345 71.9196 67.7907 73.7304 69.6015C75.5413 71.4124 77.9972 72.4297 80.5581 72.4297H112.357C114.535 72.3952 116.697 72.796 118.717 73.6087C120.738 74.4213 122.575 75.6293 124.122 77.1619C125.669 78.6945 126.894 80.5206 127.726 82.5332C128.557 84.5458 128.978 86.7043 128.964 88.8818C128.95 91.0593 128.501 93.2122 127.643 95.2138C126.785 97.2154 125.536 99.0255 123.97 100.538C122.403 102.05 120.55 103.234 118.519 104.02C116.488 104.807 114.321 105.179 112.144 105.116H51.9186C40.4938 105.126 29.5398 109.668 21.4612 117.747C13.3827 125.825 8.83985 136.78 8.83044 148.204H28.1427C28.1497 141.901 30.6568 135.857 35.1142 131.4C39.5715 126.942 45.615 124.435 51.9186 124.428H112.357C121.815 124.386 130.868 120.588 137.526 113.871C144.183 107.153 147.9 98.0663 147.857 88.6088C147.815 79.1512 144.017 70.0979 137.3 63.4404C130.582 56.7829 121.496 53.0664 112.038 53.1088L112.082 53.1178Z" fill="url(#paint2_linear_9269_85)"></path>
    <path d="M221.236 70.894C219.968 70.894 218.712 71.1438 217.541 71.629C216.369 72.1143 215.305 72.8255 214.408 73.7221C213.511 74.6187 212.8 75.6832 212.315 76.8547C211.83 78.0262 211.58 79.2817 211.58 80.5498V112.393C211.614 114.571 211.213 116.733 210.401 118.753C209.588 120.774 208.38 122.611 206.848 124.158C205.315 125.705 203.489 126.93 201.476 127.762C199.464 128.593 197.305 129.014 195.128 129C192.95 128.986 190.797 128.537 188.796 127.679C186.794 126.821 184.984 125.573 183.472 124.006C181.96 122.439 180.776 120.586 179.989 118.555C179.203 116.524 178.831 114.357 178.894 112.18V51.9547C178.884 40.5299 174.341 29.5756 166.262 21.497C158.184 13.4185 147.23 8.87592 135.805 8.86652V28.1785C142.109 28.1855 148.152 30.6929 152.61 35.1502C157.067 39.6076 159.574 45.651 159.581 51.9547V112.393C159.624 121.844 163.419 130.891 170.131 137.543C176.844 144.196 185.924 147.909 195.374 147.867C204.825 147.824 213.871 144.029 220.524 137.317C227.176 130.604 230.89 121.524 230.847 112.074V80.5498C230.861 79.2815 230.623 78.0232 230.146 76.8482C229.668 75.6732 228.961 74.605 228.067 73.7061C227.172 72.8072 226.107 72.0956 224.934 71.6128C223.761 71.1299 222.504 70.8856 221.236 70.894Z" fill="url(#paint3_linear_9269_85)"></path>
    <path d="M254.721 102.258H276.429C277.425 102.253 278.411 102.446 279.332 102.824C280.253 103.203 281.089 103.761 281.793 104.465C282.497 105.169 283.054 106.005 283.433 106.925C283.812 107.846 284.004 108.833 284 109.828V131.545C284.004 132.541 283.812 133.527 283.433 134.448C283.054 135.368 282.497 136.205 281.793 136.909C281.089 137.613 280.253 138.17 279.332 138.549C278.411 138.928 277.425 139.12 276.429 139.115H254.721C253.726 139.12 252.739 138.928 251.819 138.549C250.898 138.17 250.062 137.613 249.358 136.909C248.654 136.205 248.096 135.368 247.718 134.448C247.339 133.527 247.146 132.541 247.151 131.545V109.828C247.146 108.833 247.339 107.846 247.718 106.925C248.096 106.005 248.654 105.169 249.358 104.465C250.062 103.761 250.898 103.203 251.819 102.824C252.739 102.446 253.726 102.253 254.721 102.258ZM174.181 247.151H152.464C151.468 247.146 150.482 247.339 149.561 247.718C148.64 248.096 147.804 248.654 147.1 249.358C146.396 250.062 145.839 250.898 145.46 251.818C145.081 252.739 144.889 253.726 144.893 254.721V276.429C144.889 277.425 145.081 278.411 145.46 279.332C145.839 280.253 146.396 281.089 147.1 281.793C147.804 282.497 148.64 283.054 149.561 283.433C150.482 283.812 151.468 284.004 152.464 284H174.181C175.176 284.004 176.163 283.812 177.083 283.433C178.004 283.054 178.84 282.497 179.544 281.793C180.248 281.089 180.806 280.253 181.184 279.332C181.563 278.411 181.756 277.425 181.751 276.429V254.712C181.755 253.718 181.561 252.732 181.182 251.813C180.802 250.893 180.245 250.058 179.541 249.355C178.837 248.652 178.001 248.095 177.081 247.717C176.161 247.338 175.175 247.146 174.181 247.151ZM36.8581 174.181V152.463C36.8628 151.468 36.6702 150.482 36.2915 149.561C35.9127 148.64 35.3551 147.804 34.6512 147.1C33.9473 146.396 33.1109 145.839 32.1903 145.46C31.2697 145.081 30.2832 144.888 29.2877 144.893H7.57042C6.57495 144.888 5.58867 145.081 4.66807 145.46C3.74747 145.839 2.91083 146.396 2.20691 147.1C1.503 147.804 0.94574 148.64 0.566959 149.561C0.188177 150.482 -0.00461729 151.468 8.39514e-05 152.463V174.181C-0.00461729 175.176 0.188177 176.163 0.566959 177.083C0.94574 178.004 1.503 178.84 2.20691 179.544C2.91083 180.248 3.74747 180.806 4.66807 181.184C5.58867 181.563 6.57495 181.756 7.57042 181.751H29.2877C30.2832 181.756 31.2697 181.563 32.1903 181.184C33.1109 180.806 33.9473 180.248 34.6512 179.544C35.3551 178.84 35.9127 178.004 36.2915 177.083C36.6702 176.163 36.8628 175.176 36.8581 174.181ZM109.828 36.8581H131.545C132.541 36.8628 133.527 36.67 134.448 36.2912C135.369 35.9124 136.205 35.3551 136.909 34.6512C137.613 33.9473 138.17 33.1107 138.549 32.1901C138.928 31.2695 139.12 30.2829 139.116 29.2874V7.57042C139.119 6.57528 138.926 5.58922 138.547 4.66915C138.167 3.74908 137.61 2.9133 136.906 2.20962C136.203 1.50595 135.366 0.948326 134.446 0.569126C133.526 0.189925 132.541 -0.00343444 131.545 8.40659e-05H109.828C108.833 -0.00461717 107.846 0.187907 106.925 0.566688C106.005 0.94547 105.169 1.503 104.465 2.20691C103.761 2.91083 103.203 3.74719 102.825 4.6678C102.446 5.5884 102.253 6.57495 102.258 7.57042V29.2874C102.253 30.2829 102.446 31.2695 102.825 32.1901C103.203 33.1107 103.761 33.9473 104.465 34.6512C105.169 35.3551 106.005 35.9124 106.925 36.2912C107.846 36.67 108.833 36.8628 109.828 36.8581Z" fill="#075DA8"></path>
    <circle cx="239" cy="220" r="17" fill="#00A1DF"></circle>
    <circle cx="61" cy="239" r="17" fill="#00A1DF"></circle>
    <circle cx="45" cy="62" r="17" fill="#00A1DF"></circle>
    <circle cx="222" cy="45" r="17" fill="#00A1DF"></circle>
    <defs>
      <linearGradient id="paint0_linear_9269_85" x1="136.133" y1="183.391" x2="275.134" y2="183.391" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00A1DF"></stop>
        <stop offset="1" stopColor="#075DA8"></stop>
      </linearGradient>
      <linearGradient id="paint1_linear_9269_85" x1="100.66" y1="275.125" x2="100.66" y2="136.125" gradientUnits="userSpaceOnUse">
        <stop stopColor="#075DA8"></stop>
        <stop offset="1" stopColor="#00A1DF"></stop>
      </linearGradient>
      <linearGradient id="paint2_linear_9269_85" x1="8.83044" y1="100.656" x2="147.858" y2="100.656" gradientUnits="userSpaceOnUse">
        <stop stopColor="#075DA8"></stop>
        <stop offset="1" stopColor="#00A1DF"></stop>
      </linearGradient>
      <linearGradient id="paint3_linear_9269_85" x1="183.326" y1="147.867" x2="183.326" y2="8.86652" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00A1DF"></stop>
        <stop offset="1" stopColor="#075DA8"></stop>
      </linearGradient>
    </defs>
  </svg>
);

export default function MyAppsV3Page() {
  // Theme
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    let t = 'dark';
    try {
      t = localStorage.getItem('opt-theme') || 'dark';
    } catch {}
    setTheme(t === 'light' ? 'light' : 'dark');
  }, []);

  useEffect(() => {
    document.body.classList.toggle('light', theme === 'light');
    return () => {
      document.body.classList.remove('light');
    };
  }, [theme]);

  const toggleTheme = () => {
    const t = theme === 'light' ? 'dark' : 'light';
    try {
      localStorage.setItem('opt-theme', t);
    } catch {}
    setTheme(t);
  };

  // Reveal
  const [cardIn, setCardIn] = useState(false);
  const [popsIn, setPopsIn] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => {
      setCardIn(true);
      setPopsIn(true);
    });
  }, []);

  // three.js particle wave — same field as the home page hero, tuned for dark bg
  const bgRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = bgRef.current;
    if (!canvas) return;
    let disposed = false;
    const cleanupFns: (() => void)[] = [];
    import('three').then((THREE) => {
      if (disposed) return;
      let renderer: InstanceType<typeof THREE.WebGLRenderer>;
      try {
        renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      } catch {
        return;
      }
      renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(62, 1, 0.1, 200);
      camera.position.set(0, 2.6, 12);
      camera.lookAt(0, -2.5, 0);
      const COLS = 160, ROWS = 100, SP = 0.42;
      const count = COLS * ROWS;
      const pos = new Float32Array(count * 3);
      const col = new Float32Array(count * 3);
      const cBlue = new THREE.Color(0x2e8fd8);
      const cCyan = new THREE.Color(0x00a1df);
      const cDeep = new THREE.Color(0x0a2342);
      let i = 0;
      for (let x = 0; x < COLS; x++) {
        for (let z = 0; z < ROWS; z++) {
          pos[i * 3] = (x - COLS / 2) * SP;
          pos[i * 3 + 1] = 0;
          pos[i * 3 + 2] = (z - ROWS / 2) * SP;
          const c = cBlue.clone().lerp(cCyan, x / COLS).lerp(cDeep, (z / ROWS) * 0.45);
          col[i * 3] = c.r;
          col[i * 3 + 1] = c.g;
          col[i * 3 + 2] = c.b;
          i++;
        }
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
      const mat = new THREE.PointsMaterial({
        size: 0.052,
        vertexColors: true,
        transparent: true,
        opacity: 0.85,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true,
      });
      const points = new THREE.Points(geo, mat);
      points.rotation.x = -0.62;
      points.position.y = -4.2;
      scene.add(points);
      let mx = 0, my = 0;
      const onPointerMove = (e: PointerEvent) => {
        mx = e.clientX / innerWidth - 0.5;
        my = e.clientY / innerHeight - 0.5;
      };
      window.addEventListener('pointermove', onPointerMove, { passive: true });
      const resize = () => {
        const w = innerWidth, h = innerHeight;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      };
      resize();
      window.addEventListener('resize', resize);
      const clock = new THREE.Clock();
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const speed = reduced ? 0 : 1;
      let rafId = 0;
      const loop = () => {
        rafId = requestAnimationFrame(loop);
        const t = clock.getElapsedTime() * speed;
        const p = geo.attributes.position.array as Float32Array;
        let k = 0;
        for (let x = 0; x < COLS; x++) {
          for (let z = 0; z < ROWS; z++) {
            const px = (x - COLS / 2) * SP, pz = (z - ROWS / 2) * SP;
            p[k * 3 + 1] =
              Math.sin(px * 0.5 + t * 0.6) * Math.cos(pz * 0.4 + t * 0.4) * 0.75 +
              Math.sin((px + pz) * 0.22 + t * 0.28) * 0.45;
            k++;
          }
        }
        geo.attributes.position.needsUpdate = true;
        points.rotation.z = mx * 0.03;
        camera.position.x += (mx * 1.4 - camera.position.x) * 0.04;
        camera.position.y += (2.6 - my * 0.8 - camera.position.y) * 0.04;
        camera.lookAt(0, -2.5, 0);
        renderer.render(scene, camera);
      };
      loop();
      cleanupFns.push(() => {
        cancelAnimationFrame(rafId);
        window.removeEventListener('pointermove', onPointerMove);
        window.removeEventListener('resize', resize);
        geo.dispose();
        mat.dispose();
        renderer.dispose();
      });
    });
    return () => {
      disposed = true;
      cleanupFns.forEach((f) => f());
    };
  }, []);

  // What's-new carousel
  const [slideIndex, setSlideIndex] = useState(0);
  const [imgAShow, setImgAShow] = useState(true);
  const [imgBShow, setImgBShow] = useState(false);
  const [imgASrc, setImgASrc] = useState(slides[0].img);
  const [imgBSrc, setImgBSrc] = useState<string | undefined>(undefined);
  const [textFadeOut, setTextFadeOut] = useState(false);
  const [displayedSlide, setDisplayedSlide] = useState(slides[0]);
  const [coopShow, setCoopShow] = useState(true);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const busyRef = useRef(false);
  const frontRef = useRef(0);
  const slideIndexRef = useRef(0);

  const renderSlide = (n: number) => {
    if (busyRef.current) return;
    busyRef.current = true;
    const newIndex = ((n % slides.length) + slides.length) % slides.length;
    slideIndexRef.current = newIndex;
    setSlideIndex(newIndex);
    const s = slides[newIndex];

    // crossfade image: load into back layer, then swap show class
    if (frontRef.current === 0) {
      setImgBSrc(s.img);
      setTimeout(() => {
        setImgBShow(true);
        setImgAShow(false);
        frontRef.current = 1;
      }, 50);
    } else {
      setImgASrc(s.img);
      setTimeout(() => {
        setImgAShow(true);
        setImgBShow(false);
        frontRef.current = 0;
      }, 50);
    }

    // text: fade+slide out, swap, fade in
    setTextFadeOut(true);
    // pop cards: retract, swap content, replay pop-in
    setPopsIn(false);
    setCoopShow(!!s.coop);
    setTimeout(() => {
      setDisplayedSlide(s);
      setTextFadeOut(false);
      setPopsIn(true);
    }, 320);
    setTimeout(() => {
      busyRef.current = false;
    }, 650);
  };

  const pauseTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    timerRef.current = setInterval(() => renderSlide(slideIndexRef.current + 1), 6500);
  };

  const goToSlide = (n: number) => {
    renderSlide(n);
    resetTimer();
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logoSrc = theme === 'light' ? '/assets/optimiser-logo.svg' : '/assets/optimiser-logo-dark-bg.svg';

  return (
    <>
      <canvas id="bg3d" aria-hidden="true" ref={bgRef}></canvas>

      <div className="auth">

        <header className="top">
          <a href="/" className="logo" aria-label="Optimiser home"><img className="logo-img" src={logoSrc} alt="Optimiser" /></a>
          <div className="right">
            <button
              className="theme-btn"
              id="themeBtn"
              type="button"
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              onClick={toggleTheme}
            >
              <svg id="themeIco" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                {theme === 'light' ? (
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                ) : (
                  <>
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                  </>
                )}
              </svg>
            </button>
            <span className="user-chip"><span className="av">J</span>jamesh@optimiser.com</span>
            <a className="tlink" href="/login-v3">Sign out</a>
          </div>
        </header>

        <div className="main">

        {/* ============ LEFT — BRAND (wide) ============ */}
        <aside
          className="brand"
          onMouseEnter={pauseTimer}
          onMouseLeave={resetTimer}
          onFocus={pauseTimer}
          onBlur={resetTimer}
        >

          <div className="upd">
            <div className="upd-stage">
              <div className="upd-frame">
                <div className="upd-bar"><i style={{ background: '#FF6058' }}></i><i style={{ background: '#FFBD2E' }}></i><i style={{ background: '#28C840' }}></i><span className="url"></span></div>
                <div className="upd-shot">
                  <img id="updImgA" className={imgAShow ? 'show' : ''} src={imgASrc} alt="Optimiser update" />
                  <img id="updImgB" className={imgBShow ? 'show' : ''} src={imgBSrc} alt="" />
                  <div className={`coop${coopShow ? ' show' : ''}`} id="coopOv"><span className="ring"></span><span className="ring r2"></span><span className="mark" role="img" aria-label="Cooper AI">{cooperMark}</span></div>
                </div>
              </div>
              {(['p1', 'p2', 'p3'] as const).map((pc, k) => {
                const d = displayedSlide.pops[k];
                const [bg, fg] = tint[d.c];
                return (
                  <div key={pc} className={`pop ${pc}${popsIn ? ' in' : ''}`}>
                    <span className="pic" style={{ background: bg, color: fg }}>{ic[d.i]}</span>
                    <span><b>{d.b}</b><span>{d.s}</span></span>
                  </div>
                );
              })}
            </div>
            <div className="upd-body">
              <span className={`upd-eyebrow upd-fade${textFadeOut ? ' out' : ''}`} id="updEyebrow">{displayedSlide.eyebrow}</span>
              <h2 className={`upd-title upd-fade${textFadeOut ? ' out' : ''}`} id="updTitle">{displayedSlide.title}</h2>
              <p className={`upd-text upd-fade${textFadeOut ? ' out' : ''}`} id="updText">{displayedSlide.text}</p>
              <a className={`upd-btn upd-fade${textFadeOut ? ' out' : ''}`} id="updBtn" href={displayedSlide.link}>Learn more <span className="arr">→</span></a>
            </div>

            <div className="upd-nav">
            <div className="dots" id="updDots" role="tablist" aria-label="Product updates">
              {slides.map((_, k) => (
                <button
                  key={k}
                  type="button"
                  className={k === slideIndex ? 'on' : ''}
                  role="tab"
                  aria-label={`Update ${k + 1}`}
                  aria-selected={k === slideIndex}
                  onClick={() => goToSlide(k)}
                ></button>
              ))}
            </div>
            <div className="arrows">
              <button id="updPrev" aria-label="Previous update" onClick={() => goToSlide(slideIndexRef.current - 1)}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M19 12H5M11 18l-6-6 6-6" /></svg></button>
              <button id="updNext" aria-label="Next update" onClick={() => goToSlide(slideIndexRef.current + 1)}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M13 6l6 6-6 6" /></svg></button>
            </div>
            </div>
          </div>

        </aside>

        {/* ============ RIGHT — FORM ============ */}
        <main className="panel">

          <div className="form-wrap">
            <div className={`card rv${cardIn ? ' in' : ''}`} id="appsCard">
              <span className="eyebrow">Single sign-on</span>
              <h1>Choose your workspace</h1>
              <p className="sub">One login for every Optimiser app — pick up right where you left off.</p>

              <div className="apps">

              <a className="app" href="#">
                <span className="app-ic" style={{ background: 'rgba(7,93,168,.10)', color: 'var(--blue)' }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /></svg></span>
                <span className="app-info"><b>Optimiser CRM</b><span className="app-st on"><i></i>Active session · 2h ago</span></span>
                <span className="app-act">Open <span className="arr">→</span></span>
              </a>

              <a className="app" href="#">
                <span className="app-ic" style={{ background: 'rgba(0,161,223,.12)', color: '#0787BE' }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M2 8h20M8 21h8M12 17v4" /></svg></span>
                <span className="app-info"><b>Touchpoint</b><span className="app-st on"><i></i>Active session · 20m ago</span></span>
                <span className="app-act">Open <span className="arr">→</span></span>
              </a>

              <a className="app" href="#">
                <span className="app-ic" style={{ background: 'rgba(123,92,250,.12)', color: 'var(--violet)' }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9"><path d="M3 11l18-5v12L3 14v-3z" /><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" /></svg></span>
                <span className="app-info"><b>Marketing Suite</b><span className="app-st on"><i></i>Active session · yesterday</span></span>
                <span className="app-act">Open <span className="arr">→</span></span>
              </a>

              <a className="app" href="#">
                <span className="app-ic" style={{ background: 'rgba(255,170,43,.14)', color: '#B97A0A' }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9"><rect x="3" y="4" width="18" height="17" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg></span>
                <span className="app-info"><b>Event Management</b><span className="app-st"><i></i>Not signed in</span></span>
                <span className="app-act">Sign in <span className="arr">→</span></span>
              </a>

              <a className="app" href="#">
                <span className="app-ic" style={{ background: 'rgba(255,111,91,.13)', color: 'var(--coral)' }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9"><circle cx="9" cy="21" r="1.5" /><circle cx="19" cy="21" r="1.5" /><path d="M2 3h3l2.7 12.4a2 2 0 0 0 2 1.6h8.9a2 2 0 0 0 2-1.6L22 7H6" /></svg></span>
                <span className="app-info"><b>Shop Suite</b><span className="app-st"><i></i>Not signed in</span></span>
                <span className="app-act">Sign in <span className="arr">→</span></span>
              </a>

              <a className="app" href="#">
                <span className="app-ic" style={{ background: 'rgba(25,190,119,.13)', color: '#0E8A57' }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9"><path d="M18.5 19a4.5 4.5 0 0 0 .5-8.97A6 6 0 0 0 7.34 9.5 4 4 0 0 0 8 17.46" /><path d="M12 12v6M9 15l3 3 3-3" /></svg></span>
                <span className="app-info"><b>Cloud Drive</b><span className="app-st"><i></i>Not signed in</span></span>
                <span className="app-act">Sign in <span className="arr">→</span></span>
              </a>
              </div>

              <div className="allout"><a href="/login-v3">Sign out of all apps</a></div>
            </div>
          </div>

        </main>

        </div>

      </div>
    </>
  );
}
