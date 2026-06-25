// extras.js — Supplementary study tools
var EXTRAS = {};

// ============================================================
// 1. Confusion Buster — Commonly confused concept pairs
// ============================================================
EXTRAS['confusion'] = { icon:'🧠', title:'Confusion Buster', render: function(el) {
  const pairs = [
    { a:'White Box Testing', b:'Black Box Testing', color:'#4a7fb5',
      aPoints:['Requires source code access','Tests internal logic (statements, branches, paths, loops)','Done by developers during Preliminary Construction','Also called "logic coverage"','6 techniques: statement, branch, compound condition, path, loop, intuition'],
      bPoints:['Does NOT require source code','Tests external behavior (inputs → outputs)','Done by test team during Final Construction','Also called "behavior coverage"','4 techniques: equivalence classes, boundary value, expected results, intuition'],
      trap:'Students often say black box "tests the black box of code" — wrong! Black box means the tester CANNOT see inside the code.',
      mnemonic:'White = you can see through it (transparent code). Black = opaque, you only see what goes in and comes out.' },
    { a:'Static Testing', b:'Dynamic Testing', color:'#4a9e6e',
      aPoints:['Does NOT execute the software','Reviews documentation and code by reading','Techniques: desk check, inspection, walk-through','Cheapest form of testing','Used in ALL phases except Installation'],
      bPoints:['DOES execute the software','Validates behavior by running code','Includes functional, structural, and performance testing','Requires a testing environment','Used in Construction and Installation phases'],
      trap:'Students think static testing is unimportant because "nothing runs." In fact, it has the LARGEST potential for reducing defects at the LOWEST cost.',
      mnemonic:'Static = stationary, still, not moving (no execution). Dynamic = in motion (code is running).' },
    { a:'Functional Testing', b:'Structural Testing', color:'#7c6baf',
      aPoints:['Tests business functionality the user directly touches','Validates: navigation, screens, flows, reports, database CRUD','Based on business requirements and use cases','Black box + white box techniques apply','Also called "business testing"'],
      bPoints:['Tests the software PLATFORM that supports the application','Validates: interfaces, security, installation, smoke test, backup/recovery','Based on platform specifications','Relies on tester experience + admin collaboration','Also called "non-functional testing"'],
      trap:'"Structural" does NOT mean "structured programming." It means testing the STRUCTURE (platform) underneath the application.',
      mnemonic:'Functional = functions the user performs. Structural = the structure that holds it all up.' },
    { a:'Verification', b:'Validation', color:'#c08530',
      aPoints:['Are we building the product RIGHT?','Checks if output matches specifications','Done during development phases','Reviews, inspections, testing against specs','Process-oriented'],
      bPoints:['Are we building the RIGHT product?','Checks if product meets user needs','Done during acceptance/deployment','User acceptance testing, beta testing','Outcome-oriented'],
      trap:'Both start with "V" and sound similar. The classic memory trick: Verification = "Did we build it right?" Validation = "Did we build the right thing?"',
      mnemonic:'Verification = specs (RIGHT way). Validation = needs (RIGHT thing).' },
    { a:'Test Plan', b:'Test Case', color:'#c25450',
      aPoints:['Answers WHAT to test and WHY','High-level master blueprint','Contains 10 key items: scope, strategy, schedules...','One per project','Created during Analysis/Design'],
      bPoints:['Answers HOW to test','Detailed execution instructions','Contains 15 items: steps, expected results, actual results...','Many per project (one per testing activity)','Written as design details become available'],
      trap:'Jumping from strategy directly to test cases is like jumping from design to coding — you NEED the test plan in between.',
      mnemonic:'Plan = the MAP (where are we going?). Case = the STEPS (how do we walk there?).' },
    { a:'Positive Testing', b:'Negative Testing', color:'#3d8b5a',
      aPoints:['Confirms software WORKS as required','Uses valid inputs within expected range','Example: entering 500 for a 1–999 field','Must be completed FIRST when time is short','Also called "happy path" testing'],
      bPoints:['Tries to BREAK the software','Uses invalid inputs outside expected range','Example: entering 0 or 1000 for a 1–999 field','Done AFTER positive + risk testing if time allows','Two types: complement of positive + novice user actions'],
      trap:'"Negative testing" does NOT mean "bad testing." It\'s essential! It finds the defects that positive testing misses.',
      mnemonic:'Positive = "yes it works." Negative = "what if I do something wrong?"' },
    { a:'Severity', b:'Priority', color:'#4a7fb5',
      aPoints:['Impact of the defect on the SYSTEM','How badly the defect affects functionality','Technical measure','A crash = high severity','Set by the tester based on technical impact'],
      bPoints:['Urgency of FIXING the defect','Business importance of the fix','Business measure','A CEO-visible typo = high priority, low severity','Set by the project manager based on business needs'],
      trap:'A cosmetic error on the login page might be LOW severity (doesn\'t break anything) but HIGH priority (every user sees it). They are independent scales!',
      mnemonic:'Severity = how much it HURTS. Priority = how FAST to fix it.' }
  ];
  let sel = 0;
  function render() {
    let h = '<p style="font-size:13px;color:var(--color-text-secondary);margin-bottom:14px;">These are the concept pairs that students most often confuse on exams. Click each pair to study the differences.</p>';
    // Pair selector pills
    h += '<div style="display:flex;flex-wrap:wrap;gap:4px;margin-bottom:16px;">';
    pairs.forEach((p,i) => {
      h += '<button onclick="window._confSel('+i+')" style="padding:5px 10px;font-size:11px;border-radius:var(--border-radius-md);cursor:pointer;border:0.5px solid '+(i===sel?p.color:'var(--color-border-tertiary)')+';background:'+(i===sel?p.color+'18':'var(--color-background-primary)')+';color:var(--color-text-primary);font-family:var(--font-sans);">'+p.a+' vs '+p.b+'</button>';
    });
    h += '</div>';
    const p = pairs[sel];
    // Side by side comparison
    h += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px;">';
    // Left
    h += '<div style="background:var(--color-background-secondary);border-radius:var(--border-radius-lg);padding:14px 16px;border-top:3px solid '+p.color+';">';
    h += '<div style="font-size:14px;font-weight:500;color:'+p.color+';margin-bottom:8px;">'+p.a+'</div>';
    p.aPoints.forEach(pt => { h += '<div style="font-size:12.5px;line-height:1.7;color:var(--color-text-primary);margin-bottom:4px;display:flex;gap:6px;"><span style="color:'+p.color+';flex-shrink:0;">\u2713</span>'+pt+'</div>'; });
    h += '</div>';
    // Right
    h += '<div style="background:var(--color-background-secondary);border-radius:var(--border-radius-lg);padding:14px 16px;border-top:3px solid var(--color-text-secondary);">';
    h += '<div style="font-size:14px;font-weight:500;color:var(--color-text-primary);margin-bottom:8px;">'+p.b+'</div>';
    p.bPoints.forEach(pt => { h += '<div style="font-size:12.5px;line-height:1.7;color:var(--color-text-primary);margin-bottom:4px;display:flex;gap:6px;"><span style="flex-shrink:0;">\u2713</span>'+pt+'</div>'; });
    h += '</div></div>';
    // Trap warning
    h += '<div style="background:rgba(194,84,80,0.08);border-left:3px solid #c25450;border-radius:0 var(--border-radius-md) var(--border-radius-md) 0;padding:10px 14px;margin-bottom:8px;font-size:12.5px;line-height:1.7;color:var(--color-text-primary);"><strong style="color:#c25450;">Exam trap:</strong> '+p.trap+'</div>';
    // Mnemonic
    h += '<div style="background:rgba(74,158,110,0.08);border-left:3px solid #4a9e6e;border-radius:0 var(--border-radius-md) var(--border-radius-md) 0;padding:10px 14px;font-size:12.5px;line-height:1.7;color:var(--color-text-primary);"><strong style="color:#4a9e6e;">Memory trick:</strong> '+p.mnemonic+'</div>';
    el.innerHTML = h;
  }
  window._confSel = function(i) { sel=i; render(); };
  render();
}};

