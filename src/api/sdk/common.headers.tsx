export const Rq_Headers = {
    'Content-Type': 'application/json',
    'x-appname': 'loca-loka-main',
    Accept: 'application/json',
    'Cache-Control': 'no-store',
    'Content-Security-Policy': 'frame-ancestors none',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'Referrer-Policy': 'no-referrer',
    'X-Localoka-Device-Type': 'web',
};

export const Rq_Headers_Olive = {
    'Content-Type': 'application/json',
    'X-APP-NAME': 'olive',
    'X-API-KEY': 'olive-secret'
};

export const Rs_Headers: Record<string, string> = {
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
    'Cache-Control': 'no-store',
    'Content-Security-Policy': 'frame-ancestors none',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'Referrer-Policy': 'no-referrer',
};
