export function fileExt(filename: string = ''): string {
    return /[.]/.exec(filename) ? /([^.]+$)/.exec(filename)?.[0] || '' : '';
}
