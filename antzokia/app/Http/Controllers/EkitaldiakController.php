<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use App\Models\Ekitaldia;
use Illuminate\Support\Facades\Storage;

class EkitaldiakController extends Controller
{
    public function getAllEkitaldiak()
    {
        $ekitaldiGuztiak = DB::table('antzokia.ekitaldiak')->get();

        return Inertia::render('ekitaldiak', ['ekitaldiGuztiak' => $ekitaldiGuztiak]);
    }

    public function destroy(Ekitaldia $ekitaldia)
    {
        // PASO 1: Borrar los registros hijos (los asientos) primero
        // Esto borra todas las filas en 'ekitaldi_eserleku' donde el ID del evento coincida
        DB::table('ekitaldi_eserleku')->where('id_ekitaldia', $ekitaldia->id_ekitaldia)->delete();

        // PASO 2: Ahora sí, borrar el evento (el padre)
        $ekitaldia->delete();

        return redirect()->route('ekitaldiak')->with('message', 'Ekitaldia ezabatuta');
    }

    public function store(Request $request)
    {
        // PASO 1: Validación (PDF Ataza 3 [cite: 25])
        // Validamos los campos de un evento, no de un usuario
        $request->validate([
            'izena' => 'required|string|max:255',
            'hasiera_data' => 'required|date',
            'bukaera_data' => 'required|date',
            'lekua' => 'required|string|max:255',
            'deskribapena' => 'nullable|string',

            // Aquí la validación clave del PDF:
            // Usamos 'image' como el nombre del campo en el formulario
            'image' => 'nullable|file|image|max:2048', // 2MB max [cite: 25]
        ]);

        // PASO 2: Preparar los datos y guardar la imagen (PDF Ataza 3 [cite: 26, 27])

        // Cogemos todos los datos validados, excepto el fichero en sí
        $data = $request->except('image');
        $data['image_url'] = null; // Valor por defecto si no hay imagen

        // Verificamos si el usuario ha subido un fichero
        if ($request->hasFile('image')) {

            // Guardamos la imagen en 'storage/app/public/ekitaldi_irudiak'
            // y obtenemos la ruta relativa (ej: 'ekitaldi_irudiak/nombre_archivo.jpg')
            $path = $request->file('image')->store('ekitaldi_irudiak', 'public');

            // Convertimos esa ruta en una URL pública (ej: '/storage/ekitaldi_irudiak/nombre_archivo.jpg')
            // Esta es la URL que guardamos en la BBDD [cite: 28]
            $data['image_url'] = Storage::url($path);
        }

        // PASO 3: Crear el Ekitaldia en la BBDD
        // Usamos el modelo Ekitaldia, no el modelo User
        Ekitaldia::create($data);

        // (Opcional) Cuando terminas, puedes redirigir a la home
        // return redirect()->route('hasiera');

        // O si usas Inertia, puedes devolver una respuesta de Inertia
        return Inertia::render('ekitaldiak', [
            'success' => 'Ekitaldia ondo sortu da!' // Mensaje de éxito
        ]);
    }

    public function update(Request $request, Ekitaldia $ekitaldia)
    {
        $request->validate([
            'izena' => 'required|string|max:255',
            'hasiera_data' => 'required|date',
            'bukaera_data' => 'required|date',
            'lekua' => 'required|string|max:255',
            'deskribapena' => 'nullable|string',

            // Aquí la validación clave del PDF:
            // Usamos 'image' como el nombre del campo en el formulario
            'image' => 'nullable|file|image|max:2048',
        ]);

        $data = $request->except('image');
        $data['image_url'] = $ekitaldia->image_url; // Valor por defecto si no hay imagen

        if ($request->hasFile('image')) {

            $path = $request->file('image')->store('ekitaldi_irudiak', 'public');

            $data['image_url'] = Storage::url($path);
        }

        $ekitaldia->update($data);

        return redirect()->route('ekitaldiak')->with('success', 'Ekitaldia ondo eguneratu da!');
    }
}
