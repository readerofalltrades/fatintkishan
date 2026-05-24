import FadeIn from "./FadeIn";
import "./PageLayout.css";

function PageLayout({ children }) {
  return (
    <FadeIn>
      <div className="page-layout">{children}</div>
    </FadeIn>
  );
}

export default PageLayout;
