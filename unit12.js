// Unit 12: Software Deployment (Chapters 13–15, pp.203–254)
EXTRA_UNITS.push({
id:12, concepts:[
{title:"Full SDLC Testing Project — Overview",ref:"pp.203–204",content:`<p>Chapter 13 walks through a <strong>real case study</strong> (the DSA Certificate Processing System) to demonstrate how testing fits across the entire development lifecycle using SPRAE.</p><p>Key principles demonstrated:</p><ul><li>Testing starts during <strong>Analysis</strong>, not after coding</li><li>The <span class="key-term">testing strategy chessboard</span> guides all planning — test support systems BEFORE the application</li><li>Test execution goes <strong>bottom-up</strong>: OS → Data → Connectivity → Application</li><li>Defect history from prior projects provides prediction anchors for new projects</li></ul><div class="zh-note">第13章用真实案例演示：测试从分析阶段就开始，按棋盘策略自底向上执行。</div>`},
{title:"Testing Across Each Stage",ref:"pp.204–233",content:`<p><strong>Analysis Stage:</strong> Fill out the testing strategy chessboard. Identify new (untrusted) support systems. Static test the requirements — use cases.</p><p><strong>Design Stage:</strong> Static test the logical design. Write the test plan and draft test cases. Evaluate support systems (DB, hardware) by testing EARLY — not waiting until construction.</p><p><strong>Preliminary Construction:</strong> Execute functional test cases as code becomes available. Track defects, compare with prior project defect curves. Watch for root cause patterns.</p><p><strong>Final Construction:</strong> Integration testing, regression testing, performance testing. Redesign if fundamental flaws are found.</p><p><strong>Implementation:</strong> Install on production. Keep test workstations for quick diagnosis during first weeks. Developers "on call" for one month.</p><p><strong>Post-implementation:</strong> "Lessons learned" meeting. Return in 3 months for performance checkup.</p><div class="callout important"><strong>Real-world lesson from the case study:</strong> A fundamental design flaw was discovered during Preliminary Construction (the certificate record processing flow). Rather than patching it, they redesigned in Final Construction — saving far more time and money than continued patching would have cost.</div>`},
{title:"Testing Complex Applications — Divide & Conquer",ref:"pp.235–249",content:`<p>Chapter 14's approach: <strong>divide</strong> complex applications into manageable components, <strong>conquer</strong> with familiar testing techniques.</p><p><strong>Application tiers:</strong></p><ul><li><span class="key-term">1-Tier</span> — All workstations run the same software. One chessboard. Example: peer-to-peer network of identical workstations.</li><li><span class="key-term">2-Tier</span> — Client/server. Create <strong>separate chessboards</strong> for each tier, plus a connectivity layer between them. Client = UI testing; Server = business rules + data testing.</li><li><span class="key-term">3-Tier</span> — Client + application server + database server. Three chessboards + two connectivity layers.</li><li><span class="key-term">n-Tier</span> — Internet/enterprise apps with many layers. Apply the same divide-and-conquer pattern recursively.</li></ul><div class="callout">The key: test planning starts <strong>top-down</strong> (application → support layers), but test execution goes <strong>bottom-up</strong> (support layers → application).</div><div class="zh-note">复杂应用=分层各个击破。每层一个棋盘。规划从上到下，执行从下到上。</div>`},
{title:"n-Tier & Internet Application Testing",ref:"pp.246–249",content:`<p>As tiers increase, complexity multiplies. For n-tier Internet apps:</p><ul><li>Each tier gets its own chessboard</li><li>Connectivity between EVERY adjacent pair of tiers must be tested</li><li><strong>Third-party components</strong> (payment gateways, shipping APIs) add unpredictability — they can change without notice</li><li><strong>Browser compatibility</strong> testing becomes critical — different browsers render differently</li></ul><p>The divide-and-conquer approach scales by applying the <strong>same familiar techniques</strong> at each tier, then connecting tiers incrementally.</p>`},
{title:"Future Directions in Testing",ref:"pp.250–254",content:`<p>Chapter 15 identifies challenges for the testing profession:</p><p><strong>Current challenges already upon us:</strong></p><ul><li>Shortage of qualified testing professionals</li><li>Need for testers with increasingly broad technical skills</li><li>Testing Internet applications with unpredictable third-party dependencies</li></ul><p><strong>Near-future challenges:</strong></p><ul><li>Testing of web services and service-oriented architectures (SOA)</li><li>Security testing becoming more critical</li><li>Mobile and wireless application testing</li></ul><p><strong>Longer-term challenges:</strong></p><ul><li>AI/machine learning in testing (automated test generation)</li><li>Testing increasingly complex distributed systems</li><li>Evolving regulatory requirements for software quality</li></ul><div class="callout">The book concludes: testing is a growing field with strong career prospects. The skills learned in this course are transferable across industries and technologies.</div>`}
],quiz:[
{type:"mc",q:"In the case study, test execution goes in what order?",options:["Top-down: application first, then support layers","Bottom-up: OS → Data → Connectivity → Application","Random based on developer availability","All layers simultaneously"],answer:1,explanation:"Test execution is bottom-up: verify OS/hardware first → data resources → connectivity → application. Each layer must work before the next can be tested."},
{type:"mc",q:"For a 2-tier client/server app, how many chessboards are recommended?",options:["1 combined chessboard","2 separate chessboards (one per tier) plus connectivity","3 chessboards","It depends on the programming language"],answer:1,explanation:"Create separate chessboards for client tier and server tier, plus test the connectivity layer between them."},
{type:"sa",q:"Explain the 'divide and conquer' approach to testing complex applications.",sampleAnswer:"Divide the complex application into manageable tiers (1-tier, 2-tier, 3-tier, n-tier). Create a separate testing strategy chessboard for each tier. Plan testing top-down (from application to support layers) but execute bottom-up (from support layers to application). Test connectivity between adjacent tiers. This reduces a daunting testing task into familiar, manageable pieces.",keywords:["tiers","chessboard","top-down","bottom-up","connectivity","divide","manageable"]},
{type:"mc",q:"In the DSA case study, what happened when a fundamental design flaw was found during Preliminary Construction?",options:["They shipped it anyway","They patched it with quick fixes","They stopped testing that area and redesigned in Final Construction","They cancelled the project"],answer:2,explanation:"They imposed a moratorium on further testing of the flawed design and redesigned it in Final Construction — saving more time and money than patching would have."},
{type:"mc",q:"Test planning goes in what direction?",options:["Bottom-up: OS first","Top-down: application first, then support layers","Left-right: following the timeline","It doesn't matter"],answer:1,explanation:"Test PLANNING starts top-down (application needs → what support is required). Test EXECUTION goes bottom-up."},
{type:"sa",q:"What are some current and near-future challenges for the testing profession identified in Chapter 15?",sampleAnswer:"Current: shortage of qualified testers, need for broad technical skills, testing Internet apps with unpredictable third-party dependencies. Near-future: testing web services and SOA architectures, increasing importance of security testing, mobile/wireless application testing. Longer-term: AI in testing, increasingly complex distributed systems, evolving regulations.",keywords:["shortage","skills","internet","web services","security","mobile","AI","distributed"]}
]});

