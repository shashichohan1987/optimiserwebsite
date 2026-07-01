"use client";

import { useEffect } from "react";

export default function Animations() {
  useEffect(() => {
    /* trial form: validate + success */
    const form = document.getElementById("trialForm") as HTMLFormElement | null;
    if (form) {
      const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      function validField(f: Element): boolean {
        const inp = f.querySelector("input,select") as HTMLInputElement | HTMLSelectElement | null;
        if (!inp || !(inp as HTMLInputElement).required) return true;
        let ok = inp.value.trim().length > 0;
        if (ok && (inp as HTMLInputElement).type === "email") {
          ok = emailRe.test(inp.value.trim());
        }
        f.classList.toggle("err", !ok);
        return ok;
      }

      form.querySelectorAll<HTMLInputElement | HTMLSelectElement>(".field input,.field select").forEach((inp) => {
        inp.addEventListener("input", () => {
          const field = inp.closest(".field");
          if (field && field.classList.contains("err")) validField(field);
        });
        inp.addEventListener("blur", () => {
          const field = inp.closest(".field");
          if (field) validField(field);
        });
      });

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        let ok = true;
        let first: Element | null = null;
        form.querySelectorAll(".field").forEach((f) => {
          const v = validField(f);
          if (!v) {
            ok = false;
            if (!first) first = f;
          }
        });
        if (!ok) {
          if (first) {
            const focusTarget = (first as Element).querySelector<HTMLElement>("input,select");
            if (focusTarget) focusTarget.focus();
          }
          return;
        }
        const fnInput = form.querySelector<HTMLInputElement>("#fn");
        const name = fnInput ? fnInput.value.trim() : "";
        const sn = document.getElementById("successName");
        if (sn && name) sn.textContent = name;
        form.classList.add("done");
        const succ = document.getElementById("formSuccess");
        if (succ) succ.classList.add("on");
      });
    }
  }, []);

  return null;
}
