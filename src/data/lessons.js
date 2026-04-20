// All React lessons from basic to advanced
// Each lesson has: id, title, emoji, description, content blocks, and a quiz

const lessons = [
  // ─────────────────────────────────────────
  // LESSON 1 — What is React?
  // ─────────────────────────────────────────
  {
    id: 1,
    title: 'What is React?',
    emoji: '⚛️',
    description: 'Discover what React is, why it exists, and how it works.',
    content: [
      {
        type: 'text',
        text: 'React is a JavaScript **library** for building user interfaces. It was created by Facebook (now Meta) in 2013 and is one of the most popular front-end tools in the world.',
      },
      {
        type: 'text',
        text: "Before React, developers had to manually update the browser's DOM (Document Object Model) every time data changed. This was slow, repetitive, and error-prone.",
      },
      {
        type: 'heading',
        text: 'The Virtual DOM',
      },
      {
        type: 'text',
        text: 'React solves this with a **Virtual DOM** — a lightweight in-memory copy of the real DOM. When your data changes, React updates the Virtual DOM first, compares it to the previous version (called **diffing**), and then updates only the parts of the real DOM that actually changed. This is called **reconciliation**.',
      },
      {
        type: 'code',
        code: `// A minimal React component
function Greeting() {
  return <h1>Hello, React! 👋</h1>;
}

// React renders this to the page as:
// <h1>Hello, React! 👋</h1>`,
      },
      {
        type: 'heading',
        text: 'Declarative UI',
      },
      {
        type: 'text',
        text: 'React is **declarative** — you describe **what** the UI should look like for a given state, and React figures out **how** to update the DOM to match. You don\'t write step-by-step instructions like "find this element and change its text". You just say "when `isLoggedIn` is true, show a welcome message" and React handles the rest.',
      },
      {
        type: 'tip',
        text: 'Think of React components like LEGO bricks — you build small, reusable pieces and assemble them into a full application.',
      },
    ],
    quizzes: [
      {
        type: 'mcq',
        question: "What technique does React use to efficiently update the browser's DOM?",
        options: [
          'It re-renders the entire page on every change',
          'It uses the Virtual DOM and a diffing algorithm',
          'It sends changes to a server which updates the DOM',
          'It uses CSS animations to update content',
        ],
        correct: 1,
        explanation:
          'React uses the Virtual DOM — a lightweight copy of the real DOM. It diffs old vs. new virtual DOM trees and applies only the minimum changes to the real DOM, keeping updates fast.',
      },
      {
        type: 'mcq',
        question: 'React is best described as:',
        options: [
          'A full-stack web framework like Django or Rails',
          'A JavaScript library for building user interfaces',
          'A programming language for building apps',
          'A database management system',
        ],
        correct: 1,
        explanation:
          "React is a JavaScript **library** focused specifically on the UI layer. It is not a full framework — it doesn't include routing or data fetching out of the box. That's why it's often combined with other tools.",
      },
      {
        type: 'mcq',
        question: 'Which of the following statements about React is FALSE?',
        options: [
          'React was created and is maintained by Meta (Facebook)',
          'React Native lets you build mobile apps using React',
          'React completely replaces HTML and CSS',
          'React is an open-source JavaScript library',
        ],
        correct: 2,
        explanation:
          "React does NOT replace HTML or CSS — it works alongside them. You still write CSS for styling, and React components ultimately produce HTML elements. React Native lets you build native mobile apps, but that's a separate framework.",
      },
      {
        type: 'mcq',
        question: 'What does it mean that React renders UIs "declaratively"?',
        options: [
          'You write step-by-step instructions for exactly how to update the DOM',
          'You describe what the UI should look like for a given state — React handles the updates',
          'You attach event listeners manually to every DOM element',
          'You must use TypeScript to declare component types',
        ],
        correct: 1,
        explanation:
          "Declarative means you describe the desired outcome ('render this UI when state is X'), not the steps to get there. React figures out the minimum DOM changes needed. This contrasts with imperative code where you manually manipulate DOM elements.",
      },
    ],
  },

  // ─────────────────────────────────────────
  // LESSON 2 — JSX
  // ─────────────────────────────────────────
  {
    id: 2,
    title: 'JSX — JavaScript + HTML',
    emoji: '📝',
    description: 'Learn JSX, the special syntax React uses to describe the UI.',
    content: [
      {
        type: 'text',
        text: "JSX stands for **JavaScript XML**. It looks like HTML, but it's actually JavaScript under the hood. JSX lets you write your UI structure right next to your JavaScript logic.",
      },
      {
        type: 'code',
        code: `// JSX looks like HTML inside JavaScript
function App() {
  const name = "Alice";

  return (
    <div className="container">
      <h1>Hello, {name}!</h1>
      <p>Welcome to React.</p>
    </div>
  );
}`,
      },
      {
        type: 'heading',
        text: 'Key JSX Rules',
      },
      {
        type: 'text',
        text: '**1. Use `className` instead of `class`** — `class` is a reserved word in JavaScript, so JSX uses `className` for CSS classes.',
      },
      {
        type: 'text',
        text: '**2. Every component must return one root element** — Wrap multiple elements in a `<div>` or a React Fragment `<>...</>`.',
      },
      {
        type: 'text',
        text: '**3. Use `{}` to embed JavaScript expressions** — Any valid JavaScript expression can go inside curly braces.',
      },
      {
        type: 'text',
        text: '**4. Self-close tags** — Tags with no children must be self-closed: `<img />`, `<br />`, `<input />`.',
      },
      {
        type: 'code',
        code: `// ✅ Correct JSX
function Card() {
  const isLoggedIn = true;

  return (
    <div className="card">
      <img src="avatar.png" alt="User" />
      <p>{isLoggedIn ? "Welcome back!" : "Please log in."}</p>
    </div>
  );
}

// ❌ Wrong — "class" instead of "className"
// <div class="card">...</div>`,
      },
      {
        type: 'tip',
        text: 'JSX is compiled by a tool called Babel into regular JavaScript calls like `React.createElement(...)`. You write JSX for readability — the browser never sees it directly.',
      },
    ],
    quizzes: [
      {
        type: 'code-fill',
        question: "In JSX, you can't use the HTML attribute `class`. What do you use instead?",
        codePrefix: `function Button() {
  return (
    <button `,
        codeSuffix: `="btn-primary">
      Click Me
    </button>
  );
}`,
        answer: 'className',
        explanation:
          '`class` is a reserved JavaScript keyword. In JSX, always use `className` to apply CSS classes to elements.',
      },
      {
        type: 'mcq',
        question: 'Which of the following is NOT a valid JSX rule?',
        options: [
          'A component must return one root element',
          'Self-closing tags must end with />  (e.g. <img />)',
          'You can embed JavaScript with {} inside JSX',
          'JSX elements can return multiple siblings without any wrapper',
        ],
        correct: 3,
        explanation:
          'JSX must have a single root element. Multiple elements must be wrapped in a `<div>` or a React Fragment `<>...</>`. Options A, B, and C are all correct JSX rules.',
      },
      {
        type: 'code-fill',
        question: 'Complete the JSX to embed the JavaScript variable `name` inside the heading.',
        codePrefix: `const name = 'Alice';
return <h1>Hello, {`,
        codeSuffix: `}!</h1>;`,
        answer: 'name',
        explanation:
          'Curly braces `{}` in JSX let you embed any valid JavaScript expression — a variable, function call, calculation, ternary, etc. Here `{name}` outputs the value of the `name` variable inside the `<h1>`.',
      },
      {
        type: 'mcq',
        question: 'Which JSX syntax correctly returns two sibling elements from a component?',
        options: [
          `return <h1>Hi</h1><p>Bye</p>`,
          `return (<h1>Hi</h1>), (<p>Bye</p>)`,
          `return (<><h1>Hi</h1><p>Bye</p></>)`,
          `return [<h1>Hi</h1>, <p>Bye</p>]`,
        ],
        correct: 2,
        explanation:
          'JSX requires a single root element. Wrap multiple siblings in a React Fragment `<>...</>` (shorthand for `<React.Fragment>`). This avoids adding an extra `<div>` to the DOM. Option D (returning an array) also works but requires `key` props on each item.',
      },
      {
        type: 'mcq',
        question: 'JSX is not valid JavaScript. What does a build tool like Babel do with it?',
        options: [
          'Converts JSX into plain HTML and sends it to the browser',
          'Ignores JSX and only processes regular JavaScript',
          'Transforms JSX into JavaScript function calls like React.createElement(...)',
          'Stores JSX in a special binary format',
        ],
        correct: 2,
        explanation:
          "Babel (or Vite's built-in transform) compiles JSX into `React.createElement(type, props, ...children)` calls. For example, `<button onClick={fn}>Hi</button>` becomes `React.createElement('button', { onClick: fn }, 'Hi')`. This is what the browser actually runs.",
      },
    ],
  },

  // ─────────────────────────────────────────
  // LESSON 3 — Components
  // ─────────────────────────────────────────
  {
    id: 3,
    title: 'Components',
    emoji: '🧩',
    description: 'Understand the building blocks of every React application.',
    content: [
      {
        type: 'text',
        text: 'A **component** is a reusable piece of UI. Everything in React is a component — buttons, forms, headers, entire pages. Components can be composed together to build complex interfaces.',
      },
      {
        type: 'heading',
        text: 'Functional Components',
      },
      {
        type: 'text',
        text: 'Modern React uses **functional components** — plain JavaScript functions that return JSX.',
      },
      {
        type: 'code',
        code: `// A simple functional component
function WelcomeCard() {
  return (
    <div className="card">
      <h2>Welcome! 👋</h2>
      <p>This is a React component.</p>
    </div>
  );
}

// Using the component inside another component
function App() {
  return (
    <div>
      <WelcomeCard />
      <WelcomeCard />  {/* Reused! */}
    </div>
  );
}`,
      },
      {
        type: 'heading',
        text: 'Component Rules',
      },
      {
        type: 'text',
        text: '**Component names must start with a capital letter.** This is how React tells the difference between a native HTML tag (`<div>`) and a custom component (`<WelcomeCard />`).',
      },
      {
        type: 'text',
        text: 'Components can be **nested** — a component can render other components. This creates a tree structure called the **component tree**.',
      },
      {
        type: 'code',
        code: `// Component tree example
function Header() {
  return <header><h1>My App</h1></header>;
}

function Footer() {
  return <footer><p>© 2025</p></footer>;
}

function App() {
  return (
    <div>
      <Header />      {/* Header component */}
      <main>Content here</main>
      <Footer />      {/* Footer component */}
    </div>
  );
}`,
      },
      {
        type: 'tip',
        text: 'Keep components small and focused. If a component is doing too many things, split it into smaller components.',
      },
      {
        type: 'heading',
        text: 'The children Prop',
      },
      {
        type: 'text',
        text: "When you place content **between** a component's opening and closing tags, React makes it available as a special prop called **`children`**. This lets you build flexible wrapper components.",
      },
      {
        type: 'code',
        code: `// 'children' holds whatever is placed inside the tags
function Card({ children }) {
  return <div className="card">{children}</div>;
}

function App() {
  return (
    <Card>
      <h2>My Title</h2>
      <p>Any content can go here!</p>
    </Card>
  );
}`,
      },
    ],
    quizzes: [
      {
        type: 'mcq',
        question: 'Which of the following is a valid React component definition?',
        options: [
          `function myCard() { return <div>Hello</div>; }`,
          `function MyCard() { return <div>Hello</div>; }`,
          `function MyCard() { console.log('hello'); }`,
          `const MyCard = <div>Hello</div>;`,
        ],
        correct: 1,
        explanation:
          "React components must: (1) start with a capital letter, and (2) return JSX. Option B is correct. Option A fails rule 1 (lowercase). Option C doesn't return JSX. Option D is JSX stored in a variable, not a component function.",
      },
      {
        type: 'mcq',
        question: 'How do you render a component called `UserCard` inside another component?',
        options: ['<userCard />', '<UserCard />', 'UserCard()', '{UserCard}'],
        correct: 1,
        explanation:
          'Custom components are rendered exactly like HTML tags, but their name must start with a capital letter: `<UserCard />`. Lowercase `<userCard />` would be treated as an unknown HTML element by React.',
      },
      {
        type: 'mcq',
        question: 'What is the purpose of the `children` prop?',
        options: [
          'It allows passing data from child to parent',
          "It contains the JSX placed between a component's opening and closing tags",
          "It's a required prop every React component must define",
          'It automatically generates child components based on data',
        ],
        correct: 1,
        explanation:
          "`children` is a special prop that holds whatever JSX you place between `<MyComponent>` and `</MyComponent>`. For example, `<Card><p>Hello</p></Card>` passes `<p>Hello</p>` as `children` to `Card`. It's used for composable, wrapper-style components.",
      },
      {
        type: 'code-fill',
        question: 'Complete the component to render the value of the `name` prop inside a heading.',
        codePrefix: `function Greeting({ name }) {
  return <h1>Hello, {`,
        codeSuffix: `}!</h1>;
}`,
        answer: 'name',
        explanation:
          'After destructuring `name` from props, you embed it in JSX using `{name}`. This is the standard pattern: destructure props in the function parameters and reference them by name inside the JSX.',
      },
    ],
  },

  // ─────────────────────────────────────────
  // LESSON 4 — Props
  // ─────────────────────────────────────────
  {
    id: 4,
    title: 'Props — Passing Data',
    emoji: '📦',
    description: 'Learn how to pass data into components using props.',
    content: [
      {
        type: 'text',
        text: '**Props** (short for properties) are how you pass data from a **parent** component to a **child** component. They make components reusable and configurable — like parameters to a function.',
      },
      {
        type: 'code',
        code: `// The child component receives props as an argument
function Greeting({ name, age }) {
  return (
    <p>
      Hello, {name}! You are {age} years old.
    </p>
  );
}

// The parent component passes props like HTML attributes
function App() {
  return (
    <div>
      <Greeting name="Alice" age={28} />
      <Greeting name="Bob" age={35} />
    </div>
  );
}`,
      },
      {
        type: 'heading',
        text: 'Props Are Read-Only',
      },
      {
        type: 'text',
        text: "A component must **never modify its own props**. Props flow one way — from parent to child. If you need to change data, that's what **state** is for (we'll cover that next!).",
      },
      {
        type: 'code',
        code: `// ✅ Good — reading props
function Badge({ color, label }) {
  return (
    <span style={{ backgroundColor: color }}>
      {label}
    </span>
  );
}

// ❌ Bad — never mutate props
function Badge({ color }) {
  color = "red"; // Don't do this!
  return <span style={{ backgroundColor: color }}>Badge</span>;
}

// Using the Badge component
function App() {
  return (
    <>
      <Badge color="blue" label="Info" />
      <Badge color="green" label="Success" />
      <Badge color="red" label="Error" />
    </>
  );
}`,
      },
      {
        type: 'heading',
        text: 'The children Prop',
      },
      {
        type: 'text',
        text: "You can also pass content **between** a component's opening and closing tags. React makes this available as `props.children`.",
      },
      {
        type: 'code',
        code: `// Using the special "children" prop
function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

function App() {
  return (
    <Card>
      <h2>Title</h2>
      <p>Any content can go here!</p>
    </Card>
  );
}`,
      },
      {
        type: 'tip',
        text: 'Strings in props don\'t need curly braces: `name="Alice"`. But numbers, booleans, and JavaScript expressions do: `age={28}`, `isActive={true}`.',
      },
    ],
    quizzes: [
      {
        type: 'code-fill',
        question:
          'Complete the code to pass a prop named `title` with the value `"React Basics"` to the `LessonCard` component.',
        codePrefix: `function App() {
  return (
    <LessonCard `,
        codeSuffix: `="React Basics" />
  );
}`,
        answer: 'title',
        explanation:
          'Props are passed like HTML attributes. You write the prop name, followed by `=`, then the value. For string values, you use quotes: `title="React Basics"`.',
      },
      {
        type: 'mcq',
        question:
          "A component receives a prop but the parent doesn't pass it. What will the prop value be inside the component?",
        options: ['React throws an error', "An empty string ''", 'undefined', 'null'],
        correct: 2,
        explanation:
          "If a prop is not passed, its value is `undefined` inside the component. You can provide a default using destructuring: `function Card({ title = 'Default Title' })`. Never assume missing props are null.",
      },
      {
        type: 'mcq',
        question: 'Which syntax correctly passes the number 42 (not the string "42") as a prop?',
        options: [
          `<Counter value="42" />`,
          `<Counter value={42} />`,
          `<Counter value=42 />`,
          `<Counter value=(42) />`,
        ],
        correct: 1,
        explanation:
          'To pass a non-string value (number, boolean, object, expression), wrap it in curly braces: `value={42}`. Without the braces (`value="42"`), React treats it as the string `"42"`. This difference matters for comparisons and arithmetic.',
      },
      {
        type: 'code-fill',
        question:
          'Complete the function to give `disabled` a default value of `false` when the prop is not passed.',
        codePrefix: `function Button({ label, disabled = `,
        codeSuffix: ` }) {
  return <button disabled={disabled}>{label}</button>;
}`,
        answer: 'false',
        explanation:
          'Default parameter values in destructuring (`disabled = false`) are used when the prop is `undefined` (not passed). This prevents needing `|| false` checks inside the component and makes the API self-documenting.',
      },
    ],
  },

  // ─────────────────────────────────────────
  // LESSON 5 — State with useState
  // ─────────────────────────────────────────
  {
    id: 5,
    title: 'State with useState',
    emoji: '🎛️',
    description: 'Make your components interactive with the useState hook.',
    content: [
      {
        type: 'text',
        text: '**State** is data that can change over time and is managed by a component itself. When state changes, React automatically **re-renders** the component to show the updated UI.',
      },
      {
        type: 'text',
        text: 'You add state to a functional component using the `useState` **Hook** — a special React function.',
      },
      {
        type: 'code',
        code: `import { useState } from 'react';

function Counter() {
  // useState returns [currentValue, setterFunction]
  const [count, setCount] = useState(0); // 0 is the initial value

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment ➕
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement ➖
      </button>
      <button onClick={() => setCount(0)}>
        Reset 🔄
      </button>
    </div>
  );
}`,
      },
      {
        type: 'heading',
        text: 'How useState Works',
      },
      {
        type: 'text',
        text: '1. `useState(0)` creates a state variable initialized to `0`.\n2. It returns an array: `[count, setCount]` — the value and the function to update it.\n3. Calling `setCount(newValue)` tells React to update the state and re-render the component.',
      },
      {
        type: 'text',
        text: "**Never update state directly** — always use the setter function. Direct mutation (`count = count + 1`) won't trigger a re-render.",
      },
      {
        type: 'code',
        code: `import { useState } from 'react';

function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  return (
    <button onClick={() => setIsOn(!isOn)}>
      {isOn ? "ON 🟢" : "OFF 🔴"}
    </button>
  );
}

// You can also use a function in the setter (recommended for
// updates that depend on the previous state):
function Counter() {
  const [count, setCount] = useState(0);

  // ✅ Best practice: use previous state
  const increment = () => setCount(prev => prev + 1);

  return <button onClick={increment}>Count: {count}</button>;
}`,
      },
      {
        type: 'tip',
        text: 'You can have as many `useState` calls as you need in one component. Each call creates an independent piece of state.',
      },
      {
        type: 'heading',
        text: 'Stale State & Functional Updates',
      },
      {
        type: 'text',
        text: 'If you call `setCount(count + 1)` **twice in a row** inside one handler, both calls read the same `count` value before any re-render happens — so `count` only increases by **1**, not 2. To fix this, use the **functional form** which always receives the latest value:',
      },
      {
        type: 'code',
        code: `// ❌ Stale state problem — count only increases by 1
function handleDoubleIncrement() {
  setCount(count + 1); // reads count = 0 → schedules 1
  setCount(count + 1); // ALSO reads count = 0 → schedules 1
}

// ✅ Functional form — always uses the latest value
function handleDoubleIncrement() {
  setCount(prev => prev + 1); // 0 → 1
  setCount(prev => prev + 1); // 1 → 2 ✓
}`,
      },
      {
        type: 'demo',
        id: 'counter',
      },
    ],
    quizzes: [
      {
        type: 'mcq',
        question: 'What does `useState(0)` return?',
        options: [
          'Just the current state value (0)',
          'Just the setter function',
          'An array with [currentValue, setterFunction]',
          'An object with { value: 0, set: function }',
        ],
        correct: 2,
        explanation:
          '`useState` returns an array of exactly two items: the current state value and a setter function to update it. We use array destructuring to name them: `const [count, setCount] = useState(0)`.',
      },
      {
        type: 'code-fill',
        question: 'Complete the code to correctly update state using the setter function.',
        codePrefix: `const [score, setScore] = useState(0);

// Increment score by 1
`,
        codeSuffix: `(prev => prev + 1);`,
        answer: 'setScore',
        explanation:
          'You must always use the setter function returned by useState (here: `setScore`) to update state. Calling it schedules a re-render with the new value. Using the function form `setScore(prev => prev + 1)` is best practice when the new value depends on the previous one.',
      },
      {
        type: 'mcq',
        question:
          'Why is directly mutating state (e.g. `state.items.push(...)`) a mistake in React?',
        options: [
          'It immediately crashes the browser',
          "React won't detect the change and won't schedule a re-render",
          'It works for arrays but not for objects',
          "It's fine as long as you call forceUpdate() afterwards",
        ],
        correct: 1,
        explanation:
          "React re-renders components only when `setState` (or the setter from `useState`) is called. If you mutate state directly, you're changing the same object reference React already has — it sees no difference and doesn't know to re-render. Always replace state with a new value.",
      },
      {
        type: 'mcq',
        question:
          'You call `setCount(count + 1)` twice in a row inside one event handler. By how much does `count` increase?',
        options: [
          'By 2, because you called the setter twice',
          'By 1, because both calls read the same stale `count` value before re-rendering',
          'React throws an error for multiple updates',
          'By 0, because React ignores duplicate calls',
        ],
        correct: 1,
        explanation:
          'Both `setCount(count + 1)` calls capture the same `count` value (say, 0), so both schedule `count = 1`. The state only increases by 1. To correctly chain updates, use the functional form: `setCount(prev => prev + 1)` which always works from the latest value.',
      },
      {
        type: 'code-fill',
        question: 'Complete the useState call to initialise the `isOpen` state to `false`.',
        codePrefix: `const [isOpen, setIsOpen] = useState(`,
        codeSuffix: `);`,
        answer: 'false',
        explanation:
          'The argument passed to `useState` is the initial value of the state variable. For a boolean toggle (open/closed, visible/hidden), `false` is the natural starting value. The setter `setIsOpen` can then be called with `true` or `false` to update it.',
      },
    ],
  },

  // ─────────────────────────────────────────
  // LESSON 6 — Event Handling
  // ─────────────────────────────────────────
  {
    id: 6,
    title: 'Event Handling',
    emoji: '🖱️',
    description: 'Respond to user interactions like clicks, typing, and hovering.',
    content: [
      {
        type: 'text',
        text: 'React handles browser events using camelCase attribute names. Instead of `onclick`, you write `onClick`. Instead of `onchange`, you write `onChange`.',
      },
      {
        type: 'code',
        code: `// Event handlers are functions passed as props
function App() {
  // Define the handler function
  function handleClick() {
    alert("Button was clicked!");
  }

  return (
    // Pass the function reference (no parentheses!)
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}`,
      },
      {
        type: 'heading',
        text: 'Common Events',
      },
      {
        type: 'code',
        code: `import { useState } from 'react';

function EventExamples() {
  const [text, setText] = useState("");
  const [hovered, setHovered] = useState(false);

  return (
    <div>
      {/* onClick — button clicks */}
      <button onClick={() => alert("Clicked!")}>
        Click
      </button>

      {/* onChange — input typing */}
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <p>You typed: {text}</p>

      {/* onMouseEnter / onMouseLeave — hover */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ background: hovered ? "yellow" : "white" }}
      >
        Hover over me!
      </div>
    </div>
  );
}`,
      },
      {
        type: 'heading',
        text: 'The Event Object',
      },
      {
        type: 'text',
        text: 'React event handlers receive a **synthetic event object** as their first argument. For inputs, `e.target.value` gives you what the user typed.',
      },
      {
        type: 'code',
        code: `function SearchBar() {
  const [query, setQuery] = useState("");

  // e is the event object, e.target.value is the input's value
  function handleChange(e) {
    setQuery(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault(); // Prevents page reload on form submit
    alert("Searching for: " + query);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={query} onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
}`,
      },
      {
        type: 'tip',
        text: 'Pass a **function reference** to event handlers, not a function call. Write `onClick={handleClick}`, NOT `onClick={handleClick()}`. The second version calls the function immediately when the component renders!',
      },
      {
        type: 'heading',
        text: 'Passing Arguments to Handlers',
      },
      {
        type: 'text',
        text: 'When you need to pass extra arguments (like an item ID) to a handler, wrap it in an **arrow function**. This keeps the handler call deferred until the event fires.',
      },
      {
        type: 'code',
        code: `function TodoList({ items, onDelete }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          {item.text}
          {/* Arrow wrapper: called on click, passes item.id */}
          <button onClick={() => onDelete(item.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}`,
      },
    ],
    quizzes: [
      {
        type: 'code-fill',
        question: 'Complete the code to handle a button click event in React.',
        codePrefix: `function App() {
  function sayHello() {
    alert("Hello!");
  }

  return (
    <button `,
        codeSuffix: `={sayHello}>
      Say Hello
    </button>
  );
}`,
        answer: 'onClick',
        explanation:
          'React uses camelCase event names. The HTML `onclick` attribute becomes `onClick` in JSX. The value is the function reference (without parentheses).',
      },
      {
        type: 'mcq',
        question: 'What is WRONG with this code: `<button onClick={handleClick()}>Click</button>`?',
        options: [
          "The event name should be 'onclick' in lowercase",
          '`handleClick()` calls the function immediately when the component renders, not on click',
          "You can't pass a function to an event handler in JSX",
          'Nothing is wrong — this is valid React code',
        ],
        correct: 1,
        explanation:
          '`onClick={handleClick()}` calls the function immediately during rendering, not on click. The result (probably `undefined`) is passed as the handler. The correct form is `onClick={handleClick}` — a reference — or `onClick={() => handleClick()}` if you need to pass arguments.',
      },
      {
        type: 'mcq',
        question: 'How do you correctly pass an argument to an event handler in JSX?',
        options: [
          `onClick={handleDelete(id)}`,
          `onClick={() => handleDelete(id)}`,
          `onClick="handleDelete(id)"`,
          `onClick={handleDelete} data-id={id}`,
        ],
        correct: 1,
        explanation:
          'To pass arguments, wrap the call in an arrow function: `onClick={() => handleDelete(id)}`. This creates a new function that gets called on click, which then calls `handleDelete(id)`. The first option calls `handleDelete(id)` immediately during render — a classic mistake.',
      },
    ],
  },

  // ─────────────────────────────────────────
  // LESSON 7 — Conditional Rendering
  // ─────────────────────────────────────────
  {
    id: 7,
    title: 'Conditional Rendering',
    emoji: '🔀',
    description: 'Show or hide content based on conditions.',
    content: [
      {
        type: 'text',
        text: 'Components often need to render different content depending on some condition — whether a user is logged in, whether data has loaded, whether an error occurred, etc.',
      },
      {
        type: 'heading',
        text: '1. if / else',
      },
      {
        type: 'code',
        code: `function UserStatus({ isLoggedIn }) {
  if (isLoggedIn) {
    return <p>Welcome back! 👋</p>;
  } else {
    return <p>Please log in.</p>;
  }
}`,
      },
      {
        type: 'heading',
        text: '2. Ternary Operator (inline)',
      },
      {
        type: 'text',
        text: 'The ternary `condition ? valueIfTrue : valueIfFalse` is perfect for conditional rendering inside JSX.',
      },
      {
        type: 'code',
        code: `function UserStatus({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? (
        <p>Welcome back! 👋</p>
      ) : (
        <p>Please log in.</p>
      )}
    </div>
  );
}`,
      },
      {
        type: 'heading',
        text: '3. The && Operator (show or nothing)',
      },
      {
        type: 'text',
        text: 'If you only want to show something when a condition is true (and nothing when false), use `&&`.',
      },
      {
        type: 'code',
        code: `function Notification({ hasMessages, count }) {
  return (
    <div>
      <h1>Inbox</h1>
      {/* Only shows when hasMessages is true */}
      {hasMessages && (
        <p>You have {count} new messages! 📬</p>
      )}
    </div>
  );
}`,
      },
      {
        type: 'tip',
        text: 'Avoid using `0 && <Component />` — if the value is `0`, React will render the number `0` on screen! Use `count > 0 && <Component />` instead.',
      },
      {
        type: 'demo',
        id: 'toggle',
      },
    ],
    quizzes: [
      {
        type: 'mcq',
        question:
          'Which syntax is best for rendering one thing if true, and a different thing if false — all inside JSX?',
        options: [
          'An if/else statement directly inside JSX',
          'The ternary operator: condition ? a : b',
          'A switch statement',
          'The && operator',
        ],
        correct: 1,
        explanation:
          "The ternary operator is the cleanest way to choose between two JSX outputs inline. `if/else` and `switch` can't be used directly inside JSX (they're statements, not expressions). The `&&` operator only works when one option is 'nothing'.",
      },
      {
        type: 'code-fill',
        question: 'Complete the JSX to show `<Notification />` ONLY when `hasAlert` is true.',
        codePrefix: `return (
  <div>
    {hasAlert `,
        codeSuffix: ` <Notification />}
  </div>
);`,
        answer: '&&',
        explanation:
          "The `&&` (AND) operator renders the right side only when the left side is truthy. If `hasAlert` is false, nothing is rendered — perfect for 'show or nothing' conditions. Avoid `0 && <Component />` since React renders `0` as text.",
      },
      {
        type: 'mcq',
        question: 'What does `{0 && <Banner />}` render?',
        options: [
          'Nothing — falsy values are never rendered',
          'The `<Banner />` component',
          'The text "0" (React renders the number 0)',
          'null',
        ],
        correct: 2,
        explanation:
          'Unlike `false`, `null`, and `undefined`, the number `0` IS rendered by React as text. This is a common gotcha. Instead of `{count && <Component />}`, write `{count > 0 && <Component />}` or `{!!count && <Component />}` to be safe.',
      },
      {
        type: 'code-fill',
        question: 'Complete the ternary to show "logged in" when user is set, otherwise "guest".',
        codePrefix: `return <p>{user `,
        codeSuffix: ` 'logged in' : 'guest'}</p>;`,
        answer: '?',
        explanation:
          "The ternary operator `condition ? valueIfTrue : valueIfFalse` is the standard way to choose between two JSX outputs inline. Here `user ? 'logged in' : 'guest'` returns the appropriate string based on whether `user` is truthy.",
      },
    ],
  },

  // ─────────────────────────────────────────
  // LESSON 8 — Lists & Keys
  // ─────────────────────────────────────────
  {
    id: 8,
    title: 'Lists & Keys',
    emoji: '📋',
    description: 'Render arrays of data and understand why keys matter.',
    content: [
      {
        type: 'text',
        text: "Most apps need to display lists of data — users, products, messages, etc. In React, you use JavaScript's `.map()` method to transform an array of data into an array of JSX elements.",
      },
      {
        type: 'code',
        code: `function ShoppingList() {
  const items = ["Apples", "Bananas", "Cherries"];

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}`,
      },
      {
        type: 'heading',
        text: 'Why Keys Matter',
      },
      {
        type: 'text',
        text: "When React renders a list, it needs a way to tell items apart so it can efficiently update only what changed. That's what the **`key`** prop is for.",
      },
      {
        type: 'text',
        text: "Keys must be **unique among siblings** and **stable** (don't change between renders). Always prefer a unique ID from your data over using the array index.",
      },
      {
        type: 'code',
        code: `// ✅ Best — use a unique ID from your data
function TodoList() {
  const todos = [
    { id: 101, text: "Learn React" },
    { id: 102, text: "Build a project" },
    { id: 103, text: "Get a job 🚀" },
  ];

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

// ⚠️ OK if list never reorders — use index as key
// ❌ Bad — no key at all (React will warn you)`,
      },
      {
        type: 'tip',
        text: "Keys are not passed to the component as props — they're used internally by React. If you need an ID inside the component, pass it as a separate prop.",
      },
    ],
    quizzes: [
      {
        type: 'mcq',
        question: 'Why does React need a `key` prop on list items?',
        options: [
          'To apply CSS styling to each list item',
          'To pass data to the child component',
          'To help React identify which items changed, were added, or removed',
          'To set the order in which items are rendered',
        ],
        correct: 2,
        explanation:
          "Keys help React's diffing algorithm identify which items in a list changed between renders. With unique, stable keys, React can update only what changed instead of re-rendering the whole list.",
      },
      {
        type: 'code-fill',
        question: 'Complete the list rendering code with the correct JavaScript array method.',
        codePrefix: `const fruits = ['Apple', 'Banana', 'Cherry'];

return (
  <ul>
    {fruits.`,
        codeSuffix: `((fruit, i) => (
      <li key={i}>{fruit}</li>
    ))}
  </ul>
);`,
        answer: 'map',
        explanation:
          '`Array.map()` transforms each element in an array into a JSX element and returns a new array. React can then render that array. Each item needs a unique `key` prop to help React track changes efficiently.',
      },
      {
        type: 'mcq',
        question: 'Using the array index as a `key` is problematic when...',
        options: [
          'The list has more than 50 items',
          'Items can be reordered, inserted, or deleted',
          'The list items contain images',
          'The list is rendered inside a `<ul>` element',
        ],
        correct: 1,
        explanation:
          'When items are reordered, a component that had key=0 might now represent a completely different item. React reuses DOM nodes based on keys, so mismatched keys cause subtle state bugs (like stale input values). Use stable, unique IDs (e.g. from a database) as keys instead.',
      },
      {
        type: 'code-fill',
        question: 'Complete the `.map()` callback to double each number in the array.',
        codePrefix: `const doubled = numbers.map(`,
        codeSuffix: ` => n * 2);`,
        answer: 'n',
        explanation:
          'The `.map()` callback receives each array element as its first argument. Naming it `n` (or any variable name) lets you reference the current item inside the callback. The arrow function returns `n * 2`, producing a new array of doubled values.',
      },
    ],
  },

  // ─────────────────────────────────────────
  // LESSON 9 — useEffect
  // ─────────────────────────────────────────
  {
    id: 9,
    title: 'useEffect Hook',
    emoji: '⚡',
    description: 'Run code in response to renders and manage side effects.',
    content: [
      {
        type: 'text',
        text: 'The `useEffect` hook lets you run **side effects** — code that reaches outside the component, like fetching data, setting timers, or updating the document title.',
      },
      {
        type: 'code',
        code: `import { useState, useEffect } from 'react';

function PageTitleUpdater() {
  const [count, setCount] = useState(0);

  // This runs after every render where 'count' changed
  useEffect(() => {
    document.title = \`Clicked \${count} times\`;
  }, [count]); // <-- dependency array

  return (
    <button onClick={() => setCount(c => c + 1)}>
      Click me ({count})
    </button>
  );
}`,
      },
      {
        type: 'heading',
        text: 'The Dependency Array',
      },
      {
        type: 'text',
        text: 'The second argument to `useEffect` controls when it runs:',
      },
      {
        type: 'code',
        code: `// 1. No dependency array → runs after EVERY render
useEffect(() => {
  console.log("Runs every time the component re-renders");
});

// 2. Empty array [] → runs ONCE after first render (mount)
useEffect(() => {
  console.log("Runs only once, like componentDidMount");
}, []);

// 3. Array with values → runs when those values change
useEffect(() => {
  console.log("Runs when 'userId' changes");
}, [userId]);`,
      },
      {
        type: 'heading',
        text: 'Cleanup',
      },
      {
        type: 'text',
        text: 'If your effect sets up a subscription or a timer, you should clean it up when the component is removed. Return a **cleanup function** from your effect.',
      },
      {
        type: 'code',
        code: `useEffect(() => {
  // Set up a timer
  const timer = setInterval(() => {
    console.log("Tick!");
  }, 1000);

  // Return a cleanup function — runs when component unmounts
  // or before the effect runs again
  return () => {
    clearInterval(timer);
    console.log("Timer cleared!");
  };
}, []);`,
      },
      {
        type: 'tip',
        text: "If you forget to add a value to the dependency array that your effect uses, you'll get stale data bugs. React's ESLint plugin (`eslint-plugin-react-hooks`) warns you about this automatically.",
      },
    ],
    quizzes: [
      {
        type: 'mcq',
        question: 'When does `useEffect(() => { ... }, [])` run? (empty dependency array)',
        options: [
          'After every single render',
          'Only once, after the component first mounts',
          'Only when the component unmounts',
          "Never — an empty array means no dependencies so it's skipped",
        ],
        correct: 1,
        explanation:
          'An empty dependency array `[]` means "this effect has no dependencies". React runs it exactly once — after the component mounts (appears on screen for the first time). This is perfect for one-time setup like fetching initial data.',
      },
      {
        type: 'mcq',
        question:
          'You set up an event listener inside `useEffect`. What should you do to avoid memory leaks?',
        options: [
          'Nothing — React handles all cleanup automatically',
          'Use a try/catch block inside the effect',
          'Return a cleanup function from `useEffect` that removes the listener',
          'Call `useEffect` twice with opposite effects to cancel each other',
        ],
        correct: 2,
        explanation:
          'Always return a cleanup function from `useEffect` when you set up subscriptions, timers, or event listeners. React calls this cleanup when the component unmounts (or before the effect runs again), preventing memory leaks and duplicate listeners.',
      },
      {
        type: 'code-fill',
        question: 'Complete the dependency array so the effect re-runs only when `title` changes.',
        codePrefix: `useEffect(() => {
  document.title = title;
}, [`,
        codeSuffix: `]);`,
        answer: 'title',
        explanation:
          'The dependency array tells React which values to watch. When `title` changes between renders, React re-runs this effect. An empty array `[]` would only run once; omitting the array entirely runs after every render. Always list every value used inside the effect.',
      },
      {
        type: 'mcq',
        question: 'What happens when `useEffect` is called with NO dependency array at all?',
        options: [
          'It runs only once after the component first mounts',
          'It never runs — you must provide a dependency array',
          'It runs after every single render (mount and all updates)',
          'It runs only when the component unmounts',
        ],
        correct: 2,
        explanation:
          'Without a dependency array, `useEffect` runs after every render. This is rarely what you want for expensive operations. An empty `[]` runs once; a filled array `[dep1, dep2]` runs when those change; no array runs every time.',
      },
      {
        type: 'mcq',
        question: 'You have `useEffect(() => { ... }, [userId])`. When does this effect re-run?',
        options: [
          'Only once, when the component first mounts',
          'Whenever any state or prop in the component changes',
          'Whenever `userId` changes value between renders',
          'Every 1 second automatically',
        ],
        correct: 2,
        explanation:
          "With `[userId]` as the dependency array, React re-runs the effect when — and only when — `userId` changes. Other state/prop changes don't trigger it. This is how you efficiently fetch data when a selected user changes, for example.",
      },
    ],
  },

  // ─────────────────────────────────────────
  // LESSON 10 — Forms & Controlled Inputs
  // ─────────────────────────────────────────
  {
    id: 10,
    title: 'Forms & Controlled Inputs',
    emoji: '📋',
    description: 'Build forms where React controls the input values.',
    content: [
      {
        type: 'text',
        text: 'In HTML, form elements like `<input>` maintain their own state. In React, you can make React the **single source of truth** by controlling the input value with state. These are called **controlled components**.',
      },
      {
        type: 'code',
        code: `import { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); // Stop the page from reloading
    console.log("Email:", email);
    console.log("Password:", password);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}              // Controlled by state
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}           // Controlled by state
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Log In</button>
    </form>
  );
}`,
      },
      {
        type: 'heading',
        text: 'Controlled vs Uncontrolled',
      },
      {
        type: 'text',
        text: '**Controlled**: React state drives the input value. You always know what the current value is. Best for most cases.',
      },
      {
        type: 'text',
        text: '**Uncontrolled**: The DOM manages the value itself. You read the value using a `ref`. Useful for file inputs or integrating with non-React code.',
      },
      {
        type: 'code',
        code: `import { useState } from 'react';

// A reusable form using one state object for all fields
function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,       // Keep existing fields
      [name]: value  // Update only the changed field
    }));
  }

  return (
    <form>
      <input name="name" value={formData.name} onChange={handleChange} />
      <input name="email" value={formData.email} onChange={handleChange} />
    </form>
  );
}`,
      },
      {
        type: 'tip',
        text: 'Always call `e.preventDefault()` inside form `onSubmit` handlers to prevent the browser from reloading the page — which is the default HTML form behavior.',
      },
    ],
    quizzes: [
      {
        type: 'code-fill',
        question:
          'What event handler do you use on an `<input>` to update its controlled state as the user types?',
        codePrefix: `function MyInput() {
  const [text, setText] = useState("");

  return (
    <input
      value={text}
      `,
        codeSuffix: `={(e) => setText(e.target.value)}
    />
  );
}`,
        answer: 'onChange',
        explanation:
          'The `onChange` event fires every time the user types in an input. You use it to update the state, which then updates the `value`, keeping React in control.',
      },
      {
        type: 'mcq',
        question:
          'In a controlled input, what happens when the user types but there is no `onChange` handler?',
        options: [
          'The input updates normally like a plain HTML input',
          'React throws a runtime error immediately',
          "The input appears frozen — it won't show what the user typed",
          'The `value` prop is silently ignored',
        ],
        correct: 2,
        explanation:
          'In a controlled component, the displayed value is driven by React state (the `value` prop). Without `onChange` to update that state, the state never changes so the display never changes — the input appears frozen. React warns you about this in the browser console.',
      },
      {
        type: 'mcq',
        question: 'How do you prevent a form submission from refreshing the browser page?',
        options: [
          'Set `action=""` on the `<form>` element',
          'Add `type="button"` to every button in the form',
          'Call `e.preventDefault()` inside the `onSubmit` handler',
          'Replace `<form>` with a `<div>`',
        ],
        correct: 2,
        explanation:
          'Forms natively submit by navigating to a URL, which reloads the page. In React, you handle submission in JavaScript: attach an `onSubmit` handler and call `e.preventDefault()` to stop the default browser behavior. Then you can process the data (e.g. send a fetch request) without a page reload.',
      },
      {
        type: 'code-fill',
        question: "Complete the `onChange` handler to update state with the input's current value.",
        codePrefix: `const [name, setName] = useState('');

return (
  <input
    value={name}
    onChange={(e) => `,
        codeSuffix: `(e.target.value)}
  />
);`,
        answer: 'setName',
        explanation:
          'The setter function from `useState` (here `setName`) is called with `e.target.value` on every keystroke. This updates the React state, which updates `value`, keeping the input in sync with state — the core pattern of a controlled component.',
      },
    ],
  },

  // ─────────────────────────────────────────
  // LESSON 11 — Lifting State Up
  // ─────────────────────────────────────────
  {
    id: 11,
    title: 'Lifting State Up',
    emoji: '⬆️',
    description: 'Share state between sibling components through their parent.',
    content: [
      {
        type: 'text',
        text: 'Sometimes two sibling components need to share the same data. Since props only flow **down** from parent to child, the solution is to **lift state up** — move the shared state to the closest common parent.',
      },
      {
        type: 'code',
        code: `import { useState } from 'react';

// Child 1 — displays the temperature
function TemperatureDisplay({ celsius }) {
  const fahrenheit = (celsius * 9/5) + 32;
  return (
    <p>
      {celsius}°C = {fahrenheit.toFixed(1)}°F
    </p>
  );
}

// Child 2 — the input slider
function TemperatureSlider({ celsius, onChange }) {
  return (
    <input
      type="range"
      min="0"
      max="100"
      value={celsius}
      onChange={(e) => onChange(Number(e.target.value))}
    />
  );
}

// Parent — owns the shared state
function TemperatureConverter() {
  const [celsius, setCelsius] = useState(20); // State lives here

  return (
    <div>
      <TemperatureSlider celsius={celsius} onChange={setCelsius} />
      <TemperatureDisplay celsius={celsius} />
    </div>
  );
}`,
      },
      {
        type: 'heading',
        text: 'The Pattern',
      },
      {
        type: 'text',
        text: '1. **Identify** the shared state — what data do multiple components need?\n2. **Find** the closest common parent of those components.\n3. **Move** the state to that parent.\n4. **Pass** the data down as props, and pass setter functions down as callback props.',
      },
      {
        type: 'tip',
        text: "When you find yourself duplicating state across components to keep them in sync, that's a sign you need to lift the state up to their common parent.",
      },
    ],
    quizzes: [
      {
        type: 'mcq',
        question:
          'Two sibling components need to share and react to the same data. What is the correct approach?',
        options: [
          'Store the data in both components separately and sync them with useEffect',
          'Lift the state up to the closest common parent component',
          'Use a global JavaScript variable',
          'Pass props from one sibling directly to the other',
        ],
        correct: 1,
        explanation:
          "Lifting state up to the closest common parent is the standard React pattern for sharing state between siblings. The parent holds the state and passes data/setter functions down as props. Siblings can't pass props to each other directly.",
      },
      {
        type: 'mcq',
        question: 'How does a child component notify its parent that something changed?',
        options: [
          "By directly modifying the parent's state variable",
          'By calling a callback function that was passed down as a prop',
          'Using a special React.notify() function',
          'By emitting a custom DOM event',
        ],
        correct: 1,
        explanation:
          "In React, data flows DOWN (via props) and events flow UP (via callback functions). A parent passes a function as a prop; when something happens, the child calls that function. This is the foundation of the 'lifting state up' pattern.",
      },
      {
        type: 'mcq',
        question: 'Where should shared state be placed when two sibling components both need it?',
        options: [
          'Duplicated in both components and synced with useEffect',
          'In the closest common ancestor component (lifted up)',
          'Always in the root `App` component',
          'In a browser global variable',
        ],
        correct: 1,
        explanation:
          'State should live in the closest ancestor that needs to share it. Moving state up to the common parent (lifting up) lets both children receive it via props and notify the parent of changes via callback props. Duplicating state leads to inconsistency.',
      },
    ],
  },

  // ─────────────────────────────────────────
  // LESSON 12 — Context API
  // ─────────────────────────────────────────
  {
    id: 12,
    title: 'Context API',
    emoji: '🌐',
    description: 'Share data across many components without prop drilling.',
    content: [
      {
        type: 'text',
        text: '**Prop drilling** is when you pass props through many layers of components just to reach a deeply nested child. It becomes messy and hard to maintain.',
      },
      {
        type: 'code',
        code: `// Prop drilling problem — username passed through 3 levels
function App() {
  const username = "Alice";
  return <Page username={username} />;
}
function Page({ username }) {
  return <Header username={username} />;
}
function Header({ username }) {
  return <p>Hello, {username}</p>; // Finally used here
}`,
      },
      {
        type: 'text',
        text: 'The **Context API** solves this. It lets you create a "broadcast channel" that any component in the tree can subscribe to — no prop drilling needed.',
      },
      {
        type: 'heading',
        text: 'Three Steps to Use Context',
      },
      {
        type: 'code',
        code: `import { createContext, useContext, useState } from 'react';

// Step 1: Create the context
const UserContext = createContext(null);

// Step 2: Provide the context value (wrap components in Provider)
function App() {
  const [username, setUsername] = useState("Alice");

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      <Page />
    </UserContext.Provider>
  );
}

// Step 3: Consume the context anywhere in the tree
function Header() {
  const { username } = useContext(UserContext);
  return <p>Hello, {username}! 👋</p>;
}

// Even deeply nested — no props needed!
function Page() {
  return (
    <div>
      <Header />
    </div>
  );
}`,
      },
      {
        type: 'tip',
        text: 'Context is great for global data like the current user, theme, or language. For complex state management, consider libraries like Zustand or Redux — but Context works well for many apps.',
      },
    ],
    quizzes: [
      {
        type: 'mcq',
        question: 'What problem does the Context API primarily solve?',
        options: [
          'Making components re-render faster',
          'Fetching data from an API',
          'Passing data through many layers of components (prop drilling)',
          'Managing local component state',
        ],
        correct: 2,
        explanation:
          "The Context API solves prop drilling — the need to pass props through many intermediate components that don't need the data themselves. With Context, any component in the tree can directly access the shared data.",
      },
      {
        type: 'code-fill',
        question: 'Complete the code to read a context value inside a function component.',
        codePrefix: `const UserContext = createContext(null);

function Avatar() {
  const { username } = `,
        codeSuffix: `(UserContext);
  return <p>Hi, {username}</p>;
}`,
        answer: 'useContext',
        explanation:
          '`useContext(MyContext)` is the React hook used to subscribe to and read a context value inside a function component. It returns the current value from the nearest matching `<MyContext.Provider>` above it in the tree.',
      },
      {
        type: 'mcq',
        question: 'Context is best suited for...',
        options: [
          "All application state — it's always better than props",
          'Genuinely global data: current theme, locale, or authenticated user',
          'Data that changes several times per second (like mouse position)',
          'Passing data just one or two levels deep',
        ],
        correct: 1,
        explanation:
          'Context shines for low-frequency global data like theme, language, or the logged-in user. For high-frequency changes or local state, Context causes too many re-renders. Passing one or two levels via props is simpler and more explicit — save Context for the deep tree cases.',
      },
      {
        type: 'mcq',
        question: 'A component calls `useContext(ThemeContext)`. When does it re-render?',
        options: [
          'Any time any state in the app changes',
          'Only when the nearest `<ThemeContext.Provider>` value prop changes',
          "Only when the component's own state changes",
          'Never — useContext prevents re-renders',
        ],
        correct: 1,
        explanation:
          'A component subscribing to Context re-renders when the `value` prop on its nearest Provider changes. If the value is an object created inline (`value={{ theme, setTheme }}`), it creates a new reference every render — memoize it with `useMemo` to avoid unnecessary re-renders.',
      },
    ],
  },

  // ─────────────────────────────────────────
  // LESSON 13 — useRef
  // ─────────────────────────────────────────
  {
    id: 13,
    title: 'useRef Hook',
    emoji: '📌',
    description: 'Access DOM elements directly and persist values without re-rendering.',
    content: [
      {
        type: 'text',
        text: '`useRef` gives you a **mutable object** (`ref.current`) that persists across renders. Unlike state, updating a ref does **not** cause a re-render.',
      },
      {
        type: 'heading',
        text: 'Use Case 1: Accessing DOM Elements',
      },
      {
        type: 'code',
        code: `import { useRef } from 'react';

function FocusInput() {
  // Create a ref to hold a DOM element
  const inputRef = useRef(null);

  function handleClick() {
    // Directly access the DOM element via .current
    inputRef.current.focus();
  }

  return (
    <div>
      {/* Attach the ref to the input element */}
      <input ref={inputRef} placeholder="Click button to focus me" />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}`,
      },
      {
        type: 'heading',
        text: 'Use Case 2: Storing Values Without Re-Renders',
      },
      {
        type: 'text',
        text: "You can store any value in a ref. Changing it won't trigger a re-render — useful for tracking things like previous values, timer IDs, or counts that don't need to be displayed.",
      },
      {
        type: 'code',
        code: `import { useRef, useEffect } from 'react';

function RenderCounter() {
  // This counter never causes a re-render
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
  });

  return <p>Rendered {renderCount.current} times</p>;
}

// Storing a timer ID
function StopwatchExample() {
  const timerRef = useRef(null);

  function start() {
    timerRef.current = setInterval(() => {
      console.log("tick");
    }, 1000);
  }

  function stop() {
    clearInterval(timerRef.current);
  }

  return (
    <>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </>
  );
}`,
      },
      {
        type: 'tip',
        text: 'Key difference: `useState` triggers a re-render when updated. `useRef` does not. Use state for values that affect what the user sees; use ref for values that are behind the scenes.',
      },
    ],
    quizzes: [
      {
        type: 'mcq',
        question: 'What happens when you update a value stored in a `useRef`?',
        options: [
          'The component re-renders just like with useState',
          'React throws an error because refs are read-only',
          'The value updates but the component does NOT re-render',
          'The value resets to its initial value on the next render',
        ],
        correct: 2,
        explanation:
          "Unlike state, updating a ref (`ref.current = newValue`) is a direct mutation and does NOT schedule a re-render. This is the key difference between refs and state — refs are for values that need to persist but don't need to be reflected in the UI.",
      },
      {
        type: 'code-fill',
        question: 'Complete the code to create a ref that can be attached to a DOM element.',
        codePrefix: `import { useRef } from 'react';

function TextInput() {
  const inputRef = `,
        codeSuffix: `(null);

  return <input ref={inputRef} />;
}`,
        answer: 'useRef',
        explanation:
          "`useRef(initialValue)` creates a mutable ref object with a `.current` property. Passing it to a JSX element's `ref` prop attaches it to that DOM node after mount — letting you imperatively access or control the element.",
      },
      {
        type: 'mcq',
        question: 'Compared to `useState`, updating `ref.current` directly...',
        options: [
          'Triggers a re-render to show the updated value',
          'Does NOT trigger a re-render — the component stays as-is',
          'Is not allowed and will throw an error',
          'Resets to the initial value on the next render',
        ],
        correct: 1,
        explanation:
          'This is the key distinction: state updates trigger re-renders, ref updates do not. Use a ref when you need to persist a value (like a timer ID, previous value, or DOM node) across renders WITHOUT causing the component to re-render when it changes.',
      },
    ],
  },

  // ─────────────────────────────────────────
  // LESSON 14 — Custom Hooks
  // ─────────────────────────────────────────
  {
    id: 14,
    title: 'Custom Hooks',
    emoji: '🪝',
    description: 'Extract and reuse stateful logic by building your own hooks.',
    content: [
      {
        type: 'text',
        text: "**Custom hooks** are functions that use React's built-in hooks (`useState`, `useEffect`, etc.) to encapsulate and reuse logic across multiple components.",
      },
      {
        type: 'text',
        text: "They follow one simple rule: the function name **must start with `use`**. This is how React knows it's a hook and can enforce the rules of hooks.",
      },
      {
        type: 'code',
        code: `import { useState, useEffect } from 'react';

// A custom hook to track the window size
function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }

    window.addEventListener("resize", handleResize);

    // Cleanup: remove the listener when done
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size; // Return whatever the consumer needs
}

// Using the custom hook in any component
function MyComponent() {
  const { width, height } = useWindowSize();

  return (
    <p>Window: {width} × {height}</p>
  );
}`,
      },
      {
        type: 'heading',
        text: 'Another Example — useLocalStorage',
      },
      {
        type: 'code',
        code: `// A custom hook that syncs state with localStorage
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  function setAndStore(newValue) {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  }

  return [value, setAndStore];
}

// Usage — works just like useState, but persists across page reloads!
function App() {
  const [name, setName] = useLocalStorage("username", "");

  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Your name (saved!)"
    />
  );
}`,
      },
      {
        type: 'tip',
        text: "When you find yourself copying the same `useState` + `useEffect` logic into multiple components, that's the perfect time to extract it into a custom hook.",
      },
    ],
    quizzes: [
      {
        type: 'code-fill',
        question:
          'Custom hooks must start with a specific word. Complete the custom hook name below.',
        codePrefix: `// Custom hook that tracks mouse position
function `,
        codeSuffix: `MousePosition() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return pos;
}`,
        answer: 'use',
        explanation:
          'Custom hooks MUST start with `use` (e.g., `useMousePosition`). This naming convention is required — React uses it to apply the Rules of Hooks and ESLint plugins use it to warn you about misuse.',
      },
      {
        type: 'mcq',
        question: "What makes a function a 'custom hook' in React?",
        options: [
          'It must be defined in a file named hooks.js',
          'It must be exported as a default export',
          "Its name starts with 'use' and it calls other React hooks inside",
          'It must accept a dependency array as its last argument',
        ],
        correct: 2,
        explanation:
          "A custom hook is just a JavaScript function that (1) starts with 'use' and (2) calls other React hooks inside it. No special file structure is required. The naming convention lets React and ESLint enforce the Rules of Hooks correctly.",
      },
      {
        type: 'mcq',
        question: 'A custom hook can return...',
        options: [
          'Only arrays structured like [value, setter]',
          'Only a single primitive value',
          'Anything — an object, array, primitive, or nothing',
          'Only other hooks',
        ],
        correct: 2,
        explanation:
          "Custom hooks are just functions — they can return whatever makes sense for their API. `useFetch` might return `{ data, loading, error }`. `useCounter` might return `[count, increment, decrement]`. `useDocumentTitle` might return nothing. Design the return value around the consumer's needs.",
      },
      {
        type: 'mcq',
        question: 'What is the primary benefit of custom hooks?',
        options: [
          'They make components render significantly faster',
          'They allow sharing stateful logic across multiple components without duplicating code',
          'They replace all other hooks — you only need custom hooks',
          'They allow components to share state directly without a parent',
        ],
        correct: 1,
        explanation:
          'Before custom hooks, sharing stateful logic required patterns like HOCs or render props. Custom hooks let you extract logic (e.g., `useWindowSize`, `useDebounce`, `useLocalStorage`) into a reusable function. Multiple components can use the same hook — each gets its own independent state.',
      },
    ],
  },

  // ─────────────────────────────────────────
  // LESSON 15 — useMemo & useCallback
  // ─────────────────────────────────────────
  {
    id: 15,
    title: 'useMemo & useCallback',
    emoji: '🚀',
    description: 'Optimize performance by memoizing values and functions.',
    content: [
      {
        type: 'text',
        text: "When a component re-renders, all the code inside it runs again — including expensive calculations and function definitions. `useMemo` and `useCallback` let you **memoize** (cache) these so they're only recomputed when needed.",
      },
      {
        type: 'heading',
        text: 'useMemo — Cache a Computed Value',
      },
      {
        type: 'code',
        code: `import { useState, useMemo } from 'react';

function ExpensiveList({ numbers }) {
  // This only recalculates when 'numbers' changes
  const total = useMemo(() => {
    console.log("Calculating total...");
    return numbers.reduce((sum, n) => sum + n, 0);
  }, [numbers]); // Dependency array

  return <p>Total: {total}</p>;
}

// Without useMemo:
// 'total' would be recalculated on EVERY re-render,
// even when 'numbers' hasn't changed.`,
      },
      {
        type: 'heading',
        text: 'useCallback — Cache a Function',
      },
      {
        type: 'text',
        text: "Every re-render creates a new function object. `useCallback` returns the **same function reference** as long as its dependencies haven't changed. This is important when passing callbacks to child components wrapped in `React.memo`.",
      },
      {
        type: 'code',
        code: `import { useState, useCallback, memo } from 'react';

// memo() prevents re-renders if props haven't changed
const Button = memo(function Button({ onClick, label }) {
  console.log("Button rendered:", label);
  return <button onClick={onClick}>{label}</button>;
});

function App() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  // Without useCallback: new function created every render,
  // causing Button to re-render even when count didn't change.

  // With useCallback: same function reference if deps unchanged
  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []); // No deps — function never changes

  return (
    <div>
      <Button onClick={increment} label="Increment" />
      <button onClick={() => setOther(o => o + 1)}>Other: {other}</button>
      <p>Count: {count}</p>
    </div>
  );
}`,
      },
      {
        type: 'tip',
        text: "Don't over-optimize! Add `useMemo`/`useCallback` only when you have a real performance problem to solve. Premature optimization adds complexity for little benefit. Use the React DevTools Profiler to identify bottlenecks first.",
      },
    ],
    quizzes: [
      {
        type: 'mcq',
        question: 'What does `useMemo` do?',
        options: [
          'It memoizes a function so it always has the same reference',
          'It caches a computed value and only recomputes it when its dependencies change',
          'It prevents the component from ever re-rendering',
          "It stores data in the browser's memory cache",
        ],
        correct: 1,
        explanation:
          "`useMemo` caches (memoizes) the result of a computation. It recalculates only when one of its listed dependencies changes. It's for expensive computations you don't want to repeat on every render. `useCallback` is the equivalent for caching functions.",
      },
      {
        type: 'mcq',
        question: 'When is `useCallback` most useful?',
        options: [
          'Every time you define a function inside a component',
          'When passing a callback to a child wrapped in `React.memo`, preventing unnecessary re-renders',
          'Only when the callback is an async function',
          'To make function calls faster by caching their return values',
        ],
        correct: 1,
        explanation:
          "`useCallback` is most valuable when you pass callbacks to child components optimized with `React.memo`. Without it, a new function reference is created each render, causing `memo`'d children to re-render anyway. But don't overuse it — the memoization itself has overhead. Profile first.",
      },
      {
        type: 'code-fill',
        question: 'Complete the hook call to memoize the expensive computation.',
        codePrefix: `const processedList = `,
        codeSuffix: `(
  () => expensiveSort(items),
  [items]
);`,
        answer: 'useMemo',
        explanation:
          '`useMemo` caches the result of the function passed as its first argument. It only recomputes when one of the listed dependencies changes. Without `useMemo`, `expensiveSort(items)` would run on every render, regardless of whether `items` changed.',
      },
      {
        type: 'mcq',
        question: 'What risk comes from overusing `useMemo` and `useCallback`?',
        options: [
          'They cause more re-renders than not using them',
          'The memoization overhead (memory + comparison cost) can outweigh the benefit for simple operations',
          "They break React's reconciliation algorithm",
          'They only work correctly with TypeScript',
        ],
        correct: 1,
        explanation:
          'Every `useMemo`/`useCallback` call costs memory and runs a dependency comparison every render. For cheap operations, this overhead exceeds any savings. The React team recommends profiling first with the DevTools Profiler before adding memoization. Only optimize proven bottlenecks.',
      },
    ],
  },
];

export default lessons;
