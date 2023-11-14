import { useSnapshot } from 'valtio';
import { fontData } from '@/store';
import { GlyphAttributes } from '@/store/types';
import { HTMLAttributes } from 'react';

function SvgCell({ glyph, ...rest }: { glyph: GlyphAttributes; } & HTMLAttributes<HTMLDivElement>) {
    return (
        <div className="px-1 py-1 border-primary-400 border rounded flex space-x-2" {...rest}>

            <div className="flex">
                <div className="w-8 h-8 bg-primary-200 border-primary-400 border rounded flex items-center justify-center">
                    {glyph.unicode}
                </div>

                <div className="border-primary-400 border rounded grid place-items-center">
                    <svg className="w-8 h-8 bg-blue-300" viewBox="0 0 1000 1000" transform="scale(1,-1)">
                        <path d={glyph.d} />
                    </svg>
                </div>
            </div>

        </div>
    );
}

export function ShowGlyphs() {
    const snap = useSnapshot(fontData).glyphs;
    return (
        <div className="text-xs grid grid-cols-fluid">
            {snap.map((glyph) => (
                <SvgCell glyph={glyph} key={`${glyph.unicode}${glyph['glyph-name']}`} />
            ))}
        </div>
    );
}
