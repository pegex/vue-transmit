export interface IUploadStats {
    bytesSent: number;
    progress: number;
    total: number;
    speed: ISpeedStats;
    start: number;
    end: number;
    time: number;
}
export interface ISpeedStats {
    kbps: number;
    mbps: number;
}
declare class VTransmitFile {
    private _nativeFile;
    id: string;
    accepted: boolean;
    lastModified: number;
    lastModifiedDate: Date;
    name: string;
    processing: boolean;
    size: number;
    status: string;
    type: string;
    upload: IUploadStats;
    uploadUrl: string;
    webkitRelativePath: USVString;
    width: number;
    height: number;
    xhr: XMLHttpRequest;
    private _dataUrl;
    errorMessage: string;
    constructor(...data: object[]);
    set(...data: object[]): VTransmitFile;
    copyNativeFile(file: File): VTransmitFile;
    copyOwnAndInheritedProps(...data: object[]): VTransmitFile;
    handleProgress(e: ProgressEvent): void;
    startProgress(): VTransmitFile;
    endProgress(): VTransmitFile;
    nativeFile: File;
    dataUrl: string;
    static fromNativeFile(file: File, ...data: any[]): VTransmitFile;
    static idFactory(): string;
}
export default VTransmitFile;
