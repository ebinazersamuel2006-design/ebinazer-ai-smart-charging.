import Deck from '@/deck/Deck';
import Slide from '@/deck/Slide';
import Build from '@/deck/Build';
import Reveal from '@/deck/Reveal';
import Cover from '@/components/Cover';
import Agenda from '@/components/Agenda';
import Contrast from '@/components/Contrast';
import Steps from '@/components/Steps';
import Split from '@/components/Split';
import Section from '@/components/Section';
import BigNumber from '@/components/BigNumber';
import CountUp from '@/components/CountUp';
import Timeline from '@/components/Timeline';
import { BarChart, LineChart, DonutChart } from '@/components/Charts';

const panel = {
  borderRadius: 'var(--radius-lg)',
  background: 'linear-gradient(145deg, rgba(37,18,74,.86), rgba(13,9,31,.9))',
  border: '1px solid rgba(178,124,255,.28)',
  boxShadow: '0 24px 60px rgba(0,0,0,.28), inset 0 1px 0 rgba(255,255,255,.1)',
};

const stat = (value: string, label: string, detail: string) => (
  <div className="mat" style={{ padding: 22, borderRadius: 'var(--radius)' }}>
    <div className="kicker" style={{ color: 'var(--primary)', marginBottom: 12 }}>{label}</div>
    <div style={{ fontSize: 'clamp(28px,4vw,46px)', fontWeight: 700, letterSpacing: '-.05em' }}>{value}</div>
    <div className="foot" style={{ marginTop: 7 }}>{detail}</div>
  </div>
);

function FlowDiagram() {
  const nodes = [
    ['01', 'Power source', 'regulated DC input'],
    ['02', 'Wireless transmitter', 'inductive transfer coil'],
    ['03', 'Wireless receiver', 'energy capture + rectifier'],
    ['04', 'Charge + protect', 'safe battery interface'],
    ['05', 'Rechargeable battery', 'store energy'],
    ['06', 'Sensors + ESP32', 'voltage · current · temperature'],
    ['07', 'AI / ML + dashboard', 'SoC · health · warning'],
  ];
  return (
    <div style={{ display: 'grid', gap: 8, maxWidth: 640, marginInline: 'auto' }}>
      {nodes.map(([n, title, detail], i) => (
        <div key={title}>
          <div className="mat" style={{ ...panel, padding: '12px 18px', display: 'grid', gridTemplateColumns: '46px 1fr auto', alignItems: 'center', gap: 12 }}>
            <span className="chip" style={{ justifySelf: 'start', color: 'var(--primary)' }}>{n}</span>
            <strong style={{ fontSize: 'clamp(13px,1.5vw,17px)' }}>{title}</strong>
            <span className="foot" style={{ textAlign: 'right' }}>{detail}</span>
          </div>
          {i < nodes.length - 1 && <div style={{ width: 1, height: 8, background: 'var(--primary)', opacity: .65, marginInline: 'auto' }} />}
        </div>
      ))}
    </div>
  );
}

