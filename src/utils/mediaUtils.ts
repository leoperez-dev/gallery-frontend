export const videoFormats = [
    'video/mp4',
    'video/webm',
    'video/x-matroska',
    'video/quicktime',
    'video/x-flv',
    'video/x-msvideo',
    'video/x-ms-wmv',
    'video/mpeg',
];

export const isVideoFormat = (format: string) => videoFormats.includes(format);