// ============================================================
// 2. Unit Relationship Map
// ============================================================
EXTRAS['map'] = { icon:'🗺️', title:'Unit Relationship Map', render: function(el) {
  const nodes = [
    { id:1, label:'U1: Why test?', desc:'Motivation, 4 objectives, ROI, 10 principles, quality axiom', group:'foundation', x:0, y:0 },
    { id:2, label:'U2: Where? (SDLC)', desc:'6 PDM stages, feasibility, JAD, where testing fits in each phase', group:'foundation', x:1, y:0 },
    { id:3, label:'U3: Strategy', desc:'SPRAE checklist, 4 approaches, chess board (2D/3D)', group:'framework', x:2, y:0 },
    { id:4, label:'U4: Plan it', desc:'Test plan (what/why), test cases (how), 15 items, timing', group:'framework', x:3, y:0 },
    { id:5, label:'U5: Static', desc:'Desk check, inspection, walk-through. No code execution.', group:'testing', x:0, y:1 },
    { id:6, label:'U6: Functional', desc:'Use cases, navigation, CRUD, white/black box, regression', group:'testing', x:1, y:1 },
    { id:7, label:'U7: Structural', desc:'Interface, security, smoke test, backup/recovery', group:'testing', x:2, y:1 },
    { id:8, label:'U8: Performance', desc:'Workload, ramp-up, knee curve, stress/endurance', group:'testing', x:3, y:1 },
    { id:9, label:'U9: Environment', desc:'Mirror production, test team control, staging, good vs bad', group:'support', x:0, y:2 },
    { id:10, label:'U10: Tools', desc:'Record/playback, touchpoints, 3x ROI, data-driven, liabilities', group:'support', x:1, y:2 },
    { id:11, label:'U11: Results', desc:'Severity, backlog, clusters, defect curves, Rayleigh, $14K', group:'support', x:2, y:2 },
    { id:12, label:'U12: Deploy', desc:'Full SDLC project, 1/2/3/n-tier, divide & conquer, future', group:'capstone', x:3, y:2 }
  ];
  const groupColors = { foundation:'#4a7fb5', framework:'#7c6baf', testing:'#4a9e6e', support:'#c08530', capstone:'#c25450' };
  const groupLabels = { foundation:'Foundation (why & where)', framework:'Framework (strategy & plan)', testing:'4 types of testing', support:'Support (environment, tools, results)', capstone:'Capstone (putting it all together)' };
  let sel = null;
  function render() {
    let h = '<p style="font-size:13px;color:var(--color-text-secondary);margin-bottom:6px;">The book\'s logical flow: <strong>Why</strong> → <strong>Where</strong> → <strong>Strategy</strong> → <strong>Plan</strong> → <strong>Execute 4 types</strong> → <strong>Support</strong> → <strong>Analyze</strong> → <strong>Deploy</strong>. Click any unit.</p>';
    // Legend
    h += '<div style="display:flex;gap:12px;margin-bottom:14px;flex-wrap:wrap;">';
    Object.keys(groupLabels).forEach(g => {
      h += '<span style="display:flex;align-items:center;gap:4px;font-size:11px;color:var(--color-text-secondary);"><span style="width:10px;height:10px;border-radius:2px;background:'+groupColors[g]+';"></span>'+groupLabels[g]+'</span>';
    });
    h += '</div>';
    // Flow arrows
    h += '<div style="text-align:center;font-size:20px;color:var(--color-text-tertiary);margin-bottom:8px;letter-spacing:8px;">U1 \u2192 U2 \u2192 U3 \u2192 U4</div>';
    h += '<div style="text-align:center;font-size:14px;color:var(--color-text-tertiary);margin-bottom:8px;">\u2193 feeds into \u2193</div>';
    // Grid of unit cards
    const rows = [[0,1,2,3],[4,5,6,7],[8,9,10,11]];
    rows.forEach(row => {
      h += '<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin-bottom:6px;">';
      row.forEach(idx => {
        const n = nodes[idx];
        const c = groupColors[n.group];
        const active = sel===idx;
        h += '<div onclick="window._mapSel('+idx+')" style="cursor:pointer;padding:10px;border-radius:var(--border-radius-md);background:'+(active?c+'20':'var(--color-background-secondary)')+';border:1.5px solid '+(active?c:'transparent')+';transition:all .15s;">';
        h += '<div style="font-size:11.5px;font-weight:500;color:'+c+';margin-bottom:2px;">'+n.label+'</div>';
        h += '<div style="font-size:10px;color:var(--color-text-tertiary);line-height:1.4;">'+n.desc.substring(0,50)+(n.desc.length>50?'...':'')+'</div>';
        h += '</div>';
      });
      h += '</div>';
    });
    // Detail panel
    if (sel !== null) {
      const n = nodes[sel];
      const c = groupColors[n.group];
      h += '<div style="margin-top:12px;background:var(--color-background-secondary);border-radius:var(--border-radius-lg);padding:14px 18px;border-left:3px solid '+c+';">';
      h += '<div style="font-size:14px;font-weight:500;color:'+c+';margin-bottom:4px;">'+n.label+'</div>';
      h += '<div style="font-size:13px;color:var(--color-text-primary);line-height:1.7;">'+n.desc+'</div>';
      // Connections
      const connections = {
        0:'Feeds into U2 (testing happens inside the SDLC) and U3 (4 objectives shape strategy).',
        1:'Feeds into U3 (chess board columns = PDM phases) and U4 (test plan timing follows SDLC stages).',
        2:'Feeds into U4 (strategy chess board becomes item #8 in the test plan) and U5-8 (the 4 testing approaches).',
        3:'Feeds into U5-8 (test cases guide all test execution) and U9 (environment must be planned early).',
        4:'Feeds into U6 (static test requirements before functional testing code) and U11 (static defects tracked).',
        5:'Feeds into U7 (functional tests must pass before structural testing) and U8 (functional correctness before performance).',
        6:'Feeds into U8 (platform must work before performance testing) and U9 (structural testing validates the environment).',
        7:'Feeds into U11 (performance results analyzed alongside functional results).',
        8:'Supports U5-8 (all testing needs a proper environment). Feeds into U10 (tools installed in environment).',
        9:'Supports U5-8 (tools amplify testing effectiveness). Feeds into U11 (tool results feed analysis).',
        10:'Feeds into U12 (analysis determines readiness to deploy). Uses data from U5-8 test execution.',
        11:'Uses everything from U1-11. The capstone: full SDLC project applying all concepts end-to-end.'
      };
      h += '<div style="margin-top:8px;font-size:12px;color:var(--color-text-secondary);line-height:1.7;"><strong>Connections:</strong> '+connections[sel]+'</div>';
      h += '</div>';
    }
    el.innerHTML = h;
  }
  window._mapSel = function(i) { sel=(sel===i?null:i); render(); };
  render();
}};

