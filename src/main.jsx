import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Counter from "./topics/Counter";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div>
      <div>계수기들</div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Counter action="입장" label="입장객 수" />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Counter action="주문" label="팝콘 주문 건수" />
      </div>
    </div>
  </StrictMode>
);
