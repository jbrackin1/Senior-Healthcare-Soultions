/** @format */

//useMomMode.js

/**
 * A global UX helper hook that: 
 * - Translates jargon to plain language
 * - Adjusts font sizes, contrast??, and interaction timing??
 * - Adds confirmation steps for risky actions
 * - Empathizes before it optimizes
 * ✨ Bonus Features for Mom Mode™
Feature	What it Does
Mom Says Wait-When you try to skip drug coverage without checking first
Mom Recommends-Highlights plans with the best balance of cost & coverage
"In Plain English" Button-Every complex term gets toggled to a human-readable one
Are You Sure? Alert-“This one looks cheaper, but you’ll pay more later
if you get sick or have an accident!
Before you pick this plan, think how often you go to the doctor or get prescriptions 
if not that often, this plan may be a good choice.""

UI Switch?(we dont have to call it this, but it’s a good placeholder)
Add a toggle to the nav:
<Switch
  checked={isMomMode}
  onChange={toggleMomMode}
  label="Mom Mode™"
/>

**To ensure it stays clear we can have a toggle and if it’s on,
 it will display an icon with word definitions and recomendations.
** all defs will be a tooltip that pops up when you hover 
over the word. 
Icons will show up where mom mode is present 
so it can easily be added/removed in or taken out with an || statment
Then wrap any <Tooltip> or UI chunk with a translate() call when Mom Mode is active.

🧠 Pitch:
Mom Mode™ is our built-in clarity engine.

It’s how we know this app makes sense — because it was designed for humans first. 
When you turn on Mom Mode:
Medical jargon becomes plain speech
Risky decisions get flagged
The UI gently nudges you before you do something confusing
If it works for our moms, it'll work for you.
It came from you trying to help your mom understand something confusing
 — and realizing, everyone deserves that.

Lawyer wanted something patentable or protectable?

👉 This is a UX system + tone + toggle + accessibility layer. That’s:
Trademarkable (name & branding)
Potentially patentable as a UX assistive system
Unique enough to anchor marketing around
*/
//nicoles-app/src/components/ui/Feedback/MomMode.js
// nicoles-app/src/components/ui/Feedback/MomMode.js
// nicoles-app/src/components/ui/Feedback/MomMode.js
import { useState } from "react";

// ✅ The hook
const useMomMode = () => {
	const [enabled, setEnabled] = useState(false);

	const toggleMomMode = () => setEnabled((prev) => !prev);

	const translate = (term) => {
		const dictionary = {
			moop: "Maximum You’ll Ever Pay",
			deductible: "What you pay before help kicks in",
			premium: "Monthly cost of having the plan",
			formulary: "List of covered medications",
		};
		return dictionary[term.toLowerCase()] || term;
	};

	return { enabled, toggleMomMode, translate };
};

// ✅ The Tooltip
const Tooltip = ({ title }) => {
	return (
		<span className="tooltip-wrapper">
			<span className="tooltip-icon">ℹ️</span>
			<span className="tooltip-content">{title}</span>
		</span>
	);
};

const MomMode = {
	useMomMode,
	Tooltip,
};

export default MomMode;