// ============================================================
// 3. Modern Context — 2007 concepts → modern tools
// ============================================================
EXTRAS['modern'] = { icon:'🔧', title:'Modern Context', render: function(el) {
  const mappings = [
    { category:'Static Testing (U5)', book:'Desk checks, inspections, walk-throughs', modern:'SonarQube (code quality), ESLint/Prettier (code style), GitHub Pull Request reviews, AI code review tools', note:'Pull request reviews are essentially modern "inspections" — an independent reviewer checks your code before it merges.' },
    { category:'White Box Testing (U6)', book:'Statement/branch/path/loop coverage by developers', modern:'JUnit (Java), pytest (Python), Jest (JavaScript), NUnit (C#), code coverage tools like JaCoCo, Istanbul', note:'The textbook\'s "developer unit testing" = modern unit testing frameworks. Coverage tools automate what the book describes manually.' },
    { category:'Black Box Testing (U6)', book:'Equivalence classes, boundary value, expected results matrix', modern:'Selenium, Cypress, Playwright (UI testing), Postman (API testing), TestCafe, Robot Framework', note:'Modern UI automation tools implement the record/playback paradigm described in U10, but for black box functional testing.' },
    { category:'Regression Testing (U6)', book:'Rerun all successful tests on new builds', modern:'CI/CD pipelines (GitHub Actions, Jenkins, GitLab CI), automated test suites run on every commit', note:'What the book calls "rerun all tests after every change" is now automated in CI/CD — tests run automatically on every code push. This is SPRAE\'s "Repeatability" at scale.' },
    { category:'Performance Testing (U8)', book:'Workload planning, ramp-up, round trip, knee of curve', modern:'JMeter, k6, Gatling, Locust (load testing), Lighthouse (web perf), New Relic, Datadog (monitoring)', note:'The "knee of the curve" concept is identical — modern tools just make it easier to find. k6 can simulate thousands of users that the book says need automated tools.' },
    { category:'Structural Testing (U7)', book:'Interface testing, security testing, smoke test, backup/recovery', modern:'Docker (consistent environments), Terraform (infrastructure as code), OWASP ZAP (security), Snyk (dependency scanning)', note:'The book\'s "smoke test" concept lives on: modern CI/CD runs a quick smoke test after every deployment to verify basics work.' },
    { category:'Test Environment (U9)', book:'Mirror production, test team control, staging process', modern:'Docker/Kubernetes (identical environments), staging servers, feature flags, Infrastructure as Code (IaC)', note:'Docker solves the book\'s #1 environment problem: "good env = mirrors production." Containers guarantee identical environments every time.' },
    { category:'Test Tools (U10)', book:'Record/playback, 300+ tools, script languages, touchpoints', modern:'Selenium IDE (record/playback), Playwright Codegen, low-code tools like Testim, Katalon Studio', note:'The "record/playback" paradigm from 2007 is still the dominant approach — just with modern UI and better script languages.' },
    { category:'Test Results (U11)', book:'Defect tracking, severity codes, backlog, Rayleigh curve', modern:'JIRA, Azure DevOps, Linear (issue tracking), Bugzilla, dashboards with Grafana/Kibana', note:'JIRA\'s severity/priority fields map directly to the book\'s 1-4 severity codes. The defect backlog concept = JIRA sprint backlog.' },
    { category:'SPRAE (U3)', book:'Specification, Premeditation, Repeatability, Accountability, Economy', modern:'Agile user stories (S), sprint planning (P), CI/CD automation (R), Definition of Done (A), story points/velocity (E)', note:'SPRAE maps beautifully to Agile: User stories = Specification, Sprint planning = Premeditation, CI/CD = Repeatability, DoD = Accountability, Velocity tracking = Economy.' },
    { category:'Test Plan (U4)', book:'10-item test plan document, IEEE 829, ReadySET', modern:'Test management tools: TestRail, Zephyr, qTest, Xray for JIRA. Also: lightweight test plans in Notion/Confluence', note:'The 10 items are the same — modern tools just digitize them. Many Agile teams use lighter test plans but the THINKING is identical.' }
  ];
  let h = '<p style="font-size:13px;color:var(--color-text-secondary);margin-bottom:14px;">This book is from 2007, but every concept maps to modern tools you\'ll use in your career. This knowledge gives you an edge in interviews.</p>';
  mappings.forEach(m => {
    h += '<div style="background:var(--color-background-secondary);border-radius:var(--border-radius-lg);padding:14px 18px;margin-bottom:10px;">';
    h += '<div style="font-size:13px;font-weight:500;color:var(--color-text-info);margin-bottom:6px;">'+m.category+'</div>';
    h += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:8px;">';
    h += '<div style="font-size:12px;color:var(--color-text-secondary);"><div style="font-size:10px;text-transform:uppercase;letter-spacing:0.5px;color:var(--color-text-tertiary);margin-bottom:2px;">Textbook (2007)</div>'+m.book+'</div>';
    h += '<div style="font-size:12px;color:var(--color-text-primary);"><div style="font-size:10px;text-transform:uppercase;letter-spacing:0.5px;color:var(--color-text-tertiary);margin-bottom:2px;">Modern equivalent</div>'+m.modern+'</div>';
    h += '</div>';
    h += '<div style="font-size:11.5px;color:var(--color-text-secondary);line-height:1.6;border-top:0.5px solid var(--color-border-tertiary);padding-top:6px;">'+m.note+'</div>';
    h += '</div>';
  });
  el.innerHTML = h;
}};

