import { ImageResponse } from 'next/og';

// Branded 1200×630 social-share image, generated at build time.
export const dynamic = 'force-static';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Clean Convictions — House & Office Cleaning in Yuma, AZ';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #0d3b5c 0%, #0a2d47 100%)',
          padding: '72px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{ width: 56, height: 56, borderRadius: 14, background: '#ff6b35' }} />
          <span style={{ fontSize: 34, color: 'white', fontWeight: 700, letterSpacing: -1 }}>
            Clean Convictions
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: 76, color: 'white', fontWeight: 800, lineHeight: 1.05, letterSpacing: -2 }}>
            House &amp; office cleaning
          </span>
          <span style={{ fontSize: 76, color: '#ff6b35', fontWeight: 800, lineHeight: 1.05, letterSpacing: -2 }}>
            in Yuma, Arizona.
          </span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <span style={{ fontSize: 30, color: 'rgba(255,255,255,0.8)' }}>
            No Compromise. No Dust.
          </span>
          <span style={{ fontSize: 26, color: 'rgba(255,255,255,0.6)' }}>
            Flexible scheduling · 100% re-clean guarantee
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
