const locking = process.env.ENVIRONMENT_LEVEL === 'LOCK';
const endpoint = process.env.BASE_URL;

export const SERVICE_P_BASE = locking ? 'lock_url' : endpoint;
export const SERVICE_P_DASHBOARD = locking ? 'lock_url' : endpoint + '/dashboard';
export const SERVICE_P_AUTH = locking ? 'lock_url' : endpoint + '/dashboard/auth';
export const SERVICE_P = locking ? 'lock_url' : endpoint;
export const SERVICE_OLIVE = 'http://10.168.69.220:8083/olive'
