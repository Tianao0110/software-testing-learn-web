// Unit 11: Test Results (Chapter 12, pp.176–201)
EXTRA_UNITS.push({
id:11, concepts:[
{title:"Test Cases: Attempted vs. Successful",ref:"pp.176–179",content:`<p>Each test case has one of three statuses:</p><ul><li><span class="key-term">Unattempted</span> — Not yet executed</li><li><span class="key-term">Attempted and successful</span> — All actual results match expected results</li><li><span class="key-term">Attempted but unsuccessful</span> — Some or all actual results don't match</li></ul><p>The ratio of unattempted vs. attempted is the most obvious <strong>progress indicator</strong>. Example: 15 test cases attempted in 10 workdays = 1.5/day. 100 total → ~14 workweeks for the first round.</p><div class="callout">This is only the <strong>first round</strong>. Defects require correction and retesting — expect 2nd, 3rd, possibly 4th rounds.</div><div class="zh-note">测试进度看"已尝试"vs"未尝试"比率。但第一轮只是开始——发现缺陷后还要修改、重测。</div>`},
{title:"Defect Severity / Priority Codes",ref:"pp.178–180",content:`<p>Testers prioritize unsuccessful outcomes using <span class="key-term">severity codes</span> (1–4):</p><ul><li><strong>Priority 1:</strong> Highest business risk (showstopper)</li><li><strong>Priority 4:</strong> Lowest business risk (cosmetic)</li></ul><p>Three types of severity perspectives:</p><ol style="padding-left:20px;"><li><strong>Testing severity:</strong> Is this a testing showstopper?</li><li><strong>Development severity:</strong> Is this a development showstopper?</li><li><strong>Shipping/deployment severity:</strong> Is this a shipping showstopper?</li></ol><p>The closer to completion, the more important the <strong>shipping showstopper</strong> code becomes.</p>`},
{title:"Defect Tracking & the Defect Backlog",ref:"pp.179–182",content:`<p><span class="key-term">Defect tracking</span> follows each defect from discovery → correction → retesting → verification. Without this chain, testing provides <strong>no real value</strong>.</p><p>The <span class="key-term">defect backlog</span> = all defects NOT yet corrected by the reporting date.</p><p>Example: 300 discovered, 100 corrected → backlog of 200.</p><p>The challenge: the backlog is a <strong>weekly moving target</strong> as old defects get fixed and new ones are found. Late-discovered defects often get promoted to "must fix" immediately.</p><div class="callout">If defects are discovered but not reported, or reported but corrections not verified — testing provides <strong>no real value</strong> to the development effort.</div>`},
{title:"Defect Clusters & Root Cause Analysis",ref:"pp.182–187",content:`<p>Add a <span class="key-term">code earmark</span> column to the defect tracking log — identifying which module/class contained the defect.</p><p>Then do a <strong>frequency count</strong> of earmarks, ordered most-to-least. Clusters of defects will emerge, revealing the <strong>"buggiest" code</strong>.</p><p>This analysis is most helpful during the first third to half of development when software is least stable.</p><div class="callout important"><strong>Practical value:</strong> If 4 code modules account for 80% of defects, development can focus improvement efforts there rather than spreading effort evenly across all code.</div><div class="zh-note">根因分析：在缺陷日志中加"代码标记"列，做频率统计找出"最多bug的代码模块"，集中力量解决。</div>`},
{title:"Leveraging Prior Project Defect History",ref:"pp.187–196",content:`<p>Plot defect discoveries over time (x-axis = weeks, y-axis = defects found). Compare with prior projects:</p><ul><li><strong>Project A (above prior curve):</strong> Finding MORE defects FASTER — desirable. Testing is more effective. Predicts fewer customer-found defects.</li><li><strong>Project B (below prior curve):</strong> Finding FEWER defects SLOWER — concerning. Testing may be less effective. Predicts more customer-found defects.</li></ul><p>The <strong>peak point</strong> (about ⅓ into the project) becomes a prediction anchor. After the peak, the discovery rate should decline.</p><p>The area under the extended curve beyond the project completion date approximates the number of <strong>customer-discovered defects</strong>.</p><div class="callout">Cost impact: Customer-found defects cost ~<strong>$14,000 each</strong>. Project A predicted 2 customer defects ($28K). Project B predicted 196 ($2.7 million).</div>`},
{title:"The Rayleigh Curve",ref:"pp.196–201",content:`<p>The <span class="key-term">Rayleigh curve</span> is a mathematical formula from the Weibull distribution. It predicts defect discovery rates with ~10% accuracy when used intelligently.</p><p><strong>How to use it:</strong></p><ol style="padding-left:20px;"><li>Plot your project's defect discovery curve</li><li>Place a "gunsight" on the peak — record the week and peak defect count</li><li>Feed these two inputs into the Rayleigh formula</li><li>Compare the Rayleigh prediction (total defects) with your actual findings</li></ol><p>If the Rayleigh curve predicts 15% more defects than you found, your testing may be missing defects.</p><div class="callout important"><strong>Warning:</strong> The Rayleigh curve is pure mathematics; actual defect discovery is behavioral. Success requires "a healthy dose of judgment, experience, and intelligence" — not blind formula application.</div><div class="zh-note">瑞利曲线：数学公式预测缺陷发现率，约90%准确。但需要结合经验判断，不能盲目使用。</div>`}
],quiz:[
{type:"mc",q:"A test case where some actual results don't match expected results is marked:",options:["Unattempted","Attempted and successful","Attempted but unsuccessful","Cancelled"],answer:2,explanation:"When actual ≠ expected, the test case is 'attempted but unsuccessful.'"},
{type:"mc",q:"Defect severity codes range from Priority 1 (highest risk) to:",options:["Priority 2","Priority 3","Priority 4","Priority 10"],answer:2,explanation:"Priority 1 = highest business risk (showstopper), Priority 4 = lowest (cosmetic)."},
{type:"sa",q:"What is the defect backlog and why is it challenging to manage?",sampleAnswer:"The defect backlog is the list of all defects that have not been corrected by the reporting date. It's challenging because it's a weekly moving target — old defects get fixed while new ones are discovered. Late defects often get promoted to 'must fix' immediately, constantly reprioritizing the list.",keywords:["not corrected","moving target","weekly","new","fixed","prioritiz"]},
{type:"mc",q:"Root cause analysis uses what additional information in the defect tracking log?",options:["Tester name","Code earmark (which module contained the defect)","Testing tool version","Date of next release"],answer:1,explanation:"Adding a code earmark column allows frequency counting to find the 'buggiest' code modules."},
{type:"sa",q:"In defect curve analysis, what does it mean if your project's curve is BELOW the prior project's curve?",sampleAnswer:"It means you are finding fewer defects later than in the prior project. This is usually an undesirable trend — it suggests your testing may be less effective, and more defects will be left undiscovered for customers to find after deployment. However, if the development process has genuinely improved, it could mean there are actually fewer defects to find.",keywords:["fewer","later","less effective","undesirable","customer","undiscovered","improvement"]},
{type:"mc",q:"The Rayleigh curve requires which two inputs to predict total defects?",options:["Total budget and team size","Peak defect discovery rate and the week it occurred","Number of test cases and test tools used","Lines of code and number of developers"],answer:1,explanation:"The Rayleigh formula needs any 2 of: (1) peak discovery rate, (2) week of peak, (3) total defects. With 1 and 2, it predicts 3."},
{type:"mc",q:"Customer-discovered defects cost approximately how much each to fix?",options:["$140","$1,400","$14,000","$140,000"],answer:2,explanation:"The textbook cites an average of $14,000 per defect when found by customers after deployment."}
]});

