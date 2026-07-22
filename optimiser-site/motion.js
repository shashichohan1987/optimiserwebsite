/* Optimiser motion language — shared Apple-quality micro-interaction layer.
   Additive: safe to load on any page after GSAP. Respects reduced motion. */
(function(){
'use strict';
if(window.__omMotion) return; window.__omMotion = true;
var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(reduced) return;
var lerp = function(a,b,t){ return a+(b-a)*t; };

function init(){

  /* ---------- 1. Magnetic buttons (spring-follow cursor) ---------- */
  document.querySelectorAll('.btn').forEach(function(btn){
    var tx=0,ty=0,cx=0,cy=0,raf=null;
    var run=function(){
      cx=lerp(cx,tx,.16); cy=lerp(cy,ty,.16);
      btn.style.translate=cx.toFixed(2)+'px '+cy.toFixed(2)+'px';
      if(Math.hypot(cx-tx,cy-ty)>.15){ raf=requestAnimationFrame(run); }
      else { raf=null; if(!tx&&!ty){ btn.style.translate=''; cx=cy=0; } }
    };
    btn.addEventListener('mousemove',function(e){
      var r=btn.getBoundingClientRect();
      tx=(e.clientX-r.left-r.width/2)*.3;
      ty=(e.clientY-r.top-r.height/2)*.3;
      if(!raf) run();
    });
    btn.addEventListener('mouseleave',function(){ tx=0; ty=0; if(!raf) run(); });
  });

  /* ---------- 2. Spring tilt on cards ---------- */
  var TILT='.vcard,.t2-b,.cb-h,.cb-c2,.ind,.t2-stat,.cb-pillar,.pcard,.fcard';
  document.querySelectorAll(TILT).forEach(function(card){
    var rx=0,ry=0,crx=0,cry=0,raf=null,base='';
    card.addEventListener('mouseenter',function(){ base=card.style.transform||''; if(base.indexOf('perspective(')>-1) base=''; });
    var run=function(){
      crx=lerp(crx,rx,.12); cry=lerp(cry,ry,.12);
      card.style.transform=(base?base+' ':'')+'perspective(1200px) rotateX('+crx.toFixed(2)+'deg) rotateY('+cry.toFixed(2)+'deg)';
      if(Math.abs(crx-rx)>.02||Math.abs(cry-ry)>.02){ raf=requestAnimationFrame(run); }
      else { raf=null; if(!rx&&!ry){ card.style.transform=base; crx=cry=0; } }
    };
    card.addEventListener('mousemove',function(e){
      var r=card.getBoundingClientRect();
      rx=-((e.clientY-r.top)/r.height-.5)*2;
      ry=((e.clientX-r.left)/r.width-.5)*2;
      if(!raf) run();
    });
    card.addEventListener('mouseleave',function(){ rx=0; ry=0; if(!raf) run(); });
  });

  /* ---------- 3. Eased stat counters ---------- */
  var nums=document.querySelectorAll('.t2-stat b,.cb-stat b,.ms-stat .lb b,[data-count]');
  if('IntersectionObserver' in window && nums.length){
    var io=new IntersectionObserver(function(es){
      es.forEach(function(en){
        if(!en.isIntersecting) return;
        var el=en.target; io.unobserve(el);
        var raw=el.textContent.trim();
        var m=raw.match(/([\d,]+\.?\d*)/); if(!m) return;
        var num=parseFloat(m[1].replace(/,/g,'')); if(!isFinite(num)||num===0) return;
        var dec=(m[1].split('.')[1]||'').length;
        var hasComma=m[1].indexOf(',')>-1;
        var t0=performance.now(), D=1400;
        var fmt=function(v){
          var s=v.toFixed(dec);
          if(hasComma) s=Number(s).toLocaleString('en-GB');
          return raw.replace(m[1],s);
        };
        var step=function(t){
          var p=Math.min(1,(t-t0)/D);
          var e=1-Math.pow(1-p,4); /* expo-out */
          el.textContent=fmt(num*e);
          if(p<1) requestAnimationFrame(step); else el.textContent=raw;
        };
        requestAnimationFrame(step);
      });
    },{threshold:.6});
    nums.forEach(function(n){ io.observe(n); });
  }

  /* ---------- 4. Scroll parallax on product shots ---------- */
  if(window.gsap && window.ScrollTrigger){
    window.gsap.registerPlugin(window.ScrollTrigger);
    window.gsap.utils.toArray('.f-vis,.hero-shot').forEach(function(el){
      window.gsap.fromTo(el,{y:34},{y:-34,ease:'none',
        scrollTrigger:{trigger:el,start:'top bottom',end:'bottom top',scrub:.5}});
    });
    /* floating hero chips drift slightly faster for depth */
    window.gsap.utils.toArray('.hero-chip').forEach(function(el){
      window.gsap.fromTo(el,{y:18},{y:-46,ease:'none',
        scrollTrigger:{trigger:el,start:'top bottom',end:'bottom top',scrub:.4}});
    });
  }
}

if(document.readyState==='loading'){ document.addEventListener('DOMContentLoaded',init); }
else { init(); }
})();