// ============================================================
// 4. Exam Cheat Sheet — Quick reference for all key facts
// ============================================================
EXTRAS['cheatsheet'] = { icon:'📋', title:'Exam Cheat Sheet', render: function(el) {
  let h = '<p style="font-size:13px;color:var(--color-text-secondary);margin-bottom:14px;">All critical numbers, definitions, and acronyms in one place. Print this page (Ctrl+P) for exam review.</p>';

  // Key Numbers
  h += '<div style="font-size:14px;font-weight:500;color:var(--color-text-info);margin:16px 0 8px;">Key numbers to remember</div>';
  h += '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:8px;margin-bottom:16px;">';
  [
    ['$59.5B','Annual US losses from poor software','U1'],
    ['$22.2B','Could be saved by proper testing','U1'],
    ['$14,000','Cost per customer-found defect','U1, U11'],
    ['10–20%','Cost-to-benefit break-even for testing','U1'],
    ['100%','Testing coverage is UNREALISTIC','U1'],
    ['80/20','Rule: 80% activity in 20% of features','U1'],
    ['Rule of 8','> 8 sec response = productivity drops','U8'],
    ['3+ runs','When automated tools become cost-effective','U10'],
    ['100 txns','Max manual performance test limit','U10'],
    ['500,000+','Transactions achievable with perf tools','U10'],
    ['300+','Commercial test tools in the market','U10'],
    ['1–4','Severity/priority scale (1=highest)','U11'],
    ['7:1','Defect prediction ratio from case study','U11'],
    ['~10%','Rayleigh curve prediction accuracy','U11']
  ].forEach(([num,desc,unit]) => {
    h += '<div style="background:var(--color-background-secondary);border-radius:var(--border-radius-md);padding:10px 12px;">';
    h += '<div style="font-size:18px;font-weight:500;color:var(--color-text-primary);">'+num+'</div>';
    h += '<div style="font-size:11px;color:var(--color-text-secondary);line-height:1.4;">'+desc+'</div>';
    h += '<div style="font-size:10px;color:var(--color-text-tertiary);margin-top:2px;">'+unit+'</div>';
    h += '</div>';
  });
  h += '</div>';

  // Acronyms
  h += '<div style="font-size:14px;font-weight:500;color:var(--color-text-info);margin:16px 0 8px;">Acronyms</div>';
  h += '<div style="background:var(--color-background-secondary);border-radius:var(--border-radius-lg);padding:14px 18px;margin-bottom:16px;font-size:13px;line-height:2;columns:2;column-gap:24px;">';
  [
    ['SPRAE','Specification, Premeditation, Repeatability, Accountability, Economy'],
    ['SDLC','System Development Life Cycle'],
    ['PDM','Phased Development Methodology'],
    ['JAD','Joint Application Design'],
    ['ROI','Return on Investment'],
    ['CMMi','Capability Maturity Model Integration'],
    ['AUT','Application Under Test'],
    ['CRUD','Create, Retrieve, Update, Delete'],
    ['DBMS','Database Management System'],
    ['IEEE','Institute for Electrical and Electronics Engineers'],
    ['DFD','Data Flow Diagram'],
    ['ERD','Entity-Relationship Diagram'],
    ['RAD','Rapid Application Development']
  ].forEach(([acr,full]) => {
    h += '<div style="break-inside:avoid;"><strong style="color:var(--color-text-info);">'+acr+'</strong> — '+full+'</div>';
  });
  h += '</div>';

  // Core Definitions
  h += '<div style="font-size:14px;font-weight:500;color:var(--color-text-info);margin:16px 0 8px;">Core definitions (exam short-answer ready)</div>';
  const defs = [
    ['Testing (Ch.1)','A verification process that checks whether software matches its requirements and specifications. It does NOT add or remove anything.'],
    ['Quality axiom (Ch.1)','Quality must be BUILT IN because quality cannot be TESTED IN. Quality is decided during requirements and design.'],
    ['Methodology (Ch.2)','A recommended way of doing something (the blueprint).'],
    ['SDLC stage (Ch.2)','A segment of a development life cycle consisting of certain types of activity.'],
    ['SPRAE (Ch.3)','A 5-item generic testing checklist: Specification → Premeditation → Repeatability → Accountability → Economy.'],
    ['Static testing (Ch.6)','Testing documentation WITHOUT executing software. "Static" = not while running.'],
    ['Regression testing (Ch.7)','Rerunning all successful tests to check if new code or corrections accidentally broke working code.'],
    ['Equivalence class (Ch.7)','A group of input values that should all produce the same result. Test one representative instead of every value.'],
    ['Boundary value (Ch.7)','Testing at the exact edges of equivalence classes (min, max, min-1, max+1) where most defects hide.'],
    ['Software platform (Ch.8)','The collective support software (OS, security, DB, network) that enables the application to run.'],
    ['Smoke test (Ch.8)','Quick verification that installed software can be configured and run. Named after hardware: "plug in, look for smoke."'],
    ['Round trip performance (Ch.9)','Time from user pressing Enter/Submit until the complete result is returned, including ALL processing.'],
    ['Knee of the curve (Ch.9)','The inflection point where performance changes from linear to exponential, indicating a bottleneck.'],
    ['Staging (Ch.10)','The controlled process of moving software from development to testing (and later to production).'],
    ['Record/playback (Ch.11)','3-step tool paradigm: (1) user operates AUT, (2) tool records as script, (3) tool plays script back.'],
    ['Defect backlog (Ch.12)','The list of all defects NOT yet corrected by the reporting date.'],
    ['Rayleigh curve (Ch.12)','Mathematical formula predicting defect discovery rates with ~10% accuracy when used with judgment.'],
    ['Divide and conquer (Ch.14)','Split complex multi-tier applications into manageable tiers, each with its own testing strategy chessboard.']
  ];
  defs.forEach(([term,def]) => {
    h += '<div style="background:var(--color-background-secondary);border-radius:var(--border-radius-md);padding:10px 14px;margin-bottom:6px;">';
    h += '<strong style="font-size:12.5px;color:var(--color-text-primary);">'+term+'</strong>';
    h += '<div style="font-size:12px;color:var(--color-text-secondary);line-height:1.6;margin-top:2px;">'+def+'</div>';
    h += '</div>';
  });

  // Testing types quick grid
  h += '<div style="font-size:14px;font-weight:500;color:var(--color-text-info);margin:16px 0 8px;">4 testing approaches at a glance</div>';
  h += '<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin-bottom:16px;">';
  [
    ['Static','No execution. Review docs. Desk check → Inspection → Walk-through.','#4a7fb5','All phases except Installation'],
    ['White Box','Source code required. Logic coverage: statements, branches, paths, loops.','#7c6baf','Preliminary + Final Construction'],
    ['Black Box','No source code. Behavior coverage: equivalence, boundary, expected results.','#4a9e6e','Final Construction + Installation'],
    ['Performance','Measure speed under workload. Ramp-up, knee curve, stress, endurance.','#c08530','Final Construction']
  ].forEach(([name,desc,color,when]) => {
    h += '<div style="background:var(--color-background-secondary);border-radius:var(--border-radius-md);padding:12px 14px;border-left:3px solid '+color+';">';
    h += '<div style="font-size:13px;font-weight:500;color:'+color+';">'+name+'</div>';
    h += '<div style="font-size:11.5px;color:var(--color-text-primary);line-height:1.6;margin:4px 0;">'+desc+'</div>';
    h += '<div style="font-size:10px;color:var(--color-text-tertiary);">When: '+when+'</div>';
    h += '</div>';
  });
  h += '</div>';

  el.innerHTML = h;
}};
