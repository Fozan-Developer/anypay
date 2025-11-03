import axios, { AxiosError } from 'axios';

export class AnyPayError extends Error {
    public code?: string | number;
    public status?: number;

    constructor(message: string, code?: string | number, status?: number) {
        super(message);
        this.name = 'AnyPayError';
        this.code = code;
        this.status = status;
    }
}

interface AnyPayErrorResponse {
    error: {
        code: string | number;
        message: string;
    };
}

export function handleAxiosError(err: unknown): never {
    if (axios.isAxiosError(err)) {
        const axiosErr = err as AxiosError;

        // Приводим response.data к типу AnyPayErrorResponse
        const data = axiosErr.response?.data as AnyPayErrorResponse | undefined;

        if (data?.error) {
            const { code, message } = data.error;
            throw new AnyPayError(message, code, axiosErr.response?.status);
        }

        // Если пришёл HTML или другой текст
        const status = axiosErr.response?.status;
        const statusText = axiosErr.response?.statusText || 'Unknown error';
        throw new AnyPayError(
            `HTTP ${status}: ${statusText}`,
            undefined,
            status,
        );
    }

    // Любые другие ошибки
    throw err;
}