function SensorDashboard() {
  return (
    <div style={{ ...panel, padding: 20, width: '100%', maxWidth: 640 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
        <div>
          <div className="kicker" style={{ color: 'var(--primary)' }}>Live battery telemetry</div>
          <div style={{ fontSize: 20, fontWeight: 650, marginTop: 5 }}>Prototype monitor</div>
        </div>
        <span className="chip" style={{ color: '#bfffd5', borderColor: 'rgba(91,236,160,.3)', background: 'rgba(91,236,160,.1)' }}>● normal</span>
      </div>
      <div className="cols" style={{ gap: 10, marginBottom: 14 }}>
        {stat('3.85 V', 'Voltage', 'sensor input')}
        {stat('0.45 A', 'Current', 'charging state')}
        {stat('31 °C', 'Temperature', 'thermal safety')}
      </div>
      <div style={{ ...panel, padding: 14, background: 'rgba(5,3,18,.42)' }}>
        <div className="foot" style={{ marginBottom: 8 }}>Charge cycle trend</div>
        <LineChart points={[30, 34, 33, 42, 51, 56, 65, 72, 81]} height={130} />
      </div>
    </div>
  );
}

function AIPipeline() {
  const items = ['Sensor data', 'Cleaning', 'Features', 'Random Forest', 'Predictions'];
  return (
    <div style={{ display: 'flex', alignItems: 'stretch', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
      {items.map((item, i) => (
        <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div className="mat" style={{ ...panel, width: 132, minHeight: 92, padding: 13, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <span className="chip" style={{ alignSelf: 'flex-start' }}>{String(i + 1).padStart(2, '0')}</span>
            <strong style={{ fontSize: 14 }}>{item}</strong>
          </div>
          {i < items.length - 1 && <span className="accent-text" style={{ fontSize: 24 }}>→</span>}
        </div>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <Deck>
      <Slide
        full
        nav="Cover"
        notes="Introduce the project as a convergence of three systems: wireless power, IoT telemetry, and AI-driven battery intelligence."
      >
        <img
          src="/ChatGPT_Image_Aug_26,_2026,_08_30_00_PM.png"
          alt="AI-based smart wireless emergency charging and battery health prediction system project presentation"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </Slide>

      <Agenda
        nav="Overview"
        notes="Use this as the route map. The story moves from the emergency charging gap to the integrated prototype and its future potential."
        kicker="Project overview"
        title="From energy transfer to battery intelligence."
        items={[
          { title: 'Why emergency charging needs a rethink', hint: 'context' },
          { title: 'The proposed system', hint: 'architecture' },
          { title: 'How the intelligence works', hint: 'method' },
          { title: 'What the prototype enables', hint: 'impact' },
        ]}
      />

      <Slide center nav="Abstract" notes="Frame the project as more than a wireless charger: it is a sensing, learning, and decision-support system.">
        <Reveal>
          <div className="kicker" style={{ marginBottom: 14 }}>01 · Abstract</div>
          <h2 className="headline" style={{ marginInline: 'auto' }}>A charger that can <span className="accent-text">understand</span> the battery.</h2>
        </Reveal>
        <Reveal delay={.12}>
          <p className="lead" style={{ marginTop: 22, maxWidth: 760 }}>
            The system transfers power from a transmitter to a rechargeable battery without a physical cable, while sensors continuously capture voltage, current, temperature, and cycle information.
          </p>
        </Reveal>
        <Build at={1}>
          <div className="mat" style={{ ...panel, maxWidth: 760, margin: '26px auto 0', padding: '16px 20px', textAlign: 'left' }}>
            <span className="chip">The intelligence layer</span>
            <p style={{ marginTop: 11, color: 'var(--fg-muted)', lineHeight: 1.55 }}>Data Science methods clean the data, estimate State of Charge, predict battery health, and surface abnormal operating conditions on a simple dashboard.</p>
          </div>
        </Build>
      </Slide>

      <Contrast
        nav="Problem"
        notes="Contrast the familiar charging flow with the gaps that appear during emergencies and over a battery's lifetime."
        kicker="02 · Problem statement"
        title="A cable solves power. It does not solve uncertainty."
        left={{ label: 'Today', title: 'Conventional charging', points: ['Requires a suitable cable and port', 'Cable or adapter may be unavailable', 'Users mostly see a percentage', 'Battery condition stays hidden'] }}
        right={{ label: 'The opportunity', title: 'Emergency intelligence', points: ['Charge without a physical cable', 'Monitor critical parameters in real time', 'Predict health before failure', 'Warn when behavior turns abnormal'] }}
      />

      <Slide center nav="Objectives" notes="The objectives make the scope concrete: hardware demonstration, measurable signals, machine learning, and a usable dashboard.">
        <Reveal>
          <div className="kicker" style={{ marginBottom: 12 }}>03 · Objectives</div>
          <h2 className="headline" style={{ marginInline: 'auto' }}>One prototype. <span className="accent-text">Nine outcomes.</span></h2>
        </Reveal>
        <div className="cols" style={{ maxWidth: 980, margin: '32px auto 0', textAlign: 'left' }}>
          {[
            ['01', 'Transfer', 'Develop a low-power wireless charging prototype.'],
            ['02', 'Measure', 'Capture voltage, current, temperature, and cycles.'],
            ['03', 'Prepare', 'Clean and structure the dataset for analysis.'],
            ['04', 'Predict', 'Estimate SoC, battery health, and abnormal states.'],
            ['05', 'Visualize', 'Display battery information through a simple dashboard.'],
            ['06', 'Integrate', 'Demonstrate AI, IoT, and wireless power together.'],
          ].map(([no, title, body]) => (
            <div key={no} className="mat" style={{ ...panel, padding: 18, display: 'flex', gap: 14 }}>
              <span className="chip" style={{ alignSelf: 'flex-start' }}>{no}</span>
              <div><strong style={{ display: 'block', marginBottom: 5 }}>{title}</strong><span className="foot">{body}</span></div>
            </div>
          ))}
        </div>
      </Slide>

      <Section nav="Architecture" n={2} kicker="Part two · The system" title={<>From <span className="accent-text">source</span> to insight.</>} />

      <Split
        nav="Existing system"
        notes="Show the limitation clearly: the baseline is useful for charging, but it does not create a feedback loop around safety and health."
        kicker="04 · Existing system"
        title={<>The baseline ends at <span className="accent-text">charge level.</span></>}
        body="Power source → adapter → physical cable → battery. The user gets energy, but not context."
        media={<div style={{ width: '100%', height: '100%', display: 'grid', placeItems: 'center', padding: 34, background: 'radial-gradient(circle at 50% 50%, rgba(156,104,255,.2), transparent 55%)' }}><div style={{ width: '100%', maxWidth: 440, display: 'grid', gap: 0 }}>{['Power source', 'Adapter', 'Physical cable', 'Battery'].map((item, i) => <div key={item} style={{ display: 'grid', justifyItems: 'center' }}><div className="mat" style={{ ...panel, width: '100%', padding: '18px 20px', textAlign: 'center', color: i === 3 ? 'var(--primary)' : 'var(--fg)' }}>{item}</div>{i < 3 && <div style={{ height: 36, width: 1, borderLeft: '1px dashed var(--primary)' }} />}</div>)}</div></div>}
      />

      <Split
        nav="Proposed system"
        flip
        notes="The differentiator is the feedback loop: charge, sense, model, and respond."
        kicker="05 · Proposed system"
        title={<>A closed loop for <span className="accent-text">safer charging.</span></>}
        body="A wireless transmitter and receiver move energy while the sensing layer and AI layer turn battery behavior into an actionable view."
        media={<SensorDashboard />}
      />

      <Slide center nav="Block diagram" notes="Walk top to bottom. The wireless stage transfers energy; the intelligence stage observes and interprets the battery state.">
        <Reveal>
          <div className="kicker" style={{ marginBottom: 10 }}>06 · System block diagram</div>
          <h2 className="headline" style={{ marginInline: 'auto', marginBottom: 20 }}>Every layer has a <span className="accent-text">job.</span></h2>
        </Reveal>
        <Reveal delay={.1}><FlowDiagram /></Reveal>
      </Slide>

      <Slide center nav="Methodology" notes="This is the end-to-end build sequence. Emphasize that the dataset is collected from the physical prototype, not invented separately from it.">
        <Reveal>
          <div className="kicker" style={{ marginBottom: 10 }}>07 · Methodology</div>
          <h2 className="headline" style={{ marginInline: 'auto', marginBottom: 25 }}>Measure first. <span className="accent-text">Learn second.</span></h2>
        </Reveal>
        <Steps items={[{ title: 'Study', body: 'Review wireless transfer, rechargeable batteries, and protection circuits.' }, { title: 'Build', body: 'Connect transmitter, receiver, sensors, and ESP32 in a safe arrangement.' }, { title: 'Collect', body: 'Record charging and discharging data under controlled conditions.' }, { title: 'Model', body: 'Clean, engineer features, train, test, and connect predictions to a dashboard.' }]} />
      </Slide>

      <Slide center nav="Hardware + software" notes="Separate the physical stack from the analysis stack. This makes the prototype feel buildable and testable.">
        <Reveal>
          <div className="kicker" style={{ marginBottom: 10 }}>08 · Implementation stack</div>
          <h2 className="headline" style={{ marginInline: 'auto' }}>Hardware in the loop. <span className="accent-text">Python in the cloud.</span></h2>
        </Reveal>
        <div className="cols" style={{ maxWidth: 980, margin: '28px auto 0', textAlign: 'left' }}>
          <div className="mat" style={{ ...panel, padding: 24 }}>
            <span className="chip">Hardware</span>
            <h3 style={{ margin: '16px 0 12px', fontSize: 24 }}>The sensing edge</h3>
            <p className="foot" style={{ lineHeight: 1.65 }}>ESP32 or Arduino-compatible controller, wireless transmitter and receiver, rechargeable battery, protection module, voltage/current/temperature sensors, display, indicators, regulated supply, and prototype board.</p>
          </div>
          <div className="mat" style={{ ...panel, padding: 24 }}>
            <span className="chip">Software</span>
            <h3 style={{ margin: '16px 0 12px', fontSize: 24 }}>The learning edge</h3>
            <p className="foot" style={{ lineHeight: 1.65 }}>Python, NumPy, Pandas, scikit-learn, Matplotlib, Arduino IDE, Jupyter or Colab, VS Code, and an optional Streamlit dashboard with Firebase or MySQL storage.</p>
          </div>
        </div>
      </Slide>

      <Slide center nav="AI algorithm" notes="Random Forest is recommended because it handles mixed sensor features well and is easy to inspect. The sample values are representative of the project flow described in the report.">
        <Reveal>
          <div className="kicker" style={{ marginBottom: 10 }}>09 · AI / machine learning</div>
          <h2 className="headline" style={{ marginInline: 'auto' }}>Random Forest turns readings into <span className="accent-text">signals.</span></h2>
        </Reveal>
        <Reveal delay={.12}><div style={{ maxWidth: 900, margin: '28px auto 0' }}><AIPipeline /></div></Reveal>
        <Build at={1}>
          <div className="cols" style={{ maxWidth: 980, margin: '28px auto 0', textAlign: 'left' }}>
            <div className="mat" style={{ ...panel, padding: 20 }}><span className="chip">Inputs</span><p className="foot" style={{ marginTop: 12, lineHeight: 1.6 }}>Voltage 3.85 V · current 0.45 A · temperature 31 °C · charging time · cycle count</p></div>
            <div className="mat" style={{ ...panel, padding: 20 }}><span className="chip">Outputs</span><p className="foot" style={{ marginTop: 12, lineHeight: 1.6 }}>Estimated SoC · battery-health class/value · abnormal-condition status</p></div>
          </div>
        </Build>
      </Slide>

      <BigNumber nav="Prediction" notes="Let the sample prediction land as a concrete example of the model's output, while clearly labeling it as an example from the report flow."
        kicker="A model output, made visible"
        value={<><CountUp to={87} suffix="%" /></>}
        caption="predicted battery health in the example inference flow"
        foot="Example: 3.85 V · 0.45 A · 31 °C · 120 cycles → model → battery health 87% → status: GOOD"
      />

      <Slide center nav="Dashboard" notes="The dashboard is the user-facing payoff: one glance for charge level, health status, and warnings.">
        <Reveal>
          <div className="kicker" style={{ marginBottom: 10 }}>10 · Expected result</div>
          <h2 className="headline" style={{ marginInline: 'auto' }}>From raw telemetry to a <span className="accent-text">clear decision.</span></h2>
        </Reveal>
        <Reveal delay={.1}>
          <div className="cols" style={{ maxWidth: 980, margin: '28px auto 0' }}>
            <div style={{ ...panel, padding: 20, textAlign: 'left' }}>
              <div className="kicker" style={{ color: 'var(--primary)', marginBottom: 14 }}>At a glance</div>
              <div style={{ display: 'grid', gap: 12 }}>
                {['Charge level', 'Battery health', 'Temperature safety', 'Abnormal warning'].map((item, i) => <div key={item} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--hair-2)', paddingBottom: 12 }}><span className="foot">{item}</span><strong style={{ color: i === 3 ? '#bfffd5' : 'var(--fg)' }}>{['72%', '87%', '31 °C', 'None'][i]}</strong></div>)}
              </div>
            </div>
            <div style={{ ...panel, padding: 20 }}><div className="foot" style={{ marginBottom: 8 }}>Charge level over cycle</div><BarChart data={[{ label: '1', value: 31 }, { label: '2', value: 45 }, { label: '3', value: 58 }, { label: '4', value: 72 }, { label: '5', value: 87 }]} height={160} /></div>
            <div style={{ ...panel, padding: 10, display: 'grid', placeItems: 'center' }}><DonutChart value={87} label="health score" size={150} /></div>
          </div>
        </Reveal>
      </Slide>

      <Slide center nav="Advantages" notes="Keep this as the benefits summary. The key phrase is integration: this project joins hardware, IoT, AI, and Data Science in one loop.">
        <Reveal>
          <div className="kicker" style={{ marginBottom: 10 }}>11 · Advantages</div>
          <h2 className="headline" style={{ marginInline: 'auto' }}>Useful in the moment. <span className="accent-text">Smarter over time.</span></h2>
        </Reveal>
        <div className="cols" style={{ maxWidth: 980, margin: '30px auto 0', textAlign: 'left' }}>
          {['Cable-free emergency charging concept', 'Real-time monitoring of important battery parameters', 'AI-based battery health prediction', 'Early warning for abnormal behavior', 'Data-driven analysis suitable for an AIDSD project', 'One integrated hardware + IoT + AI system'].map((item, i) => <div key={item} className="mat" style={{ ...panel, padding: 18, display: 'flex', gap: 14, alignItems: 'center' }}><span className="chip" style={{ color: 'var(--primary)' }}>{String(i + 1).padStart(2, '0')}</span><span style={{ color: 'var(--fg-muted)', lineHeight: 1.4 }}>{item}</span></div>)}
        </div>
      </Slide>

      <Slide center nav="Future scope" notes="End on the trajectory: better efficiency, richer intelligence, multiple devices, renewable inputs, and deployment in public emergency settings.">
        <Reveal>
          <div className="kicker" style={{ marginBottom: 10 }}>12 · Future scope</div>
          <h2 className="headline" style={{ marginInline: 'auto' }}>A prototype with room to <span className="accent-text">grow.</span></h2>
        </Reveal>
        <div style={{ maxWidth: 680, margin: '30px auto 0' }}><Timeline items={[{ time: 'Next', title: 'Improve transfer', body: 'Increase wireless efficiency, charging distance, and charging speed.' }, { time: 'Then', title: 'Predict ahead', body: 'Optimize charging based on battery condition and estimate remaining useful life.' }, { time: 'Scale', title: 'Deploy broadly', body: 'Support multiple portable devices, renewable inputs, and public disaster-response charging stations.' }]} /></div>
      </Slide>

      <Slide center nav="Conclusion" notes="Close by restating the thesis in one sentence, then invite questions."
        style={{ background: 'radial-gradient(circle at 50% 38%, rgba(118,67,255,.28), transparent 45%)' }}>
        <Reveal>
          <div className="kicker" style={{ marginBottom: 14 }}>13 · Conclusion</div>
          <h2 className="display" style={{ maxWidth: 900 }}>Power without the cable.<br /><span className="accent-text">Intelligence without the guesswork.</span></h2>
        </Reveal>
        <Reveal delay={.16}>
          <p className="subhead" style={{ marginTop: 24, maxWidth: 800 }}>The project combines wireless power transfer, real-time sensing, and Machine Learning to make emergency charging safer, more observable, and more actionable.</p>
        </Reveal>
        <Build at={1}><div className="chip" style={{ marginTop: 30, padding: '9px 16px' }}>Thank you · Questions?</div></Build>
      </Slide>
    </Deck>
  );
}
