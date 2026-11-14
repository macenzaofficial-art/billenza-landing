'use client';

import React, {
  useState,
  useRef,
  useEffect,
  useLayoutEffect,
  useCallback,
  ReactNode,
  CSSProperties,
} from 'react';

function IconWrapper({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export const NimbusIcons = {
  home: (
    <IconWrapper>
      <path d="M3.5 11.2 12 4l8.5 7.2" />
      <path d="M6 9.6V20h12V9.6" />
      <path className="nv-door" d="M10 20v-5h4v5Z" />
    </IconWrapper>
  ),
  globe: (
    <IconWrapper>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.6 2.4 2.6 14.6 0 17M12 3.5c-2.6 2.4-2.6 14.6 0 17" />
    </IconWrapper>
  ),
  plane: (
    <IconWrapper>
      <path d="M21 12.2 3.6 5.4l2.7 6.8-2.7 6.4L21 12.2Zm-14.7 0H13" />
    </IconWrapper>
  ),
  drop: (
    <IconWrapper>
      <path d="M12 3.5s6 6.4 6 10.6a6 6 0 0 1-12 0C6 9.9 12 3.5 12 3.5Z" />
    </IconWrapper>
  ),
  user: (
    <IconWrapper>
      <circle cx="12" cy="8.5" r="3.8" />
      <path d="M4.8 20c1.2-3.4 4-5 7.2-5s6 1.6 7.2 5" />
    </IconWrapper>
  ),
};

export interface LiquidNavbarItem {
  label: string;
  icon?: ReactNode;
  fx?: 'glow' | 'spin' | 'plane' | 'drop' | 'wave' | 'pop' | 'none' | string;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
}

export interface LiquidNavbarProps {
  items?: LiquidNavbarItem[];
  defaultActive?: number;
  active?: number;
  onChange?: (index: number, item: LiquidNavbarItem) => void;
  tone?: 'light' | 'dark';
  compact?: boolean;
  sound?: boolean;
  className?: string;
  style?: CSSProperties;
}

const defaultItems: LiquidNavbarItem[] = [
  { label: 'Home', icon: NimbusIcons.home, fx: 'glow' },
  { label: 'Explore', icon: NimbusIcons.globe, fx: 'spin' },
  { label: 'Flights', icon: NimbusIcons.plane, fx: 'plane' },
  { label: 'Weather', icon: NimbusIcons.drop, fx: 'drop' },
  { label: 'Profile', icon: NimbusIcons.user, fx: 'wave' },
];

const PAD = 14;

const CSS_STYLES = `
.nimbus-nav{--n-tint:rgba(255,255,255,.14);--n-fg:#0B132B;--n-fg-soft:rgba(11,19,43,.6);--n-rim:rgba(255,255,255,.7);
  position:relative;display:inline-flex;align-items:center;gap:2px;padding:6px;border-radius:999px;isolation:isolate;
  font-family:ui-sans-serif,-apple-system,"SF Pro Text","Segoe UI",system-ui,sans-serif;-webkit-font-smoothing:antialiased;user-select:none;-webkit-tap-highlight-color:transparent}
.nimbus-nav[data-tone="dark"]{--n-tint:rgba(10,18,40,.26);--n-fg:#F1F7FF;--n-fg-soft:rgba(241,247,255,.66);--n-rim:rgba(255,255,255,.34)}
.nimbus-glass{position:absolute;inset:0;border-radius:inherit;z-index:-2;overflow:hidden;background:var(--n-tint);
  -webkit-backdrop-filter:blur(10px) saturate(1.2) brightness(1.08);backdrop-filter:blur(10px) saturate(1.2) brightness(1.08);
  box-shadow:inset 0 1px 1px var(--n-rim),inset 0 0 0 1px rgba(255,255,255,.2),0 12px 32px -14px rgba(0,40,90,.5),0 2px 6px rgba(0,40,90,.1)}
.nimbus-nav[data-refract="on"] .nimbus-glass{-webkit-backdrop-filter:url(#nimbus-refract) blur(2px) saturate(1.2) brightness(1.08);backdrop-filter:url(#nimbus-refract) blur(2px) saturate(1.2) brightness(1.08)}
.nimbus-water{position:absolute;left:${-PAD}px;top:${-PAD}px;z-index:-1;pointer-events:none}
.nimbus-nav[data-gl="off"] .nimbus-water{display:none}
.nimbus-drop{display:none;position:absolute;top:6px;bottom:6px;left:0;border-radius:999px;z-index:-1;pointer-events:none;will-change:transform,width;
  background:radial-gradient(120% 140% at 30% 0%,rgba(255,255,255,.75),rgba(255,255,255,0) 55%),rgba(255,255,255,.38);
  box-shadow:inset 0 1px 1px rgba(255,255,255,.95),inset 0 -2px 6px rgba(0,162,255,.22),inset 0 0 0 1px rgba(255,255,255,.55),0 6px 16px -6px rgba(0,70,140,.45)}
.nimbus-nav[data-gl="off"] .nimbus-drop{display:block}
.nimbus-item{position:relative;z-index:1;display:inline-flex;align-items:center;gap:8px;height:42px;padding:0 16px;border:0;border-radius:999px;background:none;color:var(--n-fg-soft);
  font-family:inherit;font-weight:500;font-size:14px;line-height:1;letter-spacing:-.01em;text-decoration:none;cursor:pointer;transition:color .25s}
.nimbus-item:hover,.nimbus-item[aria-current="page"]{color:var(--n-fg)}
.nimbus-item:focus-visible{outline:2px solid #00A2FF;outline-offset:2px}
.nv-ico{position:relative;display:inline-flex;flex:none}
.nv-ico svg{transition:transform .45s cubic-bezier(.3,1.6,.5,1)}
.nimbus-item[aria-current="page"] .nv-ico svg{transform:translateY(-1px) scale(1.08)}
.nv-door{fill:transparent}
.nv-ico[data-fx="pop"] svg{animation:nvPop .5s cubic-bezier(.3,1.6,.5,1) both}
@keyframes nvPop{0%{transform:scale(.72)}60%{transform:scale(1.2)}100%{transform:translateY(-1px) scale(1.08)}}
.nv-ico[data-fx="plane"] svg{animation:nvPlane 1.15s cubic-bezier(.55,0,.3,1) both}
@keyframes nvPlane{0%{transform:none}12%{transform:translate(-3px,2px) rotate(7deg)}42%{transform:translate(64px,-26px) rotate(-24deg) scale(.9);opacity:0}43%{transform:translate(-60px,16px) rotate(-12deg) scale(.9);opacity:0}58%{opacity:1}80%{transform:translate(3px,-1px) rotate(2deg)}100%{transform:translateY(-1px) scale(1.08)}}
.nv-ico[data-fx="plane"]::after{content:"";position:absolute;left:55%;top:48%;height:2px;width:46px;border-radius:2px;transform-origin:0 50%;
  background:linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,.95));animation:nvTrail 1.15s ease-out both;pointer-events:none}
@keyframes nvTrail{0%,8%{opacity:0;transform:rotate(-22deg) scaleX(0)}30%{opacity:.9;transform:rotate(-22deg) scaleX(1)}55%,100%{opacity:0;transform:rotate(-22deg) translateX(30px) scaleX(.2)}}
.nv-ico[data-fx="drop"] svg{animation:nvDrop .95s cubic-bezier(.4,0,.3,1) both;transform-origin:50% 100%}
@keyframes nvDrop{0%{transform:translateY(-1px)}26%{transform:translateY(-13px) scale(.88,1.12)}46%{transform:translateY(3px) scale(1.3,.68)}62%{transform:translateY(-3px) scale(.92,1.08)}80%{transform:translateY(0) scale(1.04,.97)}100%{transform:translateY(-1px) scale(1.08)}}
.nv-ico[data-fx="drop"]::before,.nv-ico[data-fx="drop"]::after{content:"";position:absolute;bottom:0;left:50%;width:4px;height:4px;margin-left:-2px;border-radius:50%;background:currentColor;opacity:0;pointer-events:none}
.nv-ico[data-fx="drop"]::before{animation:nvSplashL .95s ease-out both}
.nv-ico[data-fx="drop"]::after{animation:nvSplashR .95s ease-out both}
@keyframes nvSplashL{0%,44%{opacity:0;transform:none}50%{opacity:.9;transform:translate(-5px,-6px)}75%,100%{opacity:0;transform:translate(-11px,1px) scale(.4)}}
@keyframes nvSplashR{0%,44%{opacity:0;transform:none}50%{opacity:.9;transform:translate(5px,-7px)}75%,100%{opacity:0;transform:translate(12px,1px) scale(.4)}}
.nv-ico[data-fx="spin"] svg{animation:nvSpin 1s cubic-bezier(.2,.75,.25,1) both}
@keyframes nvSpin{0%{transform:perspective(80px) rotateY(0)}100%{transform:perspective(80px) rotateY(360deg) translateY(-1px) scale(1.08)}}
.nv-ico[data-fx="glow"] svg{animation:nvHop .8s cubic-bezier(.3,1.4,.5,1) both;transform-origin:50% 100%}
@keyframes nvHop{0%{transform:none}30%{transform:translateY(-5px) scale(1.04,.96)}55%{transform:translateY(0) scale(1.12,.88)}75%{transform:translateY(-2px) scale(.98,1.04)}100%{transform:translateY(-1px) scale(1.08)}}
.nv-ico[data-fx="glow"] .nv-door{animation:nvDoor 1.3s ease both}
@keyframes nvDoor{0%{fill:transparent}30%{fill:#FFF3A8}100%{fill:rgba(126,232,255,.6)}}
.nv-ico[data-fx="wave"] svg{animation:nvWave .9s ease-in-out both;transform-origin:50% 92%}
@keyframes nvWave{0%{transform:none}20%{transform:rotate(-15deg)}40%{transform:rotate(12deg)}60%{transform:rotate(-8deg)}80%{transform:rotate(4deg)}100%{transform:translateY(-1px) scale(1.08)}}
.nimbus-nav[data-compact="true"] .nimbus-item{padding:0 13px}
.nimbus-nav[data-compact="true"] .nimbus-label{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
@media (max-width:520px){.nimbus-nav:not([data-compact="false"]) .nimbus-item{padding:0 13px}.nimbus-nav:not([data-compact="false"]) .nimbus-label{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}}
@media (prefers-reduced-motion:reduce){.nv-ico svg,.nv-ico::before,.nv-ico::after,.nv-door{animation:none!important;transition:none}}
`;

const VERTEX_SHADER = `attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}`;

const FRAGMENT_SHADER = `precision highp float;
uniform vec2 uRes;uniform float uDpr;uniform float uTime;uniform vec4 uPill;
uniform vec4 uBlob[6];uniform float uSy[6];uniform vec4 uRip[6];uniform vec3 uMouse;uniform float uDark;uniform float uAmb;
float sdRB(vec2 p,vec2 b,float r){vec2 q=abs(p)-b+r;return length(max(q,0.))+min(max(q.x,q.y),0.)-r;}
float sdCap(vec2 p,vec4 B,float sy){p-=B.xy;p.y/=sy;p.x=max(abs(p.x)-B.z,0.);return(length(p)-B.w)*min(1.,sy);}
float smin(float a,float b,float k){float h=clamp(.5+.5*(b-a)/k,0.,1.);return mix(b,a,h)-k*h*(1.-h);}
float dropD(vec2 p){float d=1e4;for(int i=0;i<6;i++){if(uBlob[i].w>.5){d=smin(d,sdCap(p,uBlob[i],uSy[i]),13.);}}return d;}
float pillD(vec2 p){vec2 h=uPill.zw*.5;return sdRB(p-uPill.xy-h,h,h.y);}
float lens(float d,float w){float t=clamp(-d/w,0.,1.);return sqrt(1.-(1.-t)*(1.-t));}
float waves(vec2 p){float w=0.;
 for(int i=0;i<6;i++){vec4 R=uRip[i];if(R.w>0.){float x=length(p-R.xy)-R.z*240.;w+=R.w*exp(-R.z*1.7)*sin(x*.3)*exp(-x*x/700.);}}
 vec2 m=p-uMouse.xy;w+=uMouse.z*3.6*exp(-dot(m,m)/1000.);
 w+=uAmb*(sin(p.x*.05+uTime*1.2)*.45+sin(p.x*.13-uTime*.85+p.y*.2)*.25);return w;}
float H(vec2 p){float dp=pillD(p);return lens(dp,uPill.w*.36)*2.4+lens(dropD(p),11.)*7.5+waves(p)*smoothstep(0.,7.,-dp);}
float caus(vec2 p,float t){vec2 q=p;float c=0.;for(int i=0;i<3;i++){q+=vec2(sin(q.y*1.1+t),cos(q.x*1.3-t*.7))*.6;c+=1./(1.+16.*abs(sin(q.x)*sin(q.y)));}return c/3.;}
void main(){
 vec2 p=vec2(gl_FragCoord.x,uRes.y*uDpr-gl_FragCoord.y)/uDpr;
 float dp=pillD(p);float dd=dropD(p);
 float h0=H(p);vec3 n=normalize(vec3(h0-H(p+vec2(1.,0.)),h0-H(p+vec2(0.,1.)),1.));
 vec3 V=vec3(0.,0.,1.);
 float spec=pow(max(dot(reflect(-normalize(vec3(-.45,-.8,.85)),n),V),0.),70.);
 float spec2=pow(max(dot(reflect(-normalize(vec3(.6,.75,.7)),n),V),0.),22.)*.3;
 float fres=clamp((1.-n.z)*4.,0.,1.);
 vec3 irid=.5+.5*cos(6.2831*(vec3(0.,.33,.67)+fres*.85+p.x*.0028+uTime*.035));
 float pm=smoothstep(1.,-1.,dp);float dm=smoothstep(1.,-1.,dd)*smoothstep(1.,-2.,dp);
 float sh=smoothstep(9.,-9.,dropD(p-vec2(0.,5.)))*(1.-dm)*pm*(.11+.07*uDark);
 vec3 c=vec3(0.,.14,.36)*sh;float a=sh;
 float pa=clamp(pm*(fres*.5+spec*.9+spec2),0.,1.);
 c=mix(vec3(1.),irid,.5*fres)*pa+c*(1.-pa);a=pa+a*(1.-pa);
 float th=lens(dd,11.);
 float cs=caus((p+n.xy*th*18.)*.085,uTime*.9);
 vec3 tint=mix(vec3(.80,.95,1.),vec3(.55,.82,1.),uDark);
 float rim=dm*(1.-smoothstep(0.,8.,-dd));
 float cres=dm*smoothstep(.12,.55,dot(n.xy,normalize(vec2(.55,.85))))*smoothstep(0.,3.,-dd);
 float body=.5+.5*clamp(-n.y*3.,-1.,1.);
 float da=dm*(.26+.14*body)*(1.-.35*uDark);vec3 dc=mix(tint,vec3(1.),body*.6);
 float la=rim*.22;vec3 lc=mix(vec3(0.,.42,.78),vec3(.1,.55,.95),uDark);dc=lc*la+dc*da*(1.-la);da=la+da*(1.-la);
 la=clamp(cres*.7+smoothstep(.6,1.,cs)*.28*th*dm,0.,1.);dc=vec3(1.)*la+dc*(1.-la);da=la+da*(1.-la);
 la=clamp(dm*(spec*1.2+spec2*.5),0.,1.);dc=vec3(1.)*la+dc*(1.-la);da=la+da*(1.-la);
 la=dm*smoothstep(-2.,0.,dd)*.4;dc=mix(vec3(1.),irid,.35)*la+dc*(1.-la);da=la+da*(1.-la);
 c=dc+c*(1.-da);a=da+a*(1.-da);
 gl_FragColor=vec4(c,a);
}`;

interface GLContextWrapper {
  gl: WebGLRenderingContext;
  u: Record<string, WebGLUniformLocation | null>;
}

interface Satellite {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  k: number;
}

interface Ripple {
  x: number;
  y: number;
  age: number;
  amp: number;
}

interface NavbarState {
  a: { x: number; v: number };
  b: { x: number; v: number };
  sy: { s: number; v: number };
  lead: number;
  lagFrom: number;
  sats: Satellite[];
  rips: Ripple[];
  t: { x: number; cy: number; q: number; r: number };
  q: number;
  mouse: { x: number; y: number; s: number; on: boolean };
  moving: boolean;
  split: boolean;
  ready: boolean;
  w: number;
  h: number;
  visible: boolean;
  reduce: boolean;
  raf: number;
  last: number;
  time: number;
  glc: GLContextWrapper | null;
}

function makeState(): NavbarState {
  return {
    a: { x: 0, v: 0 },
    b: { x: 0, v: 0 },
    sy: { s: 1, v: 0 },
    lead: 0,
    lagFrom: 0,
    sats: [],
    rips: [],
    t: { x: 0, cy: 0, q: 0, r: 21 },
    q: 0,
    mouse: { x: 0, y: 0, s: 0, on: false },
    moving: false,
    split: false,
    ready: false,
    w: 0,
    h: 0,
    visible: true,
    reduce: false,
    raf: 0,
    last: 0,
    time: 0,
    glc: null,
  };
}

function initGL(canvas: HTMLCanvasElement): GLContextWrapper | null {
  const gl = canvas.getContext('webgl', {
    premultipliedAlpha: true,
    alpha: true,
    antialias: false,
  });
  if (!gl) return null;

  const compile = (type: number, src: string) => {
    const s = gl.createShader(type);
    if (!s) return null;
    gl.shaderSource(s, src);
    gl.compileShader(s);
    return gl.getShaderParameter(s, gl.COMPILE_STATUS) ? s : null;
  };

  const vs = compile(gl.VERTEX_SHADER, VERTEX_SHADER);
  const fs = compile(gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
  if (!vs || !fs) return null;

  const prog = gl.createProgram();
  if (!prog) return null;
  gl.attachShader(prog, vs);
  gl.attachShader(prog, fs);
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return null;

  gl.useProgram(prog);
  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1, -1, 3, -1, -1, 3]),
    gl.STATIC_DRAW
  );
  const aPos = gl.getAttribLocation(prog, 'a');
  gl.enableVertexAttribArray(aPos);
  gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

  const u: Record<string, WebGLUniformLocation | null> = {};
  for (const name of [
    'uRes',
    'uDpr',
    'uTime',
    'uPill',
    'uBlob',
    'uSy',
    'uRip',
    'uMouse',
    'uDark',
    'uAmb',
  ]) {
    u[name] = gl.getUniformLocation(prog, name);
  }

  return { gl, u };
}

