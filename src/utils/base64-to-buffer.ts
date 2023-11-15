export function toArrayBuffer(buffer: Buffer): ArrayBuffer {
    const rv = new ArrayBuffer(buffer.length);
    const view = new Uint8Array(rv);

    for (let i = 0; i < buffer.length; ++i) {
        view[i] = buffer[i];
    }

    return rv;
}

export function toUint8Array(buffer: Buffer): Uint8Array {
    return buffer;
}

export function toBuffer(arrayBuffer: ArrayBuffer): Buffer {
    const rv = Buffer.alloc(arrayBuffer.byteLength);
    const view = new Uint8Array(arrayBuffer);

    for (let i = 0; i < rv.length; ++i) {
        rv[i] = view[i];
    }

    return rv;
}

export function base64ToArrayBuffer(base64: string): Uint8Array {
    try {
        const binaryString = atob(base64);

        const bytes = new Uint8Array(binaryString.length);

        for (var i = 0; i < binaryString.length; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }

        return bytes;
    } catch (error) {
        console.error(error);
        throw new Error(`Failed to convert base64 to array buffer.`);
    }
}