// ============================================================
INTERACTIVES[12] = function(el) {
  let tier = 1;
  const tiers = [
    { name:'1-Tier', desc:'All workstations run the same software. One chessboard needed. Example: peer-to-peer network of identical workstations.',
      layers:['Application (menus, data entry, display, reports, backups)','Connectivity (peer-to-peer LAN)','Data resources','Security','Operating system'],
      boards:1 },
    { name:'2-Tier (Client/Server)', desc:'Two distinct groups: client workstations handle the UI, servers handle business rules and data. Create separate chessboards for each tier plus a connectivity layer.',
      layers:['Tier 1 — Client (menus, data entry, display)','Tier 1-2 Connectivity (LAN/WAN)','Tier 2 — Server (business rules, data, reports, backups)','Each tier: connectivity, data, security, OS'],
      boards:2 },
    { name:'3-Tier', desc:'Client + application server + database server. Three chessboards + two connectivity layers. Application logic separated from data management.',
      layers:['Tier 1 — Client (UI presentation)','Tier 1-2 Connectivity','Tier 2 — App Server (business rules, processing)','Tier 2-3 Connectivity','Tier 3 — DB Server (data storage, backups)'],
      boards:3 },
    { name:'n-Tier (Internet/Enterprise)', desc:'Many specialized layers: web server, app server, API gateway, DB cluster, third-party services. Apply divide-and-conquer recursively — each tier gets its own chessboard.',
      layers:['Tier 1 — Browser/Client','Tier 1-2 Internet connectivity','Tier 2 — Web server','Tier 2-3 Internal network','Tier 3 — App server(s)','Tier 3-4 API/DB connectivity','Tier 4 — Database cluster','Third-party services (payment, shipping)'],
      boards:'n' }
  ];
  function render() {
    const t = tiers[tier-1];
    let h = '<p style="font-size:13px;color:var(--color-text-secondary);margin-bottom:12px;">Build up from simple to complex. Test planning = top-down (app first). Test execution = bottom-up (OS first).</p>';
    // Tier selector
    h += '<div style="display:flex;gap:4px;margin-bottom:14px;">';
    [1,2,3,4].forEach(i => {
      const active = tier===i;
      h += '<button onclick="window._tierSet('+i+')" style="flex:1;padding:8px 6px;font-size:12px;font-weight:500;border-radius:var(--border-radius-md);cursor:pointer;border:2px solid '+(active?'var(--color-border-info)':'transparent')+';background:'+(active?'var(--color-background-info)':'var(--color-background-secondary)')+';color:var(--color-text-primary);font-family:var(--font-sans);">'+(i===4?'n':i)+'-Tier</button>';
    });
    h += '</div>';
    h += '<div style="font-size:14px;font-weight:500;color:var(--color-text-info);margin-bottom:6px;">'+t.name+'</div>';
    h += '<div style="font-size:13px;color:var(--color-text-primary);margin-bottom:14px;line-height:1.7;">'+t.desc+'</div>';
    // Visual stack
    const colors = ['#4a7fb5','#7c6baf','#4a9e6e','#c08530','#c25450','#3d8b5a','#4a7fb5','#7c6baf'];
    h += '<div style="display:flex;flex-direction:column;gap:3px;">';
    t.layers.forEach((l,i) => {
      const c = colors[i % colors.length];
      const isConn = l.toLowerCase().includes('connectivity') || l.toLowerCase().includes('internet') || l.toLowerCase().includes('api');
      h += '<div style="padding:'+(isConn?'6px':'10px')+' 14px;border-radius:var(--border-radius-md);font-size:'+(isConn?'11px':'12px')+';background:'+c+'18;border-left:3px solid '+c+';color:var(--color-text-primary);'+(isConn?'font-style:italic;opacity:0.7;':'')+'">'+l+'</div>';
    });
    h += '</div>';
    // Direction arrows
    h += '<div style="display:flex;justify-content:space-between;margin-top:12px;font-size:11px;color:var(--color-text-tertiary);">';
    h += '<span>\u2191 Test execution: bottom-up</span>';
    h += '<span>Chessboards needed: <strong>'+t.boards+'</strong></span>';
    h += '<span>Test planning: top-down \u2193</span>';
    h += '</div>';
    el.innerHTML = h;
  }
  window._tierSet = function(t) { tier=t; render(); };
  render();
};

