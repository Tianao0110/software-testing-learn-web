// Unit 8: Performance Testing (Chapter 9, pp.129–148)
EXTRA_UNITS.push({
id:8, concepts:[
{title:"What is Performance Testing?",ref:"pp.129–130",content:`<p>Performance testing validates software <span class="key-term">"speed"</span> — measuring <strong>response time</strong> while the software operates under a controlled <span class="key-term">workload</span>.</p><p>Key points:</p><ul><li>Performance testing occurs <strong>after</strong> functional testing is mostly complete and software is stable.</li><li>Functional defects may appear during performance testing, but that's <strong>not the objective</strong>.</li><li>The testing environment must <strong>approximate production</strong> as closely as possible.</li><li>"Speed" = some combination of <strong>response time + workload during peak load times</strong>.</li></ul><div class="zh-note">性能测试=在控制的工作负载下测量软件的响应速度。在功能测试基本完成后进行。</div>`},
{title:"The Rule of 8",ref:"pp.130–131",content:`<p>The <span class="key-term">Rule of 8</span> is a human behavior discovery from the 1970s (reconfirmed in the 1990s):</p><div class="callout important"><strong>When system response exceeds 8 seconds, human productivity drops dramatically.</strong> Within 8 seconds, users retain their train of thought. Beyond 8 seconds, users forget what they were doing or intended to do next.</div><p>In the 1970s, mainframe managers intentionally "tuned" subsecond systems to 4–5 seconds — leaving reserve capacity so adding new software wouldn't degrade performance beyond 8 seconds.</p><div class="zh-note">8秒法则：系统响应超过8秒，用户就会忘记自己在做什么，生产力急剧下降。</div>`},
{title:"Workload Planning (3 challenges)",ref:"pp.130–134",content:`<p>If the workload is planned incorrectly, even the most precise timing measurements are meaningless.</p><p><strong>Challenge 1:</strong> Identify which transaction groups need performance measurement. End users always say "everything must respond in 3 seconds" — but different groups have different priorities. A purchase confirmation may need 3s; a warehouse shipping order can wait 3 hours.</p><p><strong>Challenge 2:</strong> Determine <span class="key-term">peak usage</span> for each group — how many users at what time? Peaks may occur at lunch, stock market open, or overnight batch.</p><p><strong>Challenge 3:</strong> Multiple peaks may exist. Example: weekday noon = browsing peak; Saturday morning = purchasing peak. Need <strong>separate workload plans</strong> for each peak.</p><div class="callout">Response time requirements are stated as <strong>maximum</strong> (no slower than), not average. Using averages masks the worst response times.</div>`},
{title:"Workload Execution: Ramp-up & Ramp-down",ref:"pp.134–135",content:`<p><span class="key-term">Ramp-up</span> = process of initiating enough user sessions to drive peak workload. For 2,000 peak users, all must log on within the peak window (e.g., 5–10 minutes).</p><p><strong>Expect the first ramp-up to FAIL</strong> before even half the users are initiated. Common problems: not enough memory, process threads, or file space. Try ramp-up in <strong>increments of 5–10 users</strong> to isolate failure points.</p><p><span class="key-term">Ramp-down</span> = gracefully ending all active sessions. While releasing resources should be faster, errors still occur. Test in the same incremental approach.</p><div class="zh-note">负载爬升：第一次尝试高峰负载时，期望它在半数用户之前就崩溃。每次增加5-10个用户来定位问题。</div>`},
{title:"Component vs. Round Trip Performance",ref:"pp.135–137",content:`<p><span class="key-term">Component performance testing</span> — Measure response time of <strong>individual components</strong> (database search, screen rendering) independently. Gives early warning if components are too slow. Example: if DB search = 6s and screen render = 5s, total = 11s but requirement is 7s → alert the developer early.</p><p><span class="key-term">Round trip performance testing</span> — Measure from when the user presses Enter/Submit until the <strong>complete result</strong> is returned. Includes ALL processing: client, network, server, and back.</p><p>Example breakdown of a 5.8-second round trip:</p><ul><li>Client data generation: 0.5s</li><li>Network to server: 0.2s</li><li>Server DB insert: 2.4s</li><li>Server generate order: 1.3s</li><li>Server generate confirmation: 0.7s</li><li>Network to client: 0.1s</li><li>Client display: 0.6s</li></ul>`},
{title:"The 'Knee' of the Performance Curve",ref:"pp.138–142",content:`<p>Start with an empty test environment and add more concurrent transactions. Plot response time vs. number of transactions:</p><ul><li><strong>Linear region:</strong> Response time grows slowly and predictably</li><li><strong>The <span class="key-term">"knee"</span>:</strong> The inflection point where the trend changes from linear to <strong>exponential</strong></li><li><strong>Exponential region:</strong> Response time skyrockets — a bottleneck has been hit</li></ul><p>The knee represents a bottleneck (CPU, memory, network, disk). You may not need to find it — if your peak workload response time is safely below the max with 40%+ margin, that's sufficient.</p><div class="callout important"><strong>Key technique:</strong> Test all transactions individually in an empty system first. Those that already exceed requirements are NOT ready for workload testing. Mark them <strong>red</strong> (not ready) or <strong>green</strong> (ready) on the workload plan.</div><div class="zh-note">"膝盖点"：性能曲线从线性增长变为指数增长的拐点——表示系统遇到瓶颈了。</div>`},
{title:"Stress & Endurance Testing",ref:"pp.142–148",content:`<p><span class="key-term">Stress testing</span> — Push the system <strong>beyond</strong> peak workload to find the breaking point. Determines what happens when the system is overwhelmed — does it fail gracefully or catastrophically?</p><p><span class="key-term">Endurance testing</span> — Run at peak workload for an <strong>extended period</strong> (hours or days) to detect problems like memory leaks, resource depletion, or gradual performance degradation that only appear over time.</p><div class="callout">Performance testing also reveals problems in the testing environment itself. If results cannot be repeated, the environment may be at fault — check for "rogue software" or configuration drift.</div>`}
],quiz:[
{type:"mc",q:"Performance testing should occur:",options:["Before any functional testing","At the same time as static testing","After functional testing is mostly complete","Only in production"],answer:2,explanation:"Performance testing occurs after functional testing is mostly complete and the software is stable."},
{type:"mc",q:"The 'Rule of 8' states that when response time exceeds 8 seconds:",options:["The system automatically times out","Human productivity drops dramatically","The network connection is lost","Data corruption may occur"],answer:1,explanation:"Beyond 8 seconds, users forget their train of thought, causing dramatic productivity loss."},
{type:"mc",q:"Response time requirements should be stated as:",options:["Average response time","Minimum response time","Maximum response time (no slower than)","Median response time"],answer:2,explanation:"Requirements use maximum (no slower than), not average — averages mask the worst response times."},
{type:"sa",q:"What is the 'knee' of the performance curve and what does it indicate?",sampleAnswer:"The 'knee' is the inflection point on a performance response curve where the trend changes from linear to exponential growth. It indicates that a bottleneck has been hit — some resource (CPU, memory, network, disk) has been exhausted, causing response times to skyrocket with each additional transaction.",keywords:["inflection","linear","exponential","bottleneck","resource","response time"]},
{type:"mc",q:"During the first ramp-up attempt with hundreds of users, the tester should expect:",options:["Flawless performance","The application to fail before half the users are initiated","Response times within requirements","Automatic load balancing"],answer:1,explanation:"The book says: 'The first time you attempt to ramp up any large number of users, the application is expected to fail before half of the intended users have been initiated.'"},
{type:"sa",q:"Explain the difference between component performance testing and round trip performance testing.",sampleAnswer:"Component performance testing measures the response time of individual components in isolation (e.g., a database search or screen rendering). Round trip performance testing measures the total time from when the user presses Enter/Submit until the complete result is returned — including all client processing, network transmission, server processing, and back.",keywords:["individual","component","isolation","total","Enter","Submit","complete result","client","network","server"]},
{type:"mc",q:"On the workload plan, a transaction marked 'red' means:",options:["It passed performance requirements","It has not been tested yet","It already exceeds requirements in an empty system — not ready for workload testing","It needs security testing first"],answer:2,explanation:"Red = already exceeds performance requirements even in an empty system. No point doing workload testing until the developer optimizes it. Green = within requirements, ready for workload testing."}
]});

