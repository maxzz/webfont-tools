export type LoadFileDataOptions = {
    returnArrayBuffer: boolean; // or string
};

export function loadFileData(file: Blob, { returnArrayBuffer }: LoadFileDataOptions): Promise<string | ArrayBuffer | null> {
    return new Promise<string | ArrayBuffer | null>((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(new Error('Failed to load file'));

        returnArrayBuffer
            ? reader.readAsArrayBuffer(file)
            : reader.readAsDataURL(file); // or reader.readAsText(file);
    });
}
