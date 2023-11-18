import { useSnapshot } from 'valtio';
import { fontData } from '@/store';
import { GlyphAttributes } from '@/store/types';
import { HTMLAttributes } from 'react';

function GlyphCell({ glyph, unitsPerEm, descent, ...rest }: { glyph: GlyphAttributes; unitsPerEm: number; descent: number; } & HTMLAttributes<HTMLDivElement>) {
    return (
        <div className="group w-min bg-sky-400/20 border-primary-400 border rounded divide-y grid" {...rest}>

            <div className="px-1 py-1 w-16 h-16 border-primary-400 rounded grid place-items-center group-hover:scale-[2] transition-transform">
                <svg className="1fill-foreground bg-sky-400" viewBox={`0 0 ${unitsPerEm} ${unitsPerEm}`}>
                    <g transform={`scale(1,-1) translate(0,-${unitsPerEm + descent}) scale(0.9,0.9)`}>
                        <path d={glyph.d} />
                    </g>
                </svg>
            </div>
            {/* TODO: reduce divs */}

            <button>copy</button>

            <div className="w-full text-[.65rem] flex items-center justify-center overflow-hidden">
                {glyph.unicode}
            </div>
        </div>
    );
}

export function GlyphsGrid() {
    const { glyphs: snapGlyphs, unitsPerEm, descent } = useSnapshot(fontData);
    return (
        <div className="text-xs grid grid-cols-[repeat(auto-fill,minmax(5rem,1fr))]">
            {snapGlyphs.map((glyph) => (
                <GlyphCell
                    glyph={glyph}
                    unitsPerEm={unitsPerEm}
                    descent={descent}
                    key={`${glyph.unicode}${glyph['glyph-name'] || ''}`}
                />
            ))}
        </div>
    );
}
