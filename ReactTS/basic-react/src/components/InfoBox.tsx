import { type ReactNode } from "react";

type HintBox = {
  mode: "hint";
  children: ReactNode;
};

type WarningBoxProps = {
  mode: "warning";
  children: ReactNode;
  severity: "low" | "medium" | "high";
};

type InfoBoxProps = HintBox | WarningBoxProps;

export default function InfoBox(props: InfoBoxProps) {
  if (props.mode == "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{props.children}</p>
      </aside>
    );
  }
  return (
    <aside className={`infobox infobox-warning warning--${props.severity}`}>
      <h2>Warning</h2>
      <p>{props.children}</p>
    </aside>
  );
}