// ============================================================
INTERACTIVES[8] = function(el) {
  function calcRT(n) {
    if (n<=350) return 1.5+n*0.016;
    var over=n-350; return 1.5+350*0.016+Math.pow(over/30,2.2);
  }
  let txn = 250;
  function render() {
    const rt = calcRT(txn);
    const pass = rt <= 10;
    // Draw simple bar chart with canvas-free approach
    const maxH = 200;
    let h = '<p style="font-size:13px;color:var(--color-text-secondary);margin-bottom:12px;">Drag the slider to add concurrent transactions and watch the response time. Past ~350, the "knee" causes exponential growth.</p>';
    h += '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:12px;">';
    h += '<div style="background:var(--color-background-secondary);border-radius:var(--border-radius-md);padding:10px 12px;"><div style="font-size:20px;font-weight:500;">'+txn+'</div><div style="font-size:11px;color:var(--color-text-secondary);">Active transactions</div></div>';
    h += '<div style="background:var(--color-background-secondary);border-radius:var(--border-radius-md);padding:10px 12px;"><div style="font-size:20px;font-weight:500;">'+rt.toFixed(1)+'s</div><div style="font-size:11px;color:var(--color-text-secondary);">Response time</div></div>';
    h += '<div style="background:var(--color-background-secondary);border-radius:var(--border-radius-md);padding:10px 12px;"><div style="font-size:20px;font-weight:500;color:'+(pass?'var(--color-text-success)':'var(--color-text-danger)')+';">'+(pass?'PASS':'FAIL')+'</div><div style="font-size:11px;color:var(--color-text-secondary);">vs 10s requirement</div></div>';
    h += '</div>';
    // Slider
    h += '<div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;">';
    h += '<span style="font-size:12px;color:var(--color-text-secondary);min-width:90px;">Transactions:</span>';
    h += '<input type="range" min="1" max="500" value="'+txn+'" step="1" oninput="window._perfSet(parseInt(this.value))" style="flex:1">';
    h += '</div>';
    // Visual bar chart
    h += '<div style="display:flex;align-items:flex-end;gap:1px;height:'+maxH+'px;background:var(--color-background-secondary);border-radius:var(--border-radius-md);padding:8px 4px 0;position:relative;">';
    // 10s line
    const lineY = Math.min(10/50*maxH, maxH);
    h += '<div style="position:absolute;left:0;right:0;bottom:'+lineY+'px;border-top:1.5px dashed #c25450;"></div>';
    h += '<div style="position:absolute;right:8px;bottom:'+(lineY+2)+'px;font-size:10px;color:#c25450;">10s max</div>';
    for (let i=0; i<=500; i+=10) {
      const r = calcRT(i);
      const barH = Math.min(r/50*maxH, maxH);
      const isKnee = i>=340 && i<=360;
      const isCurrent = Math.abs(i-txn)<10;
      let barColor = '#3266ad';
      if (r>10) barColor = '#c25450';
      if (isCurrent) barColor = '#EF9F27';
      h += '<div style="flex:1;min-width:1px;background:'+barColor+';height:'+barH+'px;border-radius:1px 1px 0 0;opacity:'+(isCurrent?1:0.5)+';transition:all .1s;"></div>';
    }
    h += '</div>';
    // Labels
    h += '<div style="display:flex;justify-content:space-between;font-size:10px;color:var(--color-text-tertiary);margin-top:4px;padding:0 4px;"><span>0</span><span>100</span><span>200</span><span style="color:#c08530;font-weight:500;">~350 (knee)</span><span>500</span></div>';
    // Explanation
    if (txn <= 350) {
      h += '<div style="margin-top:10px;font-size:12px;color:var(--color-text-secondary);background:var(--color-background-secondary);padding:10px 14px;border-radius:var(--border-radius-md);">Linear region: response time grows slowly and predictably. Each additional transaction adds ~16ms.</div>';
    } else {
      h += '<div style="margin-top:10px;font-size:12px;color:#c25450;background:rgba(194,84,80,0.08);padding:10px 14px;border-radius:var(--border-radius-md);border-left:3px solid #c25450;">Past the "knee" (~350): a bottleneck has been hit. Response time grows exponentially — the system is overwhelmed.</div>';
    }
    el.innerHTML = h;
  }
  window._perfSet = function(v) { txn=v; render(); };
  render();
};

