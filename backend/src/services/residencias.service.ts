import { supabase } from '../config/supabase';

export async function listarResidencias() {
  const { data, error } = await supabase
    .from('residencias')
    .select('id, bloque_poligono, numero_casa, telefono_fijo_o_emergencia')
    .order('bloque_poligono')
    .order('numero_casa');

  if (error) throw new Error(error.message);
  return data;
}
