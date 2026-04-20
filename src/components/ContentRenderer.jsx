import { useState } from 'react';
import CodeBlock from './CodeBlock';
import './ContentRenderer.css';

// ── Built-in interactive demos ───────────────────────────────
function CounterDemo() {
  const [count, setCount] = useState(0);
  return (
    <div className="demo-box">
      <p className="demo-label">🎮 Interactive Demo — Counter</p>
      <div className="demo-counter">
        <button onClick={() => setCount((c) => c - 1)} className="demo-btn demo-btn--minus">
          −
        </button>
        <span className="demo-count">{count}</span>
        <button onClick={() => setCount((c) => c + 1)} className="demo-btn demo-btn--plus">
          +
        </button>
      </div>
      <p className="demo-hint">Click the buttons. State updates trigger a re-render!</p>
    </div>
  );
}

function ToggleDemo() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="demo-box">
      <p className="demo-label">🎮 Interactive Demo — Conditional Rendering</p>
      <button className="demo-toggle-btn" onClick={() => setIsVisible((v) => !v)}>
        {isVisible ? 'Hide Message 🙈' : 'Show Message 👀'}
      </button>
      {isVisible && (
        <p className="demo-message">🎉 You revealed this message with conditional rendering!</p>
      )}
    </div>
  );
}

const DEMOS = {
  counter: CounterDemo,
  toggle: ToggleDemo,
};

// ── Main ContentRenderer ─────────────────────────────────────
function ContentRenderer({ content }) {
  return (
    <div className="content-renderer">
      {content.map((block, i) => {
        switch (block.type) {
          case 'heading':
            return (
              <h3 key={i} className="content-heading">
                {block.text}
              </h3>
            );

          case 'text':
            return (
              <p key={i} className="content-text">
                {renderInlineMarkdown(block.text)}
              </p>
            );

          case 'code':
            return <CodeBlock key={i} code={block.code} />;

          case 'tip':
            return (
              <div key={i} className="tip-box">
                <span className="tip-icon">💡</span>
                <p>{renderInlineMarkdown(block.text)}</p>
              </div>
            );

          case 'demo': {
            const DemoComponent = DEMOS[block.id];
            return DemoComponent ? <DemoComponent key={i} /> : null;
          }

          default:
            return null;
        }
      })}
    </div>
  );
}

// ── Inline markdown: **bold** and `code` ──────────────────
function renderInlineMarkdown(text) {
  // Split on **bold** and `code` patterns, keeping delimiters
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={i}>{part.slice(1, -1)}</code>;
    }
    if (part.includes('\n')) {
      return part.split('\n').map((line, j, arr) => (
        <span key={`${i}-${j}`}>
          {line}
          {j < arr.length - 1 && <br />}
        </span>
      ));
    }
    return part;
  });
}

export default ContentRenderer;