function supportsRefraction(): boolean {
  if (typeof window === 'undefined' || typeof CSS === 'undefined') return false;
  const ua = navigator.userAgent;
  const isChromium =
    ua.includes('Chrome/') || ua.includes('Chromium/') || ua.includes('Edg/');
  const isFirefox = ua.includes('Firefox/');
  return (
    isChromium &&
    !isFirefox &&
    Boolean(CSS.supports?.('backdrop-filter', 'url(#a)'))
  );
}

export function LiquidNavbar({
  items = defaultItems,
  defaultActive = 0,
  active,
  onChange,
  tone = 'light',
  compact,
  sound = false,
  className,
  style,
}: LiquidNavbarProps) {
  const [internalActive, setInternalActive] = useState(defaultActive);
  const currentActive = active !== undefined ? active : internalActive;

  const navRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dropRef = useRef<HTMLSpanElement>(null);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);
  const iconRefs = useRef<(HTMLElement | null)[]>([]);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const stateRef = useRef<NavbarState>(makeState());
  const [glMode, setGlMode] = useState<'on' | 'off'>('on');
  const [refractMode, setRefractMode] = useState(false);
  const [animState, setAnimState] = useState<{ i: number; n: number }>({
    i: -1,
    n: 0,
  });

  const darkVal = tone === 'dark' ? 1 : 0;
  const darkValRef = useRef(darkVal);
  darkValRef.current = darkVal;

  const draw = useCallback(() => {
    const s = stateRef.current;
    const target = s.t;
    const dx = Math.abs(s.a.x - s.b.x);
    const z = Math.min(dx / (2 * (s.q + target.r) || 1), 1);
    const dropR = target.r * (1 - 0.3 * z);

    if (s.glc) {
      const { gl, u } = s.glc;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
      gl.uniform2f(u.uRes, s.w + PAD * 2, s.h + PAD * 2);
      gl.uniform1f(u.uDpr, dpr);
      gl.uniform1f(u.uTime, s.time);
      gl.uniform4f(u.uPill, PAD, PAD, s.w, s.h);

      const blobData = new Float32Array(24);
      const syData = new Float32Array(6).fill(1);
      const leader = s.lead === 0 ? s.a : s.b;
      const follower = s.lead === 0 ? s.b : s.a;

      blobData.set(
        [
          leader.x,
          target.cy,
          s.q * (1 - 0.25 * z),
          target.r * (1 - 0.12 * z),
          follower.x,
          target.cy,
          s.q * (1 - 0.8 * z),
          target.r * (1 - 0.5 * z),
        ],
        0
      );
      syData[0] = syData[1] = s.sy.s;

      s.sats.slice(0, 4).forEach((sat, idx) => {
        blobData.set([sat.x, sat.y, 0, sat.r], 8 + idx * 4);
      });

      gl.uniform4fv(u.uBlob, blobData);
      gl.uniform1fv(u.uSy, syData);

      const ripData = new Float32Array(24);
      s.rips.slice(-6).forEach((rip, idx) => {
        ripData.set([rip.x, rip.y, rip.age, rip.amp], idx * 4);
      });
      gl.uniform4fv(u.uRip, ripData);
      gl.uniform3f(u.uMouse, s.mouse.x, s.mouse.y, s.mouse.s);
      gl.uniform1f(u.uDark, darkValRef.current);
      gl.uniform1f(u.uAmb, s.reduce ? 0 : 1);

      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    } else if (dropRef.current) {
      const left = Math.min(s.a.x, s.b.x) - s.q - dropR - PAD;
      const width = dx + 2 * (s.q + dropR);
      dropRef.current.style.width = `${width}px`;
      dropRef.current.style.transform = `translateX(${left}px) scaleY(${s.sy.s})`;
    }
  }, []);

  const updateSim = useCallback((dt: number, now: number) => {
    const s = stateRef.current;
    const target = s.t;
    s.time += dt;
    s.q += (target.q - s.q) * Math.min(1, dt * 12);

    const endpoints = [s.a, s.b];
    let settled = true;

    if (s.reduce) {
      s.a.x = s.b.x = target.x;
      s.a.v = s.b.v = 0;
      s.sy.s = 1;
      s.sats = [];
    } else {
      endpoints.forEach((pt, idx) => {
        const isLead = idx === s.lead;
        const springK = isLead ? 210 : 72;
        const damp = isLead ? 25 : 13;
        const lagMult = !isLead && now < s.lagFrom ? 0.08 : 1;

        pt.v += (springK * (target.x - pt.x) - damp * pt.v) * dt * lagMult;
        pt.x += pt.v * dt;

        const minX = PAD + 6 + s.q + target.r - 3;
        const maxX = PAD + s.w - 6 - s.q - target.r + 3;

        if (pt.x < minX || pt.x > maxX) {
          s.sy.v -= Math.min(Math.abs(pt.v), 900) * 0.0016;
          pt.x = Math.max(minX, Math.min(maxX, pt.x));
          pt.v *= -0.25;
        }

        if (Math.abs(target.x - pt.x) > 0.3 || Math.abs(pt.v) > 3) {
          settled = false;
        }
      });

      const leader = endpoints[s.lead];
      const scaleTarget = 1 - 0.2 * Math.min(Math.abs(leader.v) / 1500, 1);
      s.sy.v += (280 * (scaleTarget - s.sy.s) - 9 * s.sy.v) * dt;
      s.sy.s += s.sy.v * dt;

      if (Math.abs(s.sy.s - 1) > 0.002 || Math.abs(s.sy.v) > 0.02) {
        settled = false;
      }

      const dx = Math.abs(s.a.x - s.b.x);
      const dropR = target.r * (1 - 0.3 * Math.min(dx / (2 * (target.q + target.r) || 1), 1));

      if (!s.split && s.moving && dx - 2 * target.q - 2 * dropR > -6) {
        s.split = true;
        const follower = endpoints[1 - s.lead];
        const leaderPt = endpoints[s.lead];
        [0.3, 0.5, 0.72].forEach((ratio, idx) => {
          s.sats.push({
            x: follower.x + (leaderPt.x - follower.x) * ratio + (Math.random() - 0.5) * 6,
            y: target.cy + (Math.random() - 0.5) * 10,
            vx: (follower.v + leaderPt.v) * 0.45,
            vy: (Math.random() - 0.5) * 60,
            r: 5 + Math.random() * 3 - idx * 0.5,
            k: 70 + Math.random() * 90,
          });
        });
      }

      s.sats = s.sats.filter((sat) => {
        sat.vx += (sat.k * (target.x - sat.x) - 9 * sat.vx) * dt;
        sat.vy += (90 * (target.cy - sat.y) - 7 * sat.vy) * dt;
        sat.x += sat.vx * dt;
        sat.y += sat.vy * dt;
        sat.x = Math.max(PAD + 8 + sat.r, Math.min(PAD + s.w - 8 - sat.r, sat.x));
        sat.y = Math.max(target.cy - target.r + sat.r, Math.min(target.cy + target.r - sat.r, sat.y));
        if (Math.abs(target.x - sat.x) < target.q + target.r * 0.5) {
          sat.r -= dt * 26;
        }
        return sat.r > 0.6;
      });

      if (s.sats.length > 0) settled = false;
    }

    if (s.moving && settled) {
      s.moving = false;
      if (s.split || !s.reduce) {
        s.rips.push({
          x: target.x,
          y: target.cy,
          age: 0,
          amp: s.split ? 1.2 : 0.7,
        });
      }
    }

    s.rips.forEach((r) => (r.age += dt));
    s.rips = s.rips.filter((r) => r.age < 2.4);

    const mouseTarget = s.mouse.on ? 1 : 0;
    s.mouse.s += (mouseTarget - s.mouse.s) * Math.min(1, dt * 7);
  }, []);

  const wake = useCallback(() => {
    const s = stateRef.current;
    if (s.raf) return;
    s.last = performance.now();

    const tick = (now: number) => {
      const dt = Math.min((now - s.last) / 1000, 1 / 30);
      s.last = now;
      updateSim(dt, now);
      draw();
      const activeRunning =
        s.moving || s.rips.length > 0 || s.sats.length > 0 || s.mouse.s > 0.01;
      if (s.visible && (!s.reduce || activeRunning)) {
        s.raf = requestAnimationFrame(tick);
      } else {
        s.raf = 0;
      }
    };
    s.raf = requestAnimationFrame(tick);
  }, [draw, updateSim]);

  const measure = useCallback(() => {
    const nav = navRef.current;
    const currentItem = itemRefs.current[currentActive];
    if (!nav || !currentItem) return;

    const s = stateRef.current;
    s.w = nav.offsetWidth;
    s.h = nav.offsetHeight;

    const target = s.t;
    target.r = currentItem.offsetHeight / 2;
    target.q = Math.max(0, currentItem.offsetWidth / 2 - target.r);
    target.cy = PAD + currentItem.offsetTop + currentItem.offsetHeight / 2;

    const centerX = PAD + currentItem.offsetLeft + currentItem.offsetWidth / 2;
    if (s.ready) {
      if (Math.abs(centerX - target.x) > 0.5) {
        s.lead = Math.abs(centerX - s.a.x) <= Math.abs(centerX - s.b.x) ? 0 : 1;
        s.lagFrom = performance.now() + 70;
        s.moving = true;
        s.split = false;
      }
    } else {
      s.a.x = s.b.x = centerX;
      s.q = target.q;
      s.ready = true;
    }
    target.x = centerX;

    const canvas = canvasRef.current;
    if (canvas) {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const pixelW = s.w + PAD * 2;
      const pixelH = s.h + PAD * 2;
      if (
        canvas.width !== Math.round(pixelW * dpr) ||
        canvas.height !== Math.round(pixelH * dpr)
      ) {
        canvas.width = Math.round(pixelW * dpr);
        canvas.height = Math.round(pixelH * dpr);
        canvas.style.width = `${pixelW}px`;
        canvas.style.height = `${pixelH}px`;
      }
    }
    wake();
  }, [currentActive, wake]);

  useEffect(() => {
    setRefractMode(supportsRefraction());
    const s = stateRef.current;
    s.reduce = Boolean(
      window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches
    );

    const canvas = canvasRef.current;
    s.glc = canvas ? initGL(canvas) : null;
    if (!s.glc) setGlMode('off');

    const onLost = (e: Event) => {
      e.preventDefault();
      s.glc = null;
      setGlMode('off');
    };
    canvas?.addEventListener('webglcontextlost', onLost);

    const obs = new IntersectionObserver(([entry]) => {
      s.visible = entry.isIntersecting;
      if (s.visible) wake();
    });
    if (navRef.current) obs.observe(navRef.current);

    const onVis = () => {
      s.visible = document.visibilityState === 'visible';
      if (s.visible) wake();
    };
    document.addEventListener('visibilitychange', onVis);

    return () => {
      canvas?.removeEventListener('webglcontextlost', onLost);
      obs.disconnect();
      document.removeEventListener('visibilitychange', onVis);
      cancelAnimationFrame(s.raf);
      s.raf = 0;
    };
  }, [wake]);

  useLayoutEffect(() => {
    measure();
  }, [measure, items.length, compact]);

  const measureRef = useRef(measure);
  measureRef.current = measure;

  useEffect(() => {
    let lastW = -1;
    const ro = new ResizeObserver(() => {
      const w = navRef.current?.offsetWidth ?? 0;
      if (w !== lastW) {
        lastW = w;
        stateRef.current.ready = false;
        measureRef.current();
      }
    });
    if (navRef.current) ro.observe(navRef.current);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    wake();
  }, [tone, wake]);

  const localCoords = (clientX: number, clientY: number) => {
    if (!navRef.current) return { x: 0, y: 0 };
    const rect = navRef.current.getBoundingClientRect();
    return {
      x: clientX - rect.left + PAD,
      y: clientY - rect.top + PAD,
    };
  };

  const triggerRipple = (x: number, y: number, amp: number) => {
    const s = stateRef.current;
    if (!s.reduce) {
      s.rips.push({ x, y, age: 0, amp });
      wake();
    }
  };

  const iconCenter = (idx: number) => {
    const el = iconRefs.current[idx];
    if (!el) return null;
    const r = el.getBoundingClientRect();
    return localCoords(r.left + r.width / 2, r.top + r.height / 2);
  };

  const playPlip = () => {
    if (!sound) return;
    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      const ctx = audioCtxRef.current || (audioCtxRef.current = new AudioCtx());
      const t = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(420 + Math.random() * 80, t);
      osc.frequency.exponentialRampToValueAtTime(1500, t + 0.07);

      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.exponentialRampToValueAtTime(0.16, t + 0.008);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.16);

      osc.connect(gain).connect(ctx.destination);
      osc.start(t);
      osc.stop(t + 0.18);
    } catch {}
  };

  const selectItem = (idx: number) => {
    const item = items[idx];
    const fx = item?.fx ?? (item?.icon ? 'pop' : 'none');

    setAnimState((prev) => ({ i: idx, n: prev.n + 1 }));
    playPlip();

    const center = iconCenter(idx);
    if (center && fx === 'drop') {
      setTimeout(() => triggerRipple(center.x, stateRef.current.t.cy, 1.4), 430);
    }
    if (center && fx === 'plane') {
      triggerRipple(center.x, center.y, 0.6);
    }

    if (idx !== currentActive) {
      if (active === undefined) {
        setInternalActive(idx);
      }
      onChange?.(idx, items[idx]);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const nextIdx =
      (currentActive + (e.key === 'ArrowRight' ? 1 : -1) + items.length) %
      items.length;
    selectItem(nextIdx);
    itemRefs.current[nextIdx]?.focus();
  };

  const onMove = (e: React.PointerEvent) => {
    if (e.pointerType !== 'mouse') return;
    const pt = localCoords(e.clientX, e.clientY);
    const s = stateRef.current;
    s.mouse.x = pt.x;
    s.mouse.y = pt.y;
    s.mouse.on = true;
    wake();
  };

  return (
    <nav
      ref={navRef}
      className={['nimbus-nav', className].filter(Boolean).join(' ')}
      data-tone={tone}
      data-gl={glMode}
      data-compact={compact === undefined ? undefined : String(compact)}
      data-refract={refractMode ? 'on' : 'off'}
      aria-label="Main"
      onKeyDown={onKeyDown}
      onPointerMove={onMove}
      onPointerLeave={() => {
        stateRef.current.mouse.on = false;
        wake();
      }}
      onPointerDown={(e) => {
        const pt = localCoords(e.clientX, e.clientY);
        triggerRipple(pt.x, pt.y, 0.8);
      }}
      style={style}
    >
      <style dangerouslySetInnerHTML={{ __html: CSS_STYLES }} />
      <svg
        width="0"
        height="0"
        style={{ position: 'absolute' }}
        aria-hidden="true"
      >
        <filter
          id="nimbus-refract"
          x="0"
          y="0"
          width="100%"
          height="100%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.006 0.02"
            numOctaves="2"
            seed="7"
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation="2" result="soft" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="soft"
            scale="60"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>
      <span className="nimbus-glass" aria-hidden="true" />
      <canvas className="nimbus-water" ref={canvasRef} aria-hidden="true" />
      <span className="nimbus-drop" ref={dropRef} aria-hidden="true" />

      {items.map((item, idx) => {
        const fx = item.fx ?? 'pop';
        const isSelectedFx = animState.i === idx && fx !== 'none';
        const isCurrent = idx === currentActive;

        const commonProps = {
          ref: (el: HTMLElement | null) => {
            itemRefs.current[idx] = el;
          },
          className: 'nimbus-item',
          'aria-current': (isCurrent ? 'page' : undefined) as
            | 'page'
            | undefined,
          onClick: (e: React.MouseEvent) => {
            item.onClick?.(e);
            selectItem(idx);
          },
        };

        const content = (
          <>
            {item.icon && (
              <span
                key={isSelectedFx ? animState.n : 0}
                className="nv-ico"
                data-fx={isSelectedFx ? fx : undefined}
                ref={(el) => {
                  iconRefs.current[idx] = el;
                }}
              >
                {item.icon}
              </span>
            )}
            <span className="nimbus-label">{item.label}</span>
          </>
        );

        if (item.href) {
          return (
            <a
              key={item.label + idx}
              {...commonProps}
              href={item.href}
              aria-label={item.label}
            >
              {content}
            </a>
          );
        }

        return (
          <button
            key={item.label + idx}
            {...commonProps}
            type="button"
            aria-label={item.label}
          >
            {content}
          </button>
        );
      })}
    </nav>
  );
}

export default LiquidNavbar;
