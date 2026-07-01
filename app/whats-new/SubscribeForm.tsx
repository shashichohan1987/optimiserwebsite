"use client";

export default function SubscribeForm() {
  return (
    <form className="sb-form" onSubmit={(e) => e.preventDefault()}>
      <input type="email" placeholder="you@company.com" aria-label="Email address" />
      <button className="btn btn-pri" type="submit">
        Subscribe <span className="arr">→</span>
      </button>
    </form>
  );
}