// ============================================================
// Unit 12: Software Deployment
// ============================================================
MODERN_NOTES['12-1'] = {
  title: 'CI/CD replaces manual staging and deployment',
  year: '2026',
  content: 'The book\'s manual deployment process is now <strong>CI/CD pipelines</strong>: every code push automatically builds → tests → deploys to staging → (optionally) deploys to production. <strong>Blue-green deployments</strong> maintain two identical production environments (switch traffic instantly if problems arise). <strong>Canary releases</strong> roll out changes to 1% of users first, then gradually to 100%.'
};
MODERN_NOTES['12-2'] = {
  title: 'Feature flags: deploy ≠ release',
  year: '2026',
  content: 'The book assumes deploy = release to all users. Modern <strong>feature flags</strong> (LaunchDarkly, Unleash) separate deployment from release: code is deployed but features are <strong>toggled off</strong> until ready. This enables: testing in production with real data, gradual rollouts, instant rollback without redeploying, and A/B testing. The book\'s "post-implementation" phase becomes a continuous, controlled process.'
};
MODERN_NOTES['12-4'] = {
  title: 'The future is here: AI + human testers together',
  year: '2026',
  content: 'The book\'s Chapter 15 predicted AI in testing and growing complexity. Both are reality. But the key 2026 insight: <strong>AI complements testers, it doesn\'t replace them</strong>. The promises around AI in testing mirror the promises about automation 15 years ago. What works: AI handles repetitive tasks (test generation, log analysis, flaky test detection). Humans handle judgment (risk assessment, UX evaluation, strategy). The book\'s emphasis on human judgment and accountability (SPRAE\'s "A") is more relevant than ever.'
};
