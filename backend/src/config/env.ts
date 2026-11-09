import dotenv from 'dotenv';

dotenv.config();

function requerida(nombre: string): string {
  const valor = process.env[nombre];
  if (!valor) {
    throw new Error(`Falta la variable de entorno ${nombre}. Revisa tu archivo .env`);
  }
  return valor;
}

export const env = {
  port: Number(process.env.PORT ?? 3000),
  corsOrigin: process.env.CORS_ORIGIN ?? 'http://localhost:5173',
  supabaseUrl: requerida('SUPABASE_URL'),
  supabaseSecretKey: requerida('SUPABASE_SECRET_KEY'),
};
