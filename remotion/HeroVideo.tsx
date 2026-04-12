import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Sequence,
} from "remotion";

const BLUE = "#0447AB";
const YELLOW = "#FEC301";
const WHITE = "#FFFFFF";

// FPS=30, duration=240 frames = 8 seconds

function Background() {
  return (
    <AbsoluteFill style={{ backgroundColor: BLUE }}>
      {/* Dot grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      {/* Grain overlay */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.04 }}>
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
    </AbsoluteFill>
  );
}

function DiagonalSlash({ delay }: { delay: number }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = spring({ frame: frame - delay, fps, config: { damping: 200, stiffness: 80 } });
  const width = interpolate(progress, [0, 1], [0, 520]);

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: 80,
        transform: "translateY(-50%) skewX(-12deg)",
        width,
        height: 8,
        backgroundColor: YELLOW,
        overflow: "hidden",
      }}
    />
  );
}

function WordReveal({ text, delay, x = 80, y }: { text: string; delay: number; x?: number; y: number }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = spring({ frame: frame - delay, fps, config: { damping: 30, stiffness: 120 } });
  const translateY = interpolate(progress, [0, 1], [60, 0]);
  const opacity = interpolate(progress, [0, 0.3, 1], [0, 1, 1]);

  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          transform: `translateY(${translateY}px)`,
          opacity,
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 800,
          fontSize: 112,
          lineHeight: 1,
          color: WHITE,
          textTransform: "uppercase",
          letterSpacing: "-2px",
        }}
      >
        {text}
      </div>
    </div>
  );
}

function YellowAccentWord({ text, delay, x = 80, y }: { text: string; delay: number; x?: number; y: number }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = spring({ frame: frame - delay, fps, config: { damping: 30, stiffness: 120 } });
  const translateY = interpolate(progress, [0, 1], [60, 0]);
  const opacity = interpolate(progress, [0, 0.3, 1], [0, 1, 1]);

  return (
    <div style={{ position: "absolute", left: x, top: y, overflow: "hidden" }}>
      <div
        style={{
          transform: `translateY(${translateY}px)`,
          opacity,
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 800,
          fontSize: 112,
          lineHeight: 1,
          color: YELLOW,
          textTransform: "uppercase",
          letterSpacing: "-2px",
        }}
      >
        {text}
      </div>
    </div>
  );
}

function RotatingTag({ delay }: { delay: number }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const tags = ["META ADS", "GOOGLE ADS", "AGENTES IA"];
  const tagDuration = 50;
  const localFrame = Math.max(0, frame - delay);
  const tagIndex = Math.floor(localFrame / tagDuration) % tags.length;
  const tagFrame = localFrame % tagDuration;

  const enterProgress = spring({ frame: tagFrame, fps, config: { damping: 40, stiffness: 200 } });
  const exitProgress = spring({ frame: tagFrame - (tagDuration - 12), fps, config: { damping: 40, stiffness: 200 } });

  const translateY = interpolate(enterProgress, [0, 1], [30, 0]) - interpolate(exitProgress, [0, 1], [0, -30]);
  const opacity = Math.min(
    interpolate(enterProgress, [0, 0.5, 1], [0, 1, 1]),
    interpolate(exitProgress, [0, 1], [1, 0])
  );

  if (localFrame < 0) return null;

  return (
    <div
      style={{
        position: "absolute",
        left: 80,
        bottom: 180,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          transform: `translateY(${translateY}px)`,
          opacity,
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <div style={{ width: 6, height: 6, backgroundColor: YELLOW, borderRadius: "50%" }} />
        <span
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
            fontSize: 22,
            color: YELLOW,
            textTransform: "uppercase",
            letterSpacing: "6px",
          }}
        >
          {tags[tagIndex]}
        </span>
      </div>
    </div>
  );
}

function StatBlock({ value, label, delay, x }: { value: string; label: string; delay: number; x: number }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = spring({ frame: frame - delay, fps, config: { damping: 40, stiffness: 100 } });
  const opacity = interpolate(progress, [0, 0.5, 1], [0, 0, 1]);
  const translateY = interpolate(progress, [0, 1], [20, 0]);

  return (
    <div
      style={{
        position: "absolute",
        bottom: 80,
        left: x,
        opacity,
        transform: `translateY(${translateY}px)`,
        borderLeft: `3px solid ${YELLOW}`,
        paddingLeft: 16,
      }}
    >
      <div
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 800,
          fontSize: 36,
          color: WHITE,
          lineHeight: 1,
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 500,
          fontSize: 13,
          color: "rgba(255,255,255,0.6)",
          textTransform: "uppercase",
          letterSpacing: "2px",
          marginTop: 4,
        }}
      >
        {label}
      </div>
    </div>
  );
}

function CTAButton({ delay }: { delay: number }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = spring({ frame: frame - delay, fps, config: { damping: 40, stiffness: 100 } });
  const opacity = interpolate(progress, [0, 1], [0, 1]);
  const scale = interpolate(progress, [0, 1], [0.8, 1]);

  return (
    <div
      style={{
        position: "absolute",
        right: 120,
        bottom: 120,
        opacity,
        transform: `scale(${scale})`,
        backgroundColor: YELLOW,
        padding: "20px 44px",
        borderRadius: 0,
      }}
    >
      <span
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 700,
          fontSize: 18,
          color: BLUE,
          textTransform: "uppercase",
          letterSpacing: "2px",
        }}
      >
        Habla con Nosotros
      </span>
    </div>
  );
}

export function HeroVideo() {
  return (
    <AbsoluteFill>
      <Background />

      {/* Headline lines */}
      <WordReveal text="Publicidad" delay={10} y={160} />
      <YellowAccentWord text="que" delay={18} x={720} y={160} />
      <WordReveal text="Convierte" delay={26} y={268} />

      {/* Yellow slash */}
      <DiagonalSlash delay={40} />

      {/* Rotating service tag */}
      <RotatingTag delay={60} />

      {/* Stats */}
      <StatBlock value="+500" label="Clientes Activos" delay={70} x={80} />
      <StatBlock value="3x ROAS" label="Promedio" delay={80} x={280} />
      <StatBlock value="98%" label="Retención" delay={90} x={480} />

      {/* CTA */}
      <CTAButton delay={100} />
    </AbsoluteFill>
  );
}