// ============================================================
// Unit 8: Performance Testing
// ============================================================
MODERN_NOTES['8-0'] = {
  title: 'Continuous performance testing in CI/CD',
  year: '2026',
  content: 'The book treats performance testing as a late-stage activity. Modern teams run <strong>performance tests on every build</strong> via CI/CD. Tools like k6, Gatling integrate into GitHub Actions. If a code change degrades response time by >10%, the build fails automatically. Performance is no longer an afterthought — it\'s a continuous quality gate.'
};
MODERN_NOTES['8-5'] = {
  title: 'Cloud auto-scaling changes the "knee" concept',
  year: '2026',
  content: 'In 2007, the "knee" was a hard physical limit (CPU, memory, disk). Modern <strong>cloud auto-scaling</strong> (AWS, Azure, GCP) can automatically add servers when load increases, pushing the knee further out. But the concept still matters: auto-scaling has <strong>cost limits</strong> and <strong>lag time</strong>. Modern performance testing asks: "Can our auto-scaling keep up with real traffic spikes, and at what cost?"'
};
MODERN_NOTES['8-6'] = {
  title: 'Observability > monitoring',
  year: '2026',
  content: 'The book\'s stress/endurance testing now connects to <strong>observability</strong>: not just monitoring "is it up?" but understanding "WHY is it slow?" Tools like Datadog, Grafana, and distributed tracing (Jaeger, Zipkin) let you trace a single user request across dozens of microservices. Observability answers questions the book couldn\'t: "Which of our 50 services caused the 12-second response time?"'
};