// ============================================================
INTERACTIVES[11] = function(el) {
  function gauss(x,peak,center,spread) { return peak*Math.exp(-Math.pow(x-center,2)/(2*spread*spread)); }
  const show = { prior:true, a:true, b:true };
  function render() {
    const weeks = 28;
    let h = '<p style="font-size:13px;color:var(--color-text-secondary);margin-bottom:12px;">Toggle curves to compare. Project A (green) finds more defects faster = good testing. Project B (red) finds fewer later = bad. The area beyond Week 24 = customer-found defects.</p>';
    h += '<div style="display:flex;gap:6px;margin-bottom:12px;flex-wrap:wrap;">';
    [['prior','Prior project','#73726c'],['a','Project A (better)','#3d8b5a'],['b','Project B (worse)','#c25450']].forEach(([k,l,c]) => {
      h += '<button onclick="window._ddToggle(\''+k+'\')" style="display:flex;align-items:center;gap:6px;padding:5px 12px;font-size:12px;border-radius:var(--border-radius-md);cursor:pointer;border:0.5px solid '+(show[k]?c:'var(--color-border-tertiary)')+';background:var(--color-background-primary);color:'+(show[k]?'var(--color-text-primary)':'var(--color-text-tertiary)')+';font-family:var(--font-sans);opacity:'+(show[k]?1:0.5)+';"><span style="width:10px;height:10px;border-radius:2px;background:'+c+';"></span>'+l+'</button>';
    });
    h += '</div>';
    // Chart area
    const chartH = 180;
    const maxDefects = 1300;
    h += '<div style="position:relative;height:'+chartH+'px;background:var(--color-background-secondary);border-radius:var(--border-radius-md);padding:0;overflow:hidden;">';
    // Week 24 line
    const w24x = (24/weeks)*100;
    h += '<div style="position:absolute;left:'+w24x+'%;top:0;bottom:0;border-left:1.5px dashed var(--color-text-tertiary);opacity:0.4;"></div>';
    h += '<div style="position:absolute;left:'+(w24x-1)+'%;top:4px;font-size:9px;color:var(--color-text-tertiary);transform:translateX(-50%);">W24</div>';
    // SVG curves
    h += '<svg width="100%" height="100%" viewBox="0 0 '+weeks+' '+maxDefects+'" preserveAspectRatio="none" style="position:absolute;inset:0;">';
    if (show.prior) {
      let d='M';
      for (let w=1;w<=weeks;w++) { d+=(w===1?'':'L')+w+','+(maxDefects-gauss(w,749,9,4.5)); }
      h += '<path d="'+d+'" fill="none" stroke="#73726c" stroke-width="0.15" vector-effect="non-scaling-stroke" style="stroke-width:2px;"/>';
    }
    if (show.a) {
      let d='M';
      for (let w=1;w<=weeks;w++) { d+=(w===1?'':'L')+w+','+(maxDefects-gauss(w,1213,6,3.2)); }
      h += '<path d="'+d+'" fill="none" stroke="#3d8b5a" stroke-width="0.15" vector-effect="non-scaling-stroke" style="stroke-width:2px;"/>';
    }
    if (show.b) {
      let d='M';
      for (let w=1;w<=weeks;w++) { d+=(w===1?'':'L')+w+','+(maxDefects-gauss(w,607,12,5.8)); }
      h += '<path d="'+d+'" fill="none" stroke="#c25450" stroke-width="0.15" vector-effect="non-scaling-stroke" style="stroke-width:2px;"/>';
    }
    h += '</svg></div>';
    // X-axis labels
    h += '<div style="display:flex;justify-content:space-between;font-size:10px;color:var(--color-text-tertiary);margin-top:4px;"><span>Week 1</span><span>Week 7</span><span>Week 14</span><span>Week 21</span><span>Week 28</span></div>';
    // Cost comparison cards
    h += '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:12px;">';
    h += '<div style="background:var(--color-background-secondary);border-radius:var(--border-radius-md);padding:10px 12px;"><div style="font-size:11px;color:#73726c;">Prior project</div><div style="font-size:18px;font-weight:500;">70</div><div style="font-size:11px;color:var(--color-text-secondary);">customer defects<br>$980,000 cost</div></div>';
    h += '<div style="background:var(--color-background-secondary);border-radius:var(--border-radius-md);padding:10px 12px;"><div style="font-size:11px;color:#3d8b5a;">Project A</div><div style="font-size:18px;font-weight:500;">2</div><div style="font-size:11px;color:var(--color-text-secondary);">predicted defects<br>$28,000 (saved $952K)</div></div>';
    h += '<div style="background:var(--color-background-secondary);border-radius:var(--border-radius-md);padding:10px 12px;"><div style="font-size:11px;color:#c25450;">Project B</div><div style="font-size:18px;font-weight:500;">196</div><div style="font-size:11px;color:var(--color-text-secondary);">predicted defects<br>$2,744,000 cost</div></div>';
    h += '</div>';
    el.innerHTML = h;
  }
  window._ddToggle = function(k) { show[k]=!show[k]; render(); };
  render();
};

// ============================================================
// Unit 11: Test Results
// ============================================================
MODERN_NOTES['11-2'] = {
  title: 'Real-time quality dashboards replace weekly reports',
  year: '2026',
  content: 'The book\'s weekly defect backlog tracking is now <strong>real-time dashboards</strong> (Grafana, JIRA dashboards, TestRail analytics). Teams see defect trends, test pass rates, and code coverage <strong>updated live</strong> on every commit. The book\'s insight — "track corrections in a timely manner" — is now automated: JIRA workflows automatically move tickets through discovered → assigned → fixed → verified.'
};
MODERN_NOTES['11-4'] = {
  title: 'AI-driven defect prediction',
  year: '2026',
  content: 'The book uses Rayleigh curves for prediction. Modern AI tools analyze commit history, code complexity, team velocity, and historical defect patterns to <strong>predict which code modules are most likely to contain defects</strong> — before testing even begins. This doesn\'t replace the book\'s approach; it extends it with more data points. The book\'s "code earmark" concept = modern "defect prediction models."'
};
